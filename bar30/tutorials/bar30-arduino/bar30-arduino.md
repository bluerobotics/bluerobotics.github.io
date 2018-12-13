---
layout: default
title: Using the Bar30 with an Arduino
permalink: /bar30/bar30-arduino/
order: 1
nav:
- Introduction: introduction
- Instructions: instructions
- Troubleshooting: troubleshooting

store-links:
- Bar30 Pressure Sensor: https://www.bluerobotics.com/store/electronics/bar30-sensor-r1/
- I2C Level Converter: https://www.bluerobotics.com/store/electronics/level-converter-r1/

---
<img src="/bar30/tutorials/bar30-arduino/full-setup.jpg" class="img-responsive img-center" style="max-width:800px" />

# Introduction

The [_Bar30_](https://bluerobotics.com/store/sensors-sonars-cameras/sensors/bar30-sensor-r1/) pressure sensor is a pressure sensor designed to be used underwater at pressures up to 30 bar, or around 300 meters depth in water.  It communicates  via I<sup>2</sup>C and comes with a 4-pin DF-13 connector that is compatible with the [Pixhawk](https://bluerobotics.com/store/comm-control-power/elec-packages/pixhawk-r1-rp/) autopilot, the [_Level Converter_](https://bluerobotics.com/store/sensors-sonars-cameras/sensors/level-converter-r1/) and other microcontrollers.

Using a _Bar30_ with most Arduino (including the Uno, Mega, Micro and Nano) and other 5 V microcontrollers requires an I<sup>2</sup>C logic level converter to communicate with a 3.3 V device such as the _Bar30_.  Note that some Arduino and other microcontrollers which run at 3.3 V (including Raspberry Pis and the Pixhawk autopilot) do not require a logic level converter.  Always make sure to check what voltage your microcontroller or computer uses before wiring up a sensor.

Note that the voltages being discussed here are the _logic_ voltage levels, that is, what the I<sup>2</sup>C pins will be experiencing.  This is typically the same voltage at which the device runs, but not necessarily the voltage of the input power supply.  The _Bar30_ has a built-in 3.3 V converter for power, so it can accept power anywhere from 3.3 V to 5.5 V.  The _Level Converter_ can also be used to supply 3.3 V power from a 5 V source: in this tutorial it is assumed that your _Level Converter_ is set up to provide _either_ 3.3 V _or_ 5 V to the sensor.  It is also assumed that both sets of header pins have been soldered to the _Level Converter_.  See the _Level Converter's_ [store page](https://www.bluerobotics.com/store/electronics/level-converter-r1/#tab-learn) for details.

Most 3.3 V devices do not tolerate higher voltages, so directly connecting the pins on an Arduino Uno to a such a device may fry your device.  Some 3.3 V devices are 5 V-tolerant, meaning they will still function after being connected to 5 V logic, but they will not necessarily be able to communicate with a microcontroller with 5 V logic.

## Parts

<img src="/bar30/tutorials/bar30-arduino/parts-list.jpg" class="img-responsive img-center" style="max-width:800px" />

* 1x Arduino microcontroller (This tutorial uses an Arduino Uno)
* 1x [_Bar30_](https://bluerobotics.com/store/sensors-sonars-cameras/sensors/bar30-sensor-r1/) pressure sensor
* 1x [_Level Converter_](https://bluerobotics.com/store/sensors-sonars-cameras/sensors/level-converter-r1/)
* 4x Breadboard Jumpers: M/F

## Tools

* USB A to B cable (for connecting to your Arduino board)


# Instructions

1. Connect the _Bar30_ to the _Level Converter_ using the DF-13 connector.

    If your _Level Converter_ does not have the header pins soldered on as shown, you will need to solder them on yourself for the following step.  Please see the _Level Converter's_ [store page](https://www.bluerobotics.com/store/electronics/level-converter-r1/#tab-learn) for details.

    <img src="/bar30/tutorials/bar30-arduino/level-converter-df-13.jpg" class="img-responsive img-center" style="max-width:800px" />

2. Connect the +5V, SDA, SCL, and GND pins on the _Level Converter_ to the 5V, SDA, SCL, and GND pins on the Arduino using four jumper wires.  Make sure you are connecting to the _Level Converter_ pins on the far side from the DF-13 connector.  See the table below for the pin assignments for SDA and SCL on a few common Arduino boards.

    |     Board     | SDA | SCL |
    |---------------|:---:|:---:|
    | Arduino Uno   | A4  | A5  |
    | Arduino Mega  | 20  | 19  |

    Make sure the _Level Converter's_ +5V pin is connected to the Arduino's 5V pin and _not_ the 3.3V pin.  Although the _Bar30_ is a 3.3 V device which can be powered at either 3.3 V or 5 V, the _Level Converter_ is a 5 V device and as such requires a 5 V supply.

    <img src="/bar30/tutorials/bar30-arduino/level-converter-jumper-pins.jpg" class="img-responsive img-center" style="max-width:800px" /> <img src="/bar30/tutorials/bar30-arduino/arduino-jumper-pins.jpg" class="img-responsive img-center" style="max-width:800px" />

3. Download the BlueRobotics MS5837 Library
   - via Library Manager (Sketch-->Include Library-->Manage Libraries):
     - open the Library Manager and search for "BlueRobotics MS5837"
      <img src="/bar30/tutorials/bar30-arduino/library-manager-br-library.png" class="img-responsive img-center" style="max-width:800px" />
     - click "Install"

   - via GitHub:
     - download the library in zip format from: https://github.com/bluerobotics/BlueRobotics_MS5837_Library
     - unzip the library and place the folder in your Arduino/libraries folder

4. Open the example code.  You may need to restart the Arduino IDE to see it.
    <img src="/bar30/tutorials/bar30-arduino/examples-list.png" class="img-responsive img-center" style="max-width:800px" />

5. Upload your code to the Arduino.

6. Open the Serial Monitor, making sure the Baud rate is set to 9600.
    <img src="/bar30/tutorials/bar30-arduino/serial-output.png" class="img-responsive img-center" style="max-width:800px" />

7. That's it!  You should see pressure, depth, and temperature data being printed to the Serial Monitor.  If not, check the Troubleshooting section below.

# Troubleshooting

## I can't communicate with my _Bar30_

* Make sure the _Bar30_ is receiving power.  Check the _Level Converter's_ voltage selection jumper pads.  Either 3.3 V or 5 V will work (5 V is recommended).  See the _Level Converter's_ [store page](https://www.bluerobotics.com/store/electronics/level-converter-r1/#tab-learn_ for details.
* Check your SCL and SDA connections.  Try swapping the two jumpers: reversing them will not damage the sensor or microcontroller.
* Check your jumpers for continuity.  Some cheap jumper cables have terrible electrical connections.

## The values I'm seeing are way off

* Make sure you are using the correct model sensor in your code.  Code interfacing with a _Bar30_ should contain the following line for sensor initialization:
```
sensor.setModel(MS5837::MS5837_30BA);
```
If your code sets the model as `MS5837::MS5837_02BA`, the library will assume it is communicating with a [_Bar02_](https://bluerobotics.com/store/sensors-sonars-cameras/sensors/bar02-sensor-r1-rp/) pressure sensor and will incorrectly interpret the incoming pressure data, resulting in absurd pressure and depth "measurements".
