---
layout: single
title: "Muhammad Asfandyar Khan"
permalink: /
author_profile: false
classes: wide portfolio-page home-page
---

<section class="home-hero">
  <div class="home-hero__media">
    <img class="home-hero__avatar" src="{{ '/assets/images/profile/profile.jpg' | relative_url }}" alt="Muhammad Asfandyar Khan portrait">
    <ul class="home-hero__proof">
      <li><strong>Real robotics integration:</strong> built an end-to-end ROS2 multi-robot perception pipeline from radar sensing and graph construction to semantic Nav2 costmap updates.</li>
      <li><strong>Validated on hardware:</strong> tested the perception-to-planning loop in hardware-in-the-loop trials and multi-robot demonstrations under real sensing and timing constraints.</li>
      <li><strong>Public technical output:</strong> co-authored an IEEE IECON 2025 paper and released an open radar dataset and ROS2 code tied to real system development.</li>
    </ul>
  </div>

  <div class="home-hero__content">
    <h1>Robotics software engineer building perception, integration, and autonomy systems for real-world deployment</h1>
    <p>I work at the intersection of robotics software, embedded integration, and system validation. My experience spans multi-robot perception research at TU Dortmund, sensor automation and interface tooling at Bosch Sensortec, and UAV payload and vision integration at HIGHCAT, with a consistent focus on making real systems work under sensing, timing, and deployment constraints.</p>

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

<section class="section-panel">
  <div class="section-heading">
    <p class="eyebrow">Featured</p>
    <h2>Featured Work</h2>
  </div>

  <div class="feature-stack">
    <article class="feature-card">
      <h3>Multi-Robot Semantic Obstacle Avoidance</h3>
      <img src="{{ '/assets/FLW%20%28Thesis%29/thesis/placeholder-warehouse_real.jpg' | relative_url }}" alt="Multi-robot warehouse perception experiment">

      <p>Master’s thesis project on radar-driven multi-robot perception and semantic obstacle avoidance in a warehouse-inspired CPPS testbed.</p>

      <ul>
        <li>Built the full ROS2 pipeline from radar graph construction to semantic Nav2 costmap updates</li>
        <li>Created and published a 63k+ frame radar graph dataset for training and evaluation</li>
        <li>Validated the perception-to-planning loop in hardware-in-the-loop trials and multi-robot demonstrations</li>
      </ul>

      <p><strong>Stack:</strong> ROS2, PyTorch Geometric, Jetson Orin, TI IWR6843, Vicon, C++, Python</p>
      <p><a href="{{ '/projects/#multi-robot-semantic-obstacle-avoidance-framework' | relative_url }}">Read case study</a></p>
    </article>

    <article class="feature-card">
      <h3>Autonomous UAV Vision and Telemetry</h3>
      <img src="{{ '/assets/NUST%20Airworks/17-06-19%20-%20Set-4%20-228.jpg' | relative_url }}" alt="NUST AirWorks field deployment">

      <p>Embedded vision and telemetry pipeline developed under field and competition constraints with NUST AirWorks.</p>

      <ul>
        <li>Built onboard object recognition workflows on Jetson Nano and Raspberry Pi</li>
        <li>Integrated LoRa-based telemetry and mission support workflows for field deployment</li>
        <li>Contributed to the team’s Grand Champion result at the IMechE UAS Challenge in the UK</li>
      </ul>

      <p><strong>Stack:</strong> OpenCV, Keras, Jetson Nano, Raspberry Pi, LoRa</p>
      <p><a href="{{ '/projects/#autonomous-uav-vision-and-telemetry-pipeline' | relative_url }}">Read case study</a></p>
    </article>

    <article class="feature-card">
      <h3>MEMS Sensor Automation and I3C Validation Toolkit</h3>
      <img src="{{ '/assets/images/projects/placeholder-bosch.jpg' | relative_url }}" alt="Embedded sensor validation and automation toolkit illustration">

      <p>Embedded validation and interface tooling built at Bosch Sensortec for repeatable, higher-throughput MEMS sensor testing.</p>

      <ul>
        <li>Designed Python automation for disturbance injection, analyzer control, and serial orchestration</li>
        <li>Authored reusable STM32-targeted C APIs for Bosch I3C sensor communication</li>
        <li>Reduced validation cycle time by about 50% and left tooling in ongoing internal use</li>
      </ul>

      <p><strong>Stack:</strong> Python, C, STM32, I3C, serial tooling</p>
      <p><a href="{{ '/projects/#mems-sensor-automation-and-i3c-validation-toolkit' | relative_url }}">Read case study</a></p>
    </article>
  </div>
</section>

<section class="section-panel section-panel--muted">
  <div class="section-heading">
    <p class="eyebrow">Strengths</p>
    <h2>Engineering Strengths</h2>
  </div>

  <div class="info-grid">
    <article class="info-card">
      <h3>End-to-end robotics integration</h3>
      <p>Building ROS2 pipelines that connect sensing, inference, semantic mapping, and navigation behavior.</p>
    </article>

    <article class="info-card">
      <h3>Embedded and interface-level debugging</h3>
      <p>Hands-on work across MAVLink, VISCA, SimpleBGC, I3C, STM32, and Jetson-based systems.</p>
    </article>

    <article class="info-card">
      <h3>Validation with measurable outcomes</h3>
      <p>Hardware-in-the-loop testing, latency benchmarking, automation gains, and reproducible datasets.</p>
    </article>

    <article class="info-card">
      <h3>Execution across engineering contexts</h3>
      <p>Experience spanning research labs, startups, industrial teams, and cross-functional development environments.</p>
    </article>
  </div>
</section>

<section class="section-panel">
  <div class="section-heading">
    <p class="eyebrow">Experience</p>
    <h2>Experience Snapshot</h2>
    <p>Roles and environments where I have built and validated systems.</p>
  </div>

  <div class="info-grid">
    <article class="info-card">
      <h3>TU Dortmund</h3>
      <p>Built a radar-based multi-robot perception stack with graph learning, semantic obstacle publishing, and Nav2 costmap integration for real-time obstacle avoidance.</p>
    </article>

    <article class="info-card">
      <h3>Bosch Sensortec</h3>
      <p>Built automation and reusable interface tooling for MEMS sensor robustness testing, disturbance injection, and I3C communication.</p>
    </article>

    <article class="info-card">
      <h3>HIGHCAT GmbH</h3>
      <p>Integrated UAV payload control and edge-vision workflows, including MAVLink command bridging, camera and gimbal control, and Jetson bring-up.</p>
    </article>

    <article class="info-card">
      <h3>VMT</h3>
      <p>Developed and evaluated an MPC prototype for tunnel boring machine steering under industrial system constraints.</p>
    </article>
  </div>
</section>

<section class="section-panel section-panel--muted">
  <div class="section-heading">
    <p class="eyebrow">Education</p>
    <h2>Education</h2>
  </div>

  <div class="info-grid info-grid--two">
    <article class="info-card">
      <h3>M.Sc. Automation and Robotics — TU Dortmund University</h3>
      <p>Focused on robotics, perception, and autonomous systems. Thesis: <em>Development of an Obstacle Avoidance Framework through Multi-Robot Perception</em>.</p>
      <p><a href="{{ '/projects/#multi-robot-semantic-obstacle-avoidance-framework' | relative_url }}">See project</a></p>
    </article>

    <article class="info-card">
      <h3>B.E. Electrical Engineering — NUST</h3>
      <p>Built a strong foundation in embedded systems, control, and applied engineering through coursework, technical projects, and international engineering competitions.</p>
      <p><a href="{{ '/projects/#wall-traversing-robot' | relative_url }}">See project</a></p>
    </article>
  </div>
</section>

<section class="section-panel">
  <div class="section-heading">
    <p class="eyebrow">Public Work</p>
    <h2>Publication, Dataset, and Open Code</h2>
    <p>Public outputs that came directly from the TU Dortmund multi-robot perception work rather than side projects detached from deployment.</p>
  </div>

  <div class="info-grid info-grid--three">
    <article class="info-card">
      <h3>IEEE IECON 2025</h3>
      <p>Co-authored publication based on collaborative robot mapping and semantic perception work from TU Dortmund.</p>
      <p><a href="https://ieeexplore.ieee.org/document/11221930">IEEE Xplore</a></p>
    </article>

    <article class="info-card">
      <h3>RoboFUSE GNN Dataset</h3>
      <p>Public radar-based graph dataset built from synchronized multi-robot radar and MoCap recordings for collaborative perception experiments.</p>
      <p><a href="https://www.kaggle.com/datasets/asfand59/robofuse-gnn-dataset">Kaggle dataset</a></p>
    </article>

    <article class="info-card">
      <h3>Open-source ROS2 Interfaces</h3>
      <p>Selected code released from the multi-robot perception pipeline, including GNN inference and robot-side integration work.</p>
      <p>
        <a href="https://github.com/FLW-TUDO/ROS2_GNN_Edge">ROS2_GNN_Edge</a> ·
        <a href="https://github.com/FLW-TUDO/ROS2_GNN_Robomaster">ROS2_GNN_Robomaster</a>
      </p>
    </article>
  </div>
</section>

<section class="section-panel section-panel--muted" id="contact">
  <div class="section-heading">
    <p class="eyebrow">Contact</p>
    <h2>Contact</h2>
    <p>Available for robotics software, perception, embedded integration, and autonomy engineering roles.</p>
  </div>

  <div class="info-grid info-grid--three">
    <article class="info-card">
      <h3>Email</h3>
      <p><a href="mailto:durraniasfand@hotmail.com">durraniasfand@hotmail.com</a></p>
    </article>

    <article class="info-card">
      <h3>LinkedIn</h3>
      <p><a href="https://www.linkedin.com/in/muhammad-asfandyar-khan-durrani">muhammad-asfandyar-khan-durrani</a></p>
    </article>

    <article class="info-card">
      <h3>GitHub</h3>
      <p><a href="https://github.com/Asfy59">Asfy59</a></p>
    </article>
  </div>
</section>
