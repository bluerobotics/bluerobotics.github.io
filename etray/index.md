---
layout: default
title: Electronics Tray
order: 1
nav:
- Introduction: introduction
- Features: features
- - Specification Table: specification-table
- - 2D Drawings: d-drawings
- - 3D Model: d-model
- Installation: installation
- - Populating the Main Tray: populating-the-main-tray
- - Putting it All Together: putting-it-all-together
- - Completing the Wiring: completing-the-wiring

store-links:
- Electronics Tray:  #

manual-links:
- Thrusters: /thrusters
- BlueROV: /bluerov
---

Headline Image

# Introduction

The Etray is an exciting new way to mount your underwater electronics into a 4" watertight enclosure. We designed this tray to make installing and working on your electronics as convenient as possible. The Etray is designed to bolt to a 4" WTE O-ring
flange, so now when you want to access your electronics, simply remove the 4" tube from the O-ring flange. 

# Features

- Machined 5mm thick HDPE panels
- Hard anodized aluminum standoffs 
- Convenient cable routing slots and holes
- Mounting Locations for:
	- Up to 6 Basic 30A ESCs	
	- 1 3DR PixHawk autopilot
	- 1 Blue Robotics Tether Board
	- 1 BeagleBone Black or Raspberry Pi 2/3
	- 1 Blue Robotics Camtilt
	- 2 [Screw Terminal Blocks with 8 Circuits](http://www.digikey.com/product-search/en?keywords=wm5765-nd) 
	- 2 [Eurostyle Terminal Block with 9 Circuits](http://www.digikey.com/product-search/en?keywords=wm15918-nd)

## 2D Drawings

<img src="/etray/cad/ASSEM-ETRAY-X1.png" class="img-responsive" style="max-width:900px" />

## 3D Model

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Electronics Tray**																    |
| --------------------------------------------------------------------------------------------- |
| Electronics Tray Assembly     | [ASSEM-ETRAY-X1](/etray/cad/ASSEM-ETRAY-X1.zip)               |
| O-Ring Flange                 | [WTE4-M-FLANGE-SEAL-R2.zip](http://www.bluerobotics.com/models/WTE4-M-FLANGE-SEAL-R2.zip) |

# Installation

## Populating the main tray

1. Attach six Afro ESCs to the main body using 5" zip ties.
	
	a. The Afro ESCs should be attached to the main tray so that the mosfet side is facing away from the tray and so that the power wire side of the ESC is towards the back of the tray
	
2. Attach the black power terminal block to both sides of the tray using the M3x20 screws. Place on tray so that the side with jumpers is closer to the back.	

3. Connect the ESC power wires to the black terminal block. We have been using the convention, red on right.
	
4. Attach the eurostyle terminal blocks to the tray using the M2.5 standoffs and screws. The standoff towards the front should be on the left hand side.

5. Attach the ESC motor wires to the eurostyle terminal block in the order that they lay on the tray

6. Zip tie the PixHawk to the board using the 8" zip ties

7. Attach the tether board to the tray using the supplied screws and standoffs

8. Connect the ESC signal connectors to the first 6 pins of the PixHawk. Using the convention established in the ArduSub documentation

9. Run the power wires from the black power terminal block to the tether board

10. Connect power from the tether board to the PixHawk.

11. Use the included zip ties to clean up the wiring.


## Putting it All Together

1. Coat with silicone grease, then install the radial O-rings (size 238) on the O-ring flange.

2. Install the short blue standoffs into the O-ring flange finger tight plus 1/8 of a turn.

3. Set the etray rear tray on the short standoffs. Be sure to align the small slot on the rear tray with the standoffs that are aligned with the flange cap holes

4. Install two M3x8 screws into the two holes that are aligned with the narrow slots. Tighten the screws until they have slightly indented the rear tray

5. Install the two long standoffs into the two remaining holes finger tight plus 1/8 of a turn.

6. Place the power distribution side of the populated main tray into the slots of the rear tray. 

7. Place the populated front tray on top of the main tray and long standoffs, see Camtilt instructions for details on how to populate the front tray 

8. Install two M3x8 screws into the two holes of the front tray. Tighten the screws until they have slightly indented the front tray.

## Completing the wiring

1. Install the penetrators into the 14 hole end cap. Use silicone grease to lubricate the o-rings prior to installation and attach penetrators to end cap prior to installing end cap on the o-ring flange. The penetrators are much easier to install from the inside out.

	a. Install the 3 blank penetrators
	
	b. Install the Bar30 Pressure Sensor
	
	c. Install the vent penetrators
	
	d. Install the thruster penetrators
	
	e. Install the light and power penetrators
	
	f. Install the tether penetrator
	
2. Once you have installed all of the penetrators, you can install the 14 hole end cap onto the o-ring flange. Be sure to lubricate the face seal o-ring (size 154) with silicone grease first. 

3. After the endcap has been installed, it is time to connect all of the wires.

	a. Connect the power wires to the black power terminal block
	
	b. Connect the Bar30 wires to the I<sup>2</sup>C module on the PixHawk
	
	c. Connect the power and ground wire from the light to the black power terminal block, then connect the signal wire to channel 7 on the PixHawk.
	
	d. Connect the motor wires to the white eurostyle terminal block. Line up the blue wire from the motor with the black wire from the ESC, then the green wire from the motor with the yellow wire from the ESC, and then the white wire from the motor with the red wire from the ESC
	
	e. Connect the tether to the tether board.

4. Clean up the wiring with the provided zip ties. 	

5. Close up your water tight enclosure.

6. Perform a [vacuum test](http://docs.bluerobotics.com/tutorials/vacuum-test-plug/) of your seals, and you are ready to go!

