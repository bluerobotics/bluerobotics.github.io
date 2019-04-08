---
layout: default
title: Lumen Light R2
order: 1
nav:
- Introduction: introduction
- Installation: installation
- - Using the Threaded Outside Holes: using-the-threaded-holes
- Daisy Chain Connection: daisy-chain-connection
- Example Code: example-code
- - Arduino: arduino

store-links:
- Lumen:  https://www.bluerobotics.com/store/electronics/lumen-light-r2/

manual-links:
- Thrusters: /thrusters
- BlueROV: /bluerov

redirect: https://bluerobotics.com/product-category/thrusters/lights/
---

<img src="/lumen-r2/cad/Lumen-R2-Banner.JPG" class="img-responsive img-center" style="max-width:600px"  />

# Introduction

<i class="fa fa-lightbulb-o fa-fw fa-2x blue"></i>
This page is the most recent _Lumen_ documentation page. If you have an older _Lumen_ Light, you may wish to refer to the archived documentation page: [_Lumen_ Light R1 (Retired July 2018)](http://docs.bluerobotics.com/lumen/).

# Installation

The _Lumen_ Light can be easily installed using the included threaded M3 mounting holes.

## Using the Threaded Holes

The two threaded holes are best used when you have access to install a screw that tightens into the holes. This applies to most ROVs. Note that the threaded holes have the same size and spacing as the thruster mounting holes so you can use a thruster mounting bracket or hole pattern.

1. Drill two holes between 3.1mm and 3.3mm (0.12-0.13") in diameter 19mm (0.75") apart on the part you wish to mount the light.

	<img src="/lumen-r2/cad/Lumen-R2-tutorial-holes.JPG" class="img-responsive img-center" style="max-width:600px" />

2. Install two M3x0.5 screws through the holes that you just drilled. We recommend 316 stainless steel screws and they should be roughly 1.5 - 3.0mm longer than the thickness of the part that you are mounting to. Optional: Apply a small dab of Medium-strength (blue) threadlocker such as Loctite 243 to the M3 screws. 

	<img src="/lumen-r2/cad/Lumen-R2-tutorial-screws.jpg" class="img-responsive img-center" style="max-width:600px" />

3.  Attach the _Lumen_ onto the screws and tighten until hand tight. Be careful to avoid over-tightening and stripping the threads.
	<img src="/lumen-r2/cad/Lumen-R2-tutorial-mounted.jpg" class="img-responsive img-center" style="max-width:600px" />


# Daisy Chain Connection

The _Lumen_ Light can be [daisy chained](https://en.wikipedia.org/wiki/Daisy_chain_%28electrical_engineering%29) using the following procedure:

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>
Use caution if you disassemble and reassemble your _Lumen_ Light. The black screws are made of aluminum and will break if over-torqued. We recommend using a torque wrench and applying no more than 20lbs of force when reassembling.

[Due to differences in internal wire connections, New Instructions COMING SOON]	

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
