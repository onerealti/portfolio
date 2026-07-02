---
title: "Building MVCC: Concurrency and Snapshot Isolation in Storage Engines"
description: "An architectural analysis of lock-free Multi-Version Concurrency Control (MVCC), transaction commit ordering, and memory garbage collection in LSM-Tree engines."
date: "2024-05-10"
tags: ["C++", "Databases", "Concurrency", "Storage Engines"]
draft: false
---

In database systems, concurrency control determines how the database handles concurrent read and write operations. Multi-Version Concurrency Control (MVCC) is the industry standard for high-performance databases because it allows reads to execute without acquiring locks, avoiding read-write conflicts.

## The Core Concept
Under MVCC, when a transaction modifies a key, the database does not overwrite the existing data. Instead, it writes a new version of the key associated with the transaction's commit timestamp.

```
Key: "user_42"
  -> Version 3 (Commit TS: 150): "active"
  -> Version 2 (Commit TS: 100): "pending"
  -> Version 1 (Commit TS: 50):  "created"
```

When another transaction reads "user_42" with a read timestamp of `120`, the storage engine scans backward through versions and returns the latest version where the commit timestamp is less than or equal to the read timestamp—in this case, Version 2 ("pending").

## Managing Active Transactions with Read Lists
To ensure snapshot isolation, the database must know which transactions were active when a snapshot was created. An active transaction's changes should not be visible to other transactions until it has successfully committed.

We track this using an active transaction list or **Read List**. At the start of a transaction, we capture:
1. The current global transaction counter (acting as the read snapshot).
2. The list of transaction IDs that are currently running.

During scans, versions created by transactions in the active list are skipped, even if their start transaction ID is numerically smaller.

## Garbage Collection
If we keep writing new versions of keys, the disk footprint will grow infinitely. We need a background **Garbage Collection (GC)** process to reclaim memory.

In LSM-tree engines (like RocksDB or our custom engine AetherDB), GC is naturally integrated into the **Compaction** pipeline. When merging SSTable files, the compaction threads can discard older versions of keys if:
1. The version is older than the oldest active transaction's read snapshot.
2. There is a newer version of the same key that is also older than that snapshot.

Discarding stale versions during compaction prevents write and read performance degradation, maintaining the database's overall throughput.
