---
title: "Projekte"
permalink: /de/projects/
classes: wide portfolio-page
lang: de
translation_key: projects
page_key: projects
---

<section class="section-panel">
  <div class="section-heading">
    <p class="eyebrow">Projekte</p>
    <h1>Ausgewählte Projekte und Forschungsarbeiten</h1>
    <p>Die stärksten Arbeiten hier liegen in Robotik-Wahrnehmung, Embedded Integration und Validierung unter realen Einsatzbedingungen. Wenn öffentliche Medien verfügbar sind, zeige ich echte Bilder. Bei interner Arbeit beschreibe ich den technischen Umfang und die Ergebnisse.</p>
  </div>
</section>

<section class="project-grid">
  <article class="project-card" id="ros2-cpp-perception-and-sensor-fusion-mini-stack">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <div class="project-showcase__gallery">
          <img src="{{ '/assets/images/projects/av-perception-stack-lidar-2026-04.png' | relative_url }}" alt="RViz Ansicht mit rohen und verarbeiteten KITTI LiDAR Punktwolken">
          <img src="{{ '/assets/images/projects/av-perception-stack-camera-2026-04.png' | relative_url }}" alt="KITTI Kamerabild mit Objekterkennung aus dem ROS2 Stack">
        </div>
        <figcaption>Aktuelle Bilder aus dem Stack: LiDAR-Vorverarbeitung und 3D-Hindernisse auf der einen Seite, YOLO-basierte Kamera-Erkennung auf der anderen Seite.</figcaption>
      </figure>
      <div class="project-showcase__content">
        <p class="project-kicker">Laufendes eigenes Projekt · ROS2 / Autonomes Fahren</p>
        <h2>ROS2 C++ Wahrnehmungs- und Sensorfusion Mini-Stack</h2>
        <p>Ein laufendes Portfolio-Projekt mit KITTI-Replay. Es zeigt ROS2 Paketarchitektur, moderne C++ Wahrnehmungspipelines und einen klaren Weg zur LiDAR-Kamera Fusion, ohne zu viel über komplettes autonomes Fahren zu behaupten.</p>
        <ul class="compact-list">
          <li>Eigenes <code>lidar_processing</code> Paket in ROS2/C++ für ROI-Cropping, Voxelisierung, optionale RANSAC-Bodenentfernung, Clustering, 3D-Erkennung und RViz Marker gebaut.</li>
          <li>Eigenes <code>camera_processing</code> Paket für Bildaufnahme, ONNX Runtime YOLO-Inferenz, 2D-Erkennung, Overlay-Ausgabe und Profiling mit optionalem CSV-Logging gebaut.</li>
          <li>Die Struktur so aufgebaut, dass Replay, TF, URDF, RViz und Odometry in der Infrastruktur bleiben und eigene Pakete Wahrnehmung, Visualisierung und das frühe <code>fusion_core</code> Gerüst tragen.</li>
        </ul>
        <p><strong>Stack:</strong> ROS2, C++, PCL, OpenCV, ONNX Runtime, RViz2, KITTI replay, vision_msgs.</p>
        <p class="project-links"><a href="https://github.com/Asfy59/ros2_cpp_autonomous_driving_stack/tree/main">GitHub Repository</a></p>
        <p class="project-note">Aktueller Stand: LiDAR- und Kamera-Knoten laufen und sind profiliert. Sensorfusion, getrackte Objekte und mehr Test-/CI-Abdeckung sind noch in Arbeit.</p>
      </div>
    </div>
  </article>

  <article class="project-card" id="multi-robot-semantic-obstacle-avoidance-framework">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/FLW%20%28Thesis%29/thesis/placeholder-warehouse_real.jpg' | relative_url }}" alt="Multi-Roboter Versuchsaufbau in einer Lagerumgebung">
        <figcaption>Lagerähnliches CPPS-Testfeld zur Prüfung von Wahrnehmung, Graph-Aufbau und Hindernissen für die Navigation.</figcaption>
      </figure>
      <div class="project-showcase__content">
        <p class="project-kicker">Masterarbeit · TU Dortmund</p>
        <h2>Multi-Roboter Semantische Hindernisvermeidung</h2>
        <p>Radarbasierte Wahrnehmung und Planungsintegration für die gemeinsame Behandlung von Hindernissen in einem lagerähnlichen cyber-physischen Produktionssystem.</p>
        <ul class="compact-list">
          <li>Die ROS2-Pipeline von synchroner Radaraufnahme und Graph-Aufbau bis zu GNN-Inferenz, Tracking und semantischen Nav2-Costmaps gebaut.</li>
          <li>Einen Datensatz mit mehr als 63k Radar-Frames für reproduzierbares Training und Evaluation erstellt und veröffentlicht.</li>
          <li>Die ganze Kette von Wahrnehmung bis Planung in Hardware-in-the-Loop Versuchen mit echten Robotern und Motion Capture validiert.</li>
        </ul>
        <p><strong>Stack:</strong> ROS2, PyTorch Geometric, Jetson Orin, TI IWR6843, Vicon, C++, Python.</p>
        <p class="project-links"><a href="https://www.kaggle.com/datasets/asfand59/robofuse-gnn-dataset">Kaggle Datensatz</a> · <a href="https://github.com/FLW-TUDO/ROS2_GNN_Edge">GNN Inferenz Repository</a> · <a href="https://github.com/FLW-TUDO/ROS2_GNN_Robomaster">RoboMaster ROS2 Stack</a></p>
      </div>
    </div>
  </article>

  <article class="project-card" id="mems-sensor-automation-and-i3c-validation-toolkit">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/images/projects/placeholder-bosch.jpg' | relative_url }}" alt="Illustration für Bosch Sensorvalidierung und Embedded Tools">
        <figcaption>Beispielhafter Testaufbau.</figcaption>
      </figure>
      <div class="project-showcase__content project-showcase__content--full">
        <p class="project-kicker">Praktikumsprojekt · Bosch Sensortec</p>
        <h2>MEMS Sensor Automatisierung und I3C Validierung</h2>
        <p>Embedded Validierungs-Tools zur Automatisierung von MEMS Robustheitstests, Analyzer-Steuerung und wiederverwendbarer Schnittstellenarbeit in internen Bosch-Prozessen.</p>
        <ul class="compact-list">
          <li>Eine eigenständige Python-Testplattform mit serieller Kommunikation, externen Analyzern und Funktionsgeneratoren für Störungseinspeisung entwickelt.</li>
          <li>Robustheit mit Spikes, Jitter und Rauschen gepruft, um Stabilitat und Qualitat vor dem Versand zu bewerten.</li>
          <li>Eine wiederverwendbare C I3C API für STM32 geschrieben, die mit mehreren Bosch Sensorvarianten arbeiten konnte.</li>
          <li>Die Validierungszeit um etwa 50% gesenkt. Das Tool und die API wurden danach weiter intern genutzt.</li>
        </ul>
        <p><strong>Stack:</strong> Python, C, STM32, I3C, serielle Tools.</p>
        <p class="project-note">Offentliche Details konzentrieren sich auf Architektur und Wirkung, weil Analyzer-Bilder, Laborsetups und interne Sensorartefakte nicht teilbar sind.</p>
      </div>
    </div>
  </article>

  <article class="project-card" id="autonomous-uav-vision-and-telemetry-pipeline">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/NUST%20Airworks/17-06-19%20-%20Set-4%20-228.jpg' | relative_url }}" alt="NUST AirWorks Wettbewerbsumgebung">
        <figcaption>Feldeinsatz aus der IMechE UAS Challenge mit NUST AirWorks.</figcaption>
      </figure>
      <div class="project-showcase__content">
        <p class="project-kicker">Wettbewerbssystem · NUST AirWorks</p>
        <h2>Autonome UAV Vision und Telemetrie</h2>
        <p>Embedded Vision- und Telemetrie-Workflows für Missionen auf leichten Flugplattformen unter Feld- und Wettbewerbsbedingungen.</p>
        <ul class="compact-list">
          <li>Onboard-Objekterkennung auf Jetson Nano und Raspberry Pi aufgebaut.</li>
          <li>Telemetrie und Datenlinks für den Einsatz im Feld integriert.</li>
          <li>Zum Grand Champion Erfolg des Teams beim IMechE UAS Challenge in Großbritannien beigetragen.</li>
        </ul>
        <p><strong>Stack:</strong> OpenCV, Keras, Jetson Nano, Raspberry Pi, LoRa.</p>
        <p class="project-links"><a href="{{ '/de/media/' | relative_url }}">Wettbewerbs- und Feldfotos</a></p>
      </div>
    </div>
  </article>

  <article class="project-card" id="accumulator-and-ev-subsystem-integration">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/FERN/FERN_Grad.png' | relative_url }}" alt="FERN Team und Elektrofahrzeug">
        <figcaption>Umgebung von Formula Electric Racing NUST, in der die Arbeit an Akku und Subsystemen stattfand.</figcaption>
      </figure>
      <div class="project-showcase__content">
        <p class="project-kicker">Studentisches Team · Formula Student EV</p>
        <h2>Akku- und EV-Subsystem Integration</h2>
        <p>Praktische Arbeit an Akku-Integration und elektrischer Verpackung in einem Formula Student Elektrofahrzeugprogramm.</p>
        <ul class="compact-list">
          <li>An Akku- und Subsystemarbeit unter Team-, Packaging- und Testbedingungen mitgewirkt.</li>
          <li>Mit mechanischen Teammitgliedern an Akkugehausedesign, feuerfesten Materialien, Kabelwegen und Packaging unter FSUK-Sicherheitsregeln gearbeitet.</li>
          <li>Mechanisch-elektrische Schnittstellen wie Steckerposition, Temperaturüberwachung, Ladeabschaltung, HV-Interlocks und Isolationsüberwachung bearbeitet.</li>
        </ul>
        <p class="project-links"><a href="{{ '/de/media/' | relative_url }}">Bilder vom Akku und Team</a></p>
      </div>
    </div>
  </article>

  <article class="project-card" id="uncertainty-aware-gnn-for-collaborative-robot-mapping">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/FLW%20%28Thesis%29/thesis/Overall_Architecture_Horizontal_03_compressed-1.png' | relative_url }}" alt="Übersicht der Graph Neural Network Architektur">
        <figcaption>Modellansicht des Graph Neural Networks für kollaborative Robotik und semantisches Mapping.</figcaption>
      </figure>
      <div class="project-showcase__content">
        <p class="project-kicker">Forschungsergebnis · IEEE IECON 2025</p>
        <h2>Unsicherheitsbewusstes GNN für kollaboratives Robotik-Mapping</h2>
        <p>Publikationsnahe Erweiterung der Multi-Roboter Arbeit mit Fokus auf graphbasierter semantischer Inferenz für kollaboratives Mapping bei unsicheren Sensoren.</p>
        <ul class="compact-list">
          <li>Ein funktionierendes System in ein wissenschaftliches Artefakt mit Experimenten und Modellanalyse überführt.</li>
          <li>Graphbasierte Wahrnehmung mit Fragen des kollaborativen Mappings für reale Systeme verbunden.</li>
          <li>Die Arbeit als Mitautor in einer IEEE IECON 2025 Publikation dokumentiert.</li>
        </ul>
        <p class="project-links"><a href="https://doi.org/10.1109/IECON58223.2025.11221930">DOI</a></p>
      </div>
    </div>
  </article>

  <article class="project-card" id="nerf-dataset-generation-in-carla">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/images/projects/placeholder-carla.jpg' | relative_url }}" alt="Workflow für synthetische Datensätze in CARLA">
        <figcaption>Simulations-Workflow in CARLA für Multi-View Bilder und synthetische Daten für NeRF.</figcaption>
      </figure>
      <div class="project-showcase__content project-showcase__content--full">
        <p class="project-kicker">Simulations-Workflow</p>
        <h2>NeRF Datensatz-Erzeugung in CARLA</h2>
        <p>Modularer CARLA-Workflow für strukturierte Multi-View Bilddatensätze für NeRF-Rekonstruktion und synthetische Datenexperimente in Szenen des autonomen Fahrens.</p>
        <ul class="compact-list">
          <li>Eine flexible Codebasis für Szenen-Rendering und Kamerapfade in CARLA gebaut.</li>
          <li>Der Fokus lag auf reproduzierbarer Bilderzeugung für späteres NeRF-Training statt auf einer einmaligen Demo.</li>
          <li>Die Pipeline so aufgebaut, dass sie spater auf weitere Verkehrsteilnehmer und Szenentypen erweitert werden kann.</li>
        </ul>
        <p><strong>Stack:</strong> CARLA, Python, synthetische Daten, simulationsbasierte Kamerasteuerung.</p>
      </div>
    </div>
  </article>

  <article class="project-card" id="wall-traversing-robot">
    <div class="project-showcase">
      <figure class="project-showcase__media">
        <img src="{{ '/assets/Bacheelor_FinalYearProject/CAD/1.png' | relative_url }}" alt="CAD Darstellung des Wandfahrroboters">
        <figcaption>CAD-Ansicht des Wandfahrroboters aus dem Bachelor-Abschlussprojekt.</figcaption>
      </figure>
      <div class="project-showcase__content">
        <p class="project-kicker">Bachelor Abschlussprojekt</p>
        <h2>Wandfahrroboter</h2>
        <p>Ein Inspektionsroboter für Wände und Decken mit Unterdruck-Haftung und Vier-Rad-Bewegung.</p>
        <ul class="compact-list">
          <li>Das mechanische und regelungstechnische Konzept für Klettern und Inspektion entwickelt.</li>
          <li>An CAD, Packaging der Subsysteme und Proof-of-Concept Dokumentation gearbeitet.</li>
          <li>Einen formalen Projektbericht und eine Präsentation für die Abschlussbewertung erstellt.</li>
        </ul>
        <p class="project-links"><a href="{{ '/assets/Bacheelor_FinalYearProject/DAB/DAB Report.pdf' | relative_url }}">Projektbericht</a> · <a href="{{ '/assets/Bacheelor_FinalYearProject/DAB/DAB.pptx' | relative_url }}">Präsentation</a></p>
      </div>
    </div>
  </article>
</section>
