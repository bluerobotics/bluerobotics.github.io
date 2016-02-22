---
layout: default
title: Lumen Light
order: 1
nav:
- Introduction: introduction
- - Quick Start: quick-start-with-no-pwm-signal-source
- - Quick Start: quick-start-with-pwm-signal
- Specifications: specifications
- - Schematic: schematic
- - Specification Table: specification-table
- - 2D Drawings: d-drawings
- - 3D Model: d-model
- Installation: installation
- - Using the Center Hole: using-the-center-hole
- - Using the Drilled and Tapped Outside Holes: using-the-drilled-and-tapped-outside-holes
- Daisy Chain: daisy-chain
- Example Code: example-code
- - Arduino: arduino

store-links:
- Bar30:  https://www.bluerobotics.com/store/electronics/bar30-sensor-r1/
- Celsius: https://www.bluerobotics.com/store/electronics/celsius-sensor-r1/

manual-links:
- Celsius Temperature Sensor: /celsius
- Bar30 Pressure Sensor: /bar30
---

<img src="/lumen/cad/lumen-1.png" class="img-responsive" style="max-width:900px"  />

# Introduction

The _Lumen_ Light is a sealed LED light which can supply up to 1500 lumens at depths of up to 300 meters. The *Lumen* Light can be smoothly dimmed with a servo PWM signal or simply turned on/off with a switch. Up to six lights can be daisy-chained together to be controlled with a single signal, requiring only one penetration into a watertight enclosure.

## Quick Start (with no PWM signal source)

1. Connect the power wires to a power source
  - Red: + 10 - 48 volts
  - Black: Ground

2. Connect the signal wire to the the power wire directly or through a switch to turn on to full brightness

## Quick Start (with PWM signal)

1. Connect the signal wire to the appropriate microcontroller pin
  - Yellow: PWM (3 - 48 volts)

2. Connect the power wires to a power source
  - Red: + 10 - 48 volts
  - Black: Ground

3. Provide a servo PWM pulse from 1100 &mu;s (off) to 1900 &mu;s (brightest) 

# Specifications

## Schematic

The [EagleCAD files](https://github.com/bluerobotics/lumen) for the schematic and board are available on our [GitHub page](https://github.com/bluerobotics).

[<img src="/lumen/cad/lumen-schematic.png" class="img-responsive" style="max-width:300px" />](/lumen/cad/lumen-schematic.png)

[Lumen Schematic.png](/lumen/cad/lumen-schematic.png)

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
|  **Physical**  |
| ------------|-------------------------|
| Overall Length | 61.5 mm | 2.42 in |
| Overall Diameter   | 32 mm | 1.26 in |
| Bracket Mounting Hole Spacing | 19 mm | 0.75 in |
| Bracket Screw Size | M3 |
|----------------------|


##2D Drawings

###Lumen Light Assembly

<img src="/lumen/cad/lumen-light-R1.PNG" class="img-responsive" style="max-width:900px" />

###Lumen Light Mount

<img src="/lumen/cad/lumen-mount.PNG" class="img-responsive" style="max-width:900px" />

##3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Lumen Light**																			|
| --------------------------------------------------------------------------------------------- |
| Lumen Light Assembly      | [LUMEN-LIGHT-ASSEMBLY-R1.zip](cad/LUMEN-LIGHT-ASSEMBLY-R1.zip)    |
| Lumen Light Mount 	    | [LUMEN-M-MOUNT.zip](cad/LUMEN-M-MOUNT-X1.zip) 				    |

#Installation

The _Lumen_ Light can be installed two different ways using the _Lumen_ Mount.

## Using the Center Hole

1. Drill one hole between 3.15mm and 3.3mm in diameter on the part that you wish to mount the light.

2. Install an M3X0.5 316 stainless steel flat-head socket cap screw through the countersunk hole in the center of the _Lumen_ Mount.

3. Pass the M3X0.5 screw throught the hole in your part and attach using a 316 stainless steel lock-nut.

## Using the Drilled and Tapped Outside Holes

1. Drill two holes between 3.15mm and 3.30mm in diameter 19mm apart on the part you wish to mount the light.

2. Pass two M3X0.5 316 stainless steel screws through the holes that you just drilled.

	-Note: the screws should be between 1.5 - 3.0mm longer than the thickness of the part that you are mounting to.

3. Thread the screws into the _Lumen_ Mounts 

#Daisy Chain

The _Lumen_ Light can be daisy chained using the following procedure:

1. Make a daisy chain penetrator cable with penetrators on both ends and approximately 50mm of wire sticking out of the penetrator. For further instructions, see our tutorial on [making cable penetrators](/tutorials/cable-penetrator/#video-tutorial).

2. Remove aluminum flange cap from the back of both _Lumen_ Lights that you wish to daisy chain.

3. Remove blank penetrator from both _Lumen_ Lights.

4. Install 010 O-rings on both penetrators on daisy chain cable.

5. Install daisy chain penetrators on both _Lumen_ Lights where the blank penetrator was. 

6. Fully tighten daisy chain penetrator on both _Lumen_ Lights.

7. Solder wires to _Lumen_ Light PCB.
	-Black: GND
	-Red: VIN
	-Yellow: PWM
	
8. Reinstall aluminum flange cap on both _Lumen_ Lights.

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
