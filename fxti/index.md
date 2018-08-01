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
- Integration Example: integration-example

store-links:
- FXTI: https://www.bluerobotics.com/store/rov/fxti-r1-rp/

manual-links:
- BlueROV2: /brov2/assembly/
---

<img src="/fxti/cad/banner-fxti.png" class="img-responsive img-center" style="max-width:800px"  />

# Introduction

The <em>FXTI</em> is a semi-rugged protective case for the Fathom-X board and interface to a connectorized Fathom Tether (Standard or Slim). FXTI inclues an ethernet to USB converter in the case, so the only connection going from the FXTI to the topside computer is a USB cable. FXTI also includes two auxiliary port locations making integration to the Water Linked Underwater GPS kit or other accessories easier.

# Specifications

## Specification Table

|  **Physical**  |
| ------------- | --------- |
| Length | 122 mm | 4.8 in |
| Width | 119 mm | 4.69 in |
| Height | 67.8 mm | 2.67 in |
| Weight (in air) | xxg | xxlbs |
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

# Installation

## Attaching the Fathom Tether connector

<img src="/fxti/cad/FXTI-Tether-Insert.jpg" class="img-responsive img-center" style="max-width:800px"  />
<img src="/fxti/cad/FXTI-Tether-Locked.jpg" class="img-responsive img-center" style="max-width:800px"  />

Insert the Binder connector from your Fathom Tether (or Spool extension cable) onto the connector bulkhead recepticle. Rotate the connector head clockwise until the connector locks in place and the GREEN LOCK symbol is in the 12 o'clock position.

## Attaching the USB Cable

<img src="/fxti/cad/.png" class="img-responsive img-center" style="max-width:800px"  />

Insert the USB Type-B connector end of the included cable into the Type-B recepticle on the oposite face of the FXTI. Connect the USB Type-A connector into a USB port on your topside computer. 

## Configuring Network Settings

<img src="/fxti/cad/Software-setup-page.png" class="img-responsive img-center" style="max-width:400px"  />

Follow the "Network Setup" instructions on the [BlueROV2 Software Setup page](http://docs.bluerobotics.com/brov2/software-setup/) for establishing a connection with your BlueROV2 to QGroundControl

# Integration Example

## Water Linked Underwater GPS / BlueROV2 Integration Kit

<img src="/fxti/cad/FXTI-WL-Integration.jpg" class="img-responsive img-center" style="max-width:800px"  />

