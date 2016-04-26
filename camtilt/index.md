---
layout: default
title: Camtilt 
order: 1
nav:
- Introduction: introduction
- - Quick Start 
- Specifications: specifications
- - Schematic: schematic
- - Specification Table: specification-table
- - 2D Drawings: d-drawings
- - 3D Model: d-model
- Installation: installation
- - Low-Light Analog Camera: low-light-analog-camera
- - Wide Angle Rasberry Pi Camera: wide-angle-raspberry-pi-camera
- Example Code: example-code
- - Arduino: arduino

store-links:
- Camtilt:  #
- Low-Light Analog Camera: https://www.bluerobotics.com/store/electronics/low-light-ntsc-camera/
- Wide Angle Raspberry Pi Camera: #


manual-links:
- Low-Light Analog Camera: #
- Wide Angle Raspberry Pi Camera: #
---

Headline Image

# Introduction

The Camtilt is a single axis gimbal stabilization / tilting camera mount designed to work seamlessly with our [4" Series of watertight enclosures](https://www.bluerobotics.com/store/watertight-enclosures/wte4-asm-r1/),
 the [4" series dome end cap](https://www.bluerobotics.com/store/watertight-enclosures/wte4-p-end-cap-dome-r1/), and the [4" series electronics tray](#). 

## Quick Start 



# Specifications

[Hitec Product Page - HS-5055mg](http://hitecrcd.com/products/servos/micro-and-mini-servos/digital-micro-and-mini-servos/hs-5055mg-economy-metal-gear-feather-servo/product)


## Specification Table

| **Servo Specifications** |
|               |  **Parameter**       |
| ------------- | --------- |
| **Control Signal** | Standard 3-5V Pulse Width Control |
|                | 1500 &mu;s - neutral (+/- 1&mu;s deadband) |
|                | 1100 &mu;s - 45&deg; counter-clockwise |
|                | 1900 &mu;s - 45&deg; clowckwise |
| **Speed**          | 0.20 sec/60&deg; at 4.8V |
|                | 0.17 sec/60&deg; at 6.0V |
| **Torque**         | 18.05 oz/in @ 4.8V | 1.3 kg/cm @ 4.8V |
|                | 22.2 oz/in @ 6.0V  | 1.6 kg/cm @ 6.0V |
| **Dimensions**     | 0.89" x 0.451" x 0.94" | 22.8 x 11.6 x 24mm |
| **Weight**         | 0.33oz | 9.5g |
| **Electrical Connector** | 3-pin female (0.1" pitch) |
| **Cable Length** | 7in | 178mm |
| **Idle Current @ 6.0V** | 3mA |
| **Analog Camera Specifications** |
| --------------| **Parameter** |
| Light Sensitivity | 0.0003 [lux](https://en.wikipedia.org/wiki/Lux) |
| 

## 2D Drawings

### Camtilt Analog



### Camtilt HD



## 3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Camtilt**																			|
| --------------------------------------------------------------------------------------------- |
| Camtilt Analog     |    |
| Camtilt HD   	    | 			    |

|  **Camtilt Parts for 3D Printing** |
| --------------------------------------|
| Analog Camera Mount                   | [analog-camera-mount.stl](cad/CAMTILT-RASBPI-MOUNT-X1A.STL) |
| Wide Angled Raspberry Pi Camera Mount | [pi-camera-mount.stl](cad/CAMTILT-RASBPI-MOUNT-X1A.STL)     |
| Servo Mount                           | [servo-mount.stl](cad/CAMTILT-SERVO-MOUNT-X2A.STL)

# Installation



## Low-Light Analog Camera



## Wide Angle Rasberry Pi Camera




# Example Code

## Arduino

This example uses the Arduino Servo library to control the light brightness. This provides an update rate of 50 Hz and can use any pin on the Arduino board as the "servoPin".

If you've never used Arduino before, we suggest checking out [some tutorials!](https://www.arduino.cc/en/Tutorial/HomePage)

~~~~~~~~~~ cpp
#include <Servo.h>

byte servoPin = 9;
Servo servo;

void setup() {
  servo.attach(servoPin);

  servo.writeMicroseconds(1100); // send "off" signal to Lumen light
}

void loop() {
  int signal = 1700; // Set signal value, which should be between 1100 and 1900

  servo.writeMicroseconds(signal); // Send signal to Lumen light
}
~~~~~~~~~~~~~~~~
