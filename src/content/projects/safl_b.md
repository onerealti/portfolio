---
title: "Smart Agri Four-Legged Bot (SAFL-B)"
description: "A precision agriculture quadruped wheeled rover featuring real-time TensorRT weed detection, FEA structural validation, and multi-sensor telemetry."
repoURL: "https://github.com/onerealti/safl-b"
demoURL: "https://onerealti.github.io/astro-safl/"
date: "May 2026"
skills: ["C", "Python", "TensorRT", "NVIDIA Jetson Nano", "Arduino Due", "SolidWorks", "FEA", "UART/Serial"]
bullets:
  - "Awarded 1st Place at the city-wide MAKEFORHYDERABAD Makeathon (organized by Titan & SIT Hyderabad) for autonomous robotics integration."
  - "Designed a hybrid 3mm steel chassis and custom 3D-printed modular articulated planar legs featuring passive compliance and internal wire routing channels."
  - "Validated structural load paths using Finite Element Analysis (FEA) under static vertical loads, bumps, and probe insertions with a minimum safety factor of 2.04."
  - "Integrated a local CNN weed classification model on NVIDIA Jetson Nano, achieving real-time inference (9.2 FPS) using TensorRT FP16 acceleration."
  - "Designed low-level kinematic control systems using an Arduino Due to orchestrate H-Bridge DC motor actuators and high-current ESCs."
profiles: ["ml", "distributed", "infrastructure", "backend"]
importance: 1
draft: false
---
### Project Summary

The **Smart Agri Four-Legged Bot (SAFL-B)** is a semi-autonomous agricultural robot designed to support precision farming through automated weed detection and in-situ soil condition monitoring. The project was researched and built at the Department of Mechanical Engineering, MJCET, as part of an institution-funded R&D program.

### Key Engineering Pillars

1. **Mechanical Design & FEA Simulation**
   * Handled structural modeling of a 3mm mild steel chassis reinforced with stiffener plates.
   * Conducted Finite Element Analysis (FEA) under various static and dynamic load cases (3G impact bump test, soil probe insertions) ensuring a minimum factor of safety of **2.04** before physical fabrication.
   * Integrated passive compliance using torsional spring joints in knee mechanisms to maintain camera stabilization.

2. **Edge Machine Learning Pipeline**
   * Deployed a lightweight Convolutional Neural Network (CNN) locally on an **NVIDIA Jetson Nano** 4GB Developer Kit.
   * Optimized the model inference using **NVIDIA TensorRT (FP16)** to increase classification performance to **9.2 FPS** under constrained memory buffers, processing 640x480 video frames under 70ms.

3. **Multi-Parameter Sensor Calibrations**
   * Calibrated an **Amici Sense** multi-parameter soil probe (monitoring pH, soil moisture, temperature, and fertility) over a UART bus.
   * Implemented custom EMI signal shielding and optoisolators to prevent electrical noise interference from high-current DC brushless hub locomotion wheels.
