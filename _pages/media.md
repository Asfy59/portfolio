---
title: "Media"
permalink: /media/
classes: wide portfolio-page
lang: en
translation_key: media
page_key: media
---

<section class="section-panel">
  <div class="section-heading">
    <p class="eyebrow">Media</p>
    <h1>Visual archive</h1>
    <p>Images from the TU Dortmund thesis work, the ongoing ROS2 autonomous-driving stack, Formula Student EV build environment, and NUST AirWorks competition deployment. The goal is to show the real hardware and testing context behind the portfolio projects.</p>
  </div>
</section>

<section class="gallery-grid gallery-grid--media">
  <figure class="gallery-card">
    <img src="{{ '/assets/images/projects/av-perception-stack-lidar-2026-04.png' | relative_url }}" alt="KITTI LiDAR preprocessing and obstacle clustering view">
    <figcaption>LiDAR-side preprocessing from the ongoing ROS2 autonomous-driving stack, showing ROI filtering and obstacle candidate generation from KITTI replay.</figcaption>
  </figure>
  <figure class="gallery-card">
    <img src="{{ '/assets/images/projects/av-perception-stack-camera-2026-04.png' | relative_url }}" alt="KITTI camera detections overlay">
    <figcaption>Camera-side object detection output from the same stack, using monocular KITTI replay with ONNX-based YOLO inference.</figcaption>
  </figure>
  <figure class="gallery-card gallery-card--large">
    <img src="{{ '/assets/FLW%20%28Thesis%29/thesis/CPPS_warehouse_scenario.png' | relative_url }}" alt="CPPS warehouse scenario">
    <figcaption>Warehouse-inspired CPPS environment used for multi-robot perception and obstacle avoidance experiments at TU Dortmund.</figcaption>
  </figure>
  <figure class="gallery-card">
    <img src="{{ '/assets/FLW%20%28Thesis%29/thesis/placeholder-warehouse_real.jpg' | relative_url }}" alt="Warehouse experiment arena">
    <figcaption>Warehouse-inspired CPPS environment used for multi-robot perception and obstacle avoidance experiments at TU Dortmund.</figcaption>
  </figure>
  <figure class="gallery-card">
    <img src="{{ '/assets/FLW%20%28Thesis%29/thesis/Robot_b_cropped.jpg' | relative_url }}" alt="Robot platform">
    <figcaption>Robot platform used for distributed sensing and graph construction experiments.</figcaption>
  </figure>
  <figure class="gallery-card">
    <img src="{{ '/assets/FLW%20%28Thesis%29/thesis/Pictures/System_workflow_new.png' | relative_url }}" alt="Perception workflow">
    <figcaption>System workflow from radar sensing through graph construction, inference, and semantic obstacle publishing.</figcaption>
  </figure>
  <figure class="gallery-card">
    <img src="{{ '/assets/FERN/FERN_GROUP.jpg' | relative_url }}" alt="FERN team">
    <figcaption>Formula Electric Racing NUST team environment.</figcaption>
  </figure>
  <figure class="gallery-card">
    <img src="{{ '/assets/FERN/Cell_Module.png' | relative_url }}" alt="FERN cell module">
    <figcaption>Accumulator cell module work from FERN.</figcaption>
  </figure>
  <figure class="gallery-card">
    <img src="{{ '/assets/NUST%20Airworks/17-06-19%20-%20Set-4%20-228.jpg' | relative_url }}" alt="NUST AirWorks">
    <figcaption>AirWorks competition environment during field deployment.</figcaption>
  </figure>
</section>

<!-- <section class="section-panel section-panel--muted">
  <div class="section-heading">
    <p class="eyebrow">Updating Visuals</p>
    <h2>Where to add or change media</h2>
    <p>Edit this page at <code>_pages/media.md</code> and point the image paths to files under the relevant asset folders. The main folders already used here are <code>assets/FLW (Thesis)/thesis/</code>, <code>assets/FERN/</code>, <code>assets/NUST Airworks/</code>, and <code>assets/Bacheelor_FinalYearProject/CDRB/</code>.</p>
  </div>
</section> -->

<section class="section-panel section-panel--muted">
  <div class="section-heading">
    <p class="eyebrow">References</p>
    <h2>Public references</h2>
  </div>
  <ul class="resource-list">
    <li><a href="https://github.com/Asfy59/ros2_cpp_autonomous_driving_stack/tree/main">ROS2 C++ autonomous-driving mini-stack</a></li>
    <li><a href="https://ieeexplore.ieee.org/document/11221930">IEEE IECON 2025 publication</a></li>
    <li><a href="https://ieeexplore.ieee.org/abstract/document/9073861">Kalman Filter publication</a></li>
    <li><a href="https://www.kaggle.com/datasets/asfand59/robofuse-gnn-dataset">RoboFuse GNN dataset on Kaggle</a></li>
    <li><a href="https://github.com/FLW-TUDO/ROS2_GNN_Edge">ROS2_GNN_Edge</a></li>
    <li><a href="https://github.com/FLW-TUDO/ROS2_GNN_Robomaster">ROS2_GNN_Robomaster</a></li>
  </ul>
</section>
