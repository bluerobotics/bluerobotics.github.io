---
layout: default
title: T100 Thruster Documentation
permalink: /thrusters/
order: 0
nav:
- Introduction: introduction
- - Safety: safety
- - Quick Start: quick-start
- - Important Notes: important-notes
- Specifications: t100-thruster-specifications
- - Specification Table: specification-table
- - Performance Charts: performance-charts
- - Dimensions: dimensions
- - 3D Model: d-model
- Installation: installation
- - Changing the Propeller: changing-the-propeller
- - Mounting Options: mounting-options
- - Electrical Connections: electrical-connections
- - How to Cut and Strip the Cable: how-to-cut-and-strip-the-cable
- Operation: operation
- - Clicking Noise: clicking-noise
- Care and Maintenance: care-and-maintenance
- - Normal Care: normal-care
- - Disassembly/Assembly: disassembly--assembly
- Troubleshooting: troubleshooting
- Details: details
- - Test Results: test-results
- - Quality Control: quality-control
- - Painting the Thruster: painting-the-thruster

store-links:
- T100 Thruster: http://bluerobotics.com/store/thrusters/t100-thruster/
- T200 Thruster: http://bluerobotics.com/store/thrusters/t200-thruster/

manual-links:
- T200 Thruster: /thrusters/t200/
- M100 Motor: /thrusters/motors/
- Basic ESC: /besc/
- BlueESC: /bluesc/

tutorial-links:
- Thruster Assembly/Disassembly: /tutorials/disassembly-assembly/
- Changing the Propeller: /tutorials/changing-the-propeller/
- Cable Stripping: /tutorials/cable-stripping/
---
<img src="/assets/images/documentation/2-t100s.png" class="img-responsive img-center" />

# Introduction

The T100 Thruster is a low-cost high performance thruster for marine robotics. It was originally launched in 2014 through a [Kickstarter campaign](https://www.kickstarter.com/projects/847478159/the-t100-a-game-changing-underwater-thruster).



## Safety

Always practice caution when you're working with electricity in water and with the spinning blades of the propeller. Keep body parts away from the thruster inlet and outlet to avoid injury.

## Quick Start

1. Connect motor wires to ESC and connect the ESC to power and a signal.
2. Send a signal and the thruster will start spinning. That's it.

## Important Notes

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>
Do not operate the thruster for extended periods out of water. The bearings are lubricated by the water and vibration and noise will be greater when dry.

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>
The thruster can handle saltwater and sandy environments pretty well, but it does not get along with seaweed. Avoid sucking seaweed into the thruster to avoid damage.

<i class="fa fa-lightbulb-o fa-fw fa-2x blue"></i>
A slight clicking noise is normal, especially when operated dry. It is caused by slight movement of the shaft in the plastic bearings.

# T100 Thruster Specifications

## Specification Table

|----------------------------------------------------------------------------------------|
|                                 **Performance**                                        |
| -------------------------------------------------------|-------------------------------|
| Maximum Forward Thrust                                 | 2.36 kgf      | 5.2 lbf       |
| Maximum Reverse Thrust                                 | 1.85 kgf      | 4.1 lbf       |
| Minimum Thrust                                         | 0.01 kgf      | 0.02 lbf      |
| Rotational Speed                                       | 300-4200 rev/min              |
| -------------------------------------------------------|-------------------------------| 
|                                 **Electrical**                                         |
| -------------------------------------------------------|-------------------------------|
| Operating Voltage                                      | 6-16 volts                    |
| Max Current                                            | 12.5 amps                     |
| Max Power                                              | 135 watts                     |
| Phase Resistance                                       | 0.24 +/- 0.01 Ohms            |
| Phase Inductance (@ 1 kHz)                             | 0.120 +/- 0.008 mH            |
| -------------------------------------------------------|-------------------------------|
|                                 **Physical**                                           |
| ---------------------------------------------------------------------------------------|
| Length (without BlueESC)                               | 102 mm        | 4.0 in        |
| Length (with BlueESC)                                  | 113 mm        | 4.45 in       |
| Diameter                                               | 100 mm        | 3.9 in        |
| Weight in Air (with 1m cable)(without BlueESC)         | 0.65 lb       | 295 g         |
| Weight in Air (with 1m cable)(with BlueESC)            | 0.84 lb       | 378 g         |
| Weight in Water (with 1m cable)(without BlueESC)       | 0.26 lb       | 120 g         |
| Weight in Water (with 1m cable)(with BlueESC)          | 0.37 lb       | 167 g         |
| Propeller Diameter                                     | 76 mm         | 3.0 in        |
| Mounting Hole Threads                                  | M3 x 0.5                      |
| Mounting Hole Spacing                                  | 19 mm         | 0.75 in       |
| Cable Length                                           | 1.0 m         | 39 in         |
| Cable Diameter                                         | 6.3 mm        | 0.25 in       |

## Performance Charts

<iframe width="640" height="480" frameborder="0" seamless="seamless" scrolling="no" src="https://plot.ly/~rjehangir/34.embed?width=640&height=480"></iframe>

<iframe width="640" height="480" frameborder="0" seamless="seamless" scrolling="no" src="https://plot.ly/~rjehangir/40.embed?width=640&height=480"></iframe>

<iframe width="640" height="480" frameborder="0" seamless="seamless" scrolling="no" src="https://plot.ly/~rjehangir/49.embed?width=640&height=480"></iframe>

<iframe width="640" height="480" frameborder="0" seamless="seamless" scrolling="no" src="https://plot.ly/~rjehangir/46.embed?width=640&height=480"></iframe>

## Dimensions

### T100 Thruster (without BlueESC)

<img src="/assets/images/T100-Plain-Drawing.PNG" class="img-responsive" style="max-width:800px" />

### T100 Thruster with BlueESC

<img src="/assets/images/T100-BlueESC-Drawing.PNG" class="img-responsive" style="max-width:800px" />

## 3D Model

### T100 Thruster (without BlueESC)

| File Type                  | Link                          |
| -------------------------- | ----------------------------- |
| SolidWorks Part (.sldprt)  | [T100-THRUSTER-R1.SLDPRT](/thrusters/cad/T100-THRUSTER-R1.SLDPRT) |
| STEP (.step)               | [T100-THRUSTER-R1.STEP](/thrusters/cad/T100-THRUSTER-R1.STEP)   |
| IGES (.igs)                | [T100-THRUSTER-R1.IGS](/thrusters/cad/T100-THRUSTER-R1.IGS) |
| STL (.stl)                 | [T100-THRUSTER-R1.STL](/thrusters/cad/T100-THRUSTER-R1.STL) |
| All Formats in a Zip File (.zip)   | [T100-THRUSTER-R1.zip](/thrusters/cad/T100-THRUSTER-R1.zip) |

### T100 Thruster with BlueESC

| File Type                  | Link                          |
| -------------------------- | ----------------------------- |
| SolidWorks Part (.sldprt)  | [T100-THRUSTER-BLUEESC-R1.SLDPRT](/thrusters/cad/T100-THRUSTER-BLUEESC-R1.SLDPRT) |
| STEP (.step)               | [T100-THRUSTER-BLUEESC-R1.STEP](/thrusters/cad/T100-THRUSTER-BLUEESC-R1.STEP)   |
| IGES (.igs)                | [T100-THRUSTER-BLUEESC-R1.IGS](/thrusters/cad/T100-THRUSTER-BLUEESC-R1.IGS) |
| STL (.stl)                 | [T100-THRUSTER-BLUEESC-R1.STL](/thrusters/cad/T100-THRUSTER-BLUEESC-R1.STL) |
| All Formats in a Zip File (.zip)   | [T100-THRUSTER-BLUEESC-R1.zip](/thrusters/cad/T100-THRUSTER-BLUEESC-R1.zip) |

### Mounting Bracket

| File Type                  | Link                          |
| -------------------------- | ----------------------------- |
| SolidWorks Part (.sldprt)  | [T100-P-BRACKET-R1.SLDPRT](/thrusters/cad/T100-P-BRACKET-R1.SLDPRT) |
| STEP (.step)               | [T100-P-BRACKET-R1.STEP](/thrusters/cad/T100-P-BRACKET-R1.STEP)   |
| IGES (.igs)                | [T100-P-BRACKET-R1.IGS](/thrusters/cad/T100-P-BRACKET-R1.IGS) |
| STL (.stl)                 | [T100-P-BRACKET-R1.STL](/thrusters/cad/T100-P-BRACKET-R1.STL) |
| All Formats in a Zip File (.zip)   | [T100-P-BRACKET-R1.zip](/thrusters/cad/T100-P-BRACKET-R1.zip) |

# Installation

The T100 Thruster is easy to install in many different applications. It was designed with versatile mounting options for a variety of different applications. It includes a counter-rotating set of propellers. Check out the tutorial on how to change the propeller. 


<div class="row">
  <div class="col-sm-4 col-md-4">
  	<div class="tile" style="background-image:url(/assets/images/tutorials/changing-a-propeller/propeller-3.png)">
  		<a href="/tutorials/changing-the-propeller/">Changing the Propeller <i class="fa fa-chevron-circle-right"></i></a>
  	</div>
  </div>
</div>



## Mounting Options

The T100 Thruster has several mounting options. The nozzle has four mounting holes that can be used to secure directly to vehicle. 

Occasionally, these holes may not be convenient or it may be difficult to secure the screws. In this case, the mounting bracket may be a better option. The mounting bracket is secured to the thruster through the four screw holes. It can be mounted in two different orientations as shown below.

<img src="/assets/images/bracket-1.png" class="img-responsive" style="max-width:500px" />

*Thruster with bracket in front/back orientation*

<img src="/assets/images/bracket-2.png" class="img-responsive" style="max-width:500px" />

*Thruster with bracket in side to side orientation*

The mounting bracket also includes a guide hole that can be drilled out with a 1/4" (6.5mm) drill bit to allow the wire to pass directly through the bracket.

Which mounting option you choose depends on your application.

## Electrical Connections

### Connecting to an External ESC

The thruster has a cable containing three wires. These three wires must be connected to the three motor wires on the electronic speed controller (ESC). The order does not matter, but if the motor direction is the reverse of what is desired, switch two of the wires. 

The three wires in the cable (green, white, blue) are always connected to the same motor phases, so connecting the colors in a consistent fashion will result in all motors rotating in the same direction.

### Connecting the BlueESC

The BlueESC must be pre-installed on the T100 Thruster. 

## How to Cut and Strip the Cable

The thruster comes with a tough urethane-jacketed cable. This is great for use underwater, but it can be a little difficult to remove the jacket from the wires if you want to cut the cable to a shorter length. During production, we use a thermal wire strippers, but the jacket can also be removed with a razor blade or hobby knife. Check out the cable stripping tutorial with pictures here:

<div class="row">
  <div class="col-sm-4 col-md-4">
  	<div class="tile" style="background-image:url(/assets/images/tutorials/wire-stripping/wire-strip-7.png)">
  		<a href="/tutorials/cable-stripping/">Cable Jacket Stripping <i class="fa fa-chevron-circle-right"></i></a>
  	</div>
  </div>
</div>

# Operation

The thruster requires a brushless electronic speed controller (ESC). If you are using the BlueRobotics BasicESC or BlueESC, please see the appropriate product page for instructions.

<div class="row">
  <div class="col-sm-4 col-md-4">
  	<div class="tile" style="background-image:url(/assets/images/documentation/besc-3-new.png)">
  		<a href="/besc/">Basic ESC <i class="fa fa-chevron-circle-right"></i></a>
  	</div>
  </div>
  <div class="col-sm-4 col-md-4">
  	<div class="tile" style="background-image:url(/assets/images/documentation/blueesc-inside.jpg)">
  		<a href="/bluesc/">BlueESC <i class="fa fa-chevron-circle-right"></i></a>
  	</div>
  </div>
</div>


**Important:**
Do not operate the thruster for extended periods out of water. The bearings are lubricated by the water and vibration and noise will be greater when dry.

## Clicking Noise

If you hear a clicking noise during operation, especially when operating in air, do not be alarmed. It's normal.

The thruster uses solid plastic bushings and due to the tolerances of the bushings and motors shafts, the shaft can move slightly in the bearing. The noise is drastically reduced or eliminated when operated in water. The water acts as a lubricant for the bearings and smooths operation.

# Care and Maintenance

The T100 Thruster does not require much maintenence.

##Normal Care

During normal use:

* Rinse with fresh water after use in saltwater to minimize the accumulation of salt deposits.

* Rinse after operating in sandy environments to remove sand particles.

If operated for extended periods in the water:

* Occasionally clean biological fouling and mineral deposits from the thruster or performance may be impacted.

##Disassembly/Assembly

You may need to take apart your thruster from time to time - or maybe you just want to take a peek at the inner workings of the T100! Either way, this tutorial illustrates how.

<div class="row">
  <div class="col-sm-4 col-md-4">
  	<div class="tile" style="background-image:url(/assets/images/tutorials/disassembly/disassembly-2.png)">
  		<a href="/tutorials/disassembly-assembly/">Disassembly/Assembly <i class="fa fa-chevron-circle-right"></i></a>
  	</div>
  </div>
</div>

# Troubleshooting

**The motor does not start.**

This is usually an issue with the proper commands being sent to the ESC. Please see the [ESC documentation](/besc/) for instructions on how to operate the ESC properly.

**The motor does not start but the propeller tries to move.**

This can be caused by a disconnected motor wire or a short between motor wires. Check that all three motor wires are connected and not shorting.

**The motor is jammed when turned by hand.**

This can be caused by something jamming the propeller or by major internal damaged caused by overheating, short circuits, or heavily worn bearings. Please disassemble the thruster and inspect for damage or blockage.

# Details

For all the engineers out there, here's some more info.

## Test Results

* **Endurance Testing.** [The T100 has been tested for over 2400 hours](https://youtu.be/HBtxAO1sL7k) in virtually continuous operation at half throttle, only being halted shortly for internal inspection every few weeks. Additionally, we have tested the T100 Thruster for up to 300 hours continuous operation at full throttle power.

* **Sand and Particulate Testing.** The thrusters handle small particulate matter very well. See [this video](https://www.youtube.com/watch?v=0X0EncNR8l8) of testing the thrusters in heavy sand.

* **Depth Testing.** As of writing, the thrusters have been tested to a maximum depth of 3000m (4500 psi) in static conditions. This testing was performed by Woods Holes Oceanographic Institution and you can [read more about it here](http://www.bluerobotics.com/pressure-testing-3000m-depth/).

## Quality Control

We perform the following tests on every thruster before they are shipped.

* **Insulation Test**, also know as a hipot test. We submerge the thruster in water and measure current leakage at high voltage (250V) to ensure that the insulation is sufficient.

* **Spin Test**. The thruster is operated in air across the entire speed range to ensure that it operates correctly.

* **Visual Inspection**. Each thruster is inspected for visual issues or damage.

##Painting the Thruster

If you want the thruster to match the color scheme of your vehicle, you can paint the propeller and other components. We have tested [Tamiya Spray Paint for Polycarbonate](http://www.tamiyausa.com/items/paints-amp-finishes-60/spray-ps-(polycarbonate)-61700) which comes in many colors and works well on the plastic.
