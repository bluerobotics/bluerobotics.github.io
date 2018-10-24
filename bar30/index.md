---
layout: default
title: Bar30 Pressure Sensor Documentation
order: 1
nav:
- Installation: installation
- Example Code: example-code
- - Arduino: arduino
- - Python: python

store-links:
- Bar30 Pressure Sensor: https://www.bluerobotics.com/store/electronics/bar30-sensor-r1/
- Celsius Temperature Sensor: https://www.bluerobotics.com/store/electronics/celsius-sensor-r1/
- I2C Level Converter: https://www.bluerobotics.com/store/electronics/level-converter-r1/

manual-links:
- Celsius Temperature Sensor: /celsius
- I2C Level Converter: /level-converter
---

<img src="/bar30/cad/pressure-sensor-4.png" class="img-responsive" style="max-width:900px"  />



# Installation

## Step 1: Lubricating the O-ring

Use a small amount of silicone grease on the O-ring for lubrication and place it in the groove of the Bar30 Pressure Sensor. 

## Step 2: Installation

Install the Bar30 Pressure Sensor into an endcap and tighten by hand or with a wrench.

# Example Code

## Arduino

This example uses the [BlueRobotics MS5837 Library](https://github.com/bluerobotics/BlueRobotics_MS5837_Library) with the connected sensor. The example reads the sensor and prints the resulting values to the serial terminal.

Please remember to use a logic level converter, such as [this one](http://bluerobotics.com/store/electronics/level-converter-r1/), to convert Arduino 5V levels to 3.3V!

If you've never used Arduino before, we suggest checking out [some tutorials!](https://www.arduino.cc/en/Tutorial/HomePage)

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

## Python

This example uses the [BlueRobotics MS5837 Python Library](https://github.com/bluerobotics/ms5837-python) with the sensor connected to a Raspberry Pi. The Raspberry Pi uses 3.3V logic levels on the I2C pins, so a logic level shifter is not required.

~~~~~~~~~~ cpp
import ms5837
import time

sensor = ms5837.MS5837_30BA() # Default I2C bus is 1 (Raspberry Pi 3)

# We must initialize the sensor before reading it
if not sensor.init():
        print "Sensor could not be initialized"
        exit(1)

# Print readings
while True:
        if sensor.read():
                print("P: %0.1f mbar  %0.3f psi\tT: %0.2f C  %0.2f F") % (
                sensor.pressure(), # Default is mbar (no arguments)
                sensor.pressure(ms5837.UNITS_psi), # Request psi
                sensor.temperature(), # Default is degrees C (no arguments)
                sensor.temperature(ms5837.UNITS_Farenheit)) # Request Farenheit
        else:
                print "Sensor read failed!"
                exit(1)
~~~~~~~~~~~~~~~~
