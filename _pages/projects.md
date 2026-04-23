---
title: "Projects"
permalink: /projects/
classes: wide portfolio-page
lang: en
translation_key: projects
page_key: projects
---

{% include portfolio-topbar.html %}

<section class="section-panel">
  <div class="section-heading">
    <p class="eyebrow">Projects</p>
    <h1>Selected projects and research artifacts</h1>
    <p>The strongest work here centers on robotics perception, embedded integration, and validation under real deployment constraints. Where public media is available, the page shows real project visuals; where the work was internal, the page focuses on technical scope and measurable outcomes.</p>
  </div>
</section>

<section class="project-grid">
  <article class="project-card" id="ros2-cpp-perception-and-sensor-fusion-mini-stack">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <div class="project-showcase__gallery">
          <img src="{{ '/assets/images/projects/av-perception-stack-lidar-2026-04.png' | relative_url }}" alt="RViz view comparing raw and processed KITTI LiDAR point clouds with clustered obstacle boxes">
          <img src="{{ '/assets/images/projects/av-perception-stack-camera-2026-04.png' | relative_url }}" alt="Camera-side KITTI replay view with object detection boxes from the ROS2 autonomous driving stack">
        </div>
        <figcaption>Current stack visuals: LiDAR preprocessing and 3D obstacle proposals on one side, monocular YOLO-based camera detections on the other, both running on replayed KITTI data.</figcaption>
      </figure>
      <div class="project-showcase__content">
        <p class="project-kicker">Ongoing Personal Project · ROS2 / Autonomous Driving</p>
        <h2>ROS2 C++ Perception and Sensor Fusion Mini-Stack</h2>
        <p>In-progress autonomous-driving portfolio project built around KITTI replay to demonstrate ROS2 package architecture, modern C++ perception pipelines, and a clean path toward LiDAR-camera fusion without over-claiming end-to-end AV behavior.</p>
        <ul class="compact-list">
          <li>Built a custom <code>lidar_processing</code> package in ROS2/C++ for ROI cropping, voxelization, optional RANSAC ground removal, Euclidean clustering, 3D detections, and RViz marker publishing.</li>
          <li>Built a custom <code>camera_processing</code> package for monocular image ingestion, ONNX Runtime-based YOLO inference, 2D detections, overlay publishing, and interval-based profiling with optional CSV logging.</li>
          <li>Structured the stack so replay, TF, URDF, RViz, and odometry stay in the infrastructure layer while custom packages own perception, visualization bringup, and the early <code>fusion_core</code> scaffold.</li>
        </ul>
        <p><strong>Stack:</strong> ROS2, C++, PCL, OpenCV, ONNX Runtime, RViz2, KITTI replay, vision_msgs.</p>
        <p class="project-links"><a href="https://github.com/Asfy59/ros2_cpp_autonomous_driving_stack/tree/main">GitHub repo</a></p>
        <p class="project-note">Current status: LiDAR and camera perception nodes are working and profiled; sensor-fusion association, tracked/fused object outputs, and broader test/CI coverage are still under active development.</p>
      </div>
    </div>
  </article>

  <article class="project-card" id="multi-robot-semantic-obstacle-avoidance-framework">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/FLW%20%28Thesis%29/thesis/placeholder-warehouse_real.jpg' | relative_url }}" alt="Multi-robot warehouse experiment environment">
        <figcaption>Warehouse-inspired CPPS testbed used to validate perception, graph construction, and navigation-facing obstacle publishing.</figcaption>
      </figure>
      <div class="project-showcase__content">
        <p class="project-kicker">Master's Thesis · TU Dortmund</p>
        <h2>Multi-Robot Semantic Obstacle Avoidance Framework</h2>
        <p>Radar-driven perception and planning integration for collaborative obstacle handling in a warehouse-inspired cyber-physical production system.</p>
        <ul class="compact-list">
          <li>Built the ROS2 pipeline from synchronized radar capture and graph construction to GNN inference, tracking, and Nav2 semantic costmap updates.</li>
          <li>Created and released a 63k+ frame radar graph dataset for reproducible training and evaluation.</li>
          <li>Validated the full perception-to-planning loop in hardware-in-the-loop experiments with real robots and motion capture.</li>
        </ul>
        <p><strong>Stack:</strong> ROS2, PyTorch Geometric, Jetson Orin, TI IWR6843, Vicon, C++, Python.</p>
        <p class="project-links"><a href="https://www.kaggle.com/datasets/asfand59/robofuse-gnn-dataset">Kaggle dataset</a> · <a href="https://github.com/FLW-TUDO/ROS2_GNN_Edge">GNN inference repo</a> · <a href="https://github.com/FLW-TUDO/ROS2_GNN_Robomaster">RoboMaster ROS2 stack</a></p>
      </div>
    </div>
  </article>

  <article class="project-card" id="mems-sensor-automation-and-i3c-validation-toolkit">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/images/projects/placeholder-bosch.jpg' | relative_url }}" alt="Bosch sensor validation and embedded tooling illustration">
        <figcaption>Mock test setup.</figcaption>
      </figure>
      <div class="project-showcase__content project-showcase__content--full">
        <p class="project-kicker">Internship Project · Bosch Sensortec</p>
        <h2>MEMS Sensor Automation and I3C Validation Toolkit</h2>
        <p>Embedded validation tooling built to automate MEMS inertial-sensor robustness testing, analyzer orchestration, and reusable interface bring-up across Bosch internal workflows.</p>
        <ul class="compact-list">
          <li>Designed a standalone Python-based test platform using serial communication, external analyzers, and programmable function generators for disturbance injection.</li>
          <li>Executed robustness checks using spikes, jitter, and noise patterns to evaluate sensor stability and pre-shipment quality under controlled disturbance conditions.</li>
          <li>Authored a reusable STM32-targeted C I3C API that could interface with Bosch sensor variants beyond the constraints of existing ST-specific libraries.</li>
          <li>Cut validation cycle time by about 50% and left both the automation tooling and I3C API in ongoing internal use.</li>
        </ul>
        <p><strong>Stack:</strong> Python, C, STM32, I3C, serial tooling.</p>
        <p class="project-note">Public details focus on the automation architecture and testing impact because analyzer screens, lab setups, and internal sensor artifacts are not shareable.</p>
      </div>
    </div>
  </article>

  <article class="project-card" id="autonomous-uav-vision-and-telemetry-pipeline">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/NUST%20Airworks/17-06-19%20-%20Set-4%20-228.jpg' | relative_url }}" alt="NUST AirWorks competition field setup">
        <figcaption>Field deployment environment from the IMechE UAS Challenge campaign with NUST AirWorks.</figcaption>
      </figure>
      <div class="project-showcase__content">
        <p class="project-kicker">Competition System · NUST AirWorks</p>
        <h2>Autonomous UAV Vision and Telemetry Pipeline</h2>
        <p>Embedded vision and telemetry workflows built under field and competition constraints for mission execution on lightweight aerial platforms.</p>
        <ul class="compact-list">
          <li>Built onboard object-recognition workflows on Jetson Nano and Raspberry Pi.</li>
          <li>Integrated telemetry and mission-support data links for field operations.</li>
          <li>Contributed to the team's Grand Champion result at the IMechE UAS Challenge in the UK.</li>
        </ul>
        <p><strong>Stack:</strong> OpenCV, Keras, Jetson Nano, Raspberry Pi, LoRa.</p>
        <p class="project-links"><a href="{{ '/media/' | relative_url }}">Competition and field photos</a></p>
      </div>
    </div>
  </article>

  <article class="project-card" id="accumulator-and-ev-subsystem-integration">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/FERN/FERN_Grad.png' | relative_url }}" alt="Formula Electric Racing NUST team and car environment">
        <figcaption>Formula Electric Racing NUST environment, where accumulator and subsystem integration work was carried out.</figcaption>
      </figure>
      <div class="project-showcase__content">
        <p class="project-kicker">Student Engineering Team · Formula Student EV</p>
        <h2>Accumulator and EV Subsystem Integration</h2>
        <p>Hands-on work on battery-pack subsystem integration and supporting electrical packaging tasks in a Formula Student electric vehicle program.</p>
        <ul class="compact-list">
          <li>Contributed to accumulator and subsystem-level engineering work under team, packaging, and testing constraints.</li>
          <li>Worked with mechanical teammates on accumulator-container design, fire-retardant insulation choices, harness routing, and subsystem packaging under FSUK safety constraints.</li>
          <li>Handled mechanical-electrical interface concerns including plug positioning, thermal monitoring placement, charging shutdown, HV interlocks, and insulation-monitoring related tasks.</li>
        </ul>
        <p class="project-links"><a href="{{ '/media/' | relative_url }}">Accumulator and team visuals</a></p>
      </div>
    </div>
  </article>

  <article class="project-card" id="uncertainty-aware-gnn-for-collaborative-robot-mapping">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/FLW%20%28Thesis%29/thesis/Overall_Architecture_Horizontal_03_compressed-1.png' | relative_url }}" alt="Graph neural network architecture overview">
        <figcaption>Model-side view of the graph neural network used for collaborative robot perception and semantic mapping.</figcaption>
      </figure>
      <div class="project-showcase__content">
        <p class="project-kicker">Research Output · IEEE IECON 2025</p>
        <h2>Uncertainty-Aware GNN for Collaborative Robot Mapping</h2>
        <p>Publication-focused extension of the multi-robot perception work, centering on graph-based semantic inference for collaborative mapping under sensing uncertainty.</p>
        <ul class="compact-list">
          <li>Converted working system research into a publishable technical artifact with experimental framing and model analysis.</li>
          <li>Connected graph-based perception outputs to collaborative robot mapping questions relevant to real deployments.</li>
          <li>Documented the work as a co-authored IEEE IECON 2025 publication.</li>
        </ul>
        <p class="project-links"><a href="https://doi.org/10.1109/IECON58223.2025.11221930">DOI</a></p>
      </div>
    </div>
  </article>

  <article class="project-card" id="nerf-dataset-generation-in-carla">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/images/projects/placeholder-carla.jpg' | relative_url }}" alt="CARLA-based synthetic dataset generation workflow">
        <figcaption>Simulation-side dataset generation workflow in CARLA for multi-view image capture and NeRF-oriented synthetic data creation.</figcaption>
      </figure>
      <div class="project-showcase__content project-showcase__content--full">
        <p class="project-kicker">Simulation Workflow</p>
        <h2>NeRF Dataset Generation in CARLA</h2>
        <p>Modular CARLA workflow for generating structured multi-view image datasets for NeRF-style reconstruction and synthetic-data experiments in autonomous-driving scenes.</p>
        <ul class="compact-list">
          <li>Built a flexible codebase for agent-based scene rendering and camera-path control inside CARLA.</li>
          <li>Focused on reproducible image generation for downstream NeRF training rather than a one-off simulation demo.</li>
          <li>Structured the pipeline so the same workflow could later be extended beyond cars to additional traffic participants and scene types.</li>
        </ul>
        <p><strong>Stack:</strong> CARLA, Python, synthetic-data tooling, simulation-based camera control.</p>
      </div>
    </div>
  </article>

  <article class="project-card" id="wall-traversing-robot">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/Bacheelor_FinalYearProject/CAD/1.png' | relative_url }}" alt="Wall traversing robot CAD render">
        <figcaption>CAD-stage view of the wall traversing inspection robot developed as the bachelor final year project.</figcaption>
      </figure>
      <div class="project-showcase__content">
        <p class="project-kicker">Bachelor Final Year Project</p>
        <h2>Wall Traversing Robot</h2>
        <p>Inspection robot concept designed for wall and ceiling traversal using suction-assisted adhesion and four-wheel locomotion.</p>
        <ul class="compact-list">
          <li>Developed the mechanical and control concept for climbing and elevated-surface inspection use cases.</li>
          <li>Worked through CAD, subsystem packaging, and proof-of-concept documentation.</li>
          <li>Produced a formal project report and presentation for the final-year evaluation.</li>
        </ul>
        <p class="project-links"><a href="{{ '/assets/Bacheelor_FinalYearProject/DAB/DAB Report.pdf' | relative_url }}">Project report</a> · <a href="{{ '/assets/Bacheelor_FinalYearProject/DAB/DAB.pptx' | relative_url }}">Presentation</a></p>
      </div>
    </div>
  </article>
</section>
