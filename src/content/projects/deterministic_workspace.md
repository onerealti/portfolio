---
title: "Deterministic Workspace Provisioning"
description: "Infrastructure-as-code configuration pipelines for lightweight, reproducible Arch Linux desktop workstations using shell automation and Podman containers."
repoURL: "https://github.com/onerealti/workspace-provisioning"
date: "June 2025"
skills: ["Bash", "Linux", "Arch Linux", "Podman", "Docker", "Git"]
bullets:
  - "Built automated provisioning scripts for lightweight developer workstation deployment using Arch Linux and custom dotfiles."
  - "Configured layered build pipelines to build reproducible container environments, separating high-current ML layers from system packages."
  - "Automated dependency setups, window manager configurations (i3wm), and performance optimizations for Intel/NVIDIA drivers."
profiles: ["infrastructure", "backend"]
importance: 2
draft: false
---
### Project Overview

This project is an Infrastructure-as-code (IaC) script database to deploy, configuration-lock, and bootstrap custom developer workspaces on lightweight Arch Linux installations.

### Architecture

1. **Shell Automation Pipeline**
   * Configures customized Arch Linux package managers, shell configurations, and developer tools using modular bash scripts.
   * Handles symlinking configurations, custom i3 window manager settings, and keybindings using declarative scripts.

2. **Containerized Execution Layers**
   * Deploys isolated container runtime layers (Docker/Podman) to compile ML runtimes and edge pipelines separately from the host machine operating system, protecting system libraries.
