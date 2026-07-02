---
title: "TensorFlow & PyTorch ML Training Orchestrator"
description: "A Kubernetes-native orchestration pipeline and custom scheduler for training large language models utilizing pipeline and tensor parallelism."
repoURL: "https://github.com/alexrivers/ml-orchestrator"
date: "Mar 2025"
skills: ["Python", "PyTorch", "Kubernetes", "CUDA", "gRPC", "Docker"]
bullets:
  - "Developed a custom Kubernetes controller in Go that schedules distributed PyTorch training jobs across multiple GPU-enabled nodes."
  - "Configured torch.distributed tensor-parallel setups with custom communication primitives, optimizing NCCL ring-allreduce performance."
  - "Implemented a dynamic fault-recovery agent that restarts failed worker pods, restoring from latest weights checkpoints in under 30 seconds."
  - "Designed an active GPU allocation scheduler that schedules training jobs to maximize NVLink interconnect bandwidth between GPUs."
profiles: ["ml", "distributed", "infrastructure"]
importance: 1
draft: false
---
An enterprise-grade training scheduler that interfaces with Kubernetes API to optimize CUDA work allocation, network interfaces, and checkpoints.
