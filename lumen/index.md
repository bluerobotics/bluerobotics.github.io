---
layout: default
title: Lumen Light
order: 1
nav:
- Introduction: introduction
- - Quick Start (On/off): quick-start-on-off-with-no-pwm-signal-source
- - Quick Start (Dimming): quick-start-dimming-with-pwm-signal
- Specifications: specifications
- - Schematic: schematic
- - Specification Table: specification-table
- - 2D Drawings: d-drawings
- - 3D Model: d-model
- Installation: installation
- - Using the Center Hole: using-the-center-hole
- - Using the Threaded Outside Holes: using-the-threaded-outside-holes
- Daisy Chain Connection: daisy-chain-connection
- Example Code: example-code
- - Arduino: arduino

store-links:
- Lumen:  https://www.bluerobotics.com/store/electronics/lumen-light-r1/

manual-links:
- Thrusters: /thrusters
- BlueROV: /bluerov
---

<img src="/lumen/cad/lumen-1.png" class="img-responsive" style="max-width:900px"  />

# Introduction

The _Lumen_ Light is a sealed LED light which can supply up to 1500 lumens at depths of up to 300 meters. The *Lumen* Light can be smoothly dimmed with a servo PWM signal or simply turned on/off with a switch. Up to six lights can be daisy-chained together and controlled with a single signal, requiring only one penetration into a watertight enclosure.

## Quick Start (on/off with no PWM signal source)

1. Connect the power wires to a power source
  - Red: +10-48 volts
  - Black: Ground

2. Connect the signal wire to the the power wire directly or through a switch to turn on to full brightness

## Quick Start (dimming with PWM signal)

1. Connect the signal wire to the appropriate microcontroller pin
  - Yellow: PWM (3-48 volts)

2. Connect the power wires to a power source
  - Red: +10-48 volts
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

### Lumen Light Assembly

<img src="/lumen/cad/Assem-LUMEN-LIGHT-R1-2D.PNG" class="img-responsive" style="max-width:900px" />

### Lumen Light Mount

<img src="/lumen/cad/lumen-mount.PNG" class="img-responsive" style="max-width:900px" />

## 3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Lumen Light**																			|
| --------------------------------------------------------------------------------------------- |
| Lumen Light Assembly      | [Assem-LUMEN-LIGHT-R1.zip](cad/Assem-LUMEN-LIGHT-R1.zip)    |
| Lumen Light Mount 	    | [LUMEN-M-MOUNT.zip](cad/LUMEN-M-MOUNT-X1.zip) 				    |

# Installation

The _Lumen_ Light can be installed two different ways using the _Lumen_ Mount.

## Using the Center Hole

The center hole is best used when you can't tighten a screw into the two threaded holes. Use a flat head screw to fit in the countersink in the mount.

1. Drill one hole between 3.1mm and 3.3mm in diameter on the part that you wish to mount the light.

	<img src="/lumen/cad/lumen-tutorial-6-arrows.PNG" class="img-responsive" style="max-width:600px" />

2. Install an M3x0.5 flat-head screw in the mount. We recommend using 316 stainless steel screws.

	<img src="/lumen/cad/lumen-tutorial-5.PNG" class="img-responsive" style="max-width:600px" />

3. Fasten the screw to your vehicle with a nut or threaded hole. You can loosen and retighten to adjust the angle of the light.

4. Use 133 O-ring (included) to attach the _Lumen_ Light to the _Lumen_ Mount.

	<img src="/lumen/cad/lumen-tutorial-4.PNG" class="img-responsive" style="max-width:600px" />

## Using the Threaded Outside Holes

The two threaded holes are best used when you have access to install a screw that tightens into the holes. This applies to most ROVs including the BlueROV. Note that the threaded holes have the same size and spacing as the thruster mounting holes so you can use a thruster mounting bracket or hole pattern.

1. Drill two holes between 3.1mm and 3.3mm in diameter 19mm apart on the part you wish to mount the light.

2. Install two M3x0.5 screws through the holes that you just drilled. We recommend 316 stainless steel screws and they should be roughly 1.5 - 3.0mm longer than the thickness of the part that you are mounting to.

3. Tighten the screws into the _Lumen_ mount. 

4. Use 133 O-ring (included) to attach the _Lumen_ Light to the _Lumen_ Mount.

# Daisy Chain Connection

The _Lumen_ Light can be [daisy chained](https://en.wikipedia.org/wiki/Daisy_chain_%28electrical_engineering%29) using the following procedure:

1. Measure wire length needed from one light to the other and cut the cable, leaving several inches of excess.

2. Strip approximately 50 mm of jacket, then strip and tin 2-4mm of each individual cable. 

3. Twist the wires together and install into the blue penetrator. For further instructions, see our tutorial on [making cable penetrators](/tutorials/cable-penetrator/#video-tutorial).

	<img src="/lumen/cad/lumen-tutorial-1-arrows.PNG" class="img-responsive" style="max-width:700px" />

4. Remove the aluminum flange cap from the back of the other light.

5. Remove blank penetrator from the flange cap.

6. With a thin coating of silicon grease, install an 010 O-ring (included) on the penetrator and tighten it to the flange cap.

	<img src="/lumen/cad/lumen-tutorial-2-arrows.PNG" class="img-responsive" style="max-width:700px" />

7. Solder the wires to "daisy chain pads" on the _Lumen_ Light PCB.
	- Black: GND
	- Red: VIN
	- Yellow: PWM

	<img src="/lumen/cad/lumen-tutorial-3.PNG" class="img-responsive" style="max-width:700px" />	
	
8. Reinstall aluminum flange cap on the light.

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
