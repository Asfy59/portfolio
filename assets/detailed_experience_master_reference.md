# Professional Journey — Detailed Experience Document

## Student Research Assistant

**Chair of Material Handling, TU Dortmund — Dortmund, Germany | Jan 2025 – Sep 2025**
**Master’s Thesis:** *Development of an Obstacle Avoidance Framework through Multi-Robot Perception*

* Designed and deployed a radar-based semantic perception framework for multi-robot navigation in a warehouse-inspired CPPS testbed. This work forms the core of the master’s thesis and integrates real-time multi-robot data fusion, GNN-based semantic inference, and costmap-aware obstacle avoidance.

* Built a distributed sensing and perception pipeline using **ROS2 (Humble)**, **TI IWR6843 mmWave radars**, **Jetson Orin**, and **Vicon MoCap**. Each robot published radar point clouds enriched with metadata (**XYZ, SNR, azimuth, elevation, timestamp, robot ID**). Implemented sensor-side 1D threshold-based clutter filtering to suppress spurious reflections prior to fusion.

* Customized the mmWave radar ROS 2 driver (**C++**) that publishes `sensor_msgs/PointCloud2`: streamlined outputs to retain only required point cloud fields, removed unnecessary extras, and added lightweight filtering/smoothing to stabilize downstream fusion and learning.

* Led end-to-end **dataset creation** for radar-based graph learning in the InnovationLab CPPS test-bed:

  * Collected synchronized multi-robot radar + MoCap ground truth using **ROS 2 bags** (radar **PointCloud2** at **~30–33 Hz**, MoCap **PoseWithCovarianceStamped** at **~100–200 Hz**, sub-millimeter tracking accuracy)
  * Implemented timestamp alignment by selecting the nearest MoCap frame within a tolerance window; discarded unmatched detections; aligned multi-robot streams using a reference radar timeline with nearest-neighbor matching / interpolation
  * Transformed local radar detections into the MoCap world frame using time-varying pose and fixed radar-to-base extrinsics
  * Executed data collection across **three static CPPS layouts** to improve generalization: (1) workstation-like aisles, (2) staggered obstacle footprints for partial occlusions, (3) densest setup with static forklift + multiple boundaries
  * Recorded diverse motion patterns (horizontal, vertical, diagonal traversals) and generated **~63,000** globally aligned graph frames for training/evaluation
  * Published the dataset publicly on Kaggle: [https://www.kaggle.com/datasets/asfand59/robofuse-gnn-dataset](https://www.kaggle.com/datasets/asfand59/robofuse-gnn-dataset)
  * Open-source code (selected):

    * GNN inference node: [https://github.com/FLW-TUDO/ROS2_GNN_Edge](https://github.com/FLW-TUDO/ROS2_GNN_Edge)
    * RoboMaster ROS 2 stack (worked on GNN interfaces, ObjectLayer integration, and mmWave sensor/driver integration; not on `rona_nav`): [https://github.com/FLW-TUDO/ROS2_GNN_Robomaster](https://github.com/FLW-TUDO/ROS2_GNN_Robomaster)

* Implemented centralized multi-robot data fusion via a custom **`data_merger_node`** (**Python-based ROS 2 node**):

  * Synchronized radar and Vicon pose streams across multiple robots (**2+**)
  * Transformed local radar point clouds into a unified global `map` frame using MoCap ground truth
  * Temporally buffered and merged multi-robot point sets
  * Constructed k-NN spatial–temporal graphs (**~100 nodes per frame with two robots**)
  * Published unified graph representations to a custom **`graph_data`** ROS2 topic for downstream processing
  * Typical end-to-end fusion latency: **~20 ms**

* Developed a GNN inference pipeline (**`inference_node`**, **Python-based ROS 2 node**):

  * Subscribed to `graph_data` and executed a trained **PyTorch Geometric** model in real time
  * Achieved **F1 = 0.88 (node classification)** and **F1 = 0.98 (edge classification)** across **63k+** labeled graph frames
  * Applied graph filtering and **α-shape clustering** to convert node-level predictions into polygonal object contours
  * Maintained object identity through multi-frame ID-based tracking, confirming objects over **2–3** consecutive iterations
  * Inference latency: **10–15 ms**

* Published semantic obstacle messages (polygon geometry, class label, confidence score) to a **`/tracked_polygons`** topic, preserving both spatial and semantic context.

* Engineered a custom **Nav2 costmap_2d layer plugin** (**`GNNObjectsLayer`**, **C++**) subscribing to tracked polygon data and injecting semantic obstacles into the global navigation costmap (integrated like standard layers such as static/inflation):

  * Mapped semantic classes to class-aware cost, inflation radius, and decay behavior:

    * **Robots:** moderate inflation, fast decay
    * **Workstations:** high inflation, persistent decay
    * **Boundaries:** lethal cost, no decay
    * **Low-confidence / ghost objects:** filtered prior to costmap insertion
  * Enabled contextualized obstacle avoidance with **~50 ms** end-to-end latency from sensing to costmap update

* Validated the complete perception-to-planning pipeline in real-world HIL trials using radar-equipped mobile robots. Deployed alongside vision-SLAM and LiDAR-SLAM agents in a **6-robot** multi-modal CPPS demonstration, showcasing cross-modal perception integration. Implemented a radar-to-`LaserScan` wrapper to ensure compatibility with conventional navigation stacks.

* Improved system robustness by tuning ROS2 launch sequencing, **zenoh** DDS middleware synchronization, radar frame rates, and USB communication latency. Integrated dynamic TF broadcasting and multiple custom ROS2 message definitions across the stack.

* Co-authored an IEEE IECON 2025 paper: *“Uncertainty-Aware GNN for Collaborative Robot Mapping Towards 6G-Enabled Smart Warehouses”*
  DOI: **10.1109/IECON58223.2025.11221930**

```bibtex
@INPROCEEDINGS{11221930,
  author={Priyanta, Irfan Fachrudin and Freytag, Julia and Körner, Tobias and Khan, M. Asfandyar and Rutinowski, Jérôme and Roidl, Moritz and Rolfes, Ilona and Kirchheim, Alice},
  booktitle={IECON 2025 – 51st Annual Conference of the IEEE Industrial Electronics Society},
  title={Uncertainty-Aware GNN for Collaborative Robot Mapping Towards 6G-Enabled Smart Warehouses},
  year={2025},
  pages={1-8},
  keywords={6G mobile communication;Production systems;Uncertainty;Navigation;Service robots;Radar;Robot sensing systems;Integrated sensing and communication;Real-time systems;Planning;Smart Warehouses;Robotics;6G ISAC;GNN;Collaborative Perception},
  doi={10.1109/IECON58223.2025.11221930}
}
```

**Key Technologies:** ROS2 (Humble), PyTorch Geometric, Jetson Orin, mmWave Radar (TI IWR6843), zenoh, Vicon MoCap, RViz2, TF2, α-shape clustering, Python, C++, DWB Planner, YAML-based launch systems, Docker

---

## Embedded & Vision Software Engineer

**HIGHCAT GmbH (≈10–15 engineers) | Oct 2025 – Mar 2026**

* Integrated GNSS-denied localization components into an existing UAV autonomy stack, evaluating third-party visual–inertial solutions (e.g., Spectacular AI) for feasibility under real system constraints. Focused on software integration, configuration, and interface-level validation rather than algorithm development.

* Implemented camera and gimbal control pipelines for UAV payloads, working with **VISCA** camera control protocols, **MAVLink** communication, and **SimpleBGC** gimbal controllers. Developed a lightweight in-house **Python API** to abstract gimbal commands and enable repeatable control and testing.

* Built a MAVLink-to-payload control bridge, mapping flight-stack MAVLink commands to camera (VISCA) and gimbal (SimpleBGC) control actions, including command translation, parameter handling, and protocol-level debugging to ensure consistent end-to-end actuation behavior.

* Evaluated real-time single-object tracking pipelines on **Jetson Orin NX**, benchmarking CSRT, KCF, optical flow, and NVIDIA-provided tracking utilities to assess accuracy–latency tradeoffs under edge compute constraints.

* Supported edge deployment and system bring-up, including Jetson flashing, CUDA and OpenCV environment setup, dependency resolution, and performance troubleshooting for vision pipelines using OpenCV and NVIDIA GStreamer.

* Validated camera and gimbal control subsystems on real UAV hardware, confirming correct command flow and actuation timing in live tests; other perception components were assessed at integration level due to limited availability of flight data.

**Technologies:** OpenCV, NVIDIA GStreamer, Jetson Orin NX, PX4, MAVLink, SimpleBGC, VISCA, Python, YOLO (integration trials)

---

## Bosch Sensortec GmbH — Embedded Systems & Sensor Validation Intern

**Reutlingen, Germany | Jun 2023 – Nov 2023**

**Scope & Role:** Worked directly under a supervising engineer to support embedded systems validation and interface development for MEMS-based inertial sensors. Independently designed and implemented core tooling used in sensor validation and reliability testing workflows.

* **Automated Testing Framework:** Designed a standalone Python-based automation platform using serial communication libraries to streamline validation of MEMS inertial sensors. The framework interfaced with external analyzers (e.g., Prodigy) and programmable function generators to inject and evaluate signal disturbances such as spikes, jitter, and noise.

* **Disturbance Simulation & Validation:** Executed noise-resistance and robustness evaluations by introducing controlled signal disturbances via function generators, enabling systematic assessment of sensor stability and quality prior to shipment.

* **Custom I3C API Development:** Authored a reusable C-based I3C API targeting STM32 platforms to support testing of Bosch I3C sensors across multiple product lines. Unlike existing ST-specific libraries, the implementation enabled interfacing with any Bosch I3C sensor variant.

* **Impact on Testing Throughput:** Reduced test cycle times by approximately **50%** by eliminating repeated manual configuration steps, enabling batch testing across multiple devices with minimal human intervention.

* **Legacy & Reusability:** The automation framework and I3C API remain in active use within Bosch internal validation workflows for debugging, sensor calibration, and outbound reliability screening.

---

## VMT GmbH — Working Student, Autonomous Tunnel Boring Systems

**Feb 2024 – Aug 2024**

* Designed a basic Model Predictive Control (MPC) framework for steering tunnel boring machines (TBMs), including custom prediction models and cost functions.

* Simulated TBM alignment behavior using Python and proprietary industrial software, exploring the impact of control horizon length and tuning parameters on system stability.

* Generated input–response datasets via internal company systems to estimate kinematic and dynamic models using regression-based techniques (e.g., LabRead, Enforced).

* Conducted multi-step behavior prediction under simplified assumptions (e.g., short prediction horizons) to assess control feasibility for curved path correction.

---

## Data Analyst

**Dastgyr Technologies — Full-time | Karachi, Pakistan | 16 May 2022 – 29 Sep 2022**

* Identified issues, gathered information from multiple sources, analyzed data, interpreted patterns/trends, and produced recommendations through structured reporting.

* Contributed to ELT data pipeline setup for structured analytics workflows, partnering closely with a data engineer using **BigQuery**, **Stitch**, and **dbt** for extraction and transformation.

* Drove and supported cross-functional teams by converting complex findings into understandable tables, graphs, and written reports.

* Developed strong understanding of business processes, database structure, and table relationships to run relevant queries using **PostgreSQL** and **Google BigQuery SQL**.

* Built automated dashboards representing important KPIs monitored across the company using **Metabase** and **Tableau**.

* Provided comparative analyses and recommended actions by interpreting and analyzing datasets to support operations, growth, and performance monitoring.

**Skills/Tools:** SQL (PostgreSQL, BQ SQL), BigQuery, Stitch, dbt, Metabase, Tableau, reporting & visualization

---

## Data Analyst — Operations Analytics

**SquareTrade — Full-time | Karachi, Pakistan | Oct 2022 – Dec 2022**

* Supported operations analytics for a mobile insurance business by improving reliability and speed of reporting workflows.

* Automated recurring data extraction and report preparation using **Python**, replacing manual fetch steps across internal servers/systems.

* Maintained and updated **Tableau** dashboards and supporting extract workflows; worked with **Tableau Prep** (lightweight pipeline tasks) to keep reporting datasets refreshed.

* Performed routine pipeline health checks, investigated failures, and executed fixes to restore reporting continuity.

* Handled ad hoc analysis requests and supported teams with structured investigations and operational deep-dives.

**Skills/Tools:** Python automation, Tableau, Tableau Prep, reporting ops, pipeline monitoring, ad hoc analysis

---

## Assistant Manager — Data Scientist

**K-Electric Ltd — Full-time | Karachi, Pakistan | 18 Aug 2020 – 15 May 2022**
**Performance Improvement & Network Analytics**

* Created visually impactful dashboards in BI tools and Python for reporting network performance and operational KPIs.

* Wrote SQL queries to extract, interpret, and analyze data; transformed raw data into actionable information for technical teams.

* Designed reporting frameworks for technical scoring and benchmarking of operational/field teams.

* Led QA and UAT testing of dashboards, web portals, and SAP PM reporting to ensure data integrity, usability, and stakeholder adoption.

* Defined and challenged KPIs with stakeholders; ensured data was available and exploitable for continuous improvement.

* Conducted stakeholder workshops to identify new pain points and convert them into measurable KPIs.

* Reduced repeated network shutdowns by **15%** by defining and updating Network Improvement KPIs and creating new data points in collaboration with relevant stakeholders.

* Owned the **“Distribution Nama”** reporting initiative: produced a weekly, city-wide performance snapshot circulated across Karachi operating clusters and senior management.

  * Aggregated inputs from **SAP**, network portals, shutdown portals, and other internal sources; extracted and stitched data using **SQL** and **Python**.
  * Built a consolidated reporting dataset and delivered a high-level weekly dashboard/snapshot in **Power BI**, with supporting drill-down outputs shared to cluster operations teams.
  * Improved organizational transparency by giving both leadership and operations a consistent view of weekly performance, plus the underlying detail required for verification and root-cause discussion.
  * Used **QlikView/Qlik Sense** primarily as a power user for analysis/consumption (not core development focus).

---

## Student Engineering Teams — UAV Perception & EV Powertrain Systems

**NUST AirWorks (IMechE UAS Challenge), Formula Electric Racing NUST (FSUK) | 2017 – 2020**

Contributed to two competitive international engineering teams representing NUST in Europe—delivering system-critical modules under high performance and safety constraints.

### NUST AirWorks — UAV Perception & Telemetry

* Developed a UAV-based real-time visual recognition pipeline deployed on embedded hardware (**Jetson Nano, Raspberry Pi**).

* Integrated **OpenCV + Keras** for autonomous object detection and classification during reconnaissance missions.

* Enabled reliable visual target acquisition and real-time telemetry transmission via **LoRa**, contributing directly to the team’s **Grand Champion** win at the IMechE UAS Challenge (UK).

### Formula Electric Racing — NUST (FSUK) — EV Powertrain Integration

Focused on the design and assembly of the accumulator (battery pack) system, consisting of **18650 cells** configured in high-voltage stacks.

Key responsibilities included:

* Collaborated with mechanical engineers to design the accumulator container, ensuring compliance with strict FSUK safety regulations for HV enclosures.

* Specified and sourced fire-retardant insulation, thermal management components, and sensor placement strategies for high-resolution temperature monitoring without direct contact.

* Led mechanical–electrical interface design, including plug positioning, wire harness layout, and minimizing container footprint to optimize car balance and performance.

* Implemented safety-critical subsystems including charging shutdown circuitry, HV interlocks, and insulation monitoring.

This experience emphasized interdisciplinary systems integration, live testing under competitive constraints, and conformance to international safety standards for student-built electric vehicles.

---

# Selected Academic & Technical Projects

## Fingernail Disease Detection via Segmentation & Classification | 2023

* Labeled and curated an 11k-image dataset of hand images for fingernail segmentation and disease classification.

* Applied a semi-supervised segmentation model to isolate nail regions, followed by CNN-based classification of common fingernail diseases as part of a semester coursework project.

## NeRF Sensor Simulation – CARLA | 2024

* Developed a modular dataset generation pipeline in CARLA for photorealistic, multi-view NeRF training.

* Enabled scalable agent-based scene rendering for synthetic sensor datasets as part of an advanced robotics project at TU Dortmund.

* Developed a versatile framework within CARLA’s simulation environment to generate images, initially focusing on cars with flexibility to include other traffic participants for future dataset creation.

* Built a flexible codebase to simplify image generation, empowering scenario customization for NeRF training and broader synthetic-data research in autonomous driving.

## Autonomous UAV Vision & Telemetry Pipeline – IMechE UAS Challenge | 2019

* Built a real-time object detection and classification system using OpenCV and Keras on Jetson Nano.

* Integrated autonomous mission telemetry via LoRa for UAV deployment in an international competition setting.

---

# Core Technical Skills

* **Programming Languages:** Python, C++, Embedded C

* **Robotics & Systems:** ROS2, Jetson Orin, STM32, mmWave Radar (TI IWR6843), RealSense, Vicon

* **AI / ML Frameworks:** PyTorch, TensorFlow, PyTorch Geometric, OpenCV

* **ML Concepts:** Semantic segmentation, object detection, classification, semi-supervised learning, graph neural networks

## Robotic Middleware & Tools

* **Middleware:** ROS2, zenoh

* **Simulation & Visualization:** Gazebo, RViz

* **Tooling & Infrastructure:** Docker, Git

## Perception & Sensor Fusion

* Radar-based sensing and transformation

* Multi-agent data fusion and coordinate alignment using MoCap

* Real-time point cloud processing and radar-to-costmap integration

* Vision-based perception on edge platforms (**Jetson Nano, Raspberry Pi**)

## Embedded & Protocols

* STM32 embedded development

* Sensor interfacing: I2C, SPI, I3C

* Protocol debugging using logic analyzers, Prodigy, and function generators

---

# Soft Skills & Project Coordination

* Cross-functional collaboration (mechanical, software, controls)

* Technical documentation and reproducibility

* Stakeholder communication and feedback handling

* Multi-team coordination across academic, startup, and competition environments

* Time and experiment pipeline management

---

# Languages

* English (C2)

* German (B1, Currently Enrolled in B2 Berufsprachkurs)

* Urdu (Native)
