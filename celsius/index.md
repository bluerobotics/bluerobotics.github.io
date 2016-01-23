---
layout: default
title: Celsius Temperature Sensor Documentation
order: 1
nav:
- Introduction: introduction
- - Quick Start: quick-start
- Specifications: specifications
- - Schematic: schematic
- - 2D Drawing: d-drawing
- - Specification Table: specification-table
- - DF-13 Pinout: df-13-pinout
- - 3D Model: d-model
- Installation: installation
- Example Code: example-code
- - Arduino: arduino

store-links:
- Celsius: #

manual-links:
- Bar 30 Pressure Sensor: /bar30
---

<img src="/celsius/cad/temp-sensor-4.png" class="img-responsive" style="max-width:900px" />

#Introduction

The Celsius Temperature Sensor is a high-accuracy, fast time-response subsea temperature sensor with I2C interface. It is sealed in a high-pressure bulkhead compatible with the Blue Robotics watertight enclosures or any 10mm hole.

##Quick Start

1. Download [TSYS01 Arduino Library](https://github.com/bluerobotics/BlueRobotics_TSYS01_Library).
2. Install software such as the [Example Code](#example-code) to your microcontroller.
3. Connect the DF13 or bare wires to the appropriate microcontroller pins (green: SCL, white: SDA, red: +3.3-5.5V, black: ground). That's it!

#Specifications

##Schematic

The [EagleCAD files](https://github.com/bluerobotics/Celsius-Temperature-Sensor) for the schematic and board are available on our [GitHub page.](https://github.com/bluerobotics)

[<img src="/celsius/cad/Celsius-Temperature-Sensor.png" class="img-responsive" style="max-width:300px" />](/celsius/cad/Celsius-Temperature-Sensor.png)

[Celsius-Temperature-Sensor.png](/celsius/cad/Celsius-Temperature-Sensor.png)

##2D Drawing

<img src="/celsius/cad/CELSIUS-TEMPERATURE-SENSOR-ASSEMBLY-X1.png" class="img-responsive" style="max-width:900px" />

##Specification Table

For further information please see the [TSYS01 Data Sheet.](http://meas-spec.com/downloads/TSYS01_Digital_Temperature_Sensor.pdf)

|      **Electrical**       |
| ------------- | --------- |
| **Item** | **Condition** | **Value** |
| Supply Voltage| -- | 3.3 to 5.5 volts |
| I<sup>2</sup>C Logic Voltage (SDA and SCL) | -- | 3.3 volts |
| Peak Current   | -- | 1.4 mA   |
| ------------- | --------- |

|            **Temperature**            			 |
| ------------- | ------------- | ------------- |
| **Item** | **Condition** | **Value** |
| Operating Temperature | -- | -40 to +125&deg;C |
|Storage Temperature | -- | -55 to +150&deg;C                        |
|Absolute Accuracy   | From -5 to 50&deg;C | +/- 0.1&deg;C      |
|                    | From -40 to 125&deg;C |  +/- 0.5&deg;C   |
|  **Physical**  |
| Wire Colors | Green - I<sup>2</sup>C Clock (SCL) |
|             | White - I<sup>2</sup>C Data (SDA)  |
|             | Red - Positive (3.3-5.5V) |
|             | Black - Ground          |
| ------------|-------------------------|
| Overall Length | 56.1 mm |
| Thread Size    | M10x1.5 20 mm threaded |
| Recommended Through Hole Size | 10-11 mm |
| Wrench Flats | 16 mm |
|---------------------------------------------|


##DF-13 Pinout

| 1 &Delta; |  Red - Positive (3.3-5.5V) |
| 2 |  Green - I<sup>2</sup>C Clock (SCL) |
| 3 |  White - I<sup>2</sup>C Data (SDA)  |
| 4 |  Black - Ground          |

<img src="/celsius/cad/DF-13_Pinout.png" class="img-responsive" style="max-width:900px" />

##3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Celsius Temperature Sensor**																						|
| --------------------------------------------------------------------------------------------- |
| Celsius Temperature Sensor    | [CELSIUS-TEMPERATURE-SENSOR-ASSEMBLY-X1](cad/CELSIUS-TEMPERATURE-SENSOR-ASSEMBLY-X1.zip) |
| Celsius Penetrator Nut		 | [PENETRATOR-M-NUT-10-A-R2.zip](http://www.bluerobotics.com/models/PENETRATOR-M-NUT-10-A-R2.zip)|																								|

#Installation

##Step 1: Lubricating the O-ring

Use a small amount of silicone grease on the O-ring for lubrication and place it in the groove of the Celsius Temperature Sensor. 

##Step 2: Installation

Install the Celsius Temperature Sensor into an endcap and tighten by hand or with a wrench.

#Example Code

##Arduino

This example uses the [TSYS01 Arduino Library](https://github.com/bluerobotics/TSYS01) with the connected sensor. The example reads the sensor and prints the resulting values to the serial terminal.

If you've never used Arduino before, we suggest checking out [some tutorials!](https://www.arduino.cc/en/Tutorial/HomePage)

You can find the [TSYS01 Arduino Library](https://github.com/bluerobotics/TSYS01) on our [GitHub page.](https://github.com/bluerobotics)

~~~~~~~~~~ 

#include <Wire.h>
#include "TSYS01.h"

TSYS01 sensor;

void setup() {
  Serial.begin(9600);
  Serial.println("Starting");
  
  Wire.begin();

  sensor.init();

}

void loop() {

  sensor.read();
 
  Serial.print("Temperature: ");
  Serial.print(sensor.temperature()); 
  Serial.println(" deg C");
   
  Serial.println("---");

  delay(1000);
}

~~~~~~~~~~~~~~~~
