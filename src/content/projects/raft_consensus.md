---
title: "Distributed Raft Consensus Engine"
description: "A production-grade implementation of the Raft consensus protocol in Go, featuring dynamic membership changes, log compaction, and linearizable reads."
repoURL: "https://github.com/alexrivers/raft-consensus"
date: "Dec 2024"
skills: ["Go", "Raft", "gRPC", "Protobuf", "Linearizability", "Jepsen"]
bullets:
  - "Built a complete Raft consensus module in Go supporting leader election, log replication, and safe cluster state transitions."
  - "Implemented a lease-based read optimization and read-index queries to support linearizable reads without full roundtrip consensus."
  - "Designed a custom snapshotting mechanism and log compaction process to reclaim disk space, preventing memory bloat on large clusters."
  - "Passed Jepsen partition tests, simulating network split-brain scenarios and validating that data remains consistent and serializable."
profiles: ["backend", "distributed", "infrastructure"]
importance: 1
draft: false
---
A distributed consensus engine designed from scratch, with strict adherence to safety invariants and verification using simulation tools.
