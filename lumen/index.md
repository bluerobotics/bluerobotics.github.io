---
layout: default
title: Lumen Light
order: 1
nav:
- Introduction: introduction
- - Quick Start: quick-start
- Specifications: specifications
- - Schematic: schematic
- - Specification Table: specification-table
- - 2D Drawings: d-drawings
- - 3D Model: d-model
- Installation: installation
- Example Code: example-code
- - Arduino: arduino

store-links:
- Bar30:  https://www.bluerobotics.com/store/electronics/bar30-sensor-r1/
- Celsius: https://www.bluerobotics.com/store/electronics/celsius-sensor-r1/

manual-links:
- Celsius Temperature Sensor: /celsius
- Bar30 Pressure Sensor: /bar30
---

<img src="/bar30/cad/pressure-sensor-4.png" class="img-responsive" style="max-width:900px"  />

#Introduction

The _Lumen_ Light is a waterproof LED which can supply up to 1500 lumens at depths of up to 300 meters. 

##Quick Start

1. Connect the bare wires to the appropriate microcontroller pins.
  - Yellow: PWM (3.3 - 48 volts)
  - Red: + 9 - 48 volts
  - Black: Ground

#Specifications

##Schematic

The [EagleCAD files](https://github.com/bluerobotics/lumen) for the schematic and board are available on our [GitHub page](https://github.com/bluerobotics).

[<img src="/lumen/cad/lumen-schematic.png" class="img-responsive" style="max-width:300px" />](/lumen/cad/lumen-schematic.png)

[Lumen Schematic.png](/lumen/cad/lumen-schematic.png)

##Specification Table

For further information please see the [Cree XLamp MK-R LED Data Sheet.](http://www.cree.com/~/media/Files/Cree/LED%20Components%20and%20Modules/XLamp/Data%20and%20Binning/XLampMKR.pdf)

|      **Electrical**       |
| ------------- | --------- |
| **Item** | **Value** |
| Supply Voltage| 7 - 48 volts |
| Full Brightness Supply Voltage | 10 - 48 volts |
| PWM Logic Voltage  | 3.3 - 48 volts |
| Peak Current   | 15 / V_in amps  |
| ------------- | --------- |
|   **Light**    |
|--------------|--------------|
| Maximum Brightness | 1,500 lumens |
| Color Temperature | 6,200 kelvin | 
|  **Physical**  |
| ------------|-------------------------|
| Overall Length | 61.5 mm |
| Overall Diameter   | 32 mm |
| Recommended Through Hole Size | 10-11 mm |
| Wrench Flats | 16 mm |
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

|		**Lumen Light**																						|
| --------------------------------------------------------------------------------------------- |
| Lumen Light Assembly      | [LUMEN-LIGHT-ASSEMBLY-R1.zip](cad/LUMEN-LIGHT-ASSEMBLY-R1.zip)                                 |
| Lumen Light Mount 	    | [LUMEN-M-MOUNT.zip](cad/LUMEN-M-MOUNT-X1.zip) |  |

#Installation

##Step 1: Lubricating the O-ring

Use a small amount of silicone grease on the O-ring for lubrication and place it in the groove of the Bar30 Pressure Sensor. 

##Step 2: Installation

Install the Bar30 Pressure Sensor into an endcap and tighten by hand or with a wrench.

#Example Code

##Arduino

This example uses the [BlueRobotics Lumen Library](https://github.com/bluerobotics/BlueRobotics_MS5837_Library) with the connected sensor. The example reads the sensor and prints the resulting values to the serial terminal.

Please remember to use a logic level converter, such as [this one](https://www.sparkfun.com/products/12009), to convert Arduino 5V levels to 3.3V!

If you've never used Arduino before, we suggest checking out [some tutorials!](https://www.arduino.cc/en/Tutorial/HomePage)

You can find the [MS5837 Library](https://github.com/bluerobotics/BlueRobotics_MS5837_Library) on our [GitHub page](https://github.com/bluerobotics).

~~~~~~~~~~ cpp
#include <Wire.h>
#include "MS5837.h"

MS5837 sensor;

void setup() {
  
  Serial.begin(9600);
  
  Serial.println("Starting");
  
  Wire.begin();

  sensor.init();
  
  sensor.setFluidDensity(997); // kg/m^3 (997 freshwater, 1029 for seawater)
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
