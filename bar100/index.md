---
layout: default
title: Bar100 Pressure Sensor Installation Guide and Sample Code
order: 1
nav:
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

redirect: https://www.bluerobotics.com/store/sensors-sonars-cameras/sensors/bar100-sensor-r1/
---

<img src="/bar100/cad/BAR100-5.png" class="img-responsive" style="max-width:900px"  />


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
