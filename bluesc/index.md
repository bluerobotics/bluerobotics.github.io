---
layout: default
title: BlueESC Documentation
permalink: /bluesc/
order: 1
nav:
- Introduction: introduction
- - Safety: safety
- - Quick Start: quick-start
- Specifications: specifications
- - Specification Table: specification-table
- - 3D Model: d-model
- Example Code: example-code
- - Arduino: arduino
- Advanced: advanced
- - Firmware Files: firmware-files
- - Firmware Update and Customization: firmware-update-and-customization
---

#Introduction

The BlueESC is an electronic speed controller for the T100 and T200 Thrusters. It's custom designed to mount directly to the thrusters and it is waterproof, water-cooled, and pressure-resistant.

##Safety 

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with electricity, especially in water, always practice caution. Always ensure that connections are secure and watertight. Keep your body away from spinning motors and propellers.

##Quick Start

The BlueESC comes preinstalled on the T100 or T200 Thrusters, and you don't have to do much to get started. All you need is a power source like a 12V battery or power supply and a signal source, like a servo tester, RC radio receiver, or a microcontroller.

1. Connect the BlueESC to the power source by connecting the thick red and black wires to power and ground (negative).

2. On the smaller signal cable, connect the black ground wire to the ground wire of the signal source. Connect the red or yellow PWM signal wire to the signal.

3. Provide a "stopped" signal at 1500 &mu;s for a few seconds to allow the ESC to initialize. It will beep and the lights will flash briefly.

4. Once initialized, it's ready to run!

#Specifications

##Specification Table

|                       **Electrical**                        |
| --------------------------- | ------------- | ------------- |
| Voltage                     | 6-22 volts                    |
| Max Current (in water)      | 35 amps                       |
| Max Current (in air)        | 25 amps                       |
| --------------------------- | ------------- | ------------- |
|                       **Physical**                          |
| --------------------------- | ------------- | ------------- |
| Length of Enclosure         | 18 mm         | 0.71 in       |
| Diameter of Enclosure       | 40.4 mm       | 1.59 in       |
| Cable Length                | 1 m           | 39 in         |
| Power Cable Diameter        | 6.3 mm        | 0.25 in       |
| Signal Cable Diameter       | 3.8 mm        | 0.15 in       |
| Power Cable Colors          | Red - Positive                |
|                             | Black - Negative (Ground)     |
| Signal Cable Colors         | Black - Ground                |
|                             | Red or Yellow - PWM Signal    |
|                             | White - I<sup>2</sup>C Data (SDA) |
|                             | Green - I<sup>2</sup>C Clock (SCL) |
| --------------------------- | ------------- | ------------- |
|                    **Pulse Width Signal**                   |
| --------------------------- | ------------- | ------------- |
| Signal Voltage              | 3.3-5 volts                   |
| Update Rate                 | 50-400 Hz                     |
| Stopped                     | 1500 microseconds             |
| Max forward                 | 1900 microseconds             |
| Max reverse                 | 1100 microseconds             |
| Signal Deadband             | +/- 25 microseconds (centered around 1500 microseconds) |
| --------------------------- | ------------- | ------------- |
|                    **Performance**                   |
| --------------------------- | ------------- | ------------- |
| Maximum Depth               | To be determined; Designed for 500m+|

##3D Model

Coming soon.

<!--
| File Type                  | Link                          |
| -------------------------- | ----------------------------- |
| SolidWorks Part (.sldprt)  | [BLUESC-R1.sldprt](#) |
| STEP (.step)               | [BLUESC-R1.step](#)   |
| IGES (.igs)                | [BLUESC-R1.igs](#) |
| STL (.stl)                 | [BLUESC-R1.stl](#) |
| All in a zip file (.zip)   | [BLUESC-R1.zip](#) |
-->

#Example Code

##Arduino

This example uses the Arduino Servo library to control the speed controller. This provides an update rate of 50 Hz and can use any pin on the Arduino board as the "servoPin".

~~~~~~~~~~ cpp
#include <Servo.h>

byte servoPin = 9;
Servo servo;

void setup() {
	servo.attach(servoPin);

	servo.writeMicroseconds(1500); // send "stop" signal to ESC.
	delay(1000); // delay to allow the ESC to recognize the stopped signal
}

void loop() {
	int signal = 1700; // Set signal value, which should be between 1100 and 1900

	servo.writeMicroseconds(signal); // Send signal to ESC.
}
~~~~~~~~~~~~~~~~

#Advanced

##Firmware Files

The compiled firmware files can be downloaded here: 

<!--[<i class="fa fa-download fa-fw"></i> BlueESC Firmware (BLUESC-R1)](#)-->

Coming soon.

##Firmware Update and Customization

The Basic ESC uses the [tgy firmware](http://github.com/bluerobotics/tgy) which is open source and editable. There are many parameters that can be changed to change the performance of the speed controller. 

###Firmware Compilation

To compile the firmware, you'll need the avra AVR Assembler.

*Mac:* (Uses Homebrew)

~~~ bash
brew update
brew install avra
make bluesc.hex
~~~

###Firmware Flashing

The ESC includes a bootloader that allows flashing through the PWM signal wire using a programming like the [Turnigy USB Linker](http://www.hobbyking.com/hobbyking/store/__10628__turnigy_usb_linker_for_aquastar_super_brain.html) or the [AfroESC Programmer](http://www.hobbyking.com/hobbyking/store/__39437__afro_esc_usb_programming_tool.html). 

~~~ bash
avrdude -c stk500v2 -b 9600 -P [programmer port] -p m8 -U flash:w:bluesc.hex:i
~~~