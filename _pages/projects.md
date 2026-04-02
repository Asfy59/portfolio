---
title: "Projects"
permalink: /projects/
classes: wide
---

<section class="section-panel">
  <div class="section-heading">
    <p class="eyebrow">Projects</p>
    <h1>Selected engineering work</h1>
    <p>The common pattern across these projects is systems integration under constraints: limited sensing, hard interfaces, experimental noise, and the need to make each stage observable and debuggable.</p>
  </div>
</section>

<section class="case-study-grid">
  <article class="case-study-card">
    <img src="{{ '/assets/FLW%20%28Thesis%29/thesis/CPPS_warehouse_scenario.png' | relative_url }}" alt="Warehouse scenario for multi-robot thesis work">
    <div class="case-study-body">
      <p class="card-kicker">2025 · TU Dortmund</p>
      <h2>Multi-Robot Semantic Obstacle Avoidance Framework</h2>
      <p>Built an end-to-end ROS2 perception-to-planning pipeline for smart-warehouse navigation using multi-robot radar sensing, graph construction, GNN inference, tracking, and a custom semantic Nav2 costmap layer.</p>
      <ul class="inline-list">
        <li>63k+ labeled radar graph frames</li>
        <li>about 50 ms sensing-to-costmap latency</li>
        <li>hardware-in-the-loop validation</li>
      </ul>
      <p><strong>Stack:</strong> ROS2, PyTorch Geometric, Jetson Orin, TI IWR6843, Vicon, C++, Python.</p>
      <p><strong>Links:</strong> <a href="https://www.kaggle.com/datasets/asfand59/robofuse-gnn-dataset">Kaggle dataset</a>, <a href="https://github.com/FLW-TUDO/ROS2_GNN_Edge">ROS2_GNN_Edge</a>, <a href="https://github.com/FLW-TUDO/ROS2_GNN_Robomaster">ROS2_GNN_Robomaster</a>.</p>
    </div>
  </article>

  <article class="case-study-card">
    <img src="{{ '/assets/FERN/FERN_GROUP.jpg' | relative_url }}" alt="Formula Electric Racing NUST team">
    <div class="case-study-body">
      <p class="card-kicker">2017-2020 · Formula Electric Racing NUST</p>
      <h2>Accumulator and EV Subsystem Integration</h2>
      <p>Worked on accumulator design and assembly with attention to packaging, harness layout, thermal considerations, safety-driven interfaces, and practical subsystem integration under competition deadlines.</p>
      <p><strong>What it built:</strong> discipline around hardware constraints, team execution, and iterative debugging in a motorsport environment.</p>
    </div>
  </article>

  <article class="case-study-card">
    <img src="{{ '/assets/NUST%20Airworks/17-06-19%20-%20Set-4%20-233.jpg' | relative_url }}" alt="NUST AirWorks field team">
    <div class="case-study-body">
      <p class="card-kicker">2019 · NUST AirWorks</p>
      <h2>Autonomous UAV Vision and Telemetry Pipeline</h2>
      <p>Built onboard visual recognition and telemetry workflows on Jetson Nano and Raspberry Pi, then supported deployment under difficult field conditions during the IMechE UAS Challenge campaign.</p>
      <p><strong>Stack:</strong> OpenCV, Keras, Jetson Nano, Raspberry Pi, LoRa.</p>
      <p><strong>Result:</strong> contributed to NUST AirWorks' Grand Champion finish in the UK competition.</p>
    </div>
  </article>

  <article class="case-study-card">
    <img src="{{ '/assets/FLW%20%28Thesis%29/thesis/GNN_arc.png' | relative_url }}" alt="Graph neural network architecture">
    <div class="case-study-body">
      <p class="card-kicker">2025 · Research Output</p>
      <h2>Uncertainty-Aware GNN for Collaborative Robot Mapping</h2>
      <p>Converted radar detections into graph-based semantic reasoning and co-authored the resulting paper presented at IEEE IECON 2025.</p>
      <p><strong>Publication:</strong> "Uncertainty-Aware GNN for Collaborative Robot Mapping Towards 6G-Enabled Smart Warehouses."</p>
      <p><strong>DOI:</strong> <a href="https://doi.org/10.1109/IECON58223.2025.11221930">10.1109/IECON58223.2025.11221930</a></p>
    </div>
  </article>

  <article class="case-study-card">
    <div class="case-study-body">
      <p class="card-kicker">2023 · Bosch Sensortec</p>
      <h2>MEMS Sensor Automation and I3C Validation Toolkit</h2>
      <p>Designed Python-based validation tooling for automated disturbance injection and serial orchestration, then wrote an STM32-focused C API for Bosch I3C sensor communication across variants.</p>
      <p><strong>Impact:</strong> cut internal validation cycle time by about 50 percent while improving repeatability in testing and debugging workflows.</p>
      <p><strong>Stack:</strong> Python, C, STM32, I3C, serial tooling.</p>
    </div>
  </article>

  <article class="case-study-card">
    <div class="case-study-body">
      <p class="card-kicker">2024 · TU Dortmund project work</p>
      <h2>NeRF Dataset Generation in CARLA</h2>
      <p>Developed a modular pipeline in CARLA for photorealistic multi-view data generation, using agent-based scene creation to support scalable perception experiments and future scenario extensions.</p>
      <p><strong>Stack:</strong> CARLA, Python.</p>
    </div>
  </article>
</section>
