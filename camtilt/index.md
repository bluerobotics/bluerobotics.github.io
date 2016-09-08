---
layout: default
title: Camera Tilt System
order: 1
nav:
- Introduction: introduction
- - Quick Start 
- Specifications: specifications
- - Specification Table: specification-table
- - 2D Drawings: d-drawings
- - 3D Model: d-model
- - 3D Printer Settings: d-printer-settings
- Assembly: assembly
- - Raspberry Pi Camera: raspberry-pi-camera
- - Low-Light Analog Camera: low-light-analog-camera
- Example Code: example-code
- - Arduino: arduino

store-links:
- Camera Tilt System:  https://www.bluerobotics.com/store/watertight-enclosures/4-series/camera-tilt-mount/
- Low-Light Analog Camera: https://www.bluerobotics.com/store/electronics/low-light-ntsc-camera/
- Raspberry Pi Camera w/ Wide Angle Lens: https://www.bluerobotics.com/store/electronics/cam-rpi-wide-r1/
- Electronics Tray: https://www.bluerobotics.com/store/watertight-enclosures/4-series/electronics-tray-2/


manual-links:
- Watertight Enclosures: /watertight-enclosures/ 
- Electronics Tray: /etray
---

Headline Image

# Introduction

The _Camera Tilt System_ can mount to the front of the [Electronics Tray](https://www.bluerobotics.com/store/watertight-enclosures/4-series/electronics-tray-2/) and provides a simple up/down tilt mechanism for your camera. It designed to work seamlessly with our [4" Series of watertight enclosures](https://www.bluerobotics.com/store/watertight-enclosures/wte4-asm-r1/), the [4" series dome end cap](https://www.bluerobotics.com/store/watertight-enclosures/wte4-p-end-cap-dome-r1/), and the [4" series electronics tray](#). The camtilt is designed specifically for use with our low light analog camera and raspberry pi camera, but the _Camera Tilt System_ files are all open source so that you can modify them to use a camera or servo that you already have too!  

## Quick Start 



# Specifications

[Hitec Product Page - HS-5055mg](http://hitecrcd.com/products/servos/micro-and-mini-servos/digital-micro-and-mini-servos/hs-5055mg-economy-metal-gear-feather-servo/product)


## Specification Table

| **Servo Specifications** |
|               |  **Parameter**       |
| ------------- | --------- |
| **Control Signal**       | Standard 3-5V Pulse Width Control          |
|                          | 1500 &mu;s - neutral (+/- 1&mu;s deadband) |
|                          | 1100 &mu;s - 45&deg; counter-clockwise     |
|                          | 1900 &mu;s - 45&deg; clowckwise            |
| **Speed**                | 0.20 sec/60&deg; at 4.8V                   |
|                          | 0.17 sec/60&deg; at 6.0V                   |
| **Torque**               | 18.05 oz/in @ 4.8V | 1.3 kg/cm @ 4.8V      |
|                          | 22.2 oz/in @ 6.0V  | 1.6 kg/cm @ 6.0V      |
| **Dimensions**           | 0.89" x 0.451" x 0.94" | 22.8 x 11.6 x 24mm |
| **Weight**               | 0.33oz | 9.5g |
| **Electrical Connector** | 3-pin female (0.1" pitch) |
| **Cable Length**         | 7in | 178mm |
| **Idle Current @ 6.0V**  | 3mA |


## 2D Drawings

### Servo Mount

<img src="/camtilt/cad/CAMTILT-SERVO-MOUNT-R1.png" class="img-responsive" style="max-width:900px"  />

### Analog Camera Mount

<img src="/camtilt/cad/CAMTILT-ANALOG-MOUNT-R1.png" class="img-responsive" style="max-width:900px"  />

### Raspberry Pi Camera Mount

<img src="/camtilt/cad/CAMTILT-RASBPI2-CAMERA-MOUNT-R1.png" class="img-responsive" style="max-width:900px"  />

## 3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Camtilt 3D Files**															                      |
| ----------------------------------------------------------------------------------------------------------- |
| Servo Mount                          | [CAMTILT-SERVO-MOUNT-R2.zip](cad/CAMTILT-SERVO-MOUNT-R2.zip)            |
| Analog Camera Mount   	           | [CAMTILT-ANALOG-MOUNT-R2.zip](cad/CAMTILT-ANALOG-MOUNT-R2.zip)	      |
| Wide Angle Raspberry Pi Camera Mount | [CAMTILT-RASPI2-CAMERA-MOUNT-R1.zip](cad/CAMTILT-RASPI2-CAMERA-MOUNT-R1.zip) |

## 3D Printer Settings

Here are the printer settings that we used with a Lulzbot Taz 5 and Simplify3D

[CAMTILT-PRINTER-SETTINGS-R1.fff](cad/CAMTILT-PRINTER-SETTINGS-R1.fff)

# Assembly

## Raspberry Pi Camera

1. Attach the servo mount to the front tray of the _Electronics Tray_ using 2 of the M2x8 screws.

2. Install the servo arm onto the servo 
	
	a. Remove the servo arm that comes with the servo, keep the screw that was holding the servo arm on in a safe place.

	b. Grab the servo arm shown below.

	c. Trim off the ends of the servo arm so that only one screw hole remains on both sides.

	d. Place the servo arm back on the servo and rotate it as far counterclockwise as possible.

	e. Remove the servo arm and install it on the servo so that it is as close to perpendicular to the servo body as possible using the small black screw that was holding on the original servo arm.

3. Install the camera mount onto the servo using the self-tapping screws that came in the servo box. 

4. Trim the threads that stick out of the back of the camera mount. Be sure to wear safety glasses.

5. Install the servo onto the servo mount using 2 of the M2x8 screws.

6. Attach the camera to the camera mount.


## Low-Light Analog Camera

1. Attach the servo mount to the front tray of the _Electronics Tray_ using 2 of the M2x8 screws.

2. Install the servo arm onto the servo 
	
	a. Remove the servo arm that comes with the servo, keep the screw that was holding the servo arm on in a safe place.

	b. Grab the servo arm shown below.

	c. Trim off the ends of the servo arm so that only one screw hole remains on both sides.

	d. Place the servo arm back on the servo and rotate it as far counterclockwise as possible.

	e. Remove the servo arm and install it on the servo so that it is as close to perpendicular to the servo body as possible using the small black screw that was holding on the original servo arm.

3. Install the camera mount onto the servo using the self-tapping screws that came in the servo box. 

4. Trim the threads that stick out of the back of the camera mount. Be sure to wear safety glasses.

5. Install the servo onto the servo mount.

6. Attach the camera to the camera mount.

# Example Code

## Arduino

This example uses the Arduino Servo library to control the servo. This provides an update rate of 50 Hz and can use any pin on the Arduino board as the "servoPin".

If you've never used Arduino before, we suggest checking out [some tutorials!](https://www.arduino.cc/en/Tutorial/HomePage)

~~~~~~~~~~ cpp
#include <Servo.h>

byte servoPin = 9;
Servo servo;

void setup() {
  servo.attach(servoPin);

  servo.writeMicroseconds(1500); // send "neutral" signal to the servo
}

void loop() {
  int signal = 1700; // Set signal value, which should be between 1100 and 1900

  servo.writeMicroseconds(signal); // Send signal to the servo
}
~~~~~~~~~~~~~~~~
