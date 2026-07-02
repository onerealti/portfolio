---
title: "AetherDB: MVCC Key-Value Engine"
description: "A high-performance LSM-Tree transactional storage engine in C++ featuring multi-version concurrency control and write-ahead logs for crash safety."
repoURL: "https://github.com/alexrivers/aetherdb"
date: "May 2024"
skills: ["C++", "LSM-Tree", "MVCC", "POSIX", "WAL", "Transactions"]
bullets:
  - "Designed an LSM-Tree storage layout in C++ with MemTable, Write-Ahead Log (WAL), and multi-tiered SSTables for fast writes."
  - "Implemented a lock-free Multi-Version Concurrency Control (MVCC) system using atomic hardware pointers, ensuring snapshot isolation."
  - "Programmed custom merge-compaction threads using POSIX APIs, reducing storage footprint by 45% and eliminating compaction spikes."
  - "Engineered an instant recovery algorithm scanning WAL files, restoring database state in under 150ms after abrupt shutdowns."
profiles: ["backend", "distributed", "infrastructure"]
importance: 2
draft: false
---
High-performance transactional engine designed to explore advanced memory management, userspace disk schedulers, and MVCC.
