---
layout: default
title: M200 Motor Documentation
permalink: /thrusters/motors/m200/
order: 1
nav:
- Introduction: introduction
- - Safety: safety
- - Quick Start: quick-start
- Installation: installation
- - Video Tutorial: video-tutorial
- - Electrical Connections: electrical-connections
- - Sealing Connections: sealing-connections
- Operation: operation
- - Clicking Noise: clicking-noise
- Care and Maintenance: care-and-maintenance
- - Normal Care: normal-care
- - Disassembly/Assembly: disassemblyassembly
- Troubleshooting: troubleshooting
- Details: details
- - Test Results: test-results
- - Quality Control: quality-control

store-links:
- M100 Motor: http://bluerobotics.com/store/thrusters/m100-motor/
- M200 Motor: http://bluerobotics.com/store/thrusters/m200-motor/
- Basic ESC: http://bluerobotics.com/store/speed-controllers/besc-30-r1/

manual-links:
- M100 Motor: /thrusters/motors/
- T100 Thruster: /thrusters/
- T200 Thruster: /thrusters/t200/
- Basic ESC: /besc/

tutorial-links:
- Motor Assembly/Disassembly: /tutorials/disassembly-assembly/m100-m200-disassembly/
---
<img src="/assets/images/documentation/m200-multi.png" class="img-responsive img-center" style="max-width:600px" />

# Introduction

The M200 Motor is a brushless electric motor for use underwater. It is pressure resistant and ruggedized against harsh ocean conditions. Many of the motor's components are used in the [T200 Thruster](/thrusters/t200).

## Safety

Always practice caution when you're working with electricity in water and with the spinning blades of the propeller. Keep body parts away from the motor to avoid injury.

## Performance Charts

<!--This performance information is given using the [3D printed M100 propeller](https://www.bluerobotics.com/store/parts/m100-p-propeller-rev-r1/).

<div>
    <a href="https://plot.ly/~rjehangir/82/" target="_blank" title="M100 Motor w/ 3D Printed Propeller: Thruster vs. PWM Input to ESC" style="display: block; text-align: center;"><img src="https://plot.ly/~rjehangir/82.png" alt="M100 Motor w/ 3D Printed Propeller: Thruster vs. PWM Input to ESC" style="max-width: 100%;width: 1368px;"  width="1368" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="rjehangir:82" src="https://plot.ly/embed.js" async></script>
</div>

<div>
    <a href="https://plot.ly/~rjehangir/84/" target="_blank" title="M100 Motor w/ 3D Printed Prop: Power and Current vs. Input Signal to ESC" style="display: block; text-align: center;"><img src="https://plot.ly/~rjehangir/84.png" alt="M100 Motor w/ 3D Printed Prop: Power and Current vs. Input Signal to ESC" style="max-width: 100%;width: 1368px;"  width="1368" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="rjehangir:84" src="https://plot.ly/embed.js" async></script>
</div>

-->

# Installation

The M200 Motor is easy to install in many different applications. It was designed with mounting holes that are identical to those found on many common brushless motors.

## Video Tutorial

<iframe width="700" height="393.75" src="https://www.youtube.com/embed/UCFR6N9lcJ4?list=PLZ486nvZoegusCQXQwC-5C-MzKkHBfw0d" frameborder="0" allowfullscreen></iframe>
<br />

## Electrical Connections

### Connecting to an External ESC

The motor has a solder pads to connect to three wires. These three pads must be connected to the three motor wires on the electronic speed controller (ESC). The order does not matter, but if the motor direction is the reverse of what is desired, switch two of the wires. 

The three solder pads are always connected to the same motor phases, so connecting in a consistent fashion will result in all motors rotating in the same direction.

## Sealing Connections

We recommend using the following compounds to seal the soldered wire connections on the M200 Motor.

* **Loctite Marine Epoxy** works well at great depths and is very thick so that it can be applied in one coat.
* **MG Chemicals 4229** is a rubberized coating that can be used at shallow depths (less than 100ft) and is removable if required.

# Operation

The motor requires a brushless electronic speed controller (ESC). If you are using the BlueRobotics BasicESC or BlueESC, please see the appropriate product page for instructions.

## Clicking Noise

If you hear a clicking noise during operation, especially when operating in air, do not be alarmed. It's normal.

The motor uses solid plastic bushings and due to the tolerances of the bushings and motors shafts, the shaft can move slightly in the bearing. The noise is drastically reduced or eliminated when operated in water. The water acts as a lubricant for the bearings and smooths operation.

# Care and Maintenance

## Normal Care

During normal use:

* Rinse with fresh water after use in saltwater to minimize the accumulation of salt deposits.

* Rinse after operating in sandy environments to remove sand particles.

If operated for extended periods in the water:

* Occasionally clean biological fouling and mineral deposits from the motor or performance may be impacted.

## Disassembly/Assembly

Occasionally it may be necessary to disassemble the motor. Here is a quick guide on how to do so!

<div class="row">
 <div class="col-sm-4 col-md-4">
    <div class="tile" style="background-image:url(/assets/images/tutorials/m100-disassembly/m100-disassem-1.png)">
      <a href="/tutorials/disassembly-assembly/m100-m200-disassembly/">Disassembly/Assembly <i class="fa fa-chevron-circle-right"></i></a>
    </div>
  </div>
</div>


# Troubleshooting

**The motor does not start**

This is usually an issue with the proper commands being sent to the ESC. Please see the [ESC documentation](/besc/) for instructions on how to operate the ESC properly.

**The motor does not start but the propeller tries to move.**

This can be caused by a disconnected motor wire or a short between motor wires. Check that all three motor wires are connected and not shorting. To do this, check resistance of each phase pair in the thruster. Each thruster wire phases pair (Blue/green. blue/white, green/white) should have the same resistance within 0.1-0.2ohms or so. If no connection is read or one pair has significantly higher resistance, your thruster has a fault. Please e-mail [support@bluerobotics.com](mailto:support@bluerobotics.com) if this fault is found.

**The motor is jammed when turned by hand.**

This can be caused by something jamming the propeller or by major internal damaged caused by overheating, short circuits, or heavily worn bearings. Please disassemble the motor and inspect for damage or blockage.

# Details

For all the engineers out there, here's some more info.

## Test Results

Check out the [test results section for the T200 Thruster](/thrusters/#test-results), which shares most of the same components as the M200.

## Quality Control

We perform the following tests on every motor before they are shipped.

* **Insulation Test**, also know as a hipot test. We submerge the motor in water and measure current leakage at high voltage (250V) to ensure that the insulation is sufficient.

* **Spin Test**. The motor is operated in air across the entire speed range to ensure that it operates correctly.

* **Visual Inspection**. Each motor is inspected for visual issues or damage.
