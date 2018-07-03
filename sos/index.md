---
layout: default
title: SOS Leak Sensor Documentation
order: 1
nav:
- Introduction: introduction
- Specifications: specifications
- - Function Diagram: function-diagram
- - Specification Table: specification-table
- - Schematic: schematic
- - 2D Drawings: 2d-drawings
- - 3D Model: 3d-model
- Installation: installation
- - General: general
- - On the BlueROV2: on-the-bluerov2
- ArduSub Software Setup: ardusub-software-setup
- Arduino Example: arduino-example
- After a Leak: after-a-leak
- - Probe Tip Replacement: probe-tip-replacement


store-links:
- SOS Leak Sensor: https://www.bluerobotics.com/store/electronics/sos-leak-sensor/

manual-links:
- BlueROV2: /brov2
---

<img src="/sos/cad/sos-banner-a.PNG" class="img-responsive" style="max-width:900px"  />

# Introduction

The <em>SOS</em> Leak Sensor can detect water leaking into an improperly sealed <a href="https://www.bluerobotics.com/product-category/watertight-enclosures/">Watertight Enclosure</a> quickly and reliably, before any major damage can occur! Though we are confident in the quality of our Watertight Enclosures and a leak is unlikely, the <em>SOS</em> Leak Sensor will give you additional peace of mind that your electronics are safe. A bright red LED gives a clear indication of a leak, as well as a high signal that can be interpreted by a device of your choosing. The <a href="http://ardusub.com/">ArduSub</a> firmware for the Pixhawk supports the <em>SOS</em> Leak Sensor and through QGroundControl will give you an audio and visual warning of a leak. When the <em>SOS</em> Leak Sensor is powered it is operating, and one or more wet probes will make the board LED shine and drive the signal pin high to VCC. The probe which came into contact with water will have a significantly expanded tip, indicating at which location the leak occurred.

# Specifications

## Function Diagram

<img src="/sos/cad/function-diagram.PNG" class="img-responsive" style="max-width:800px"  />

## Specification Table


|      **Electrical**       |
| ------------- | --------- |
| Operating Voltage| 3.3-5v |
| Maximum Current Draw| 20mA |
| Output Connector | 3 pin 0.1" header |
| Input Connector | 4 x 2 pin JST-GH |
| ------------- | --------- |

|  **Physical**  |
| ------------- | --------- |
| Length | 24.6 mm | 0.97 in |
| Width | 13.3 mm | 0.52 in |
| Height (without header pins) | 5.8 mm| 0.23 in |
|----------------------|

## Schematic

The [EagleCAD files](https://github.com/bluerobotics/SOS-Leak-Sensor) for the schematic and board are available on our [GitHub page](https://github.com/bluerobotics).

[<img src="/sos/cad/sos-schematic.JPG" class="img-responsive" style="max-width:300px" />](https://github.com/bluerobotics/SOS-Leak-Sensor/raw/master/SOS-Leak-Sensor.pdf)

## 2D Drawings

### SOS Board

<img src="/sos/cad/SOS.png" class="img-responsive img-center" />

## 3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Newton Gripper**																		|
| --------------------------------------------------------------------------------------------- |
| SOS Board   | [SOS-ASM-LEAK-SENSOR-R1.zip](cad/SOS-ASM-LEAK-SENSOR-R1.zip)      |


# Installation

## General

1. Cut to size and use the included double sided foam tape to secure the <em>SOS</em> Leak Sensor board inside your vehicle's watertight enclosure.
2. Connect the 3 pin extension cable to the <em>SOS</em> Leak Sensor board and your microcontroller or computer.
3. After prepping the surface with alcohol, stick the blue <em>SOS</em> Leak Sensor probes in strategic locations throughout your vehicle's watertight enclosure, or secure them with a small zip tie.
4. Plug the white JST-GH ends of the probes into the <em>SOS</em> Leak Sensor board in any combination.

## On the BlueROV2

### Step 1: Placing the <em>SOS</em> Board

<img src="/sos/cad/sos-layout.png" class="img-responsive" style="max-width:800px"  />

Cut to size and use the included double sided foam tape to secure the <em>SOS</em> Leak Sensor board in a convenient location on your BlueROV2 electronics tray. We like to put it behind the tether interface board or Pixhawk. 

### Step 2: Running the Cable

<img src="/sos/cad/board-placement.png" class="img-responsive" style="max-width:800px"  />

Connect the 3 pin extension cable to the <em>SOS</em> Leak Sensor board and Pixhawk port AUX OUT 6, taking care to plug the cable in the right orientation with ground (black) facing the Pixhawk top.

### Step 3: Placing the Sensor Probes

<img src="/sos/cad/probe-placement.png" class="img-responsive" style="max-width:800px"  />

Prep mounting surfaces with some isopropyl alcohol, then peel off the backing and stick the blue SOS Leak Sensor probes in strategic locations (like the penentrators, flange seals, etc.) throughout your BlueROV2 electronics watertight enclosure, or secure them with a small zip tie.  Be sure to place at least one probe at the bottom of the watertight enclosure, where leaking water is likely to collect. Plug the white JST-GH ends of the probes into the SOS Leak Sensor board in any combination.

# ArduSub Software Setup

<img src="/sos/cad/sos-software.png" class="img-responsive" style="max-width:800px"  />

In the Safety tab of the QGroundControl Vehicle Setup page, select "Pixhawk Aux6" as the leak detector pin, and set the Logic when dry to "Low."

Select the Leak Failsafe Action from the dropdown menu:

* Disabled - The leak sensor is disabled.

* Warn Only (Suggested) - QGroundControl will announce an audible warning when a leak is detected.

* Enter Surface Mode - If the ROV is armed when a leak is detected, it will automatically return to the surface. A depth sensor is required for this functionality. Once activated, a surface maneuver can be aborted by switching to a different mode.

# Arduino Example

This example will work on any Arduino board that can provide 5v or 3.3v power and has a free digital pin. Simply connect the <em>SOS</em> board with jumper wires to power, ground, and a digital pin. The program will print "LEAK!" as long as a leak is detected or "Dry" as long as no leak is detected. Any digital pin on the Arduino board can be used as the `SOSPIN`.

If you've never used Arduino before, we suggest checking out [some tutorials!](https://www.arduino.cc/en/Tutorial/HomePage)

~~~~~~~~~~ cpp

#define SOSPIN 3   // SOS connected to digital pin 3

void setup()
{
  pinMode(SOSPIN, INPUT);    // sets the digital pin 3 as input
  Serial.begin(9600);       // initialize serial communication at 9600 bits per second
}

void loop()
{
  int leakState = digitalRead(SOSPIN);   // read the input pin
  if (leakState == HIGH) {              // prints "LEAK!" if input pin is high
    Serial.println("LEAK!");
  }
  else if (leakState == LOW) {       // prints "Dry" if input pin is low
    Serial.println("Dry");
  }
}
~~~~~~~~~~~~~~~~

# After a Leak

After a leak event, flatten and let the probes dry completely before re-using them. The probe tips have a limited number of uses however, and after a time the sponge will begin to degrade and must be replaced.

## Probe Tip Replacement

When a probe tip is worn and can no longer reliably function, replace the tip by pulling off the old one, and pushing on a new one. We use liquid electrical tape to secure the sponge to the probe, but urethane, rubber cement, CA glue, and even white Elmer's glue will work as well.


