---
layout: default
title: Fathom-S Documentation
order: 1
nav:
- Introduction: introduction
- - Quick Start: quick-start
- Specifications: specifications
- - Function Diagrams: function-diagrams
- - Specification Table: specification-table
- - Schematic: schematic
- Installation: installation
- - To Pixhawk: to-pixhawk
- - To Arduino: to-arduino
- - Video Gain Adjustment: video-gain-adjustment
- Advanced: advanced
- - Arduino Programming: arduino-programming
- - Spare Twisted Pair: spare-twisted-pair
- - Connecting Relay or Switch: connecting-relay-or-switch

store-links:
- Fathom-S: https://www.bluerobotics.com/store/electronics/fathom-s-r1/
- Fathom Tether: https://www.bluerobotics.com/store/parts/cables/fathom-tether-nb-4p-26awg-r1/

manual-links:
- Fathom Tether: /fathom/
---

<img src=".png" class="img-responsive" style="max-width:900px"  />

# Introduction

The <em>Fathom-S</em> Tether Interface Boards provide a video and communication interface between your ROV and topside. Differential analog video and RS-422 communication provide a reliable, low-latency link and the flexibility to be used in many different applications.

The Fathom-S hardware is designed to be used with tether cables that have four twisted pairs, preferably similar to Cat5 cable. The design is based on the tether cable available from Blue Robotics, but will also work with standard Cat5 network cable.

The Fathom-S interface includes [DroneCode Mini compatible](https://wiki.dronecode.org/workgroup/connectors/start) connectors for easy use with the Pixhawk and other autopilot controllers and the [ArduSub Control Software](www.ardusub.com).

##Features 

* Low Latency Analog Video through NTSC or PAL (1000+ ft, 300+ m)
* Adjustable Video Gain for different tether lengths
* Full-duplex RS-422 serial connection with TTL and USB connections (up to 250 Kbps, 4000 ft, 1200 m) (3.3V logic, 5V tolerant)
* Power switch that uses a 3-50V input signal to turn on interface (and optionally the autopilot and/or a high power switch/relay)
* Onboard 5V and 12V (camera) regulated supplies
* Jumpers to enable/disable configuration options
  * Power-on through tether / power always on when batteries connected
  * Power cycle on USB RTS signal for Arduino programming
* DroneCode Mini Compatible JST-GH and DF13 connectors

## Quick Start

1. Connect tether cable to the terminal block, matching colors with the labels
2. Connect the ROV side serial port to the ROV controller (Arduino, Pixhawk, etc.)
3. Connect an analog camera to the ROV side camera input
4. Connect the topside board to an analog (NTSC/PAL) display and a computer USB port to view video and communicate through serial

# Specifications

## Function Diagrams

<a href="/fathom-s/Fathom-S-ROV-Diagram.png"><img src="/fathom-s/Fathom-S-ROV-Diagram.png" class="img-responsive img-center" style="max-width:800px" alt="Fathom-S ROV Board" /></a>

<a href="/fathom-s/Fathom-S-Topside-Diagram.png"><img src="/fathom-s/Fathom-S-Topside-Diagram.png" class="img-responsive img-center" style="max-width:800px" alt="Fathom-S Topside Board" /></a>

## Specification Table

| **Item** | **Condition** | **Value** |
| ------------- | --------- |
|      **Electrical**       |
| ------------- | --------- |
| Supply Voltage| -- | 7-20 volts |
| TTL Serial Voltage (ROV Board) | -- | 3.3 volts (5 volt tolerant) |
| TTL Serial Voltage (Topside Board) | -- | 5 volts |
| Camera Supply Voltage | Vin > 12V | 12 volts |
|                       | Vin < 12V | Vbat |
| Max 5V Load Current | Vin @ 12V | 250 mA |
|                     | Vin @ 16V | 150 mA |
| Max 12V Camera Current | Vin @ 12V | 1000 mA |
|                        | Vin @ 16V | 400 mA |
| Switched Power Voltage (SW Header) | | Vbat |
| Switched Power Current (SW Header) | | 6A |
| ------------- | --------- |
|                **Performance**                  		 |
| ------------- | ---------------------------------- |
| Max Serial Baudrate        |           | 250 Kbps |
| Max Tether Length (RS422)  |           | 1200 m   |
| Max Tether Length (Video)  |           | 300 m    |
| ---------------- | ------------------------------- |
|  **Physical**  |
| ------------- | ------------- | ------------- |
| Operating Temperature | -- | -20 to +85&deg;C |
| Storage Temperature | -- | -40 to +85&deg;C |
| DF13 UART Pinout | | [DroneCode Mini Standard](https://wiki.dronecode.org/workgroup/connectors/start#telemetry_port) (crossover rx/tx) |
| JST-GH UART Pinout | | [DroneCode Mini Standard](https://wiki.dronecode.org/workgroup/connectors/start#telemetry_port) (crossover rx/tx) |
| USB Connector Type | | USB Mini B Female |
| Dimensions (ROV Board) | | 64 x 46 mm |
| Screw Hole Spacing (ROV Board) | | 57 x 40 mm |
| Dimensions (Topside Board) | | 48 x 45 mm |
| Screw Hole Spacing (Topside Board) | | 42 x 40 mm |
| Screw Hole Diameter | | 3.3 mm |
|----------------------|

## Schematic

The [EagleCAD files](https://github.com/bluerobotics/fathom-s/) for the schematic and board are available on our [GitHub page](https://github.com/bluerobotics).

[<img src="/fathom-s/Fathom-S-Schematic.png" class="img-responsive" style="max-width:300px" />](https://github.com/bluerobotics/fathom-s/raw/master/Fathom-S-Schematic.pdf)

[Fathom-S-Schematic.pdf](https://github.com/bluerobotics/fathom-s/raw/master/Fathom-S-Schematic.pdf)

# Installation

## To Pixhawk
[Picture connected to Pixhawk + Camera + power]

## To Arduino
[Picture connected to Arduino + Camera + power]

## Video Gain Adjustment

The video gain potentiometer allows the video receiver gain to be adjusted for different tether lengths. This makes a relatively minor difference in video quality but is noticeable over widely different lengths.

<a href="/fathom-s/Fathom-S-Gain.png"><img src="/fathom-s/Fathom-S-Gain.png" class="img-responsive img-center" style="max-width:200px" alt="Fathom-S Gain Potentiometer" /></a>

The potentiometer can be adjusted for gain suitable for 10m length to 700m length.

# Advanced

## Arduino Programming

The *Fathom-S* board includes features to allow an Arduino microcontroller to be programmed through a tether. To enable that feature:

1. Install the `RTS RESET JMPR` on the topside board

2. Make sure the ROV board has a jumper installed for `TETHER PWR-SW`

3. Connect the Arduino serial port to the tether board via the `GND`, `+5V`, `RX`, and `TX` pins. Make sure the Arduino is *only* powered via the tether board. This is required so that it will reset when the tether board resets.

4. Select the appropriate serial port in the Arduino IDE and program like normal!

## Spare Twisted Pair

In some applications, an addition twisted pair may be needed from the tether for other devices. In this case, you can disconnect Pair 4 from the tether boards and use it for other applications. This will disable the power-on feature so `ALWAYS ON` jumper must be installed.

## Connecting Relay or Switch

The *Fathom-S* board includes logic to turn itself on through the tether connection. This can also be used to turn on an entire ROV by powering a relay or MOSFET switch. The `SW` pins provide a switched battery connection for this purpose.