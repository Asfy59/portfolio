---
layout: single
title: "Muhammad Asfandyar Khan"
permalink: /de/
author_profile: false
classes: wide portfolio-page home-page
lang: de
translation_key: home
page_key: home
---

<section class="home-hero">
  <div class="home-hero__media">
    <img class="home-hero__avatar" src="{{ '/assets/images/profile/profile.jpg' | relative_url }}" alt="Porträt von Muhammad Asfandyar Khan">
  </div>

  <div class="home-hero__content">
    <h1>Robotics Software Engineer für Wahrnehmung, Integration und autonome Systeme in der Praxis</h1>
    <p>Ich entwickle ROS2-, Wahrnehmungs- und Embedded-Systeme für echte Hardware. Meine Arbeit reicht von Multi-Roboter-Forschung und UAV-Integration bis zu einem laufenden ROS2/C++ Projekt für autonomes Fahren mit KITTI-Replay.</p>

    <p class="home-hero__actions">
      <a class="btn btn--primary" href="{{ '/de/projects/' | relative_url }}">Projekte ansehen</a>
      <a class="btn btn--info" href="{{ '/assets/files/Asfand_Resume.pdf' | relative_url }}">Lebenslauf herunterladen</a>
    </p>

    <p class="home-hero__links">
      <a href="https://www.linkedin.com/in/muhammad-asfandyar-khan-durrani">LinkedIn</a> ·
      <a href="https://github.com/Asfy59">GitHub</a> ·
      <a href="mailto:durraniasfand@hotmail.com">E-Mail</a>
    </p>
  </div>
</section>

<section class="section-panel">
  <div class="section-heading">
    <p class="eyebrow">Im Fokus</p>
    <h2>Ausgewählte Arbeiten</h2>
  </div>

  <div class="feature-stack">
    <article class="feature-card">
      <h3>ROS2 C++ Wahrnehmungs- und Sensorfusion Mini-Stack</h3>
      <div class="feature-card__gallery">
        <img src="{{ '/assets/images/projects/av-perception-stack-lidar-2026-04.png' | relative_url }}" alt="KITTI LiDAR Vorverarbeitung und erkannte Objekte">
        <img src="{{ '/assets/images/projects/av-perception-stack-camera-2026-04.png' | relative_url }}" alt="KITTI Kamerabild mit YOLO Erkennung">
      </div>

      <p>Laufendes Portfolio-Projekt für eine klare ROS2/C++ Architektur mit LiDAR-, Kamera- und späterer Sensorfusion. Der Fokus liegt auf sauberem Aufbau statt auf zu großen Versprechen.</p>

      <ul>
        <li>Eigene LiDAR- und Kamera-Pakete für 3D- und 2D-Erkennung mit KITTI-Replay gebaut</li>
        <li>Profiling, CSV-Logging, RViz-Ansichten und eine erste Fusion-Struktur hinzugefugt</li>
      </ul>

      <p><strong>Status:</strong> Wahrnehmungsmodule laufen, Fusion und mehr Tests sind noch in Arbeit.</p>
      <p><a href="{{ '/de/projects/#ros2-cpp-perception-and-sensor-fusion-mini-stack' | relative_url }}">Zum Projekt</a></p>
    </article>

    <article class="feature-card">
      <h3>Multi-Roboter Semantische Hindernisvermeidung</h3>
      <img src="{{ '/assets/FLW%20%28Thesis%29/thesis/placeholder-warehouse_real.jpg' | relative_url }}" alt="Multi-Roboter Experiment in einer Lagerumgebung">

      <p>Radarbasierte Wahrnehmung und Navigation für gemeinsame Hindernisbehandlung in einem lagerähnlichen CPPS-Testfeld.</p>

      <ul>
        <li>ROS2-Pipeline von Radargraphen bis zu semantischen Nav2-Costmaps gebaut</li>
        <li>Öffentlichen Datensatz mit mehr als 63k Frames für Training und Bewertung veröffentlicht</li>
      </ul>

      <p><strong>Ergebnis:</strong> Die Kette von Wahrnehmung bis Planung wurde in Hardware-in-the-Loop Versuchen gepruft.</p>
      <p><a href="{{ '/de/projects/#multi-robot-semantic-obstacle-avoidance-framework' | relative_url }}">Zum Projekt</a></p>
    </article>

    <article class="feature-card">
      <h3>Autonome UAV Vision und Telemetrie</h3>
      <img src="{{ '/assets/NUST%20Airworks/17-06-19%20-%20Set-4%20-228.jpg' | relative_url }}" alt="Feldeinsatz von NUST AirWorks">

      <p>Embedded Vision und Telemetrie für einen Wettbewerbseinsatz mit NUST AirWorks.</p>

      <ul>
        <li>Onboard-Objekterkennung auf Jetson Nano und Raspberry Pi aufgebaut</li>
        <li>LoRa-Telemetrie und Datenverbindungen für den Feldeinsatz integriert</li>
      </ul>

      <p><strong>Ergebnis:</strong> Beitrag zum Grand Champion Erfolg beim IMechE UAS Challenge in Großbritannien.</p>
      <p><a href="{{ '/de/projects/#autonomous-uav-vision-and-telemetry-pipeline' | relative_url }}">Zum Projekt</a></p>
    </article>
  </div>
</section>

<section class="section-panel section-panel--muted">
  <div class="section-heading">
    <p class="eyebrow">Stärken</p>
    <h2>Technische Stärken</h2>
  </div>

  <div class="info-grid">
    <article class="info-card">
      <h3>Robotics Integration von Anfang bis Ende</h3>
      <p>ROS2-Pipelines für Sensorik, Inferenz, semantische Karten und einsatznahe Systeme.</p>
    </article>

    <article class="info-card">
      <h3>Embedded Debugging nah an der Schnittstelle</h3>
      <p>Praktische Arbeit mit MAVLink, VISCA, SimpleBGC, I3C, STM32 und Jetson-Systemen.</p>
    </article>

    <article class="info-card">
      <h3>Validierung mit messbaren Ergebnissen</h3>
      <p>Hardware-in-the-Loop Tests, Latenzmessung, Automatisierung und reproduzierbare Datensätze.</p>
    </article>

    <article class="info-card">
      <h3>Arbeit in verschiedenen Teams</h3>
      <p>Erfahrung aus Forschung, Start-ups, Industrie und interdisziplinaren Entwicklungsumgebungen.</p>
    </article>
  </div>
</section>

<section class="section-panel">
  <div class="section-heading">
    <p class="eyebrow">Erfahrung</p>
    <h2>Kurzüberblick Berufserfahrung</h2>
  </div>

  <div class="info-grid">
    <article class="info-card">
      <h3>TU Dortmund</h3>
      <p>Radarbasierter Multi-Roboter Stack mit Graph Learning, semantischen Hindernissen und Nav2-Costmap Integration für Hindernisvermeidung in Echtzeit.</p>
    </article>

    <article class="info-card">
      <h3>Bosch Sensortec</h3>
      <p>Automatisierung und wiederverwendbare Tools für MEMS-Sensortests, Störungseinspeisung und I3C-Kommunikation gebaut.</p>
    </article>

    <article class="info-card">
      <h3>HIGHCAT GmbH</h3>
      <p>UAV Payload Control und Edge-Vision Workflows integriert, inklusive MAVLink, Kamera- und Gimbal-Steuerung und Jetson Bring-up.</p>
    </article>

    <article class="info-card">
      <h3>VMT</h3>
      <p>MPC-Prototyp für die Steuerung einer Tunnelbohrmaschine unter industriellen Randbedingungen entwickelt und bewertet.</p>
    </article>
  </div>
</section>

<section class="section-panel section-panel--muted">
  <div class="section-heading">
    <p class="eyebrow">Ausbildung</p>
    <h2>Ausbildung</h2>
  </div>

  <div class="info-grid info-grid--two">
    <article class="info-card">
      <h3>M.Sc. Automation and Robotics - TU Dortmund University</h3>
      <p>Schwerpunkt auf Robotik, Wahrnehmung und autonomen Systemen. Thesis: <em>Development of an Obstacle Avoidance Framework through Multi-Robot Perception</em>.</p>
      <p><a href="{{ '/de/projects/#multi-robot-semantic-obstacle-avoidance-framework' | relative_url }}">Projekt ansehen</a></p>
    </article>

    <article class="info-card">
      <h3>B.E. Electrical Engineering - NUST</h3>
      <p>Solide Grundlagen in Embedded Systems, Regelung und angewandter Technik durch Kurse, Projekte und internationale Wettbewerbe.</p>
      <p><a href="{{ '/de/projects/#wall-traversing-robot' | relative_url }}">Projekt ansehen</a></p>
    </article>
  </div>
</section>

<section class="section-panel">
  <div class="section-heading">
    <p class="eyebrow">Offentliche Arbeit</p>
    <h2>Publikation, Datensatz und Open Source</h2>
  </div>

  <div class="info-grid info-grid--three">
    <article class="info-card">
      <h3>IEEE IECON 2025</h3>
      <p>Mitautor einer Publikation zu kollaborativer Robotik, Mapping und semantischer Wahrnehmung aus der Arbeit an der TU Dortmund.</p>
      <p><a href="https://ieeexplore.ieee.org/document/11221930">IEEE Xplore</a></p>
    </article>

    <article class="info-card">
      <h3>RoboFUSE GNN Datensatz</h3>
      <p>Öffentlicher radarbasierter Graph-Datensatz aus synchronisierten Radar- und Motion-Capture-Aufnahmen für kollaborative Wahrnehmung.</p>
      <p><a href="https://www.kaggle.com/datasets/asfand59/robofuse-gnn-dataset">Kaggle Datensatz</a></p>
    </article>

    <article class="info-card">
      <h3>Open-Source ROS2 Schnittstellen</h3>
      <p>Ausgewählter Code aus der Multi-Roboter Pipeline, inklusive GNN-Inferenz und roboternaher Integration.</p>
      <p>
        <a href="https://github.com/FLW-TUDO/ROS2_GNN_Edge">ROS2_GNN_Edge</a> ·
        <a href="https://github.com/FLW-TUDO/ROS2_GNN_Robomaster">ROS2_GNN_Robomaster</a>
      </p>
    </article>
  </div>
</section>

<section class="section-panel section-panel--muted" id="contact">
  <div class="section-heading">
    <p class="eyebrow">Kontakt</p>
    <h2>Kontakt</h2>
    <p>Offen für Rollen in Robotics Software, Wahrnehmung, Embedded Integration und autonomen Systemen.</p>
  </div>

  <div class="info-grid info-grid--three">
    <article class="info-card">
      <h3>E-Mail</h3>
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
