---
layout: default
title: SOS Leak Sensor Documentation
order: 1
nav:
- Introduction: introduction
- - Usage: usage
- Specifications: specifications
- - Function Diagram: function-diagram
- - Specification Table: specification-table
- - Schematic: schematic
- Installation on the BlueROV2: installation-on-the-bluerov2
- Ardusub Software Setup: ardusub-software-setup
- Example Code: example-code
- - Arduino: arduino

store-links:
- SOS Leak Sensor: https://www.bluerobotics.com/store/electronics/sos-set-r1/

manual-links:
- BlueROV2: /brov2
---

<img src="/sos/cad/sos-banner-a.PNG" class="img-responsive" style="max-width:900px"  />

# Introduction

The <em>SOS</em> Leak Sensor can detect water leaking into an improperly sealed <a href="https://www.bluerobotics.com/product-category/watertight-enclosures/">Watertight Enclosure</a> quickly and reliably, before any major damage can occur! Though we are confident in the quality of our Watertight Enclosures and a leak is unlikely, the <em>SOS</em> Leak Sensor will give you additional peace of mind that your electronics are safe. A bright red LED gives a clear indication of a leak, as well as a 5v signal that can be interpreted by a device of your choosing. The <a href="http://ardusub.com/">Ardusub</a> firmware for the Pixhawk supports the <em>SOS</em> Leak Sensor and through QGroundControl will give you an audio and visual warning of a leak.

## Usage

Using the <em>SOS</em> Leak Sensor 

1. Cut to size and use the included double sided foam tape to secure the <em>SOS</em> Leak Sensor board in a convenient location inside your vehicles watertight enclosure.
2. Connect the 3 pin extension cable to the <em>SOS</em> Leak Sensor board and your control board (Arduino, Raspberry Pi, Pixhawk, etc.), taking care to plug the cable in the right orientation.
3. Peel off the backing and stick the blue <em>SOS</em> Leak Sensor probes in strategic locations (like the penentrators, flange seals, etc.) throughout your vehicles watertight enclosure, or secure them with a small zip tie. Be sure to place at least one probe at the bottom of your watertight enclosure, where leaking water is likely to collect. We recommend cleaning the mouting surface with isopropyl alcohol to ensure a strong bond.
4. Plug the JST-GH ends of the probes into the <em>SOS</em> Leak Sensor board in any combination.

When the <em>SOS</em> Leak Sensor is powered it is operating, and one or more wet probes will make the board LED shine and drive the signal pin high to 5v. The probe which came into contact with water will have a significantly expanded tip, indicating at which location the leak occured. After a leak event, flatten and let the probes dry completely before re-using them. The probe tips have a limited number of uses however, and after a time the sponge will begin to degrade. When this occurs, replace the tip by pulling off the old one, and pushing on a new one. We use liquid electrical tape to secure the sponge to the probe, but urethane, rubber cement, CA glue, and even white Elmer's glue will work as well.

For specific BlueROV2 and Ardusub hardware and setup instructions, please see below.

# Specifications

## Function Diagram

<img src="/sos/cad/function-diagram.PNG/" class="img-responsive" style="max-width:800px" />

## Specification Table


|      **Electrical**       |
| ------------- | --------- |
| Operating Voltage| 5v |
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

# Installation on the BlueROV2

## Step 1: Placing the <em>SOS</em> Board

<img src="/sos/cad/sos-layout.PNG" class="img-responsive" style="max-width:800px"  />

Cut to size and use the included double sided foam tape to secure the <em>SOS</em> Leak Sensor board in a convenient location on your BlueROV2 electronics tray. We like to put it behind the tether interface board or Pixhawk. 

## Step 2: Running the Cable

<img src="/sos/cad/board-placement.png" class="img-responsive" style="max-width:800px"  />

Connect the 3 pin extension cable to the <em>SOS</em> Leak Sensor board and Pixhawk port AUX OUT 6, taking care to plug the cable in the right orientation.

## Step 3: Placing the Sensor Probes

<img src="/sos/cad/probe-placement.png" class="img-responsive" style="max-width:800px"  />

Peel off the backing and stick the blue SOS Leak Sensor probes in strategic locations (like the penentrators, flange seals, etc.) throughout your BlueROV2 electronics watertight enclosure, or secure them with a small zip tie. Clean the mounting areas first with some isoprpyl alcohol to ensure a good bond. We recommend placing the 12" probes at the bottom front and back of the electronics tray, and the 6" ones at the middle bottom of the tray.
Be sure to place at least one probe at the bottom of the watertight enclosure, where leaking water is likely to collect. Plug the JST-GH ends of the probes into the SOS Leak Sensor board in any combination.

# Ardusub Software Setup

# Example Code

## Arduino

This example will work on any Arduino board that can provide 5v power and has a free digital pin . The program will print "LEAK!" as long as a leak is detected and can use any digital pin on the Arduino board as the "SOSPin".

If you've never used Arduino before, we suggest checking out [some tutorials!](https://www.arduino.cc/en/Tutorial/HomePage)

~~~~~~~~~~ cpp

int SOSPin = 3;   // SOS connected to digital pin 3

void setup()
{
  pinMode(SOSPin, INPUT);    // sets the digital pin 3 as input
  Serial.begin(9600);       // initialize serial communication at 9600 bits per second:
}

void loop()
{
  int leakState = digitalRead(SOSPin);   // read the input pin
  if (leakState == 1) {                 // prints LEAK! if input pin is high
    Serial.println("LEAK!");
  }
}
~~~~~~~~~~~~~~~~

