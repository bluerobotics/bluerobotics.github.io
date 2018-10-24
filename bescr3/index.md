---
layout: default
title: Basic ESC Documentation (New)
order: 1
nav:
- Example Code: example-code
- - Arduino: arduino
- Advanced: advanced
- - Firmware Files: firmware-files

store-links:
- Basic ESC: https://www.bluerobotics.com/store/electronics/besc30-r3/

manual-links:
- T100/T200 Thrusters: /thrusters/
- M100 Motor: /thrusters/motors/
---
<img src="/bescr3/cad/BESC30-R3-3-rotated-crop.PNG" class="img-responsive" style="max-width:600px" />


# Example Code

## Arduino

This example uses the Arduino Servo library to control the speed controller. This provides an update rate of 50 Hz and can use any pin on the Arduino board as the "servoPin".

If you've never used Arduino before, we suggest checking out [some tutorials!](https://www.arduino.cc/en/Tutorial/HomePage)

**Note:** If you power the Arduino before powering the ESC, then the ESC will miss the initialization step and won't start. Power them up at the same time, power the ESC first, or press "reset" on the Arduino after applying power to the ESC. You may need to adjust the neutral signal delay time as well, depending on your setup.

~~~~~~~~~~ cpp
#include <Servo.h>

byte servoPin = 9;
Servo servo;

void setup() {
	servo.attach(servoPin);

	servo.writeMicroseconds(1500); // send "stop" signal to ESC.

	delay(7000); // delay to allow the ESC to recognize the stopped signal
}

void loop() {
	int signal = 1700; // Set signal value, which should be between 1100 and 1900

	servo.writeMicroseconds(signal); // Send signal to ESC.
}
~~~~~~~~~~~~~~~~

# Advanced

## Firmware Files

The firmware configuration settings file for BLHeliSuite can be downloaded here: 

[BR Basic ESC BLHEli_S](cad/BLHeli_BR Basic ESC - R_H_15 - Rev. 16.6 - Multi_170921.ini)

Detailed documentation for BlHeli_S operation and settings can be downloaded here:

[BLHeli_S Version 16.x manual](cad/BLHeli_S manual SiLabs Rev16.x.pdf)


## Firmware Update and Customization

The Basic ESC uses version 16.6 of the [BLHeli_S firmware](https://github.com/bitdump/BLHeli/tree/master/BLHeli_S%20SiLabs) which is open source and editable. There are many parameters that can be changed to alter the performance of the speed controller by flashing the ESC through the PWM signal wire using a programming tool like the [Turnigy USB Linker](http://www.hobbyking.com/hobbyking/store/__10628__turnigy_usb_linker_for_aquastar_super_brain.html), the [AfroESC Programmer](http://www.hobbyking.com/hobbyking/store/__39437__afro_esc_usb_programming_tool.html), or an Arduino. The [BLHeliSuite](https://blhelisuite.wordpress.com/) software can be used for accessing the ESC firmware and configuring it.

The Basic ESC uses an SiLabs microcontroller and is Oneshot 125 capable. 

