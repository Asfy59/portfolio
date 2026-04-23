---
title: "Experience"
permalink: /experience/
classes: wide portfolio-page
lang: en
translation_key: experience
page_key: experience
---

<section class="section-panel">
  <div class="section-heading">
    <p class="eyebrow">Experience</p>
    <h1>Engineering and research roles</h1>
    <p>Focused on perception, embedded integration, and measurable system behavior under real constraints.</p>
  </div>
</section>

<section class="experience-list">
  <article class="experience-item">
    <h2>Embedded and Vision Software Engineer</h2>
    <p class="experience-meta">HIGHCAT GmbH · Konstanz, Germany · Oct 2025 - Mar 2026</p>
    <ul class="compact-list">
      <li>Integrated camera and gimbal control workflows with MAVLink, VISCA, and SimpleBGC protocol bridges.</li>
      <li>Built a reusable Python control API for repeatable hardware tests and faster debugging cycles.</li>
      <li>Benchmarked real-time single-object tracking pipelines on Jetson Orin NX for accuracy-latency tradeoffs.</li>
      <li>Handled edge bring-up work including Jetson flashing, CUDA/OpenCV setup, and GStreamer troubleshooting.</li>
    </ul>
    <p><strong>Tech:</strong> OpenCV, GStreamer, Jetson Orin NX, PX4, MAVLink, VISCA, SimpleBGC, Python.</p>
  </article>

  <article class="experience-item">
    <h2>Student Research Assistant and Master's Thesis</h2>
    <p class="experience-meta">Chair of Material Handling, TU Dortmund · Jan 2025 - Sep 2025</p>
    <ul class="compact-list">
      <li>Built an end-to-end ROS2 multi-robot perception pipeline using TI IWR6843 radar, Jetson, and Vicon streams.</li>
      <li>Created a 63k+ frame radar graph dataset and published it on Kaggle.</li>
      <li>Implemented graph construction, PyTorch Geometric inference, object tracking, and semantic obstacle publishing.</li>
      <li>Developed a custom Nav2 costmap layer (`GNNObjectsLayer`) for class-aware semantic obstacle integration.</li>
      <li>Validated the full perception-to-planning loop in hardware-in-the-loop trials with about 50 ms end-to-end latency.</li>
      <li>Co-authored IEEE IECON 2025 paper: DOI <a href="https://doi.org/10.1109/IECON58223.2025.11221930">10.1109/IECON58223.2025.11221930</a>.</li>
    </ul>
    <p><strong>Tech:</strong> ROS2 Humble, PyTorch Geometric, Jetson Orin, TI IWR6843, Vicon, zenoh, C++, Python, Nav2.</p>
  </article>

  <article class="experience-item">
    <h2>Working Student, Autonomous Tunnel Boring Systems</h2>
    <p class="experience-meta">VMT GmbH · Germany · Feb 2024 - Aug 2024</p>
    <ul class="compact-list">
      <li>Built a baseline MPC framework for tunnel boring machine steering simulation.</li>
      <li>Developed prediction and cost models to evaluate correction behavior and control horizon tradeoffs.</li>
      <li>Generated and analyzed response datasets for model estimation under industrial constraints.</li>
    </ul>
  </article>

  <article class="experience-item">
    <h2>Embedded Systems and Sensor Validation Intern</h2>
    <p class="experience-meta">Bosch Sensortec GmbH · Reutlingen, Germany · Jun 2023 - Nov 2023</p>
    <ul class="compact-list">
      <li>Built Python automation tooling for MEMS sensor robustness validation with disturbance injection workflows.</li>
      <li>Authored reusable STM32-targeted C APIs for Bosch I3C sensor communication.</li>
      <li>Reduced validation cycle time by about 50 percent through batch execution and reduced manual setup overhead.</li>
    </ul>
    <p><strong>Tech:</strong> Python, C, STM32, I3C, serial tooling.</p>
  </article>

  <article class="experience-item">
    <h2>Data and Analytics Roles</h2>
    <p class="experience-meta">K-Electric, Dastgyr, SquareTrade · Karachi, Pakistan · 2020 - 2022</p>
    <ul class="compact-list">
      <li>Automated recurring reporting and KPI workflows using SQL and Python.</li>
      <li>Built dashboards and operational analytics pipelines across BI tools and ELT stacks.</li>
      <li>Worked closely with business teams to convert operational pain points into measurable metrics and decision support.</li>
    </ul>
    <p><strong>Tech:</strong> SQL, Python, Tableau, Metabase, BigQuery, PostgreSQL, dbt.</p>
  </article>

  <article class="experience-item">
    <h2>Student Engineering Teams</h2>
    <p class="experience-meta">Formula Electric Racing NUST and NUST AirWorks · 2017 - 2020</p>
    <ul class="compact-list">
      <li>Contributed to Formula Student EV system work including accumulator and subsystem integration tasks.</li>
      <li>Built UAV vision and telemetry pipelines on Jetson Nano and Raspberry Pi under competition deadlines.</li>
      <li>Contributed to NUST AirWorks Grand Champion result at the IMechE UAS Challenge in the UK.</li>
    </ul>
  </article>
</section>

<section class="section-panel education-section">
  <div class="section-heading">
    <p class="eyebrow">Education</p>
    <h2>Academic background</h2>
    <p>Graduate robotics work in Germany and bachelor-level systems projects in Pakistan.</p>
  </div>
</section>

<section class="experience-list">
  <article class="experience-item">
    <h2>Master's Studies in Automation and Robotics</h2>
    <p class="experience-meta">TU Dortmund University · Dortmund, Germany</p>
    <ul class="compact-list">
      <li>Master's thesis: <em>Development of an Obstacle Avoidance Framework through Multi-Robot Perception</em>.</li>
      <li>Built a radar-based ROS2 perception and navigation stack spanning data fusion, graph learning, semantic obstacle publishing, and Nav2 costmap integration.</li>
    </ul>
  </article>

  <article class="experience-item">
    <h2>Bachelor's Final Year Project</h2>
    <p class="experience-meta">PN Engineering College, PNS Jauhar · Karachi, Pakistan</p>
    <ul class="compact-list">
      <li><em>Design and Development of a Wall Traversing Robot for Inspection Purposes</em>.</li>
      <li>Designed a modular robot for vertical and ceiling traversal using negative-thrust suction and four-wheel locomotion.</li>
      <li>Targeted inspection, safety monitoring, and elevated-surface tasks where manual access is hazardous.</li>
    </ul>
    <p><strong>Links:</strong> <a href="{{ '/assets/Bacheelor_FinalYearProject/CDRB/TO_BE_PRINTED%5B1%5D.pdf' | relative_url }}">Project report</a> · <a href="{{ '/assets/Bacheelor_FinalYearProject/CDRB/fyp%20presentation.pptx' | relative_url }}">Presentation</a></p>
  </article>
</section>
