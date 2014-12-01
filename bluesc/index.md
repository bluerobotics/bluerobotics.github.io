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

##Safety 

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with electricity, especially in water, always practice caution. Always ensure that connections are secure and watertight. Keep your body away from spinning motors and propellers.

##Quick Start

#Specifications

##Specification Table

|                 **Electrical**                |
| ------------- | ------------- | ------------- |
| Voltage       | 6-20 volts                    |
| Max Current (in water)   | 35 amps            |
| Max Current (in air)     | 25 amps            |
| ------------- | ------------- | ------------- |
|                  **Physical**                 |
| ------------- | ------------- | ------------- |
| Length        | xx mm         | x in          |
| Width         | xx mm         | x in          |
| Height        | xx mm         | x in          |
| ------------- | ------------- | ------------- |
|            **Pulse Width Signal**             |
| ------------- | ------------- | ------------- |
| Signal Voltage| 3.3-5 volts                   |
| Max Update Rate| 400 Hz                       |
| Stopped       | 1500 microseconds             |
| Max forward   | 1900 microseconds             |
| Max reverse   | 1100 microseconds             |
| Signal Deadband| +/- 25 microseconds (centered around 1500 microseconds) |

##3D Model

| File Type                  | Link                          |
| -------------------------- | ----------------------------- |
| SolidWorks Part (.sldprt)  | [BLUESC-R1.sldprt](#) |
| STEP (.step)               | [BLUESC-R1.step](#)   |
| IGES (.igs)                | [BLUESC-R1.igs](#) |
| STL (.stl)                 | [BLUESC-R1.stl](#) |
| All in a zip file (.zip)   | [BLUESC-R1.zip](#) |

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

[<i class="fa fa-download fa-fw"></i> BlueESC Firmware (BLUESC-R1)](#)

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