---
title: "HPC Resource Management & Security Analysis"
role: "Systems Scientist"
date: 2026-03-16
tags: ["Linux Kernel", "CUDA", "Slurm", "Security"]
featured: false
funding: Department of Energy
summary: "Investigating memory leaks and enforcing stricter isolation in multi-tenant HPC environments."
---

## Abstract
In multi-tenant High-Performance Computing (HPC) environments, resource isolation is critical for security. This research investigates vulnerabilities and builds system-level mitigations.

## Methodology
* **VRAM Auditing:** Investigating NVIDIA VRAM memory leaks to mitigate cross-job data persistence risks.
* **Slurm Hooks:** Developing Slurm prolog and epilog hooks to automatically sanitize RAM, Disk, and GPU resources between jobs.
* **Container Profiling:** Profiling Apptainer container resource usage using Linux kernel tracing tools to enforce stricter boundaries.