---
title: "Experience"
permalink: /experience/
---

## Professional Experience

### Embedded and Vision Software Engineer
**HIGHCAT GmbH - Konstanz, Germany | Oct 2025 - Mar 2026**

- Integrated GNSS-denied localization components into an existing UAV autonomy stack and evaluated visual-inertial solution feasibility at integration level.
- Built payload control pathways across MAVLink, VISCA, and SimpleBGC for camera and gimbal actuation.
- Implemented a Python API and command bridge for repeatable camera/gimbal control and protocol-level debugging.
- Benchmarked Jetson Orin NX tracking pipelines (CSRT, KCF, optical flow, NVIDIA utilities) for latency-accuracy tradeoff analysis.
- Supported edge deployment and bring-up (Jetson flashing, CUDA/OpenCV setup, GStreamer troubleshooting).

### Student Research Assistant and Master's Thesis
**Chair of Material Handling, TU Dortmund - Dortmund, Germany | 2025**

Thesis: Development of an Obstacle Avoidance Framework through Multi-Robot Perception

- Designed and deployed a radar-based semantic perception pipeline for multi-robot navigation in a warehouse-inspired CPPS testbed.
- Built distributed ROS2 sensing with TI AWR1843 radars, Jetson Nano/Orin, and Vicon MoCap.
- Implemented centralized fusion in a custom `data_merger_node` with synchronization, map-frame transformation, temporal buffering, and k-NN graph construction.
- Achieved ~20 ms fusion latency and 10-15 ms GNN inference latency on 63k+ labeled graph frames.
- Reached F1 scores of 0.91 (node classification) and 0.98 (edge classification).
- Built a class-aware ROS2 costmap plugin (`GNNObjectsLayer`) for semantic obstacle handling, yielding ~50 ms sensing-to-costmap updates.
- Validated full perception-to-planning pipeline in hardware-in-the-loop trials and multi-robot demonstrations.
- Co-authored IEEE IECON 2025 publication (DOI: 10.1109/IECON58223.2025.11221930).

### Working Student, Autonomous Tunnel Boring Systems
**VMT GmbH - Germany | Feb 2024 - Aug 2024**

- Developed a baseline MPC steering framework for tunnel boring machine alignment.
- Simulated control response using Python and proprietary tools to evaluate horizon and tuning effects.
- Generated and analyzed input-response datasets for kinematic and dynamic model estimation.

### Embedded Systems and Sensor Validation Intern
**Bosch Sensortec GmbH - Reutlingen, Germany | Jun 2023 - Nov 2023**

- Built a Python automation framework for MEMS inertial sensor validation over serial interfaces.
- Integrated analyzers/function generators for controlled disturbance injection (spikes, jitter, noise).
- Authored a reusable C-based I3C API for STM32 platforms across Bosch sensor variants.
- Reduced validation cycle time by approximately 50% via automation and batch execution.

### Data and Analytics Roles
**K-Electric, Dastagyr, SquareTrade (via ibex) | Aug 2020 - May 2022**

- Started in K-Electric's trainee program (GIS), then transitioned to data analytics and permanent BI-focused delivery.
- Built Python/SQL automation for reporting pipelines and operational insights.
- Worked with cross-functional stakeholders on KPI dashboards, operational requests, and process improvements.
- Delivered in corporate and startup contexts using tools such as Tableau, Metabase, and ticket-driven workflow systems.

### Student Engineering Teams
**Formula Electric Racing NUST, NUST Airworks | 2017 - 2020**

- Contributed to Formula Student EV accumulator integration and safety-critical subsystem planning.
- Built embedded UAV vision and telemetry pipelines with OpenCV/Keras on Jetson Nano and Raspberry Pi.
- Participated in IMECHE UAS Challenge deployment and contributed to Grand Champion results.
