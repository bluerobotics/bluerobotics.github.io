---
layout: default
title: Newton Gripper
order: 1
nav:
- Introduction: introduction
- - Quick Start (Open/Close): quick-start-open-and-close-with-pwm-signal-source
- Specifications: specifications
- - Specification Table: specification-table
- - 2D Drawings: 2d-drawings
- - 3D Model: 3d-model
- Installation: installation
- - Removing a Penetrator: removing-a-blank-penetrator
- - Install Gripper Penetrator: install-newton-gripper-penetrator
- - Wiring Connections: wiring-connections
- - Reassemble Electronics Enclosure: reassemble-bluerov2-electronics-enclosure
- - Mounting the Newton Gripper: mounting-the-newton-gripper-to-the-bluerov2-frame
- - Cable Management: cable-management
- - Reinstall Buoyancy Blocks and Fairings: reinstall-buoyancy-blocks-and-fairings
- - Adjusting Ballast: adjusting-ballast-on-the-frame
- - Setup in QGC: setup-in-qgroundcontrol


store-links:
- Newton Gripper:  https://www.bluerobotics.com/store/-/newton-gripper-r1/

manual-links:
- BlueROV2: /brov2
---

<img src="/newton-gripper/cad/newton-gripper.png" class="img-responsive img-center" style="max-width:400px"  />

# Introduction

The _Newton Gripper_ is a sealed single function manipulator which can operate at depths of up to 300 meters. The *Newton Gripper* can be smoothly opened or closed with a servo PWM signal to provide the *BlueROV2* and other subsea vehicles with the ability to interact with the subsea environment to retrieve objects, attach recovery lines, or free a snagged tether.

## Quick Start (Open and Close with PWM signal source)

1. Connect the signal wire to the appropriate microcontroller pin
  - Yellow: PWM (3-5 volts)

2. Connect the power wires to a power source
  - Red: +9-18 volts
  - Black: Ground

3. Provide a servo PWM pulse from 1100 &mu;s () to 1900 &mu;s () 

# Specifications

## Specification Table


|      **Electrical**       |
| ------------- | --------- |
| **Item** | **Value** |
| Supply Voltage (V<sub>in</sub>) | 9 - 18 volts |
| PWM Logic Voltage  | 3 - 5 volts |
| Peak Current   | 6 / V<sub>in</sub> amps  |
| ------------- | --------- |
|   **Mechanical**    |
|--------------|--------------|
| Linear Force | xxxN |
| Max Lift Weight | xxKg |
| Travel | xxmm | 
| Jaw Opening | 70mm | 2.75 in
|  **Cable**  |
| Cable Diameter | 3.8 mm | 0.15 in |
| Cable Length | 1 m | 39 in |
| Cable Jacket | Black Urethane |
| Conductor Insulation | Acid-Etched FEP |
| Conductor Gauge | 20 AWG |
| Wires | Black - Ground |
| | Red - Power |
| | Yellow - Signal |
|  **Physical**  |
| ------------|-------------------------|
| Pressure Rating<sup>1</sup> | 300 m | 328 ft |
| Overall Length | 64.8 mm | 2.55 in |
| Overall Diameter   | 32 mm | 1.26 in |
| Bracket Mounting Hole Spacing | xx mm | 0.75 in |
| Bracket Screw Size | M3 |
| Weight in Air (w/ 1m cable) | 82 g    |   2.9 oz    |
| Weight in Water (w/ 1m cable) | 32 g    |  1.1 oz   |
|----------------------|

[1] Pressure rating is based on design and a conservative safety factor.

## 2D Drawings

### Newton Gripper Assembly

<img src="/newton-gripper/cad/Newton-Gripper-R1-2D.png" class="img-responsive" style="max-width:900px" />

### Newton Gripper Mount

<img src="/newton-gripper/cad/Newton-Gripper-Mount.png" class="img-responsive" style="max-width:900px" />

## 3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Newton Gripper**																		|
| --------------------------------------------------------------------------------------------- |
| Newton Gripper Assembly   | [Assem-NEWTON-GRIPPER-R1.zip](cad/NEWTON-GRIPPER-ASM-R1.zip)      |
| Newton Gripper Mount 	    | [NEWTON-GRIPPER-MOUNT.zip](cad/NEWTON-GRIPPER-MOUNT-R1.zip) 		|

# Installation

The _Newton Gripper_ can be easily installed onto a BlueROV2 using the accompanying mount.

## Removing a Blank Penetrator

To remove a blank penetrator from your BlueROV2, you will need the following tools:

- 1 x 2.5 mm hex driver
- 1x #1 Phillips head screwdriver
- 1x Penetrator wrench

1.	To ensure your ROV is completely powered off, please remove the battery completely from the 3” enclosure and place to the side.
<img src="/newton-gripper/cad/gripper-tutorial-1.jpg" class="img-responsive img-center" style="max-width:800px"  />
2.	Remove the fairings and buoyancy blocks by removing the self-tapping screws that hold the fairings to the frame.
<img src="/newton-gripper/cad/gripper-tutorial-2.PNG" class="img-responsive img-center" style="max-width:800px"  />
3.	Remove the 4” Electronics enclosure from the ROV by removing the M3x16 screws that mount the enclosure to the ROV cradle.
<img src="/newton-gripper/cad/clip-installation.PNG" class="img-responsive img-center" style="max-width:800px"  />
4. 	Remove the Vent Plug from the Vent Penetrator Bolt on the electronics enclosure. Remove the 4" Tube and forward dome assembly from the rear end cap.
<img src="/newton-gripper/cad/gripper-tutorial-remove-vent.JPG" class="img-responsive img-center" style="max-width:800px"  />
5.	Remove the blank penetrator as pictured from the 4” End Cap with the penetrator wrench that came with the BlueROV2 kit.
<img src="/newton-gripper/cad/end-cap-remove.jpg" class="img-responsive img-center" style="max-width:800px"  />

## Install Newton Gripper Penetrator

To install the Newton Gripper into the end cap, you will need the following parts and tools:

- 1 x Newton Gripper assembly
- 1 x Penetrator Nut (Red)
- 1 x Penetrator O-ring
- 1 x Silicone Grease – 10g Tube
- 1 x Isopropyl Alcohol Wipe
- 1 x Penetrator wrench

1.	Wipe the exterior surface of the electronics enclosure endcap clean with isopropyl alcohol or isopropyl alcohol wipes, and make sure it is free of any particles in the areas where the penetrator O-ring will sit.
2.	Remove the O-ring from the bag and apply silicone grease to it.
<img src="/newton-gripper/cad/grease-o-ring.png" class="img-responsive img-center" style="max-width:800px"  />
3.	Install the O-ring onto the Gripper cable penetrator.
4.  Install the Gripper cable penetrator on to the end cap in the hole your previously removed the blank penetrator from. Tighten to finger tight, then use the provided wrench to tighten it an additional ~1/16 of a turn. If you can’t loosen it with your fingers, it are tight enough.
<img src="/newton-gripper/cad/end-cap-gripper.jpg" class="img-responsive img-center" style="max-width:800px"  />
<img src="/newton-gripper/cad/gripper-tutorial-add-gripper-penetrator.JPG" class="img-responsive img-center" style="max-width:800px"  />

## Wiring Connections

To install the Newton Gripper wires into your BlueROV2, you will need the following tool:

-	1 x Large (~#2) Phillips head screw driver

1.  Plug the Gripper Signal Wire (Yellow) into Aux Channel 3 (or other free AUX Channel) with the yellow wire oriented toward the bottom of the Pixhawk.
<img src="/newton-gripper/cad/gripper-tutorial-signal-wire.jpg" class="img-responsive img-center" style="max-width:800px"  />
2.  Connect the power wires (red and black wires) into open screw terminals on the respective positive and negative terminal blocks.
<img src="/newton-gripper/cad/gripper-tutorial-power-connection.JPG" class="img-responsive img-center" style="max-width:800px"  />

## Reassemble BlueROV2 Electronics Enclosure

To reassemble your BlueROV2 electronics Enclosure, you will need the following parts and tools:

-	4 x M3x16 screws that were placed off to the side during disassembly
-	1 x Silicone Grease – 10g Tube
-	1 x 2.5 mm hex driver

1.	Reinstall 4” Watertight Enclosure onto ROV with the following steps:
    - Apply silicone grease to the two radial O-rings on the O-Ring Flange (4” Series) that is attached to the Electronics Tray then install the Watertight Enclosure (4” Series) with installed Dome End Cap to the O-Ring Flange (4” Series).
    - Mount the Electronics Enclosure to the frame using the M3x16 screws so that the dome is on the same side as the front center panels (the center panels without the 3 large holes). Install the M3x16 screws through the clips and into the Enclosure Cradle (4” Series). It is easier to install these screws if the clips are not fully tightened until all screws are through the clips and threading into the Enclosure Cradle (4” Series). This allows to clips to rotate so you can find the threaded hole in the Enclosure Cradle (4” Series) easily.

<img src="/newton-gripper/cad/clip-installation.PNG" class="img-responsive img-center" style="max-width:800px"  />

## Mounting the Newton Gripper to the BlueROV2 Frame

To mount the Newton Gripper to the BlueROV2 Frame, you will need the following parts and tools:

1. Remove the rear end cap from the 3" battery enclosure.
2. Remove the bottom frame panel from the BlueROV2 by removing the four M5x16 Screws.
<img src="/newton-gripper/cad/gripper-tutorial-remove-frame-bottom.JPG" class="img-responsive img-center" style="max-width:800px"  />
3. Remove the 3" battery enclosure by removing the M4x14 Screws from the bottom of the frame.
<img src="/newton-gripper/cad/gripper-remove-battery-enclosure.png" class="img-responsive img-center" style="max-width:800px"  />
4. Align the provided template onto the bottom side (with the counterbore holes) and tape in place.
5. With a hand powered drill and XXmm drill bit, drill straight holes in the indicated poisition markings. 
6. Re-attach the 3" battery enclosure to the frame with the M4x14 Screws.
7. Re-attach the bottom frame panel to the BlueROV2 with the four M5x16 Screws.
8. Place the Gripper assembly into the Mount half with the holes for mounting onto the frame.
<img src="/newton-gripper/cad/gripper-tutorial-mount-half.jpg" class="img-responsive img-center" style="max-width:800px"  />
9. Slide the other Mount half onto the gripper assembly and insert the Thumbscrew into the mount hole.
<img src="/newton-gripper/cad/gripper-tutorial-mount-full.jpg" class="img-responsive img-center" style="max-width:800px"  />
10. Coming from the aft end of the BlueROV2, weave the Gripper assembly into its mounting location and secure with the included M5x16 Screws.
<img src="/newton-gripper/cad/gripper-tutorial-weave.JPG" class="img-responsive img-center" style="max-width:800px"  />
<img src="/newton-gripper/cad/gripper-tutorial-attach.JPG" class="img-responsive img-center" style="max-width:800px"  />

## Cable Management

To clean up the external Newton Gripper cable, you will need the bag of xx zip ties and your scissors/wire cutters.

The primary goal of cable management is to prevent the wires from getting cut by the propellers. Make sure to check that no wire can reach a propeller after you have finished routing the Newton Gripper cable. Below are some examples of what the cable routing should look like.

## Reinstall Buoyancy Blocks and Fairings

To install the new buoyancy blocks and fairings, you will need the following parts and tools:

-	16 x Fairing screws that were placed off to the side during disassembly
-	4 x Fairings with buoyancy installed that were placed off to the side during disassembly
-	1x #1 Phillips head screwdriver

1.	 Reinstall Original Fairing Blocks onto ROV by installing the screws through the center panels and into the fairings.

<img src="/newton-gripper/cad/gripper-tutorial-2.PNG" class="img-responsive img-center" style="max-width:800px"  />

## Adjusting Ballast on the Frame

To adjust the amount or position of ballast on the frame you need the following parts and tools:

- 7 x 200g ballast weights (from original BlueROV2 Kit)
- 10 x 8-16 Thread, 5/8” Long, Thread-Forming Screw
- 1 x #2 phillips head screwdriver

To get the longest battery life and the best driving experience, it is important to have the ROV close to balanced from front to back in water and close to neutrally buoyant. The Newton Gripper adds a bit of weight to the ROV, so it will need to be retrimmed based on your operating conditions. Trimming the ballast may involve a bit of trial and error.

## Setup in QGroundControl

