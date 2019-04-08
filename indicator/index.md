---
layout: default
title: Subsea LED Indicator Light
nav:
- Introduction: introduction
- Installation: installation
- Example Code: example-code
- - Arduino: arduino

store-links:
- Lumen:  https://www.bluerobotics.com/store/electronics/lights/indicator10-asm-r1/

manual-links:
- Lumen Light: /lumen
- BlueROV2: /brov2

redirect: https://www.bluerobotics.com/store/thrusters/indicators/indicator10-asm-r1/
---

<img src="indicator-blue-1.png" class="img-responsive" style="max-width:900px"  />

# Introduction

The Subsea LED Indicator is a simple LED light with high pressure capability! It comes in a penetrator form factor for easy installation on any of our Watertight Enclosures and it comes in four colors: white, blue, green, and red! It operates on 3-20v and each light draws up to 30mA when used at 20v. A built-in resistor makes it easy to use without any additional parts.

# Installation

To install the indicator, lightly grease the provided O-ring with silicone grease and install over the cable and bolt. Insert to a 10mm hole and tighten the nut to secure the indicator. We recommend using a penetrator wrench to ensure it's securely tightened.

# Example Code

## Arduino

This example uses the Arduino Servo library to control the light brightness. This can use any pin on the Arduino board as the "indicatorPin". Note that the dimming functionality will only work on a PWM pin.

If you've never used Arduino before, we suggest checking out [some tutorials!](https://www.arduino.cc/en/Tutorial/HomePage)

~~~~~~~~~~ cpp
byte indicatorPin = 9;

void setup() {
	// set up pin mode
  pinMode(indicatorPin,OUTPUT);
}

void loop() {
  // turn light on
  digitalWrite(indicatorPin,HIGH);

  // wait one second
  delay(1000);

  // turn light off
  digitalWrite(indicatorPin,LOW);

  // wait one second
  delay(1000);

  // turn light on, 50% power
  analogWrite(indicatorPin,127); // values from 0-255

  // wait one second
  delay(1000);
}
~~~~~~~~~~~~~~~~
