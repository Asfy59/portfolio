---
layout: single
title: "Muhammad Asfandyar Khan"
permalink: /
author_profile: false
classes: wide
---

<section class="home-hero">
  <div class="home-hero__media">
    <img class="home-hero__avatar" src="{{ '/assets/images/profile/profile.jpg' | relative_url }}" alt="Muhammad Asfandyar Khan portrait">
    <ul class="home-hero__proof">
      <li><strong>Research to deployment:</strong> built robotics and embedded systems across TU Dortmund, Bosch Sensortec, and HIGHCAT.</li>
      <li><strong>Measured impact:</strong> reduced Bosch MEMS sensor validation cycle time by about 50 percent through automation.</li>
      <li><strong>Public technical work:</strong> co-authored an IEEE IECON 2025 paper and released an open radar dataset and ROS2 code.</li>
    </ul>
  </div>
  <div class="home-hero__content">
    <h1>Robotics software engineer building perception-to-navigation systems</h1>
    <p>I work across robotics software, embedded integration, and deployment-focused validation. My experience spans multi-robot perception research at TU Dortmund, sensor automation and interface tooling at Bosch Sensortec, and UAV payload and vision integration at HIGHCAT.</p>
    <p class="home-hero__actions">
      <a class="btn btn--primary" href="{{ '/projects/' | relative_url }}">View Projects</a>
      <a class="btn btn--info" href="{{ '/resume/' | relative_url }}">Download Resume</a>
    </p>
    <p class="home-hero__links">
      <a href="https://www.linkedin.com/in/muhammad-asfandyar-khan-durrani">LinkedIn</a> ·
      <a href="https://github.com/Asfy59">GitHub</a> ·
      <a href="mailto:durraniasfand@hotmail.com">Email</a>
    </p>
  </div>
</section>

## Featured Work

### Multi-Robot Semantic Obstacle Avoidance

![Multi-robot warehouse system]({{ '/assets/images/projects/placeholder-warehouse.jpg' | relative_url }})

Master's thesis work on radar-driven multi-robot perception and obstacle avoidance in a warehouse-inspired CPPS testbed.

- Built the full ROS2 pipeline from radar graph construction to semantic Nav2 costmap updates
- Created and published a 63k+ frame radar graph dataset for training and evaluation
- Validated the perception-to-planning loop in hardware-in-the-loop trials and multi-robot demonstrations

**Stack:** ROS2, PyTorch Geometric, Jetson Orin, TI IWR6843, Vicon, C++, Python

[Read case study]({{ '/projects/#multi-robot-semantic-obstacle-avoidance-framework' | relative_url }})

### Autonomous UAV Vision and Telemetry

![UAV competition placeholder]({{ '/assets/images/projects/placeholder-uav.jpg' | relative_url }})

Embedded vision and telemetry work developed under competition constraints with NUST AirWorks.

- Built onboard object recognition workflows on Jetson Nano and Raspberry Pi
- Integrated LoRa-based telemetry and mission support workflows for field deployment
- Contributed to the team's Grand Champion result at the IMechE UAS Challenge in the UK

**Stack:** OpenCV, Keras, Jetson Nano, Raspberry Pi, LoRa

[Read case study]({{ '/projects/#autonomous-uav-vision-and-telemetry-pipeline' | relative_url }})

### MEMS Sensor Automation and I3C Validation Toolkit

![Bosch automation placeholder]({{ '/assets/images/projects/placeholder-bosch.jpg' | relative_url }})

Embedded validation tooling built at Bosch Sensortec for repeatable, higher-throughput sensor testing.

- Designed Python automation for disturbance injection, analyzer control, and serial orchestration
- Authored reusable STM32-targeted C APIs for Bosch I3C sensor communication
- Reduced validation cycle time by about 50 percent and left tooling in ongoing internal use

**Stack:** Python, C, STM32, I3C, serial tooling

[Read case study]({{ '/projects/#mems-sensor-automation-and-i3c-validation-toolkit' | relative_url }})

## Engineering Strengths

- **End-to-end robotics integration:** ROS2 pipelines connecting sensors, inference, semantic mapping, and navigation behavior
- **Embedded and protocol-level debugging:** practical work with MAVLink, VISCA, SimpleBGC, I3C, STM32, and Jetson platforms
- **Validation with measurable outcomes:** hardware-in-the-loop testing, latency benchmarking, automation throughput gains, and reproducible datasets
- **Cross-context execution:** experience across university labs, startups, industrial teams, and student engineering programs

## Experience Snapshot

### Roles and environments where I have built and validated systems.

### HIGHCAT GmbH
Integrated UAV payload control and edge-vision workflows, including MAVLink command bridging, camera and gimbal control, and Jetson bring-up.

### TU Dortmund
Built a radar-based multi-robot perception stack with graph learning, semantic obstacle publishing, and Nav2 costmap integration.

### Bosch Sensortec
Built automation and reusable interface tooling for MEMS sensor robustness testing, disturbance injection, and I3C communication.

### VMT
Developed an MPC prototype for tunnel boring machine steering and evaluated model behavior under industrial constraints.

## Research and Open Artifacts

### Technical outputs tied directly to hands-on system work.

### IEEE IECON 2025
Co-authored publication based on the collaborative robot mapping and semantic perception work from TU Dortmund.  
[IEEE Xplore](https://ieeexplore.ieee.org/document/11221930)

### RoboFUSE GNN Dataset
Public radar-based graph dataset built from synchronized multi-robot radar and MoCap recordings for collaborative perception experiments.  
[Kaggle dataset](https://www.kaggle.com/datasets/asfand59/robofuse-gnn-dataset)

### Open-source ROS2 Interfaces
Selected code released from the multi-robot perception pipeline, including GNN inference and robot-side integration work.  
[ROS2_GNN_Edge](https://github.com/FLW-TUDO/ROS2_GNN_Edge) · [ROS2_GNN_Robomaster](https://github.com/FLW-TUDO/ROS2_GNN_Robomaster)

## Contact {#contact}

Open to robotics, autonomy, and embedded AI opportunities.

- Email: [durraniasfand@hotmail.com](mailto:durraniasfand@hotmail.com)
- LinkedIn: [muhammad-asfandyar-khan-durrani](https://www.linkedin.com/in/muhammad-asfandyar-khan-durrani)
- GitHub: [Asfy59](https://github.com/Asfy59)
