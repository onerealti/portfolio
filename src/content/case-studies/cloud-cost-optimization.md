---
title: "Cutting Cloud Infrastructure Costs by 60%"
description: "Audited and restructured a ₹15L/month AWS bill down to ₹9.75L/month through right-sizing, reserved instances, and architectural changes - without degrading performance."
date: 2024-11-20
tags: ["AWS", "Cost Optimization", "Terraform", "Spot Instances", "Graviton"]
featured: true
metricHighlight: "35% cost reduction"
problem: "A Series C startup's AWS bill had grown from ₹8L/month to ₹15L/month in 18 months with no corresponding increase in traffic. Engineering had over-provisioned during a rapid scaling phase and never right-sized. The CFO flagged infrastructure as the fastest-growing expense line item, threatening runway by 6 months."
architecture: "Conducted a comprehensive cost audit using AWS Cost Explorer, Trusted Advisor, and custom CloudWatch metrics. Identified four categories of waste: over-provisioned EC2 instances (40% of savings), unused EBS volumes and snapshots (15%), suboptimal RDS configurations (25%), and missing reserved instance coverage (20%). Implemented changes in three phases over 8 weeks using Terraform to ensure reproducibility."
decisions:
  - "Migrated compute-heavy workloads to Graviton (ARM) instances - 20% cheaper with equivalent or better performance for Go and Python services"
  - "Implemented aggressive auto-scaling policies based on actual CPU and memory metrics rather than the flat over-provisioned baselines"
  - "Moved non-critical batch processing to Spot Instances with a fallback to on-demand - achieved 70% savings on batch compute"
  - "Consolidated 12 underutilized RDS instances into 4 right-sized instances with connection pooling via PgBouncer"
  - "Purchased 1-year Reserved Instances for baseline compute after establishing stable usage patterns over 3 months"
results:
  - "Monthly AWS bill reduced from ₹15L to ₹9.75L (35% reduction)"
  - "Annual savings of ₹63L - extended runway by 8 months"
  - "API performance unchanged - p99 latency remained at 120ms"
  - "Auto-scaling now handles 3x traffic spikes without manual intervention"
  - "Infrastructure-as-code coverage increased from 60% to 95%"
lessons:
  - "Cost optimization is an ongoing process, not a one-time project - we set up monthly cost review meetings and Slack alerts for anomalies"
  - "Graviton migration is nearly free performance - but test thoroughly, some native dependencies don't have ARM builds"
  - "Spot Instances are excellent for fault-tolerant workloads but require proper interruption handling - we lost 2 batch runs before implementing checkpointing"
  - "Reserved Instances require commitment - don't purchase until you have 3+ months of stable usage data"
---

## Cost Breakdown: Before & After

```
Category          Before (₹)       After (₹)      Savings
─────────────────────────────────────────────────────────
EC2 Compute        ₹6,80,000      ₹4,08,000       40%
RDS Databases      ₹3,75,000      ₹2,62,500       30%
EBS Storage        ₹2,25,000      ₹1,57,500       30%
Data Transfer      ₹1,25,000      ₹90,000         28%
Other              ₹95,000        ₹57,000         40%
─────────────────────────────────────────────────────────
TOTAL             ₹15,00,000     ₹9,75,000       35%
```

## Implementation Phases

1. **Phase 1 (Weeks 1-2):** Audit and cleanup - deleted unused resources, snapshots, and orphaned volumes. Immediate ₹1.5L/month savings.
2. **Phase 2 (Weeks 3-5):** Right-sizing and Graviton migration - resized instances based on actual utilization metrics.
3. **Phase 3 (Weeks 6-8):** Reserved Instances and Spot - purchased RIs for baseline, migrated batch to Spot.
