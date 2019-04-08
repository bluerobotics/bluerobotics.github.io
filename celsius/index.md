---
layout: default
title: Celsius Temperature Sensor Documentation
order: 1
nav:
- Installation: installation
- Example Code: example-code
- - Arduino: arduino

store-links:
- Celsius Temperature Sensor: https://www.bluerobotics.com/store/electronics/celsius-sensor-r1/
- Bar30 Pressure Sensor: https://www.bluerobotics.com/store/electronics/bar30-sensor-r1/
- I2C Level Converter: https://www.bluerobotics.com/store/electronics/level-converter-r1/

manual-links:
- Bar30 Pressure Sensor: /bar30
- I2C Level Converter: /level-converter

redirect: https://www.bluerobotics.com/store/sensors-sonars-cameras/sensors/celsius-sensor-r1/
---

<img src="/celsius/cad/temp-sensor-4.png" class="img-responsive" style="max-width:900px" />

# Installation

## Step 1: Lubricating the O-ring

Use a small amount of silicone grease on the O-ring for lubrication and place it in the groove of the Celsius Temperature Sensor. 

## Step 2: Installation

Install the Celsius Temperature Sensor into an endcap and tighten by hand or with a wrench.

# Example Code

## Arduino

This example uses the [TSYS01 Arduino Library](https://github.com/bluerobotics/BlueRobotics_TSYS01_Library) with the connected sensor. The example reads the sensor and prints the resulting values to the serial terminal.

Please remember to use a logic level converter, such as [this one](http://bluerobotics.com/store/electronics/level-converter-r1/), to convert Arduino 5V levels to 3.3V!

If you've never used Arduino before, we suggest checking out [some tutorials](https://www.arduino.cc/en/Tutorial/HomePage)!

You can find the [TSYS01 Arduino Library](https://github.com/bluerobotics/BlueRobotics_TSYS01_Library) on our [GitHub page.](https://github.com/bluerobotics)

~~~~~~~~~~cpp

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
