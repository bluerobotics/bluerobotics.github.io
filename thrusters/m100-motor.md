---
layout: default
title: M100/M200 Motor Documentation
permalink: /thrusters/motors/
order: 1
nav:
- Introduction: introduction
- - Safety: safety
- - Quick Start: quick-start
- - Important Notes: important-notes
- Specifications: m100-motor-specifications
- - Specification Table: specification-table
- - Performance Charts: performance-charts
- - Dimensions: dimensions
- - 3D Model: d-model
- Installation: installation
- - Electrical Connections: electrical-connections
- Operation: operation
- - Clicking Noise: clicking-noise
- Care and Maintenance: care-and-maintenance
- - Normal Care: normal-care
- - Disassembly / Assembly: disassembly--assembly
- Troubleshooting: troubleshooting
- Details: details
- - Test Results: test-results
- - Quality Control: quality-control
---

#Introduction

The M100 Motor is a brushless electric motor for use underwater. It is pressure resistant and ruggedized against harsh ocean conditions. Many of the motors components are used in the [T100 Thruster](/thrusters/).

##Safety

Always practice caution when you're working with electricity in water and with the spinning blades of the propeller. Keep body parts away from the motor to avoid injury.

##Quick Start

1. Solder wires from ESC to pads on motor.
2. Waterproof solder connection with epoxy or other potting compound.
3. Send a signal to the ESC and the motor will start spinning. That's it.

##Important Notes

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>
Do not operate the motor for extended periods out of water. The bearings are lubricated by the water and vibration and noise will be greater when dry.

<i class="fa fa-lightbulb-o fa-fw fa-2x blue"></i>
A slight clicking noise is normal, especially when operated dry. It is caused by slight movement of the shaft in the plastic bearings.

#M100 Motor Specifications

##Specification Table

| ----------------------- | ----------------------------- |
|                   **Performance**                       |
| ----------------------- | ----------------------------- |
| RPM/V (Kv rating)       | 540 RPM/volt                  |
| ----------------------- | ----------------------------- |
|                    **Electrical**                       |
| ----------------------- | ----------------------------- |
| Operating Voltage       | 6-16 volts                    |
| Max Current             | 12.5 amps                     |
| Max Power               | 135 watts                     |
| ----------------------- | ----------------------------- |
|                    **Physical**                         |
| ----------------------- | ----------------------------- |
| Overall Length          | 54 mm         | 2.12 in       |
| Diameter                | 32 mm         | 1.26 in       |
| Shaft Diameter          | 4.0 mm        | 0.157 in      | 
| Mounting Hole Threads   | M3 x 0.5                      |
| Base Mounting Hole Spacing | 16 mm & 19 mm | 0.63 in & 0.75 in |
| Top Mounting Hole Spacing  | 19 mm         | 0.75 in    |

##Performance Charts

Chart images goes here.

##Dimensions

<img src="/assets/images/m100-three-view-1.png" class="img-responsive" style="max-width:800px" />

##3D Model

| File Type                  | Link                          |
| -------------------------- | ----------------------------- |
| SolidWorks Part (.sldprt)  | [M100-MOTOR-R1.SLDPRT](/thrusters/cad/M100-MOTOR-R1.SLDPRT) |
| STEP (.step)               | [M100-MOTOR-R1.STEP](/thrusters/cad/M100-MOTOR-R1.STEP)   |
| IGES (.igs)                | [M100-MOTOR-R1.IGS](/thrusters/cad/M100-MOTOR-R1.IGS) |
| STL (.stl)                 | [M100-MOTOR-R1.STL](/thrusters/cad/M100-MOTOR-R1.STL) |
| All Formats in a Zip File (.zip)   | [M100-MOTOR-R1.zip](/thrusters/cad/M100-MOTOR-R1.zip) |

#Installation

The M100 Motor is easy to install in many different applications. It was designed with mounting holes that are identical to those found on many common brushless motors.

##Electrical Connections

###Connecting to an External ESC

The motor has a solder pads to connect to three wires. These three pads must be connected to the three motor wires on the electronic speed controller (ESC). The order does not matter, but if the motor direction is the reverse of what is desired, switch two of the wires. 

The three solder pads are always connected to the same motor phases, so connecting in a consistent fashion will result in all motors rotating in the same direction.

###Connecting the BlueESC

To be completed.

#Operation

The motor requires a brushless electronic speed controller (ESC). If you are using the BlueRobotics BasicESC or BlueESC, please see the appropriate product page for instructions.

* [BasicESC](/besc/)
* [BlueESC](/bluesc/)

##Clicking Noise

If you hear a clicking noise during operation, especially when operating in air, do not be alarmed. It's normal.

The motor uses solid plastic bushings and due to the tolerances of the bushings and motors shafts, the shaft can move slightly in the bearing. The noise is drastically reduced or eliminated when operated in water. The water acts as a lubricant for the bearings and smooths operation.

#Care and Maintenance

##Normal Care

During normal use:

* Rinse with fresh water after use in saltwater to minimize the accumulation of salt deposits.

* Rinse after operating in sandy environments to remove sand particles.

If operated for extended periods in the water:

* Occasionally clean biological fouling and mineral deposits from the motor or performance may be impacted.

##Disassembly / Assembly

Occasionally it may be necessary to disassemble the motor.

**Tools Needed:**

* 1.5 mm hex key

**Steps:**

1. Loosen the set screw from the shaft collar at the bottom of the motor.

2. Remove shaft collar. If it seems stuck, pull the rotor away from the base to pull the shaft out of the collar. Do not pry the shaft collar.

3. Remove the rotor assembly.

4. Repeat these steps in the reverse direction to reassemble the motor.

#Troubleshooting

**The motor does not start but the propeller tries to move.**

This can be caused by a disconnected motor wire or a short between motor wires.Check that all three motor wires are connected and not shorting.

**The motor is jammed when turned by hand.**

This can be caused by something jamming the propeller or by major internal damaged caused by overheating, short circuits, or heavily worn bearings. Please disassemble the motor and inspect for damage or blockage.

#Details

For all the engineers out there, here's some more info.

##Test Results

Results of long-endurance tests, sand and debris tests, depth tests.

##Quality Control

We perform the following tests on every motor before they are shipped.

* **Insulation Test**, also know as a hipot test. We submerge the motor in water and measure current leakage at high voltage (250V) to ensure that the insulation is sufficient.

* **Spin Test**. The motor is operated in air across the entire speed range to ensure that it operates correctly.

* **Visual Inspection**. Each motor is inspected for visual issues or damage.