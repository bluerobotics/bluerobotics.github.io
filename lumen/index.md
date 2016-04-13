---
layout: default
title: Lumen Light
order: 1
nav:
- Introduction: introduction
- - Quick Start (On/off): quick-start-onoff-with-no-pwm-signal-source
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

<img src="/lumen/cad/lumen-r2-1.png" class="img-responsive" style="max-width:900px"  />

# Introduction

The _Lumen_ Light is a sealed LED light which can supply up to 1500 lumens at depths of up to 300 meters. The *Lumen* Light can be smoothly dimmed with a servo PWM signal or simply turned on/off with a switch. Up to six lights can be daisy-chained together and controlled with a single signal, requiring only one penetration into a watertight enclosure.

## Quick Start (on/off with no PWM signal source)

1. Connect the power wires to a power source
  - Red: +10-48 volts
  - Black: Ground

2. Connect the yellow signal wire to the the power wire directly or through a switch to turn on to full brightness

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

[<img src="/lumen/cad/Lumen-Schematic.png" class="img-responsive" style="max-width:300px" />](/lumen/cad/lumen-schematic.png)

[Lumen Schematic.png](/lumen/cad/Lumen-Schematic.png)

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
| Overall Length | 64.8 mm | 2.55 in |
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

<img src="/lumen/cad/Assem-LUMEN-LIGHT-R1-2D.png" class="img-responsive" style="max-width:900px" />

### Lumen Light Mount

<img src="/lumen/cad/lumen-mount.png" class="img-responsive" style="max-width:900px" />

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

	<img src="/lumen/cad/lumen-tutorial-11.png" class="img-responsive" style="max-width:600px" />

2. Install an M3x0.5 flat-head screw in the mount. We recommend using 316 stainless steel screws.

	<img src="/lumen/cad/lumen-tutorial-12.png" class="img-responsive" style="max-width:600px" />

3. Fasten the screw to your vehicle with a nut or threaded hole. You can loosen and retighten to adjust the angle of the light.

4. Use 133 O-ring (included) to attach the _Lumen_ Light to the _Lumen_ Mount.

	<img src="/lumen/cad/lumen-tutorial-14.png" class="img-responsive" style="max-width:600px" />

## Using the Threaded Outside Holes

The two threaded holes are best used when you have access to install a screw that tightens into the holes. This applies to most ROVs. Note that the threaded holes have the same size and spacing as the thruster mounting holes so you can use a thruster mounting bracket or hole pattern.

1. Drill two holes between 3.1mm and 3.3mm in diameter 19mm apart on the part you wish to mount the light.

	<img src="/lumen/cad/lumen-tutorial-10.png" class="img-responsive" style="max-width:600px" />

2. Install two M3x0.5 screws through the holes that you just drilled. We recommend 316 stainless steel screws and they should be roughly 1.5 - 3.0mm longer than the thickness of the part that you are mounting to.

	<img src="/lumen/cad/lumen-tutorial-13.png" class="img-responsive" style="max-width:600px" />

3. Tighten the screws into the _Lumen_ mount. 

4. Use 133 O-ring (included) to attach the _Lumen_ Light to the _Lumen_ Mount.

	<img src="/lumen/cad/lumen-tutorial-14.png" class="img-responsive" style="max-width:600px" />

# Daisy Chain Connection

The _Lumen_ Light can be [daisy chained](https://en.wikipedia.org/wiki/Daisy_chain_%28electrical_engineering%29) using the following procedure:

1. Measure the distance between where you want to mount the two lights, as you plan on routing the cable between them, then cut cable to length from one _Lumen_ Light. We recommend leaving several inches excess.

2. [Strip approximately 50 mm of jacket](http://docs.bluerobotics.com/tutorials/cable-stripping/) from the wire you just cut, then strip and tin 2-4mm of conductor insulation from each conductor.

	<img src="/lumen/cad/lumen-wire-annotated.png" class="img-responsive" style="max-width:700px" />
	
3. Twist the wires together and install into the blue penetrator. 

	<img src="/lumen/cad/lumen-tutorial-16.png" class="img-responsive" style="max-width:700px" />
		
4. Apply marine epoxy to the conductor jackets when the cable jacket is approximately even with the top of the penetrator.

	<img src="/lumen/cad/lumen-tutorial-1.png" class="img-responsive" style="max-width:700px" />

5. Insert the cable the rest of the way into the penetrator, and twist back and forth to maximize the area the epoxy covers.

	<img src="/lumen/cad/lumen-tutorial-2.png" class="img-responsive" style="max-width:700px" />
	_This is what the top should look like_
	
	<img src="/lumen/cad/lumen-tutorial-3.png" class="img-responsive" style="max-width:700px" />
	_This is what the bottom should look like_

6. Set cable flat on a sturdy surface and allow the marine epoxy approximately 2 hours to dry.
	
7. Fill the penetrator hole with the epoxy. Move the cable from side to side within the hole to ensure the epoxy is filling any gaps. Use a vice or other method to hold the penetrator upright while the epoxy cures.

	<img src="/lumen/cad/lumen-tutorial-4.png" class="img-responsive" style="max-width:700px" />

8. Allow 24 hours for the marine epoxy to fully cure
	
9. Remove blank penetrator from the flange cap of the _Lumen_ that you have not been working on.	

	<img src="/lumen/cad/lumen-tutorial-5.png" class="img-responsive" style="max-width:700px" />
	
10. Remove the aluminum flange cap from the back of the _Lumen_ that you just removed the blank penetrator from.

	<img src="/lumen/cad/lumen-tutorial-6.png" class="img-responsive" style="max-width:700px" />
	
11. Apply a thin coating of silicone grease to a 010 O-ring (included), install O-ring on penetrator, and then tighten the penetrator to the flange cap where the blank penetrator used to be. Tighten using a wrench to ensure the penetrator is tight.

	<img src="/lumen/cad/lumen-tutorial-15.png" class="img-responsive" style="max-width:700px" />

12. Solder the wires to "daisy chain pads" on the _Lumen_ Light PCB.
	- Black: GND
	- Red: VIN
	- Yellow: PWM

	<img src="/lumen/cad/Lumen-soldering.png" class="img-responsive" style="max-width:700px" />	
	
13. Reinstall aluminum flange cap on the light, and that's it!

	<img src="/lumen/cad/lumen-tutorial-9.png" class="img-responsive" style="max-width:700px" />	

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
