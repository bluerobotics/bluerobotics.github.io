---
layout: default
title: Camera Tilt System
order: 1
nav:
- Introduction: introduction
- - Quick Start 
- Specifications: specifications
- - Specification Table: specification-table
- - 2D Drawings: 2d-drawings
- - 3D Model: 3d-model
- - 3D Printer Settings: 3d-printer-settings
- Assembly: assembly
- - Low-Light HD USB Camera: low-light-hd-usb-camera
- - Raspberry Pi Camera: raspberry-pi-camera
- - Low-Light Analog Camera: low-light-analog-camera
- Example Code: example-code
- - Arduino: arduino

store-links:
- Camera Tilt System:  https://bluerobotics.com/store/watertight-enclosures/4-series/camera-tilt-mount/#mount
- Low-Light HD USB Camera: https://bluerobotics.com/store/electronics/cam-usb-low-light-r1/
- Low-Light Analog Camera: https://www.bluerobotics.com/store/electronics/low-light-ntsc-camera/
- Raspberry Pi Camera w/ Wide Angle Lens: https://www.bluerobotics.com/store/electronics/cam-rpi-wide-r1/
- Electronics Tray: https://www.bluerobotics.com/store/watertight-enclosures/4-series/electronics-tray-2/


manual-links:
- Watertight Enclosures: /watertight-enclosures/ 
- Electronics Tray: /etray
---

<img src="/camtilt/cad/camtilt-headline-pic3.png" class="img-responsive img-center" style="max-width:600px"  />

# Introduction

The _Camera Tilt System_ is a tilting camera mount which works seamlessly with the [Watertight Enclosure for ROV/AUV (4" Series)](https://www.bluerobotics.com/store/watertight-enclosures/wte4-asm-r1/) and the [Electronics Tray (4" Series)](https://www.bluerobotics.com/store/watertight-enclosures/4-series/electronics-tray-2). The tilting servo is the high-quality digital HS-5055MG servo with metal gears. The camera mounts are compatible with our [Low-Light HD USB Camera](https://bluerobotics.com/store/electronics/cam-usb-low-light-r1/), [Raspberry Pi Camera w/ Wide Angle Lens](https://www.bluerobotics.com/store/electronics/cam-rpi-wide-r1/), and our [Low-Light Analog Camera](https://www.bluerobotics.com/store/electronics/low-light-ntsc-camera/). We have also made the 3D CAD files freely available so that you can modify them to fit your camera or servo! 

# Specifications

[Hitec Product Page - HS-5055mg](http://hitecrcd.com/products/servos/micro-and-mini-servos/digital-micro-and-mini-servos/hs-5055mg-economy-metal-gear-feather-servo/product)


## Specification Table

| **Servo Specifications** |
|               |  **Parameter**       |
| ------------- | --------- |
| **Control Signal**       | Standard 3-5V Pulse Width Control          |
|                          | 1500 &mu;s - neutral (+/- 1&mu;s deadband) |
|                          | 1100 &mu;s - 45&deg; counter-clockwise     |
|                          | 1900 &mu;s - 45&deg; clockwise            |
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

<img src="/camtilt/cad/CAMTILT-SERVO-MOUNT-R1.png" class="img-responsive img-center" style="max-width:600px"  />

### HD USB Camera Mount

[COMING SOON]

### Analog Camera Mount

<img src="/camtilt/cad/CAMTILT-ANALOG-MOUNT-R1.png" class="img-responsive img-center" style="max-width:600px"  />

### Raspberry Pi Camera Mount

<img src="/camtilt/cad/CAMTILT-RASBPI2-CAMERA-MOUNT-R1.png" class="img-responsive img-center" style="max-width:600px"  />

## 3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Camtilt 3D Files**															                      |
| ----------------------------------------------------------------------------------------------------------- |
| Servo Mount                          | [CAMTILT-SERVO-MOUNT-R3.zip](cad/CAMTILT-P-SERVO-MOUNT-R3.zip)       |
| Servo - HS-5055MG                    | [HS-5055MG Servo](cad/HS-5055MG.zip) |
| Analog Camera Mount   	           | [CAMTILT-ANALOG-MOUNT-R2.zip](cad/CAMTILT-ANALOG-MOUNT-R2.zip)	      |
| Wide Angle Raspberry Pi Camera Mount | [CAMTILT-RASPI2-CAMERA-MOUNT-R1.zip](cad/CAMTILT-RASPI2-CAMERA-MOUNT-R1.zip) |
| Low Light HD USB Camera Mount | [CAMTILT-LOW-LIGHT-HD-USB-R7.zip](cad/CAMTILT-P-LOW-LIGHT-HD-USB-R7.zip) |

## 3D Printer Settings

Here are the printer settings that we used with a Lulzbot Taz 5 3D printer and Simplify3D slicing software.

[CAMTILT-PRINTER-SETTINGS-R1.fff](cad/CAMTILT-PRINTER-SETTINGS-R1.fff)

# Assembly

## Required tools

- \#000 Phillips Screwdriver (or similar small size)
- 1.5 mm Hex Driver
- Wire Cutters

## Low-Light HD USB Camera

1. Attach the servo mount to the front tray of the _Electronics Tray_ using 2 of the M2x8 screws.

	<img src="/camtilt/cad/HD-cam-base.jpg" class="img-responsive img-center" style="max-width:600px"  />

2. Open the servo box and remove the servo arm that comes installed on the servo using a #000 Philips screwdriver. Place the screw that held on that servo arm in a safe place.

	<img src="/camtilt/cad/servo-arm-removal.png" class="img-responsive img-center" style="max-width:600px"  />

3. Install the servo on the servo mount using 2 of the M2x8 screws. 

	<img src="/camtilt/cad/HD-cam-servo-mounted.jpg" class="img-responsive img-center" style="max-width:600px"  />
	
4. Install the camera mount onto the servo 
	
	a. Place the servo arm back on the servo horizontally and then rotate it as far counter-clockwise as possible.

	<div class="row">
	<div class="col-sm-6">
		<img src="/camtilt/cad/HD-cam-dome-mounted.jpg" class="img-responsive img-center" style="max-width:300px"  />
	</div>
	<div class="col-sm-6">
		<img src="/camtilt/cad/HD-cam-dome-rotated.jpg" class="img-responsive img-center" style="max-width:300px"  />
	</div>
        </div>

	b. If the camera mount is now approximately vertical, reinstall the servo arm screw. If it is not vertical, remove it and place it as near vertical as possible then reinstall the servo arm screw.

5. Attach the camera to the camera mount using four M2x8 screws.

	<img src="/camtilt/cad/HD-cam-camera-secured.jpg" class="img-responsive img-center" style="max-width:600px"  />

## Raspberry Pi Camera

1. Attach the servo mount to the front tray of the _Electronics Tray_ using 2 of the M2x8 screws.

	<img src="/camtilt/cad/servo-mount-attached.png" class="img-responsive img-center" style="max-width:600px"  />

2. Open the servo box and remove the servo arm that comes installed on the servo using a #000 Philips screwdriver. Place the screw that held on that servo arm in a safe place.

	<img src="/camtilt/cad/servo-arm-removal.png" class="img-responsive img-center" style="max-width:600px"  />

3. Install the servo on the servo mount using 2 of the M2x8 screws. 

	<img src="/camtilt/cad/servo-installed-empty.png" class="img-responsive img-center" style="max-width:600px"  />
	
4. Install the servo arm onto the servo 
	
	a. Grab the servo arm shown below from the bag that came in the servo box.

	<img src="/camtilt/cad/servo-arm.png" class="img-responsive img-center" style="max-width:500px"  />

	b. Trim off the ends of the servo arm so that only one screw hole remains on both sides.

	<img src="/camtilt/cad/servo-arm-cut.png" class="img-responsive img-center" style="max-width:500px"  />

	c. Place the servo arm back on the servo horizontally and then rotate it as far clockwise as possible.

	<img src="/camtilt/cad/servo-arm-install.png" class="img-responsive img-center" style="max-width:600px"  />

	d. If the servo arm is now approximately vertical, reinstall the servo arm screw. If it is not vertical, remove it and place it as near vertical as possible then reinstall the servo arm screw.

	<img src="/camtilt/cad/servo-arm-cut-installed.png" class="img-responsive img-center" style="max-width:600px"  />

5. Install the camera mount onto the servo arm using the self-tapping screws that came in the servo box. Keep the servo arm in the vertical position from the last step and have the orientation match the picture below.

	<img src="/camtilt/cad/pi-cam-mount-installed.png" class="img-responsive img-center" style="max-width:600px"  />

6. Trim the threads that stick out of the back of the camera mount. Be sure to wear safety glasses. Trim the top screw first then rotate the mount so the bottom screw is on top, then trim the second screw.

	<img src="/camtilt/cad/annotated-pi-cam-cutting-screws.png" class="img-responsive img-center" style="max-width:600px"  />

7. Attach the camera to the camera mount using M2x8 screws.

	<img src="/camtilt/cad/pi-cam-installed-back.png" class="img-responsive img-center" style="max-width:600px"  />

## Low-Light Analog Camera

1. Attach the servo mount to the front tray of the _Electronics Tray_ using 2 of the M2x8 screws.

	<img src="/camtilt/cad/servo-mount-attached.png" class="img-responsive img-center" style="max-width:600px"  />

2. Open the servo box and remove the servo arm that comes installed on the servo using a #000 Philips screwdriver. Place the screw that held on that servo arm in a safe place.

	<img src="/camtilt/cad/servo-arm-removal.png" class="img-responsive img-center" style="max-width:600px"  />

3. Install the servo on the servo mount using 2 of the M2x8 screws. 

	<img src="/camtilt/cad/servo-installed-empty.png" class="img-responsive img-center" style="max-width:600px"  />

4. Install the servo arm onto the servo 
	
	a. Grab the servo arm shown below from the bag that came in the servo box.

	<img src="/camtilt/cad/servo-arm.png" class="img-responsive img-center" style="max-width:500px"  />

	b. Trim off the ends of the servo arm so that only one screw hole remains on both sides.

	<img src="/camtilt/cad/servo-arm-cut.png" class="img-responsive img-center" style="max-width:500px"  />

	c. Place the servo arm back on the servo horizontally and then rotate it as far clockwise as possible.

	<img src="/camtilt/cad/servo-arm-install.png" class="img-responsive img-center" style="max-width:600px"  />

	d. If the servo arm is now approximately vertical, reinstall the servo arm screw. If it is not vertical, remove it and place it as near vertical as possible then reinstall the servo arm screw.

	<img src="/camtilt/cad/servo-arm-cut-installed.png" class="img-responsive img-center" style="max-width:600px"  />

5. Install the camera mount onto the servo arm using the self-tapping screws that came in the servo box. Keep the servo arm in the vertical position from the last step and have the orientation match the picture below.

	<img src="/camtilt/cad/analog-cam-mount.png" class="img-responsive img-center" style="max-width:600px"  />

6. Trim the threads that stick out of the back of the camera mount. Be sure to wear safety glasses. Trim the top screw first then rotate the mount so the bottom screw is on top, then trim the second screw.

	<img src="/camtilt/cad/annotated-analog-cam-screw-removal.png" class="img-responsive img-center" style="max-width:600px"  />

7. Attach the camera to the camera mount using M2x8 screws. The screw on the lens holder should be on the top side.

	<img src="/camtilt/cad/analog-cam-back.png" class="img-responsive img-center" style="max-width:600px"  />

	<img src="/camtilt/cad/analog-cam-front.png" class="img-responsive img-center" style="max-width:600px"  />

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
