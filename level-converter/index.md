---
layout: default
title: I2C Level Converter Documentation
order: 1
nav:
- Introduction: introduction
- Specifications: specifications
- - Function Diagram: function-diagram
- - Specification Table: specification-table
- - Schematic: schematic
- - 2D Drawings: 2d-drawings
- - 3D Model: 3d-model
- Usage: usage


store-links:
- I2C Level Converter: https://www.bluerobotics.com/store/electronics/level-converter-r1/
- Bar30 Pressure Sensor: https://www.bluerobotics.com/store/electronics/bar30-sensor-r1/
- Celsius Temperature Sensor: https://www.bluerobotics.com/store/electronics/celsius-sensor-r1/

manual-links:
- Bar30 Pressure Sensor: /bar30
- Celsius Temperature Sensor: /celsius 
---

<img src="/level-converter/cad/banner-converter.PNG" class="img-responsive" style="max-width:900px"  />

# Introduction

The <em>I<sup>2</sup>C Level Converter</em> allows you the run 3.3v logic sensors like the <a href="https://www.bluerobotics.com/store/electronics/bar30-sensor-r1/">Bar30</a> or <a href="https://www.bluerobotics.com/store/electronics/celsius-sensor-r1/">Celsius</a> and other accessories off of a 5v logic device like the Arduino Uno. Attempting to run the Bar30 or Celsius off of a 5v logic device without a level converter will result in improper operation, and ultimately damage the sensor. A selectable solder jumper lets you power your instrument at 3.3v or 5v, independent of the 3.3v logic level.

# Specifications

## Function Diagram

<img src="/level-converter/cad/function-diagram.PNG" class="img-responsive" style="max-width:800px" />

## Specification Table


|      **Electrical**       |
| ------------- | --------- |
| Operating Voltage| 3.3-5v |
| Maximum Current 3.3v Vout | 150mA |
| Output Connector | 4 pin 0.1" header |
| Input Connector | 4 pin 0.1" header, JST-GH, DF13 |
| ------------- | --------- |

|  **Physical**  |
| ------------- | --------- |
| Length | 34 mm | 1.33 in |
| Width | 11.6 mm | 0.46 in |
| Height (without header pins) | 6.5 mm| 0.25 in |
|----------------------|

## Schematic

The [EagleCAD files](https://github.com/bluerobotics/I2C-Level-Converter) for the schematic and board are available on our [GitHub page](https://github.com/bluerobotics).

[<img src="/level-converter/cad/level-converter-schematic.JPG" class="img-responsive" style="max-width:300px" />](https://github.com/bluerobotics/I2C-Level-Converter/raw/master/I2C-Level-Converter.pdf)

## 2D Drawings

<img src="/level-converter/cad/I2C.png" class="img-responsive img-center" />

## 3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**I<sup>2</sup>C Level Converter**																		|
| --------------------------------------------------------------------------------------------- |
| <em>I<sup>2</sup>C Level Converter</em>  | [LEVEL-CONVERTER-ASM-I2C-LEVEL-CONVERTER-R1.zip](level-converter/cad/LEVEL-CONVERTER-ASM-I2C-LEVEL-CONVERTER-R1.zip)      |

# Usage

To use the <em>I<sup>2</sup>C Level Converter</em>, first determine if your 3.3v logic instrument should be powered by 3.3v or 5v. Although they are 3.3v and 5v power tolerant, we recommend that the Bar30 and Celsius are powered by 5v for best performance. The solder jumper is set to 5v by default, but it can be switched if necessary. Plug your instrument into one of the input ports (4 pin 0.1" header, JST-GH, DF13) and your 5v device to the host device output port, and your instrument is ready to be used. 

<img src="/level-converter/cad/arduino-setup.png" class="img-responsive" style="max-width:800px"  />





