---
layout: default
title: Fathom-X Tether Interface (FXTI) Documentation
order: 1
topnavbar: brov2
nav:
- Introduction: introduction
- Specifications: specifications
- - Specification Table: specification-table
- - 2D Drawings: 2d-drawings
- - 3D Model: 3d-model
- Usage: usage
- Installation: installation
- Integration Examples: integration-examples

store-links:
- FXTI: https://www.bluerobotics.com/store/rov/fxti-r1-rp/

manual-links:
- BlueROV2: /brov2/assembly/
---

<img src="/fxti/cad/FXTI-Banner.JPG" class="img-responsive img-center" style="max-width:600px"  />

# Introduction

The <em>FXTI</em> is a semi-rugged protective case for the Fathom-X board and interface to a connectorized Fathom Tether (Standard or Slim). _FXTI_ inclues an ethernet to USB converter in the case, so the only connection going from the _FXTI_ to the topside computer is a USB cable. _FXTI_ also includes two auxiliary port locations making integration with the _Water Linked Underwater GPS Developer Kit_ or other accessories easier.

# Specifications

## Specification Table

|  **Physical**  |
| ------------- | --------- |
| Length | 122 mm | 4.8 in |
| Width | 119 mm | 4.69 in |
| Height | 67.8 mm | 2.67 in |
| Weight (without USB cable) | 462 g | 1.02 lbs |
| Tether Connection | Binder 770 Bulkhead, solder pins |
| Computer Connection | USB Type-B Female Bulkhead Recepticle |
|----------------------|


## 2D Drawings

<img src="/fxti/cad/FXTI.png" class="img-responsive img-center" style="max-width:800px" />

## 3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Payload Skid**																						|
| --------------------------------------------------------------------------------------------- |
| FXTI Assembly  | [FXTI-ASM-FXTI-R1.zip](cad/FXTI-ASM-FXTI-R1.zip) |

# Usage

_FXTI_ has a USB-B connection on one side and a Binder 770 connector on the other. The USB connection provides power to the box and is internally connected to a USB to Ethernet adapter that is connected to a Fathom-X tether interface board. The interface board is connected to the Binder 770 connector for a clean connection to the tether.

# Installation

## Attaching the Fathom Tether connector

<img src="/fxti/cad/FXTI-Tether-Insert.jpg" class="img-responsive img-center" style="max-width:600px"  />
<img src="/fxti/cad/FXTI-Tether-Locked.jpg" class="img-responsive img-center" style="max-width:600px"  />

Insert the Binder connector from your _Fathom Tether_ (or _Spool_ extension cable) onto the connector bulkhead recepticle. Rotate the connector head clockwise until the connector locks in place and the GREEN LOCK symbol is in the 12 o'clock position.

## Attaching the USB Cable

<img src="/fxti/cad/.png" class="img-responsive img-center" style="max-width:600px"  />

Insert the USB Type-B connector end of the included cable into the Type-B recepticle on the oposite face of the _FXTI_. Connect the USB Type-A connector into a USB port on your topside computer. Once connected, the indicator lights on the top of the box should illuminate showing the “Power” and “Link” status.

## Configuring Network Settings

<img src="/fxti/cad/Software-setup-page.png" class="img-responsive img-center" style="max-width:400px"  />

Follow the "Network Setup" instructions on the [BlueROV2 Software Setup page](http://docs.bluerobotics.com/brov2/software-setup/) for establishing a connection with your BlueROV2 to QGroundControl.

# Integration Examples

_FXTI_ is highly expandable allowing for reconfiguring connections within the box so that you can quickly use an extra twisted pair from the tether for the Water Linked Analog Locator or any RS485 device.

[Pololu Robotics and Electronics](https://www.pololu.com/category/70/crimp-connector-housings) carries the 3 position 0.1" (2.54mm) Crimp Connector Housings and female crimp pins that may be used for connecting your own devices to the spare tether terminations.

## Water Linked Underwater GPS / BlueROV2 Integration Kit

Below is one example  of how _FXTI_ can be used to neatly connect the Water Linked Underwater GPS / BlueROV2 Integration Kit and omit the earlier connections to a terminal block. 

<img src="/fxti/cad/FXTI-WL-Integration.jpg" class="img-responsive img-center" style="max-width:600px"  />

More examples will be coming to illustrate connecting other accessories by BlueRobotics or other manufacturers.

