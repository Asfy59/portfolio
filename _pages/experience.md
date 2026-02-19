---
title: "Experience"
permalink: /experience/
---

## Professional Experience

### Student Research Assistant
**Chair of Material Handling, TU Dortmund - Dortmund, Germany | 2025**

Master's Thesis: Development of an Obstacle Avoidance Framework through Multi-Robot Perception

- Designed and deployed a radar-based semantic perception framework for multi-robot navigation in a warehouse-inspired CPPS testbed.
- Built a distributed ROS2 (Humble) sensing pipeline with TI AWR1843 mmWave radars, Jetson Nano/Orin, and Vicon MoCap.
- Implemented centralized multi-robot fusion in a custom `data_merger_node`, including pose synchronization, global-frame transformation, temporal buffering, and k-NN graph construction (~100 nodes/frame with two robots).
- Achieved typical end-to-end fusion latency of ~20 ms.
- Developed real-time GNN inference (`inference_node`) with PyTorch Geometric on 63k+ labeled graph frames.
- Achieved F1 scores of 0.91 (node classification) and 0.98 (edge classification), with 10-15 ms inference latency.
- Converted predictions to polygonal obstacles via graph filtering and alpha-shape clustering, then tracked IDs across frames for robust confirmation.
- Engineered a custom ROS2 costmap plugin (`GNNObjectsLayer`) with class-aware inflation/decay and low-confidence filtering.
- Reached ~50 ms perception-to-costmap update latency for contextualized obstacle avoidance.
- Validated full perception-to-planning pipeline in hardware-in-the-loop trials and a 6-robot multi-modal CPPS demonstration.
- Co-authored IEEE IECON 2025 paper: "Uncertainty-Aware GNN for Collaborative Robot Mapping Towards 6G-Enabled Smart Warehouses" (DOI: 10.1109/IECON58223.2025.11221930).

**Key technologies:** ROS2, PyTorch Geometric, Jetson Nano/Orin, TI AWR1843, Zenoh DDS, Vicon MoCap, RViz2, TF2, Python, C++, Docker

### Embedded and Vision Software Engineer
**HIGHCAT GmbH (10-15 engineers) | Oct 2025 - Mar 2026**

- Integrated GNSS-denied localization components into a UAV autonomy stack, evaluating third-party visual-inertial solutions under system-level constraints.
- Implemented camera and gimbal control pipelines using VISCA, MAVLink, and SimpleBGC protocols.
- Built a MAVLink-to-payload bridge translating flight-stack commands into camera and gimbal actuation.
- Benchmarked real-time tracking pipelines on Jetson Orin NX (CSRT, KCF, optical flow, NVIDIA utilities) to evaluate accuracy-latency tradeoffs.
- Supported edge deployment and bring-up: Jetson flashing, CUDA/OpenCV setup, dependency troubleshooting, and GStreamer-based video pipeline tuning.
- Validated command flow and actuation timing on real UAV hardware.

**Key technologies:** OpenCV, NVIDIA GStreamer, Jetson Orin NX, PX4, MAVLink, SimpleBGC, VISCA, Python

### Embedded Systems and Sensor Validation Intern
**Bosch Sensortec GmbH - Reutlingen, Germany | Jun 2023 - Nov 2023**

- Designed a standalone Python automation platform for MEMS inertial sensor validation over serial interfaces.
- Integrated analyzers and function generators to inject and evaluate spikes, jitter, and noise disturbances.
- Authored a reusable C-based I3C API for STM32 platforms, enabling broader Bosch sensor interfacing beyond ST-specific libraries.
- Reduced test cycle time by approximately 50% by automating repeated configuration and batch-validation workflows.
- Delivered tools still used internally for debugging, calibration, and reliability screening.

### Working Student, Autonomous Tunnel Boring Systems
**VMT GmbH | Feb 2024 - Aug 2024**

- Designed a basic MPC framework for tunnel boring machine steering with custom prediction models and cost functions.
- Simulated TBM alignment behavior and tuning impact using Python and internal industrial software.
- Generated input-response datasets and estimated kinematic/dynamic models using regression-based techniques.
- Evaluated multi-step behavior prediction under simplified assumptions for curved-path correction feasibility.

### Business Data Analyst
**K-Electric (Dastagyr), SquareTrade | Aug 2020 - May 2022**

- Built Python automation scripts for recurring reports, reducing manual effort and error rates.
- Developed dashboards in Excel and Tableau for cross-functional KPI tracking.
- Worked with stakeholders across teams to resolve operational bottlenecks and improve decision workflows.

### Student Engineering Teams
**NUST Airworks (IMECHE UAS Challenge), Formula Electric Racing NUST (FSUK) | 2017 - 2020**

- Developed a real-time UAV perception pipeline with OpenCV and Keras on Jetson Nano/Raspberry Pi.
- Integrated LoRa telemetry for autonomous mission monitoring in competition deployment.
- Contributed to Grand Champion win at the IMECHE UAS Challenge (UK).
- Worked on Formula Student EV accumulator integration: HV safety design, thermal/fire safety strategy, harness layout, and safety subsystem implementation.
