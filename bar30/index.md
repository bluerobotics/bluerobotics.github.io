---
layout: default
title: Bar 30 Pressure Sensor Documentation
order: 1
nav:
- Introduction: introduction
- - Safety: safety
- - Quick Start: quick-start
- Specifications: specifications
- - Schematic: schematic
- - 2D Drawing: d-drawing
- - Specification Table: specification-table
- - 3D Model: d-model
- Installation: installation
- Example Code: example-code
- - Arduino: arduino

store-links:
- Bar30: #

manual-links:
- Celsius Temperature Sensor: #
---
#Picture of Bar30 Pressure Sensor

#Introduction

The Bar30 is a high resolution, water proof pressure and temperature sensor which comes in a Blue Robotics penetrator which provides a waterproof, high-pressure seal for your enclosure.

##Safety 

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with electricity, especially in water, always practice caution. Always ensure that connections are secure and watertight. Keep your body away from spinning motors and propellers.

##Quick Start

1. Download [MS5837 Arduino Library](https://github.com/bluerobotics/BlueRobotics_MS5837_Library).
2. Install software such as the [Example Code](#example-code) to your microcontroller.
3. Connect the DF13 or bare wires to the appropriate microcontroller pins [green-SCL, white-SDA, red-positive(2.5-5.5V), black ground]. That's it!

#Specifications

##Schematic

The [EagleCAD files](https://github.com/bluerobotics/Bar30-Pressure-Sensor) for the schematic and board are available on our [GitHub page.](https://github.com/bluerobotics)

[<img src="/assets/images/BAR30 Schematic.png" class="img-responsive" style="max-width:300px" />](/assets/images/BAR30 Schematic.png)

[Bar30 Schematic.png](/assets/images/BAR30 Schematic.png)

##2D Drawing

<img src="/assets/images/BAR30-2view.png" class="img-responsive" style="max-width:900px" />

##Specification Table

For further information please see the [MS5837-30BA Data Sheet.](http://meas-spec.com/downloads/MS5837-30BA.pdf)

|      **Electrical**       |
| ------------- | --------- |
| **Item** | **Condition** | **Value** |
| Supply Voltage| -- | 2.5-5.5 volts |
| Standby Supply Current | at 25&deg;C | 30 &mu;A |
| Peak Current   | -- | 1.25 mA   |
| ------------- | --------- |
|                **Pressure**                  		 |
| ------------- | ---------------------------------- |
| **Item** | **Condition** | **Value** |
| Overpressure | -- | 50 bar |
|Operating Pressure| -- |0-30 bar [up to 1000 ft (300 m) in water]|
|Absolute Accuracy  (0-40&deg;C) | From 0-6 bar | +/- 50 mbar 			 |
|  				   | From 0-20 bar | +/- 100 mbar 			 |
|				   | From 0-30 bar | +/- 200 mbar      	 |
|Absolute Accuracy (-25-85&deg;C)| From 0-6 bar | +/- 100 mbar 			 |
|  				   | From 0-20 bar | +/- 200 mbar 			 |
|				   | From 0-30 bar | +/- 400 mbar      	 |
| ---------------- | ------------------------------- |
|            **Temperature**            			 |
| ------------- | ------------- | ------------- |
| **Item** | **Condition** | **Value** |
| Operating Temperature | -- | -20 to +85&deg;C |
|Storage Temperature | -- | -40 to +85&deg;C                        |
|Absolute Accuracy   | From 0-10 bar at 0-60&deg;C | +/- 1.5&deg;C      |
|                    | From 0-30 bar at -20-85&deg;C |  +/- 4.0&deg;C   |
|  **Physical**  |
| Wire Colors | Green - I<sup>2</sup>C Clock (SCL) |
|             | White - I<sup>2</sup>C Data (SDA)  |
|             | Red - Positive (2.5-5.5V) |
|             | Black - Ground          |
| ------------|-------------------------|
| Overall Length | 37 mm |
| Thread Size    | M10x1.5 20 mm threaded |
| Recommended Through Hole Size | 10-11 mm |
| Wrench Flats | 16 mm |

##3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Bar 30 Pressure Sensor**																						|
| --------------------------------------------------------------------------------------------- |
| Bar30 Pressure Sensor      | [BAR30-PRESSURE-SENSOR-R1.zip](cad/BAR30-PRESSURE-SENSOR-R1.zip) |
| Bar30 Penetrator Nut		 | [PENETRATOR-M-NUT-10-A-R2.zip](http://www.bluerobotics.com/models/PENETRATOR-M-NUT-10-A-R2.zip)|																								|

#Installation

##Step 1: Lubricating the O-ring

Use a small amount of silicone grease on the O-ring for lubrication and place it in the groove of the Bar30 Pressure Sensor. 

##Step 2: Installation

Install the Bar30 Pressure Sensor into an endcap and tighten by hand or with a wrench.

#Example Code

##Arduino

This example uses the [MS5837 Library](https://github.com/bluerobotics/BlueRobotics_MS5837_Library) with the connected sensor. The example reads the sensor and prints the resulting values to the serial terminal.

If you've never used Arduino before, we suggest checking out [some tutorials!](https://www.arduino.cc/en/Tutorial/HomePage)

You can find the [MS5837 Library](https://github.com/bluerobotics/BlueRobotics_MS5837_Library) on our [GitHub page.](https://github.com/bluerobotics)

~~~~~~~~~~ cpp
#include <Wire.h>
#include "MS5837.h"

MS5837 sensor;

void setup() {
  Serial.begin(57600);
  Serial.println("Starting");
  
  Wire.begin();

  sensor.init();
  sensor.setFluidDensity(997); // kg/m^3 (997 freshwater, 1029 for seawater)
}

void loop() {

  sensor.read();

  Serial.print("Pressure: "); Serial.print(sensor.pressure()); Serial.print(" mbar");
  Serial.print("   "); Serial.print(sensor.pressure(MS5837::Pa)); Serial.println(" Pa");
  
  Serial.print("Temperature: "); Serial.print(sensor.temperature()); Serial.println(" deg C");
  
  Serial.print("Depth: "); Serial.print(sensor.depth()); Serial.println(" m");
  
  Serial.print("Altitude: "); Serial.print(sensor.altitude()); Serial.println(" m above mean sea level");
  
  Serial.println("---");

  delay(1000);
}
~~~~~~~~~~~~~~~~
