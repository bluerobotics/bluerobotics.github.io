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



## Specification Table

For further information please see the [Cree XLamp MK-R LED Data Sheet](http://www.cree.com/~/media/Files/Cree/LED%20Components%20and%20Modules/XLamp/Data%20and%20Binning/XLampMKR.pdf). The specific LED model used is MKRAWT-00-0000-0B00H4051.

|      **Electrical**       |
| ------------- | --------- |
| **Item** | **Value** |
| Supply Voltage (V<sub>in</sub>) | 7 - 48 volts |
| Full Brightness Supply Voltage (V<sub>in</sub>) | 10 - 48 volts |
| PWM Logic Voltage  | 3 - 48 volts |
| Peak Current   | 15 / V<sub>in</sub> amps  |
| ------------- | --------- |
|   **Light**    |
|--------------|--------------|
| Maximum Brightness | 1,500 lumens |
| Color Temperature | 6,200 kelvin | 
|  **Cable**  |
| Cable Diameter | 3.8 mm | 0.15 in |
| Cable Length | 1 m | 39 in |
| Cable Jacket | Black Urethane |
| Conductor Insulation | Acid-Etched FEP |
| Conductor Gauge | 20 AWG |
| Wires | Black - Ground |
| | Red - Power |
| | Yellow - Signal |
|  **Physical**  |
| ------------|-------------------------|
| Pressure Rating<sup>1</sup> | 300 m | 985 ft |
| Overall Length | 61.5 mm | 2.42 in |
| Overall Diameter   | 32 mm | 1.26 in |
| Bracket Mounting Hole Spacing | 19 mm | 0.75 in |
| Bracket Screw Size | M3 |
| Weight in Air (w/ 1m cable) | 82 g    |   2.9 oz    |
| Weight in Water (w/ 1m cable) | 32 g    |  1.1 oz   |
| Maximum Temperature when Run in Air | 55&deg; C | 130&deg; F
| Beam Angle | 135 degrees in water |
|----------------------|

[1] Pressure rating is based on design and a conservative safety factor until testing is completed.

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
