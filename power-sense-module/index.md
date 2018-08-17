---
layout: default
title: Power Sense Module
permalink: /power-sense-module/
order: 1
nav:
- Introduction: introduction
- Specifications: specifications
- - Specification Table: specification-table
- - 2D Drawings: 2d-drawings
- - 3D Model: 3d-model
- Installation: installation
- - General: general
- - On the BlueROV2: on-the-bluerov2
- ArduSub Software Setup: ardusub-software-setup


store-links:
- Power Sense Module: https://www.bluerobotics.com/store/electronics/power-sense-module/

manual-links:
- BlueROV2: /brov2
---

<img src="/power-sense-module/cad/PSM-Banner.JPG" class="img-responsive" style="max-width:900px"  />

# Introduction

The <em>Power Sense Module</em> provides analog current and voltage sensing to the Pixhawk autopilot mounted either on your BlueROV2 or custom marine robotics project. The <a href="http://ardusub.com/">ArduSub</a> firmware for the Pixhawk supports the <em>Power Sense Module</em> and through QGroundControl will give visual indications of battery level and current consumption. Unlike standard power modules for the Pixhawk, the <em>Power Sense Module</em> will NOT provide power, only sensing abilities. 

# Specifications

## Specification Table


|      **Electrical**       |
| ------------- | --------- |
| Max Voltage Input| 25.2V (6S) |
| Max Current Sensing| 150A |
| Output Connector | Non-Insulated Spades (S5-3.5SNB) |
| Input Connector | XT60 Connector |
| ------------- | --------- |

|  **Physical (Board Dimensions)**  |
| ------------- | --------- |
| Length | 16 mm | 0.63 in |
| Width | 19 mm | 0.75 in |
| Height (without header pins) | 7 mm| 0.28 in |
|----------------------|

|  **Power Pin Out**  |
| ------------- | --------- |
| Pin | Signal | Volt |
| 1 (red) | VCC | +0V |
| 2 (blk) | VCC | +0V |
| 3 (blk) | CURRENT | +3.3V |
| 4 (blk) | VOLTAGE | +3.3V |
| 5 (blk) | GND | GND |
| 6 (blk) | GND | GND |
|----------------------|

## 2D Drawings

### Power Sense Module Board

<img src="/power-sense-module/cad/PSM.png" class="img-responsive" style="max-width:900px" />

## 3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Power Sense Module**																			|
| --------------------------------------------------------------------------------------------- |
| Power Sense Module Board      | [PSM-ASM-PSM-R1.zip](cad/PSM-ASM-PSM-R1.zip)    |

# Installation

## General

1. Connect the wires with the attached spades to a power distribution board.
2. Connect the XT60 to a battery or power supply.
3. Connect the 6-position JST-GH to DF13 cable (GH plug side) into the the JST-GH socket on the Power Sense Module.
4. Connect the 6-position JST-GH to DF13 cable (DF13 plug side) into the DF13 POWER socket on the Pixhawk. 

## On the BlueROV2

### Step 1: Remove old Power Module

<img src="/power-sense-module/cad/PSM-Old-Removed.jpg" class="img-responsive" style="max-width:800px"  />

Disconnect the old Power Module spade connections (Positive and Negative) on the BlueROV2 terminal blocks. Disconnect the yellow XT60 connector. Depending on when you purchased your ROV, you may have a secondary XT60 connection that can also be disconnected. Disconnect the DF13 cable plug from the POWER port on the Pixhawk.

### Step 2: Connect the power spades

<img src="/power-sense-module/cad/PSM-Power.jpg" class="img-responsive" style="max-width:800px"  />

Connect the positive and negative power wire spades into their respective terminal blocks.

### Step 3: Connect the XT60

<img src="/power-sense-module/cad/PSM-XT60.jpg" class="img-responsive" style="max-width:800px"  />

Connect the yellow XT60 from the Power Sense Board to the XT60 power input coming from the endcap.

### Step 3: Connect the JST-GH to DF13 cable

<img src="/power-sense-module/cad/PSM-Pixhawk.jpg" class="img-responsive" style="max-width:800px"  />

Connect the 6-position JST-GH to DF13 cable (GH plug side) into the the JST-GH socket on the <em>Power Sense Module</em>. Connect the JST-GH to DF13 cable (DF13 plug side) into the DF13 POWER socket on the Pixhawk.

# ArduSub Software Setup

<img src="/power-sense-module/cad/PSM-Ardusub-Highlighted.jpg" class="img-responsive" style="max-width:800px"  />

In the Parameters tab of the QGroundControl Vehicle Setup page, select "BATT" and enter the following values:

| BATT_AMP_OFFSET | 0.330 | Amp Offset | 
| BATT_AMP_PERVOLT | 56.81818 | Amps per volt |
| BATT_VOLT_MULT | 11.000 | Voltage Multiplier |

If you have not already done so, ensure the following values are set:

| BATT_CAPACITY | 18000 | Battery capacity |
| BATT_CURR_PIN | Pixhawk | Battery Current sensing pin |
| BATT_MONITOR | Analog Voltage and Current | Battery monitoring |
| BATT_VOLT_PIN | Pixhawk | Battery Voltage sensing pin |
