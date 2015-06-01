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
- I<sup>2</sup>C Protocol: isup2supc-protocol
- - Throttle Command: throttle-command
- - Data Request: data-request
- - Assigning I<sup>2</sup>C Addresses: assigning-isup2supc-addresses
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

#I<sup>2</sup>C Protocol

The I<sup>2</sup>C communication protocol allows two-directional communication with the ESC. The protocol uses a "register map" allowing registers to be written to and read from.

##Throttle Command

###Description

The throttle command is a 16-bit signed integer. The sign of the value determines the direction of rotation.

###Registers: (0x00-0x01)

* **throttle:** (write-only)
	* -32767 (max reverse) to 32767 (max forward)
	* 0 is stopped
	* No deadband

###Bytes

* **Byte 0:** throttle_h  
* **Byte 1:** throttle_l

##Data Request

###Description

The data registers can be read to provide information on voltage, current, RPM, and temperature. All values are 16-bit unsigned integers.

###Registers: (0x02-0x0A)

* **pulse_count:** (read-only)
  * Commutation pulses since last request.
  * Calculate rpm with pulse_count/dt*60/motor_pole_count
* **voltage:** (read-only)
	* ADC measurement scaled to 16 bits
  * Calculate voltage with voltage/2016
* **temperature:** (read-only)
	* ADC measurement scaled to 16 bits
  * Calculate temperature with the Steinhart equation
* **current:** (read-only)
	* ADC measurement scaled to 16 bits
  * Calculate current with (current-32767)/891
* **identifier:** (read-only)
	* Identifier bit to test if ESC is alive

###Bytes

* **Byte 0:** pulse_count_h  
* **Byte 1:** pulse_count_l  
* **Byte 2:** voltage_h  
* **Byte 3:** voltage_l  
* **Byte 4:** temperature_h  
* **Byte 5:** temperature_l  
* **Byte 6:** current_h  
* **Byte 7:** current_l  
* **Byte 8:** 0xab (identifier to check if ESC is alive)

##Assigning I<sup>2</sup>C Addresses

To be completed. Stay tuned.

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