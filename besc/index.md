---
layout: default
title: Basic ESC Documentation
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

store-links:
- Basic ESC: http://bluerobotics.com/store/speed-controllers/besc-30-r1/

manual-links:
- T100/T200 Thrusters: /thrusters/
- M100 Motor: /thrusters/motors/
---

#Introduction

The Basic ESC is a simple speed controller. It is the [AfroESC 30A](#) pre-programmed with custom firmware that allows forward and backward operation. The firmware is open source and available in [our branch of the tgy project](http://github.com/bluerobotics/tgy).

You are welcome to purchase the ESCs directly and reprogram them yourself. We offer them as a convenience to help you get started quickly. We also do quality control to ensure that every ESC operates correctly. 

##Safety 

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with electricity, especially in water, always practice caution. Always ensure that connections are secure and watertight. Keep your body away from spinning motors and propellers.

##Quick Start

1. Connect the three motor wires to the motor.
2. Connect the red power wire and black ground wire to a power source like a battery. You will hear a few beeps from the ESC.
3. Connect the signal cable to your signal source like an RC radio receiver or microcontroller board. The yellow wire is the signal wire.
4. Send a stopped signal (1500 microseconds) for a few seconds to initialize the ESC. You will hear a long tone.

#Specifications

##Specification Table

|                 **Electrical**                |
| ------------- | ------------- | ------------- |
| Voltage       | 6-16 volts                    |
| Max Current   | 30 amps                       |
| ------------- | ------------- | ------------- |
|                  **Physical**                 |
| ------------- | ------------- | ------------- |
| Length        | 50 mm         | 2.0 in        |
| Width         | 25 mm         | 1.0 in        |
| Height        | 11 mm         | 0.45 in       |
| Power Connectors | Male 3.5 mm bullet         |
| Motor Connectors | Female 3.5 mm bullet       |
| Signal Connector | 3-pin servo connector (0.1" pitch) (ground, 5V, signal) |
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
| SolidWorks Part (.sldprt)  | [BESC30-R1.sldprt](#) |
| STEP (.step)               | [BESC30-R1.step](#)   |
| IGES (.igs)                | [BESC30-R1.igs](#) |
| STL (.stl)                 | [BESC30-R1.stl](#) |

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

[<i class="fa fa-download fa-fw"></i> Basic ESC Firmware (BESC30-R1)](#)

##Firmware Update and Customization

The Basic ESC uses the [tgy firmware](http://github.com/bluerobotics/tgy) which is open source and editable. There are many parameters that can be changed to change the performance of the speed controller. 

###Firmware Compilation

To compile the firmware, you'll need the avra AVR Assembler.

*Mac:* (Uses Homebrew)

~~~ bash
brew update
brew install avra
make afro_nfet.hex
~~~

###Firmware Flashing

The ESC includes a bootloader that allows flashing through the PWM signal wire using a programming like the [Turnigy USB Linker](http://www.hobbyking.com/hobbyking/store/__10628__turnigy_usb_linker_for_aquastar_super_brain.html) or the [AfroESC Programmer](http://www.hobbyking.com/hobbyking/store/__39437__afro_esc_usb_programming_tool.html). 

~~~ bash
avrdude -c stk500v2 -b 9600 -P [programmer port] -p m8 -U flash:w:afro_nfet_besc30_r1.hex:i
~~~