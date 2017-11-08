---
layout: default
title: Thruster Commander
nav:
- Introduction: introduction
- - Why do I need the Thruster Commander?: why-do-i-need-the-thruster-commander
- - Why can't I use the Thruster Commander with other ESCs?: why-cant-i-use-the-thruster-commander-with-other-escs
- - Important Notes: important-notes
- Setup: setup
- - Quick Start: quick-start
- - Modes of Operation: modes-of-operation
- - Powering Thruster Commander: powering-thruster-commander
- - Mounting Thruster Commander: mounting-thruster-commander
- - Enabling Output/Deadman Switch: deadman-switchenabling-output
- Operation: operation
- - ESC Initialization: esc-initialization
- - Controlling Motors: controlling-motors
- Troubleshooting: troubleshooting

store-links:
- Thruster Commander:  https://www.bluerobotics.com/store/electronics/cmdr-r1-rp/

manual-links:
- Thruster Commander: /commander
- Basic ESC:  /bescr3
- Thrusters: /thrusters
---

# Introduction

<img src="Thruster-Commander-Banner.png" class="img-responsive img-center" style="max-width:800px"  />


## Why do I need the _Thruster Commander_?

Most ESCs do not accept simple knob- or button-inputs, instead communicating via pulse-width modulation (PWM) signals.  The _Thruster Commander_ converts up to two potentiometer (knob) inputs to two separate PWM output signals that can be used to control ESCs.  This allows you to run BLDC motors without the need for a complex onboard computer system.


## Why can't I use the _Thruster Commander_ with other ESCs?

Most ESCs are designed for RC airplane or multi-copter use.  Motors on these craft never need to be run in reverse, so most ESCs are uni-directional.  However the _Thruster Commander_ is designed to be used with bi-directional ESCs.  Because of the different operating natures of uni-directional and bi-directional ESCs, the signals required to stop these types of ESCs are different, so the _Thruster Commander_'s safety features (which are meant to stop all attached motors) will not work with uni-directional ESCs. For this reason the _Thruster Commander_ should never be used with uni-directional ESCs.

<i class="fa fa-lightbulb-o fa-fw fa-2x blue"></i>
It is possible to upload bi-directional firmware to some standard ESCs.  More information can be found [in the Basic ESC documentation](http://docs.bluerobotics.com/besc/#firmware-update-and-customization).


## Important Notes

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>
**Only use the _Thruster Commander_ with reversible/bi-directional ESCs** (e.g. [Blue Robotics ESCs](http://docs.bluerobotics.com/besc/#firmware-update-and-customization)).  Standard ESCs are not compatible with the _Thruster Commander_'s safety features.  See [below](#why-cant-i-use-the-thruster-commander-with-other-escs) for more information.

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>
Neither the _Thruster Commander_ nor its included accessories are waterproof.  Make sure to mount them in locations where they will not get wet.

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>
[Deadman switches](#deadman-switchenabling-output) are recommended on any mobile _Thruster Commander_ application.

<i class="fa fa-lightbulb-o fa-fw fa-2x blue"></i>
ESCs are necessary for powering brushless DC (BLDC) motors (e.g. T100 & T200 thrusters), _even to run at full speed_.

<i class="fa fa-lightbulb-o fa-fw fa-2x blue"></i>
Most ESCs require a neutral input signal to [complete their initialization](#esc-initialization).  _This is a safety feature!_  The _Thruster Commander_ will output a neutral signal when:
- SWITCH is open (i.e. not connected to ground),
- input potentiometers are centered, or
- not enough potentiometers are connected.



# Setup

## Quick Start

<img src="CMDR-QUICK-START-DIAGRAM-R1-01.png" class="img-responsive img-center" style="max-width:500px"  />


1. Connect the power cable to the POWER connector in the top left of the board
1. Attach the potentiometer(s) to the inputs (see [Modes of Operation](#modes-of-operation) for input configurations)
    - Each potentiometer’s 3-pin connector can be reversed to reverse its input
1. Attach electronic speed controllers (ESCs) to the output pins
    - The black/brown wire should be connected to the GND pin
    - These connectors should not be reversed
1. Apply 7-28 VDC power to the POWER connector and ESCs
1. To initialize the ESCs, either:
    - Turn the knobs to their center position, or
    - Turn the external switch to the off position
1. That's it! You're ready to go.


### Modes of Operation

|     Mode     |        Inputs        | Outputs |
|:------------:|:--------------------:|:-------:|
| Single Input |        SPEED         | SPEED <i class="fa fa-arrow-right" aria-hidden="true"></i> Both OUTPUTs |
|  Dual Input  | RIGHT IN and LEFT IN | RIGHT IN <i class="fa fa-arrow-right" aria-hidden="true"></i> RIGHT OUTPUT <br> LEFT IN <i class="fa fa-arrow-right" aria-hidden="true"></i> LEFT OUTPUT |
| Mixed Input  |  SPEED and STEERING  | SPEED and STEERING <i class="fa fa-arrow-right" aria-hidden="true"></i> Both OUTPUTs |
|:------------:|:--------------------:|:-------:|

## Powering _Thruster Commander_

The _Thruster Commander_ can be powered in one of two ways: 7-28 VDC or regulated 5 VDC.  7-28 VDC power can be supplied via the POWER connector in the top left corner of the board.  This can be connected directly to any 7-28 VDC power supply, including the batteries powering your motors. 5 VDC regulated power is available from some ESCs with built-in battery eliminator circuits (BECs) which can power the _Thruster Commander_ via the PWM cable, eliminating the need for the 7-28 VDC power intput.  These ESCs will have a third, red wire on their PWM input cables which carries the 5 VDC supply.

<i class="fa fa-lightbulb-o fa-fw fa-2x blue"></i>
Note that not all ESCs with such three-wire PWM input cables have built-in BECs.

If none of your ESCs have BECs, you will need to supply either 7-28 VDC power via the POWER connector or 5 VDC regulated power from an external regulator/BEC.  Our Basic ESCs do not have built-in BECs and are not able to power the _Thruster Commander_; they will require the use of the 7-28 VDC power input.

## Mounting _Thruster Commander_

Two M3x0.5 holes spaced 31.75 mm (1.25") apart on the back of each _Thruster Commander_ provide a solid way to mount it on your project.  Alternatively the _Thruster Commander_ can be mounted with double-sided tape.  However you mount the _Thruster Commander_, make sure it is in a location where it will stay dry, because the _Thruster Commander_ and its accessories are **not waterproof**.

The potentiometers can be mounted through a 10 mm (3/8") hole in a panel or box up to 2.5 mm (0.1") thick.  After removing the nut and washer from the potentiometer, pass the potentiometer through the mounting hole from the back of the panel or box.  Replace and tighten the nut and washer, then attach the knobs to the potentiometer by tightening the set screw onto the flat section of the potentiometer shaft using the provided 1.5 mm allen wrench.

## Deadman Switch/Enabling Output

To enable PWM outputs from Thruster Commander, the center SWITCH pin must be connected to ground, indicated on the board as "GND".  This is achieved out-of-the-box with a jumper between the center and GND pins of SWITCH.

A deadman switch can be added by replacing this jumper with any normally-open (NO) momentary switch connected between the center pin and GND.  External "enable" switches can also be used.  Should the switch be released or become disconnected from Thruster Commander, the SWITCH-to-GND connection will be broken and _Thruster Commander_ will stop all connected motors.

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>
If you are using the _Thruster Commander_ on a vehicle, we highly recommend that you install a deadman switch to prevent it from running off without you.

# Operation

## ESC Initialization

Most BLDC ESCs have a built-in safety feature that requires a neutral input signal (1500 µs) before they will complete their initialization.  While this reduces the chances of a thruster unexpectedly turning on and lacerating you or your friends, it necessitates an extra initialization step at runtime.

The _Thruster Commander_ outputs a neutral PWM signal to connected ESCs when:
- SWITCH is open (i.e. not connected to ground),
- input potentiometers are centered, or
- not enough potentiometers are connected.

This condition must be held until the ESC gives a high-pitched beep (the fifth beep after being powered on in the case of the Blue Robotics BasicESC).  This beep signifies that the ESC has finished its initialization and is ready to accept an input.

If you are using a deadman switch connected to SWITCH, simply release the button until the ESC beeps to initialize.  Should you be using the included jumper, you will need to center the knobs to initialize the ESCs.


## Controlling Motors

Each _Thruster Commander_ contains two output channels (LEFT OUTPUT and RIGHT OUTPUT) with two sets of output pins each.  This means that the _Thruster Commander_ can control two sets of motors independently.  Three modes of operation are supported: _Single Input_, _Dual Input_, and _Mixed Input_.  The mode is selected by connecting potentiometers to specific inputs.  See [Modes of Operation](#modes-of-operation) for valid combinations of potentiometer connections.

- _Single Input_ uses a single potentiometer connected to the SPEED input to drive both the RIGHT and LEFT OUTPUTs identically.

- _Dual Input_ uses two potentiometer inputs, one on RIGHT IN and one on LEFT IN.  The input on RIGHT IN will dictate the output on RIGHT OUTPUT and the input on LEFT IN will dictate the output on LEFT OUTPUT.

- _Mixed Input_ is designed for use with crafts with left and right thrusters for differential thrust steering.  In these setups, SPEED controls the base speed of the craft and STEERING controls the differential thrust.

The 3-pin connectors on the potentiometers are reversible, so if turning a knob runs the motors the wrong way, the connector can be reversed to correct the problem.  Note that only the potentiometer inputs are reversible; the SWITCH and OUTPUT connectors should not be reversed.  Should you be using a BLDC motor such as the T100 or T200, each motor's direction can be reversed by swapping any two of the three connections between the ESC and the motor.

<i class="fa fa-lightbulb-o fa-fw fa-2x blue"></i>
Potentiometers can be hot-swapped.  However it is advised that this only be done while the outputs are disabled (SWITCH disconnected from GND or power to thrusters disconnected), as hot-swapping potentiometers while the outputs are enabled may cause one or more motors to suddenly start running.


# Troubleshooting

**Two short blinks**

Not enough potentiometers are plugged in.  The [Modes of Operation table](#modes-of-operation) shows all valid combinations of potentiometer connections.

**One long blink**

Switch is not pressed/connected, or is not correctly connected.  The SWITCH signal (center) pin must be connected to ground (GND pin) by a switch or jumper for the motors to turn.
