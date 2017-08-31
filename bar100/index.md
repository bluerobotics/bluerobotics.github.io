---
layout: default
title: Bar100 Pressure Sensor Documentation
order: 1
nav:
- Introduction: introduction
- - Quick Start: quick-start
- Specifications: specifications
- - Schematic: schematic
- - Specification Table: specification-table
- - DF-13 Pinout: df13-pinout
- - 2D Drawing: 2d-drawing
- - 3D Model: 3d-model
- Installation: installation
- Example Code: example-code
- - Arduino: arduino
- - Python: python

store-links:
- Bar100 Pressure Sensor: https://www.bluerobotics.com/store/electronics/bar100-sensor-r1/
- Celsius Temperature Sensor: https://www.bluerobotics.com/store/electronics/celsius-sensor-r1/
- I2C Level Converter: https://www.bluerobotics.com/store/electronics/level-converter-r1/

manual-links:
- Celsius Temperature Sensor: /celsius
- I2C Level Converter: /level-converter
---

<img src="/bar100/cad/BAR100-5.png" class="img-responsive" style="max-width:900px"  />

# Introduction

The <em>Bar100</em> is a high pressure, underwater depth and temperature sensor that comes in a Blue Robotics penetrator form factor, making it easy to install on a waterproof enclosure.

## Quick Start

1. Download [KellerLD Arduino Library](https://github.com/bluerobotics/BlueRobotics_KellerLD_Library).
2. Install software such as the [Example Code](#example-code) to your microcontroller.
3. Connect the DF13 or bare wires to the appropriate microcontroller pins, using a [logic level converter](/level-converter/#introduction) if your board has 5v logic:
  - Green: SCL (3.3v logic)
  - White: SDA (3.3v logic)
  - Red: +2.5-5.5v
  - Black: Ground

# Specifications

## Schematic

[<img src="/bar100/cad/BAR100-SCHEMATIC-R1.png" class="img-responsive" style="max-width:300px" />](/bar100/cad/BAR100-SCHEMATIC-R1.png)

[Bar100 Schematic.pdf](/bar100/cad/BAR100-SCHEMATIC-R1.pdf)

## Specification Table

For further information please see the [Keller 7LD Data Sheet.](http://www.keller-druck.com/picts/pdf/engl/4ld_9ld_e.pdf)

|      **Electrical**       |
| ------------- | --------- |
| **Item** | **Condition** | **Value** |
| Supply Voltage| -- | 2.5-5.5 volts |
| I<sup>2</sup>C Logic Voltage (SDA and SCL) | -- | 1.8 - 3.6 volts |
| Peak Current   | -- | 1.5 mA   |
| ------------- | --------- |
|                **Pressure**                  		 |
| ------------- | ---------------------------------- |
| **Item** | **Condition** | **Value** |
| Maximum Mechanical Pressure | -- | 350 bar |
|Operating Pressure| -- |0-100 bar [up to 3344 ft (1019 m) in freshwater]|
|Absolute Accuracy  (0-50&deg;C) | From 0-100 bar | +/- 500 mbar 	(5.1 m in freshwater)|
|Resolution                      | From 0-100 bar | 3 mbar  (3 cm in freshwater)|
|
| ---------------- | ------------------------------- |
|            **Temperature**            			 |
| ------------- | ------------- | ------------- |
| **Item** | **Condition** | **Value** |
| Operating Temperature | -- | -40 to +110&deg;C |
| Absolute Accuracy   | From 0-100 bar at 0-50&deg;C | +/- 2&deg;C      |
|
|  **Physical**                         |
| ------------|-------------------------|
| Overall Length | 41 mm |
| Thread Size    | M10x1.5 20 mm threaded |
| Recommended Through Hole Size | 10-11 mm |
| Wrench Flats | 16 mm |
|----------------------|

## DF13 Pinout

| 1 &Delta; |  Red - Positive (3.3-5.5V) |
| 2 |  Green - I<sup>2</sup>C Clock (SCL) |
| 3 |  White - I<sup>2</sup>C Data (SDA)  |
| 4 |  Black - Ground          |

<img src="/bar100/cad/DF-13_Pinout.png" class="img-responsive" style="max-width:900px" />

**Mating Connector:** [Hirose 4-pos DF13 on Digi-Key](http://www.digikey.com/product-detail/en/DF13-4P-1.25DSA/H2193-ND/241767)

## 2D Drawing

<img src="/assets/images/BAR100-2view.PNG" class="img-responsive" style="max-width:900px" />

## 3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Bar 100 Pressure Sensor**																						|
| --------------------------------------------------------------------------------------------- |
| Bar100 Pressure Sensor      | [BAR100-ASM-R1.zip](cad/BAR100-ASM-R1.zip) |
| Bar100 Penetrator Nut		 | [PENETRATOR-M-NUT-10-A-R2.zip](http://www.bluerobotics.com/models/PENETRATOR-M-NUT-10-A-R2.zip)|																								|

# Installation

## Step 1: Lubricating the O-ring

Use a small amount of silicone grease on the O-ring for lubrication and place it in the groove of the Bar100 Pressure Sensor. 

## Step 2: Installation

Install the Bar100 Pressure Sensor into an endcap and tighten by hand or with a wrench.

# Example Code

## Arduino

This example uses the [BlueRobotics KellerLD Library](https://github.com/bluerobotics/BlueRobotics_KellerLD_Library) with the connected sensor. The example reads the sensor and prints the resulting values to the serial terminal.

Please remember to use a logic level converter, such as [this one](http://www.bluerobotics.com/store/electronics/level-converter-r1/), to convert Arduino 5v levels to 3.3v!

If you've never used Arduino before, we suggest checking out [some tutorials!](https://www.arduino.cc/en/Tutorial/HomePage)

~~~~~~~~~~ cpp
#include <Wire.h>
#include "KellerLD.h"

KellerLD sensor;

void setup() {
  
  Serial.begin(9600);
  
  Serial.println("Starting");
  
  Wire.begin();

  sensor.init();
  sensor.setFluidDensity(997); // kg/m^3 (freshwater, 1029 for seawater)
}

void loop() {
 
  sensor.read();

  Serial.print("Pressure: "); 
  Serial.print(sensor.pressure()); 
  Serial.println(" mbar");
  
  Serial.print("Temperature: "); 
  Serial.print(sensor.temperature()); 
  Serial.println(" deg C");
  
  Serial.print("Depth: "); 
  Serial.print(sensor.depth()); 
  Serial.println(" m");
  
  Serial.print("Altitude: "); 
  Serial.print(sensor.altitude()); 
  Serial.println(" m above mean sea level");

  delay(1000);
}
~~~~~~~~~~~~~~~~

## Python

This example uses the [BlueRobotics KellerLD Python Library](https://github.com/bluerobotics/KellerLD-python) with the sensor connected to a Raspberry Pi. The Raspberry Pi uses 3.3v logic levels on the I2C pins, so a logic level shifter is not required.

~~~~~~~~~~ cpp
from kellerLD import KellerLD
import time

sensor = KellerLD()

if not sensor.init():
  print "Failed to initialize Keller LD sensor!"
  exit(1)

print "Testing Keller LD series pressure sensor"
print "Press Ctrl + C to quit"
time.sleep(3)

while True:
  try:
    sensor.read()
    print("pressure: %7.4f bar\ttemperature: %0.2f C") % (sensor.pressure(), sensor.temperature())
    time.sleep(0.2)
  except Exception as e:
    print e
~~~~~~~~~~~~~~~~
