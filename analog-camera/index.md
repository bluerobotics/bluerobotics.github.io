---
layout: default
title: Camera Documentation
permalink: /camera/
order: 1
nav:
- Introduction: introduction
- Analog Camera Specifications: analog-camera-specifications
- - Analog Camera Specification Table: analog-camera-specification-table
- - Analog Camera 2D Drawings: analog-camera-2d-drawings
- - Analog Camera CAD Model: analog-camera-cad-model
- Analog Camera Installation: analog-camera-installation
- - To Fathom-S: to-fathom-s
- Raspberry Pi Camera Specifications: raspberry-pi-camera-specifications
- - Raspberry Pi Camera Specification Table: raspberry-pi-camera-specification-table
- - Raspberry Pi Camera 2D Drawings: raspberry-pi-camera-2d-drawings
- - Raspberry Pi Camera CAD Model: raspberry-pi-camera-cad-model
- Raspberry Pi Camera Installation: raspberry-pi-camera-installation
- Low-Light HD USB Camera Specifications: low-light-hd-usb-camera-specifications
- - Low-Light HD USB Camera Specification Table: low-light-hd-usb-camera-specification-table
- - Low-Light HD USB Camera 2D Drawings: low-light-hd-usb-camera-2d-drawings
- - Low-Light HD USB Camera CAD Model: low-light-hd-usb-camera-cad-model
- Low-Light HD USB Camera Installation: low-light-hd-usb-camera-installation
- - To Raspberry Pi: to-raspberry-pi


store-links:
- Low-Light Analog Camera: https://www.bluerobotics.com/store/electronics/low-light-ntsc-camera/
- Raspberry Pi Camera: https://www.bluerobotics.com/store/electronics/cam-rpi-wide-r1/
- Low-Light HD USB Camera: http://www.bluerobotics.com/store/electronics/cam-usb-low-light-r1/
---

<img src="/analog-camera/cam-banner.png" class="img-responsive" style="max-width:900px"  />

# Introduction

The <em>Low-Light Analog Camera</em>, <em>Raspberry Pi Camera Module v2 w/ Wide Angle Lens</em>, and the <em>Low-Light HD USB Camera</em> are extremely well suited for use in subsea applications. Each can pick up colors and maintain good quality even in very low-light situations. 



# Analog Camera Specifications

## Analog Camera Specification Table

| ----------------------- | ----------------------------- |
|               **Analog Camera**                         |
| ----------------------- | ----------------------------- |
| Camera PCB Dimensions   | 38mm x 38mm                   |
| Mounting Hole Spacing  | 33mm x 33mm                    |
| Field of View (Horizontal)|   128&deg;                  |
| Field of View (Vertical)|       96&deg;                 |
| Resolution              | 700TVL                        |
| Output                  | NTSC or PAL                   |


## Analog Camera 2D Drawings

<img src="/analog-camera/ANALOG-CAM-R1.png" class="img-responsive" style="max-width:900px" />


## Analog Camera CAD Model

| ANALOG-CAMERA-R1 | [ANALOG-CAMERA-R1.zip](/analog-camera/ANALOG-CAMERA-R1.zip) |

# Analog Camera Installation

## To Fathom-S

Plug in the camera connector to the Fathom-S making sure that that the yellow wire connects with `VID`, red with `12V`, and black with `GND`. 


# Raspberry Pi Camera Specifications

## Raspberry Pi Camera Specification Table

| ----------------------- | ----------------------------- |
|               **Raspberry Pi Camera**                   |
| ----------------------- | ----------------------------- |
| Camera PCB Dimensions   | 25mm x 23mm                   |
| Mounting Hole Spacing (2 holes)  | 21 mm                |
| Field of View (Horizontal)|   110&deg;                  |
| Field of View (Vertical)|       &deg;                 |
| Resolution              | 1080p                      |
| Connector               | Raspberry Pi CSi Connector    |

## Raspberry Pi Camera 2D Drawings

<img src="/analog-camera/RPI3-R1.png" class="img-responsive" style="max-width:900px" />

## Raspberry Pi Camera CAD Model

| Raspberry Pi Camera | [ASSEM-PI-CAM-R1.zip](/analog-camera/ASSEM-PI-CAM-R1.zip) |

# Raspberry Pi Camera Installation

There are detailed Raspberry Pi Camera installation instructions on the [Raspberry Pi Learning Resources site](https://www.raspberrypi.org/learning/getting-started-with-picamera/).

# Low-Light HD USB Camera Specifications

## Low-Light HD USB Camera Specification Table

| ----------------------- | ----------------------------- |
|               **Analog Camera**                         |
| ----------------------- | ----------------------------- |
| Camera PCB Dimensions   | 32mm x 32mm                   |
| Mounting Hole Spacing  | 28mm x 28mm                    |
| Field of View (Horizontal)|   80&deg;                   |
| Field of View (Vertical)|       64&deg;                 |
| Resolution              | 1080p                         |
| Connector               | JST-PH to USB                 |


## Low-Light HD USB Camera 2D Drawings

<img src="/analog-camera/LOW-LIGHT-HD-USB-CAMERA-R1.PNG" class="img-responsive" style="max-width:900px" />


## Low-Light HD USB Camera CAD Model

| LOW-LIGHT-HD-USB-CAMERA-R1 | [LOW-LIGHT-HD-USB-CAMERA-R1.zip](/analog-camera/LOW-LIGHT-HD-USB-CAMERA-R1.zip) |

# Low-Light HD USB Camera Installation

## To Raspberry Pi

Plug the camera cable in to the JST-PH connector on the back of the camera, and to any free USB port on the Raspberry Pi. The camera will also show up as a USB webcam on most other computers.



