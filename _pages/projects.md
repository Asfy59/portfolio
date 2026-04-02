---
title: "Projects"
permalink: /projects/
classes: wide
---

## Multi-Robot Semantic Obstacle Avoidance Framework

![Warehouse project placeholder]({{ '/assets/images/projects/placeholder-warehouse.jpg' | relative_url }})

**Context**  
Smart-warehouse multi-robot navigation using shared radar perception and ROS2 integration.

**What I built**  
An end-to-end perception-to-planning pipeline using radar graph construction, GNN inference, object tracking, and a custom Nav2 semantic costmap layer.

**Why it mattered**  
Improved real-time obstacle awareness under sensing and synchronization constraints in a collaborative robotics setting.

**Impact**
- **63k+** labeled radar graph frames
- **~50 ms** sensing-to-costmap latency
- Hardware-in-the-loop validation

**Stack**  
ROS2, PyTorch Geometric, Jetson Orin, TI IWR6843, Vicon, C++, Python

**Links**  
[Kaggle dataset](https://www.kaggle.com/datasets/asfand59/robofuse-gnn-dataset) · [Edge repo](https://github.com/FLW-TUDO/ROS2_GNN_Edge) · [Robot repo](https://github.com/FLW-TUDO/ROS2_GNN_Robomaster)

## MEMS Sensor Automation and I3C Validation Toolkit

![Bosch project placeholder]({{ '/assets/images/projects/placeholder-bosch.jpg' | relative_url }})

**Context**  
Internal embedded validation workflows for MEMS sensor robustness and communication testing.

**What I built**  
A Python automation toolchain for disturbance-injection test orchestration and a reusable C API for STM32-targeted I3C sensor communication.

**Why it mattered**  
Increased repeatability, reduced manual setup overhead, and improved reliability of outbound validation checks.

**Impact**
- **~50%** validation cycle-time reduction
- Reusable API across multiple sensor variants
- Batch-friendly automated test workflows

**Stack**  
Python, C, STM32, I3C, serial tooling

**Links**  
Project details available on request.

## Autonomous UAV Vision and Telemetry Pipeline

![UAV project placeholder]({{ '/assets/images/projects/placeholder-uav.jpg' | relative_url }})

**Context**  
Competition-driven UAV autonomy stack requiring real-time sensing and dependable telemetry under field conditions.

**What I built**  
Onboard visual recognition and classification workflows with embedded deployment on Jetson Nano and Raspberry Pi, integrated with mission telemetry handling.

**Why it mattered**  
Enabled reliable, iteratively testable system behavior under competition timelines and operating constraints.

**Impact**
- Real-time embedded detection pipeline
- Field-tested mission workflows
- Contribution to Grand Champion campaign

**Stack**  
OpenCV, Keras, Jetson Nano, Raspberry Pi, LoRa

**Links**  
Supporting visuals and media on [Media page]({{ '/media/' | relative_url }}).

## Accumulator and EV Subsystem Integration

![Formula project placeholder]({{ '/assets/images/projects/placeholder-formula.jpg' | relative_url }})

**Context**  
Formula Student EV development requiring cross-team coordination, packaging constraints, and subsystem-level interface discipline.

**What I built**  
Contributions to accumulator integration tasks including packaging constraints, harness interfaces, and practical electrical-mechanical subsystem coordination.

**Why it mattered**  
Built execution discipline in high-pressure engineering workflows where iteration speed and reliability both matter.

**Impact**
- Practical subsystem integration experience
- Safety-conscious design considerations
- Faster debugging cycles in deadline-driven team environments

**Stack**  
EV subsystem integration, harness interfaces, test-and-iterate workflows

**Links**  
Supporting visuals on [Media page]({{ '/media/' | relative_url }}).

## Uncertainty-Aware GNN for Collaborative Robot Mapping

![Publication placeholder]({{ '/assets/images/projects/placeholder-paper.jpg' | relative_url }})

**Context**  
Collaborative robot mapping in a 6G-enabled smart warehouse context with uncertainty-aware semantic reasoning.

**What I built**  
Contributions to graph-based perception and semantic inference workflows and publication-backed experimental validation.

**Why it mattered**  
Strengthened technical credibility with peer-reviewed research output aligned with deployable robotics systems.

**Impact**
- IEEE IECON 2025 publication
- Reproducible graph-learning workflow integration
- Direct alignment with thesis and system pipeline work

**Stack**  
ROS2, graph learning, PyTorch Geometric, multi-robot sensing

**Links**  
[DOI](https://doi.org/10.1109/IECON58223.2025.11221930)

## NeRF Dataset Generation in CARLA

![CARLA project placeholder]({{ '/assets/images/projects/placeholder-carla.jpg' | relative_url }})

**Context**  
Synthetic perception dataset generation for scalable NeRF and multi-view robotics experimentation.

**What I built**  
A modular CARLA-based pipeline for automated scene generation and photorealistic multi-view data capture.

**Why it mattered**  
Reduced setup friction for repeatable synthetic data generation and future scenario expansion.

**Impact**
- Reusable dataset generation tooling
- Scalable scene automation pipeline
- Strong foundation for later perception experiments

**Stack**  
CARLA, Python

**Links**  
Project details available on request.
