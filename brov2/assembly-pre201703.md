---
layout: default
title: BlueROV2 Kit Assembly (Pre March 2017)
permalink: /brov2/assembly-pre201703/
order: 1
topnavbar: brov2
nav:
- Introduction: assembly-intro
- - Safety: safety
- Required Tools: required-tools-not-included
- What's Included: whats-included
- - Frame: frame
- - Electronics Enclosure: electronics-enclosure
- - Battery Enclosure: battery-enclosure
- - Thrusters: thrusters
- - Fairings: fairings
- - Tether: tether
- - Tools: tools
- Optional Configurations: optional-configurations
- - Standard Electronics: standard-electronics-package
- - Advanced Electronics: advanced-electronics-package
- - Lights: lights
- What's Not Included: what-you-need-for-operation-that-is-not-included
- Frame Assembly: assembling-the-frame
- - Battery Enclosure: mounting-the-battery-enclosure-to-the-bottom-panel
- - Center Panels: assembling-the-center-panels
- - Frame: assembling-the-frame-1
- Electronics Tray Assembly: assembling-the-electronics-tray
- - Advanced Overview: advanced-overview
- - Electronics Enclosure: partially-disassembling-the-electronics-enclosure
- - Connecting ESCs: connecting-the-esc-power-and-motor-wires
- - Standard Electronics: installing-the-standard-electronics
- - Advanced Electronics: installing-the-advanced-electronics
- Electronics Tray Wiring: wiring-the-electronics
- - Power Module: connecting-the-pixhawk-power-module
- - Standard Electronics Wiring: wiring-the-standard-electronics
- - Advanced Electronics Wiring: wiring-the-advanced-electronics
- - Signal Wiring: signal-cable-wiring
- Changing Propellers: changing-the-propellers
- Cable Installation: installing-the-cables
- - Penetrator Installation: installing-the-penetrators
- - End Cap Installation: installing-the-end-cap
- - Finishing Battery Enclosure: finishing-the-battery-enclosure
- - Optional Preliminary Vacuum Test: optional-preliminary-vacuum-test
- - Installing the SOS Leak Sensor: installing-the-sos-leak-sensor
- - Penetrator Power Wiring: installing-the-power-wires-from-the-penetrators
- - Penetrator Signal Wiring: installing-the-signal-wires-from-the-penetrators
- - Electronics Cable Routing: electronics-tray-cable-management
- Final Assembly: final-assembly
- - Mounting Electronics Enclosure: mounting-the-electronics-enclosure-onto-the-frame
- - Mounting Thrusters: mounting-the-thrusters-to-the-frame
- - Mounting Lights: mounting-the-lights
- - Mounting the Tether: mounting-the-tether-to-the-frame
- - External Cable Management: thruster-and-lumen-cable-management
- - Installing Fairings: installing-the-fairings-and-buoyancy
- - Ballast: mounting-ballast-to-the-frame
- Topside Setup: topside-setup
- Next Steps: next-steps
- Issue Reporting: issue-reporting

store-links:
- BlueROV: http://bluerobotics.com/store/rov/bluerov2/

manual-links:
- Software Setup: /brov2/software-setup/
- Specifications: /brov2/
- Operations Manual: /brov2/operation/

---

<img src="/brov2/cad/BlueROV2-Black-Sands-1.png" class="img-responsive img-center" style="max-width:800px" />

# Assembly Intro

**THIS PAGE IS THE ASSEMBLY INSTRUCTIONS FOR BLUEROV2 KITS SHIPPED PRIOR TO MARCH 2017.** Newer kits should refer to the [main assembly instructions here](/brov2/assembly/).

The _BlueROV_ kit comes almost ready to dive. The assembly can be completed with basic hand tools; no soldering or potting is required. We have included a couple of the tools that will be used most often to make assembly and regular use go as smoothly as possible.

## Safety 

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with electricity, especially in water, always practice caution. Always ensure that connections are secure and watertight. Keep your body away from spinning motors and propellers.

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with silicone grease and threadlocker, take care to minimize skin contact. Wear protective nitrile or PVC gloves when handling.

# Required Tools Not Included

- 2.5 or 3mm Flat Head Screwdriver
- \#2 Phillips Head Screwdriver
- Wire Cutters or Scissors (for cutting zip ties)
- Thread-locker such as [Loctite 243](https://www.amazon.com/Loctite-1330799-Resistant-thread-locker-6-milliliter/dp/B004L439FE/ref=sr_1_1?ie=UTF8&qid=1466440165&sr=8-1&keywords=loctite+243+thread-locker)
- Tweezers (for assistance installing wires into terminal blocks)
- Isopropyl Alcohol or isopropyl alcohol wipes
- Vacuum Pump such as [this one](https://www.amazon.com/HFS-Brake-Bleeder-Vacuum-Tuner/dp/B00NP60URE/ref=sr_1_10?ie=UTF8&qid=1470775016&sr=8-10&keywords=vacuum+pump)

# What's Included

## Frame

Quantity      | Part														| Usage
------------- | ------------------------------------------------------------| ----------------------
2             | Front Center Panel (1/2" thick black HDPE)        			|    
2             | Rear Center Panel (1/2" thick black HDPE)           		|     	       
1             | Bottom Panel (1/2" thick black HDPE)                       	|  
2             | Side Panel (3/8" thick black HDPE)                       	|
2             | Electronics Enclosure Cradle (Black Anodized Aluminum)  	| Mounting the electronics enclosure to the frame
8 			  | M4x18 Socket Head Cap Screw (316 Stainless Steel)           | Mounting the electronics enclosure cradles to the frame        
12            | M5x16 Button Head Cap Screw (316 Stainless Steel)           | Assembling the frame
7             | 8-16 Thread, 5/8" Long, Thread-Forming Screw                | Mounting the ballast to the frame                         
7             | 200g Ballast												| 

## Electronics Enclosure                                                         

Quantity      | Part																		| Usage
------------- | ----------------------------------------------------------------------------| ---------------
1             | Electronics tray with terminal blocks and ESCs installed                    |                      
1             | 4" watertight enclosure with optically clear dome installed                 |            
1             | 14 hole end cap with 3 blank penetrator, 1 Bar30 pressure sensor, 1 vent, and 1 power cable installed	|
1             | Set of tether board power wires  											| Provided power to the tether board
4             | M3x16 Socket Head Cap Screw (316 Stainless Steel)  							| Mounting the electronics enclosure to the electronics enclosure cradle
1			  | Spade to XT60 adapter   													| Connecting the PixHawk Power Module to the power terminal block
1			  | XT60 to 3.5 mm Bullet Connector adapter										| Connecting the PixHawk Power Module to the battery
4			  | 3-24 x 3/8" long self tapping screws (316 Stainless Steel)					| Mounting the tether interface board (Fathom-S or Fathom-X)
4 			  | 1/8" x 1/8" diameter spacers (Nylon)										| Mounting the tether interface board (Fathom-S or Fathom-X)
10 			  | 5 1/2" Zip Ties (Nylon)														| Cable management inside the electronics enclosure
2 			  | Pieces of two sided tape  													| Mounting PixHawk
4			  | 3-24 x 3/8" long self tapping screws (316 Stainless Steel)					| Mounting the Raspberry Pi (Advanced Electronics only)
2 			  | 1/8" x 1/8" diameter spacers (Nylon)										| Mounting the Raspberry Pi (Advanced Electronics only)
1			  | 1 1/2" long x 3/8" diameter heat shrink										| Battery cable strain relief

## Battery Enclosure

Quantity      | Part																		| Usage
------------- | ----------------------------------------------------------------------------| ------------------------
2             | Battery Enclosure Cradle (Black Anodized Aluminum w/ rubber strip)   		| Mounting the battery enclosure to the frame       
1             | 3" Watertight Enclosure 8-3/4" Long                             			|
1             | 3" Blank End Cap (Anodized Aluminum 6061)         							|
1             | 3" 4 Hole End Cap w/ 2 blank penetrators and 1 vent installed (Anodized Aluminum 6061)  |                                                              
1             | XT90 to 3.5mm Bullet Connector Adapter										| Adapting power wire connector to battery connector
4             | M4x14 Socket Head Cap Screw (316 Stainless Steel)   						| Mounting the battery cradle to the frame
4             | M3x12 Socket Head Cap Screws (316 Stainless Steel)             				| Connecting the battery cradles           

## Thrusters

Quantity      | Part													| Usage
------------- | --------------------------------------------------------|--------------
6   		  | T200 Thrusters w/ installed penetrator					|
16            | M3x16 Socket Head Cap Screw (316 Stainless Steel)      	| Mounting thrusters 1, 2, 3, and 4 to the frame
8 			  | M3x12 Socket Head Cap Screw (316 Stainless Steel)		| Mounting thrusters 5 and 6 to the frame
30            | 5 1/2" Zip Ties (Nylon)									| Routing the thruster and lumen cables

## Fairings

Quantity      | Part																	|
------------- | ------------------------------------------------------------------------| ---------------------
4             | Fairings (Blue Polycarbonate)                    						|
4             | Buoyancy Foam (R-3318 Urethane Foam)                        			|
16            | #4 Size, 3/4" Long Pan Head Self Tapping Screw (316 Stainless Steel)    | Mounting the fairings and buoyancy to the frame                               

## Tether

Quantity      | Part														| Usage 
------------- | ------------------------------------------------------------|--------------
1             | Fathom Tether w/ installed penetrator (25-300m)           	|
1             | Fathom Thimble                          					| Mounting the tether to the frame	
5             | Heavy Duty Zip Ties											| Mounting the tether to the thimble and frame            

## Tools                                                      

Quantity      | Part													| Usage
------------- | --------------------------------------------------------| ---------------
1             | Silicone Grease Tube									| Lubricate O-rings prior to installation 
1             | O-Ring Pick   											| Remove and install O-rings
1             | 2.5mm Hex Driver										| Install M3 screws 
1			  | #1 Phillips Head Screwdriver    						| Install the fairing screws 
1			  | Blue Robotics Penetrator Wrenches  
                     | Install penetrators
1			  | 1.5mm Hex Key											| Thruster dissassembly
1			  | 2mm Hex Key											   	| Change propellers
1			  | 3mm Hex Key												| Install M4 and M5 screws

<img src="/brov2/cad/brov2-box-open-parts-displayed.png" class="img-responsive" style="max-width:900px" />

# Optional Configurations

## Standard Electronics Package 

Quantity      | Part
------------- | --------------------------------------------------------
1             | Fathom-S Tether Interface Board
1             | Analog Camera with Camera Tilt
1             | 3DR PixHawk (Optional)

## Advanced Electronics Package

Quantity      | Part
------------- | --------------------------------------------------------
1             | Fathom-X Tether Interface 
1             | HD Raspberry Pi Camera with Camera Tilt
1             | Pre-loaded SD Card
1             | Battery Eliminator Circuit (for powering the Raspberry Pi)
1             | 3DR PixHawk (Optional)
1             | Raspberry Pi 3 
1 			  | PixHawk Shelf (for mounting the PixHawk to the Raspberry Pi)

## Lights

Quantity      | Part
------------- | --------------------------------------------------------
1-2           | Lumen Subsea Light w/ Mounts (Pair, Pre-Connected) (Optional)      

## What You Need for Operation that is Not Included 

There are some items necessary for operation that are not included with the kit. 

 - Analog screen for the standard BlueROV2. We recommend [this one](https://www.adafruit.com/products/2261).
 - A gamepad controller. We recommend [an Xbox360 Controller](http://www.xbox.com/en-US/xbox-360/accessories/controllers/wired-controller) or [a Logitech F310 Gamepad](http://gaming.logitech.com/en-us/product/f310-gamepad).
 - A laptop or a tablet. ArduSub works on Mac, Linux, Windows, iOS, and Android. 
 - A battery for the BlueROV2. We recommend getting our [18AH Lithium-ion Battery](http://www.bluerobotics.com/store/electronics/batteries/battery-li-4s-18ah-r1/) or 2 or 3 of [these](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=56844)
 - A battery charger, we use and recommend [this one](https://hobbyking.com/en_us/turnigy-reaktor-300w-20a-ac-dc-synchronous-balance-charger-discharger-us-plug.html).   
 
# Assembling the Frame

## Mounting the Battery Enclosure to the Bottom Panel

To mount the battery enclosure to the bottom panel you will need the following parts and tools:

- 2 battery cradles 
- Thread-locker 
- Bottom panel 
- Bag with 4 M4x14 socket head cap screws and 4 M3x12 socket head cap screws
- Battery Enclosure
- 3 mm allen hex key
- 2.5 mm allen hex driver

1. Open the battery enclosure and set the bags inside of it to the side, except for the bag with 4 M4x14 and 4 M3x12 screws in it.

	<img src="/brov2/cad/brov2-battery-enclosure-unpacked.png" class="img-responsive" style="max-width:900px" />

2. Apply one drop of threadlocker to the bottom of each M4x14. 

	<img src="/brov2/cad/brov2-loctite-applied.png" class="img-responsive" style="max-width:900px" />

3. Attach that battery cradle to the bottom panel, using 4 M4x14 socket head cap screws. Be sure that the screw head is in the [counterbore](https://en.wikipedia.org/wiki/Counterbore). The bottom panel is only counterbored on one side. 

	<img src="/brov2/cad/brov-assembly-step1-annotated.png" class="img-responsive" style="max-width:900px" /> 

4. Tighten the screws until they are flush with the bottom of the bottom panel. 

	<img src="/brov2/cad/brov2-battery-cradle-screws-flush.png" class="img-responsive" style="max-width:900px" /> 

5. Apply one drop of thread-locker to the end of each of the 4 M3x12 screws.

6. Grab the battery enclosure and the other battery cradle and install the 4 M3x12 screws into the cradle to clamp the battery enclosure into place. Install all four screws loosly at first and then slowly tighten them on both sides evenly.
Keep the battery enclosure approximately centered in the cradles.

	<img src="/brov2/cad/brov-assembly-step2-annotated.png" class="img-responsive" style="max-width:900px" />

	When you are finished tightening the screws, both sides should look similar to this.

	<img src="/brov2/cad/brov2-battery-cradle-screws-fully-installed.png" class="img-responsive" style="max-width:900px" />
	
## Assembling the Center Panels

To assemble the center panels you will need the following tools and items:

- 2 front center panels 
- 2 rear center panels 
- Thread-locker 
- The bag with 8 M4x18 socket head cap screws 
- 3 mm allen hex key 

1. Apply one drop of thread-locker to the end of each of the 8 M4x18 screws.

2. Attach one of the electronics enclosure cradle to the rear center panels. 

	<img src="/brov2//cad/brov-assembly-step3-annotated.png" class="img-responsive" style="max-width:900px" />
	
3. Attach the other electronics enclosure cradle to the front center panels.

	<img src="/brov2//cad/brov-assembly-step4-annotated.png" class="img-responsive" style="max-width:900px" />
	
## Assembling the Frame

To assemble the frame you will need the following tools and items:

- Thread-locker 
- The bag with 12 M5x12 button head cap screws 
- 2 Side Panels
- The bottom panel with the battery enclosure installed
- The front center panel assembly
- The rear center panel assembly
- 3 mm hex key
	
1. Apply one drop of thread-locker to the end of the 12 M5x16 screws.
	
2. Install the side panels to the bottom panel; the blank end cap on the battery enclosure should be on the same side as the Lumen mounting holes. Take care not to overtighten; turn with the short end of the hex key. 

	<img src="/brov2//cad/brov2-assembly-frame-1.png" class="img-responsive" style="max-width:900px" />
	
3. Install the center panel assemblies to the side panels. Take care not to overtighten; turn with the short end of the hex key.

	<img src="/brov2//cad/brov2-assembly-frame-2.png" class="img-responsive" style="max-width:900px" />
	
Now the ROV should look like the picture below, and it is time to move on to setting up the electronics enclosure.

<img src="/brov2//cad/assembled-frame.png" class="img-responsive" style="max-width:900px" />

# Assembling the Electronics Tray

## Advanced Overview

The electronics enclosure ships with the camera mount attached to the port side of the front panel of the electronics tray. It also ships with the power terminal blocks and the motor terminal blocks installed. 

The pictures below show orientation of the main pieces of hardware when the tray is assembled. They also point out the names of several of the important parts for assembly that will be discussed throughout the instructions.

<b> <font size="4"> Advanced Electronics Top View </font> </b> 
<img src="/brov2//cad/advanced-top-render-1.png" class="img-responsive" style="max-width:900px" />

<b> <font size="4"> Advanced Electronics Starboard View </font> </b> 
<img src="/brov2//cad/advanced-starboard-render-1.png" class="img-responsive" style="max-width:900px" />

<b> <font size="4"> Advanced Electronics Port View </font> </b> 
<img src="/brov2//cad/advanced-port-render-1.png" class="img-responsive" style="max-width:900px" />

<b> <font size="4"> Advance Electronics Front View </font> </b> 
<img src="/brov2//cad/advanced-front-render-1.png" class="img-responsive" style="max-width:900px" />
	
## Partially Disassembling the Electronics Enclosure

To partially disassemble the electronics enclosure you will need the following tools and items:

- Large flat head screw driver (Optional)
- The electronics enclosure assembly
- 2.5 mm allen key driver 

1. Remove the tube from the rear flange. You can twist a large flat head screwdriver in the slots if it does not pull off easily. Set the loose items that come inside the electronics enclosure to the side so you can find them easily later.

	<img src="/brov2/cad/electronics-assembly-step1.PNG" class="img-responsive" style="max-width:900px" />
		
2. Remove the rear 14 hole end cap by removing the screws using the M2.5 allen driver. Place the M3x12 screws, clips, and O-ring in a safe place. 

	<img src="/brov2/cad/electronics-assembly-step2-annotated.png" class="img-responsive" style="max-width:900px" />
	
	<img src="/brov2/cad/etray-disassemble.png" class="img-responsive" style="max-width:900px" />

## Connecting the ESC Power and Motor Wires

To connect the ESC power and motor wires, you need the following parts and tools

- 1.5 mm allen hex key
- 2.5 or 3 mm flat head screw driver
- Phillips head screw driver
- Electronics tray
- Tweezers

Here is a diagram of where the ESC power wires should go for the port and starboard side. The camera is mounted on the port side.

<img src="/brov2/cad/connecting-esc-power-starboard.png" class="img-responsive" style="max-width:900px" />

<img src="/brov2/cad/connecting-esc-power-port.png" class="img-responsive" style="max-width:900px" />

1. Step 1 is optional, but it definitely makes installing the power wires easier. Use the 1.5 mm hex key to remove the motor terminal blocks on both sides. 

	<img src="/brov2/cad/brov2-euro-terminal-removal.png" class="img-responsive" style="max-width:900px" />

2. Pass the ESC signal wires from the port side to the starboard side through the holes by the power terminal block. This will help with cable routing later.

3. Feed all black ESC power wires to the port side using the holes near the power terminal block and feed all red ESC power wires through to the starboard side. Connect the power wires to their terminal blocks. Make sure to keep the outer screw terminals open, the power wires will get connected there later. Using tweezers can help with wire routing and pushing the spades into the screw terminals.

	<img src="/brov2/cad/brov2-esc-signal-wire-routing.png" class="img-responsive" style="max-width:900px" />

4. If you did step 1, reinstall the motor terminal blocks using the 1.5 mm hex key

	<img src="/brov2/cad/brov2-euro-terminal-reinstall-starboard.png" class="img-responsive" style="max-width:900px" />

5. Connect the motor power wires to the motor terminal blocks as shown below, using your 2.5 or 3 mm flat head screw driver.

	<img src="/brov2/cad/brov2-motor-wire-install-starboard.png" class="img-responsive" style="max-width:900px" />

	<img src="/brov2/cad/brov2-motor-wire-install-port.png" class="img-responsive" style="max-width:900px" />
	
## Installing the Standard Electronics

If you have the Advanced Electronics, please skip to [Installing the Advanced Electronics](#installing-the-advanced-electronics)

To install the standard electronics, you need the following parts and tools:

- PixHawk Autopilot
- Fathom-S Tether Interface Board
- Bag with 4 short self tapping screws and 4 plastic spacers
- \#1 Phillips head screw driver

1. Clean the back of the PixHawk and the area on the electronics tray (starboard side) that you want to mount the PixHawk to with isopropyl alcohol.
		
2. Attach the PixHawk using the two sided tape.

	<img src="/brov2/cad/pixhawk-2-sided-tape.png" class="img-responsive" style="max-width:900px" />
	
	<img src="/brov2/cad/pixhawk-installed.png" class="img-responsive" style="max-width:900px" />

2. 	Attach the Fathom-S Tether Interface Board to the Electronics Tray, using the self tapping screws and spacers. The tether board should mount to the port side.

	<img src="/brov2/cad/fathom-step-2.png" class="img-responsive" style="max-width:900px" />

## Installing the Advanced Electronics

If you have the Standard Electronics, please skip to [Wiring the Electronics](#wiring-the-electronics)

To install the Advanced Electronics, you need the following parts and tools:

- The Electronics Tray
- Raspberry Pi
- Raspberry Pi Shelf
- SD Card
- Bag with 4 self tapping screws and 4 spacers
- Bag with 4 self tapping screws and 2 spacers
- Fathom-X Tether Interface Board
- Two sided tape
- \#1 Phillips head screw driver

1. Install the microSD card into the Raspberry Pi.

2. Connect the camera cable from the Raspberry Pi Camera to the Raspberry Pi as shown below. To connect the camera cable, lift the tabs on the camera cable port on the Raspberry Pi, push the cable in (match the orientation in the picture), then push the tabs back down. Note the cable passing through the hole in the front panel of the electronics tray.

	<img src="/brov2/cad/brov2-pi-camera-attached.png" class="img-responsive" style="max-width:900px" />

3. Attach the PixHawk shelf to the Raspberry Pi using two of the self tapping screws from the bag with four self tapping screws and two spacers. Mount the shelf in the orientation shown in the picture to ensure that you have access to the GPIO pins on the Raspberry Pi.

	<img src="/brov2/cad/brov2-pixhawk-shelf-installed.png" class="img-responsive" style="max-width:900px" />

4. Attach the PixHawk to the PixHawk shelf, using the included double sided tape. Note the orientation of the PixHawk relative to the Raspberry Pi.

	<img src="/brov2/cad/pixhawk-2-sided-tape.png" class="img-responsive" style="max-width:900px" />

	<img src="/brov2/cad/brov2-pixhawk-fully-installed.png" class="img-responsive" style="max-width:900px" />

5. Attach the PixHawk Raspberry Pi Assembly to the Electronics Tray, using two of the self tapping screws and two of the spacers. The spacers should be between the Raspberry Pi and the tray. Make sure that the orientation matches the picture. 

	<img src="/brov2/cad/brov2-pixhawk-on-pi-on-tray.png" class="img-responsive" style="max-width:900px" />

6. Attach the Fathom-X Tether Interface Board to the Electronics Tray using the four self tapping screws and four spacers.

	<img src="/brov2/cad/brov2-fathomx-installed.png" class="img-responsive" style="max-width:900px" />

# Wiring the Electronics

## Connecting the PixHawk Power Module

To connect the PixHawk Power Module, you need the following parts and tools:

- Spade to XT60 adapter
- PixHawk Power Module
- XT60 to bullet connector adapter
- PixHawk Power Wire
- Phillips head screw driver

1. Connect the spade to XT60 adapter to the power terminal blocks. You want the Power Module to be on the port side, so route the red +16 V wire through the hole near the power terminal blocks. 

	<img src="/brov2/cad/brov2-current-monitoring-3.png" class="img-responsive" style="max-width:900px" />

2. Connect the PixHawk Power Module to the XT60 connector you just installed.

	<img src="/brov2/cad/brov2-current-monitoring-2.png" class="img-responsive" style="max-width:900px" />

3. Connect the XT60 to Bullet Connector adapter to the PixHawk Power Module.

	<img src="/brov2/cad/brov2-current-monitoring.png" class="img-responsive" style="max-width:900px" />

4. Connect the PixHawk Power Wire to the PixHawk Power Module and the power port on the PixHawk.

	<img src="/brov2/cad/brov2-pixhawk-power-wire-2.png" class="img-responsive" style="max-width:900px" />

## Wiring the Standard Electronics

If you have the Advanced Electronics, please continue to [Wiring the Advanced Electronics](#wiring-the-advanced-electronics)

To complete the wiring of the Standard Electronics kit you need the following items:

- The analog camera cable (included attached to the camera)
- PixHawk serial cable (included with the PixHawk)
	
1. Attach the camera wire to the "NTSC/PAL CAMERA" port on the Fathom-S Tether Interface Board.

	<img src="/brov2/cad/camera-wire-install.png" class="img-responsive" style="max-width:900px" />
	
2. Connect the serial wire (included with the PixHawk) from the "DF13 UART" port on the Fathom-S Tether Interface Board to the "Telem1" Serial Port on the PixHawk.

## Wiring the Advanced Electronics

If you have the Standard Electronics, please continue to [Signal Cable Wiring](#signal-cable-wiring)

To complete the wiring of the Advanced Electronics you need the following items and tools:

- The USB cable
- The Ethernet cable
- The tether board power wires
- The Battery Eliminator Circuit
- Phillips head screw driver

1. Connect the USB cable to the PixHawk and the Raspberry Pi as shown.

	<img src="/brov2/cad/brov2-usb.png" class="img-responsive" style="max-width:900px" />

2. Connect the ethernet cable to the Raspberry Pi and the Fathom-X Tether Interface Board.

	<img src="/brov2/cad/brov2-ethernet-3.png" class="img-responsive" style="max-width:900px" />

3. Connect the tether board power wires to the Fathom-X Tether Interface Board and the power terminal blocks. 

	<img src="/brov2/cad/brov2-fathomx-power.png" class="img-responsive" style="max-width:900px" />

4. Connect the Battery Eliminator Circuit to the Raspberry Pi and the power terminal blocks. 

	<img src="/brov2/cad/brov2-pi-power.png" class="img-responsive" style="max-width:900px" />

## Signal Cable Wiring

To complete the signal cable wiring you need the following items:

- A small (~2mm) flat head screw driver
- Wire cutters

1. Remove and cut the 5V line (middle wire) on 5 of the ESC signal wires. 3DR [recommends only connecting one ESC +5V output](https://pixhawk.org/users/actuators/pwm_escs_and_servos)

	i. Seperate the three wires coming into the connector plug to about 2 inches away from the plug.
		
	ii. Remove the center pin from the plug by lifting up on the plastic with a small flat head screw driver.
	
	iii. Cut off the +5V line using wire cutters or scissors about an inch away from the connector plug
	
	<img src="/brov2/cad/esc-5-volt-remove-2.png" class="img-responsive" style="max-width:900px" />

2. Connect the ESC signal wires to the PixHawk Main Out.

	- Channel 1: ESC 1
	- Channel 2: ESC 2
	- Channel 3: ESC 3
	- Channel 4: ESC 4 
	- Channel 5: ESC 5
	- Channel 6: ESC 6 

	<br>   See the two diagrams below for a reminder of which ESC is which.

	<img src="/brov2/cad/connecting-esc-power-starboard.png" class="img-responsive" style="max-width:900px" />

	<img src="/brov2/cad/connecting-esc-power-port.png" class="img-responsive" style="max-width:900px" />

3. Connect the camera servo signal wire to PixHawk Main Out Channel 8. Do not remove the +5V line from this connector.

<img src="/brov2/cad/brov2-pixhawk-signal-wires-installed-2.png" class="img-responsive" style="max-width:900px" />
	
# Changing the Propellers

To change the propellers on three of the thrusters you will need the following items and tools:

- 3 T200 Thrusters (included with ROV)
- Large (~#3) Phillips Head Screwdriver (not included)
- 2mm Allen Hex Key (included with ROV)

1. Remove 3 thrusters from their tubes. These will become Thrusters 1, 2, and 5.
	
2. Switch the propellers from the clockwise thrusters that come installed to the counter-clockwise thrusters that come along with the thrusters. Please refer to our [Changing the Propeller Tutorial](/tutorials/changing-the-propeller) for detailed instructions.

3. The next few steps will be easier if you keep the clockwise and counter-clockwise thrusters seperated, and for reference the picture below shows clockwise and counter-clockwise propellers installed on thrusters.

	<img src="/brov2/cad/clockwise-counter-clockwise.png" class="img-responsive" style="max-width:900px" />
	
# Installing the Cables

## Installing the Penetrators

To install the penetrators you will need the following items and tools:

- The bag with 1 black penetrator nuts, 8 red penetrator nuts, and 9 O-rings
- Silicone grease 
- 14 hole end cap with blanks, Bar30, vent, and power wire installed 
- 3 T200 with counter-clockwise thrusters 
- 3 T200 with clockwise thrusters 
- 1 set of daisy chained Lumen lights 
- 1 tether with penetrator installed
- 1 Penetrator wrench

The electronics enclosure end cap ships with 3 blank penetrators, 1 Bar30 pressure sensor, 1 vent, and 1 battery power wire penetrator installed.

<img src="/brov2/cad/end-cap-as-shipped.png" class="img-responsive" style="max-width:900px" />

If you install the remaining penetrators as shown in the diagram below, it will keep everything neat, organized and logical.

<img src="/brov2/cad/end-cap-final.png" class="img-responsive" style="max-width:900px" />
	
1. Remove 8 of the O-rings and apply Silicone grease to them. Hold on to that other O-ring, you will need it in a minute. 

	<img src="/brov2/cad/grease-o-ring.png" class="img-responsive" style="max-width:900px" />

2. Install the O-rings onto all of the thruster penetrators, the lumen penetrator, and the tether penetrator. 
	
3. Install the penetrators to the end cap in the order shown below. Tighten to finger tight, then use the provided wrench to tighten them an additional ~1/16 of a turn. If you can't loosen them with your fingers, they are tight enough. 

	- Thruster 1 (CCW propeller) with red penetrator nut
	- Thruster 5 (CCW propeller) with red penetrator nut
	- Thruster 3 (CW propeller) with red penetrator nut
	- Lumen with red penetrator nut
	- Thruster 4 (CW propeller) with red penetrator nut
	- Thruster 6 (CW propeller) with red penetrator nut
	- Thruster 2 (CCW propeller) with red penetrator nut
	- Tether with black penetrator nut

## Installing the End Cap

To reinstall the end cap you will need the following items and tools:

- The O-ring, the 6 M3x12 screws, and the clips that you removed from the end cap earlier
- Silicone grease
- End cap with thrusters, lumen, tether, and power cable hanging off the back
- 2.5 mm allen head hex driver

1. Retrieve the Face Seal O-ring, the 6 M3x12 screws, and the 2 clips that you removed earlier

	<img src="/brov2/cad/etray-disassemble.png" class="img-responsive" style="max-width:900px" />
	
2. Clean the O-ring and make sure that it is free of any debris or damage. If it appears to be damaged, replace it with the spare 4" face seal O-ring.

3. Apply Silicone grease to the O-ring.

4. Install O-ring back onto the flange seal. 

5. Reapply one drop of thread-locker to the end of the 6 M3x12 screws.
	
6. Install the end cap onto the O-ring. Do not fully tighten any screws when first installing them; it may cause the O-ring to slip out of its groove. The end cap's orientation when installed should match the image below.

	<img src="/brov2/cad/brov2-endcap-installed-iso.png" class="img-responsive" style="max-width:900px" />

## Finishing the Battery Enclosure

To finish installing the battery enclosure you need the following parts and tools:

- The bag with one black penetrator nut and one O-ring left in it
- The 4 hole 3 inch enclosure end cap
- 1 Penetrator wrench
- XT90 to 3.5 mm bullet connector adapter
- 1.5 inch piece of heat shrink
- heat gun, hairdryer, or lighter
 
1. Find the bag that had the penetrator nuts and O-rings in it and grab the remaining red nut and O-ring.
	
2. Apply Silicone grease to the O-ring.

3. Install the O-ring onto the battery power cable penetrator.
	
4. Install the battery power cable penetrator into the opening in the battery end cap.

	<img src="/brov2/cad/brov2-battery-penetrator.png" class="img-responsive" style="max-width:900px" />

5. Place the 1.5 inch long piece of black heat shrink over the end of the battery power cable penetrator.

6. Apply heat to the heat shrink using your heat gun, hairdryer, or lighter until the heat shrink is firmly attached to the penetrator and snug to the two wires. You should be able to see the threads in the penetrator through the heat shrink.

	<img src="/brov2/cad/brov2-strain-relief-2.png" class="img-responsive" style="max-width:900px" />

7. Install the XT90 to bullet connector adapter to the battery power wire. 

	<img src="/brov2/cad/brov2-bullet-to-xt90.png" class="img-responsive" style="max-width:900px" />

## Optional Preliminary Vacuum Test

This is the best point in the assembly process to perform a vacuum test. Since you have installed all of the penetrators, but have not done any of the wiring, troubleshooting will be as easy as possible. To prepare for the vacuum test you need to purchase a vacuum pump. We recommend [this one](https://www.amazon.com/HFS-Brake-Bleeder-Vacuum-Tuner/dp/B00NP60URE/ref=sr_1_10?ie=UTF8&qid=1470775016&sr=8-10&keywords=vacuum+pump).

1. Install the 4 hole 3 inch end cap onto the battery enclosure.

	<img src="/brov2/cad/3-inch-end-cap-installed.png" class="img-responsive" style="max-width:900px">

2. Install the electronics enclosure onto the 14 hole 4 inch end cap.

	<img src="/brov2/cad/4-inch-end-cap-installed.png" class="img-responsive" style="max-width:900px">

3. Assemble the vacuum tee.

	<img src="/brov2/cad/vacuum-tee-assembled.png" class="img-responsive" style="max-width:900px">

Now you are ready to perform the preliminary vacuum test.

1. Test your vacuum pump to ensure that it is not leaking. See our [Testing the Test Setup Tutorial](http://docs.bluerobotics.com/tutorials/vacuum-test-plug/#testing-the-test-setup) for detailed information. 

2. Insert one of the vacuum plugs into the battery enclosure.

	<img src="/brov2/cad/vent-on-3-inch-end-cap.png" class="img-responsive" style="max-width:900px">

3. Insert the other vacuum plug into the electronics enclosure.

	<img src="/brov2/cad/vent-on-4-inch-end-cap.png" class="img-responsive" style="max-width:900px">

4. Pump the vacuum until the gauge reads 10 in. Hg [34 kPa] vacuum.

	<img src="/brov2/cad/vacuum-10-inches.png" class="img-responsive" style="max-width:900px">

5. Let the BlueROV2 and pump sit for 15 minutes.

6. If the gauge reads above 9 in. Hg [31 kPa] after 15 minutes, your seals are acceptable.

	<img src="/brov2/cad/vacuum-9-inches.png" class="img-responsive" style="max-width:900px">

If the gauge reads below 9 in. Hg [31 kPa] vacuum after 15 minutes, you should check the following:

1. Make sure that the M3 screws on the front and back end caps of the battery and electronics enclosure using the M2.5 hex driver. If you are able to tighten one or more, attempt the vacuum test again.

2. Make sure that the penetrators on the battery and electronics enclosure are fully tightened. Check by attempting to loosen by hand. If you are able to tighten one or more, attempt the vacuum test again.

3. Make sure that all of the O-rings are installed in the penetrators. If any are missing, install then attempt the vacuum test again.

4. Check that the face seal O-rings and radial O-rings are installed in the battery and electronics enclosures and in good condition. If you find a damaged or missing O-ring, install and attempt the vacuum test again.

If you are still having trouble holding vacuum, please contact us at <a href="mailto:support@bluerobotics.com">support@bluerobotics.com</a>

To continue assembling the BlueROV2, remove the acrylic tube and dome from the electronics enclosure.

## Installing the SOS Leak Sensor

To install the <em>SOS</em> Leak Sensor you will need the following parts and tools:

- Scissors
- Isopropyl alcohol
- Cleaning cloth/cotton swab

1. Cut to size and use the included double sided foam tape to secure the <em>SOS</em> Leak Sensor board in a convenient location on your BlueROV2 electronics tray. We like to put it behind the tether interface board or Pixhawk. 

	<img src="/sos/cad/sos-layout.png" class="img-responsive" style="max-width:900px"  />

2. Connect the 3 pin extension cable to the <em>SOS</em> Leak Sensor board and Pixhawk port AUX OUT 6, taking care to plug the cable in the right orientation with ground (black) facing the Pixhawk top.

	<img src="/sos/cad/board-placement.png" class="img-responsive" style="max-width:900px"  />

3. Prep mounting surfaces with some isopropyl alcohol, then peel off the backing and stick the blue SOS Leak Sensor probes in strategic locations (like the penentrators, flange seals, etc.) throughout your BlueROV2 electronics watertight enclosure, or secure them with a small zip tie.  Be sure to place at least one probe at the bottom of the watertight enclosure, where leaking water is likely to collect. Plug the white JST-GH ends of the probes into the SOS Leak Sensor board in any combination.

	<img src="/sos/cad/probe-placement.png" class="img-responsive" style="max-width:900px"  />

## Installing the Power Wires from the Penetrators

To install the wires from the penetrators you will need the following parts and tools:

- Large (~#2) Phillips head screw driver
 
Here is a diagram of where the power wires from the end caps should get connected. 

1. Connect the battery power bullet connectors to bullet connectors on XT60 to bullet connector adapter.

2. Connect the Lumen power wires to the power terminal block
	
## Installing the Signal Wires from the Penetrators
	
To install the wires from the penetrators you will need the following parts and tools:

- Small (~2 mm) flat head screw driver

1. Connect the Lumen signal wire to the PixHawk channel 7. 

	<img src="/brov2/cad/brov2-pixhawk-signal-wires.png" class="img-responsive" style="max-width:900px" />

2. Connect the Bar30 cable to the I<sup>2</sup>C port on the PixHawk

	<img src="/brov2/cad/brov2-bar30-pixhawk.png" class="img-responsive" style="max-width:900px" />

3. Connect the motor wires to the motor wire terminal block, as shown in the diagrams below

	<img src="/brov2/cad/port-side-motor-power-wiring-1.png" class="img-responsive" style="max-width:900px" />
	
	<img src="/brov2/cad/sboard-side-motor-power-wiring-2.png" class="img-responsive" style="max-width:900px" />

5. Connect the tether wires to the tether board.

	Standard

	<img src="/brov2/cad/installed-tether-wires.png" class="img-responsive" style="max-width:900px" />

	Advanced

	<img src="/brov2/cad/brov2-advanced-tether-in.png" class="img-responsive" style="max-width:900px" />
	
## Electronics Tray Cable Management

Occasionally, you may want to open and close the electronics enclosure, and it is very helpful to have the wires tidy so that they do not get caught up with the acrylic tube. We recommend something like this.

<img src="/brov2/cad/brov2-wire-management-1.png" class="img-responsive" style="max-width:900px" />

<img src="/brov2/cad/brov2-wire-management-2.png" class="img-responsive" style="max-width:900px" />

# Final Assembly

## Mounting the Electronics Enclosure onto the Frame

To mount the electronics enclosure to the frame you need the following parts and tools:

- 4" WTE with dome installed
- Thread-locker
- Bag with 4 M3x16 screws
- 2.5 mm hex driver

1. Remove the vent plug from the vent penetrator.

2. Reapply silicone grease to the O-rings at the back of the electronics tray, then reinstall tube with dome over the electronics tray.

	<img src="/brov2/cad/installed-etray-empty-frame.png" class="img-responsive" style="max-width:900px" />

3. Apply one drop of thread-locker to each of the 4 M3x16 screws.

4. Mount the electronics enclosure to the frame using the M3x16 screws so that the dome is on the same side as the front center panels (the center panels _without_ the 3 large holes). Install the M3x16 screws through the clips and into the cradles. It is easier to install these screws if the clips are not fully tightened until all screws are through the clips and threading into the cradles. This allows to clips to rotate so you can find the cradle hole easily. 

	<img src="/brov2/cad/clip-installation.PNG" class="img-responsive" style="max-width:900px" />

## Mounting the Thrusters to the Frame

To mount the thrusters to the frame, you need the following parts and tools:

- 2.5 mm hex driver
- 6 T200 thrusters
- Bag with 16 M3x16 screws and 8 M3x12 screws in smaller bag
- The ROV frame

Here is a diagram of where the thrusters go. The order of installation does matter here. You cannot get the front thrusters on if the rear ones were installed first.

<p align="center">
<img src="http://ardusub.com/images/vectored-frame.png" class="img-responsive" style="max-width:900px" />
</p>

1. Install thrusters 1 and 2, using the M3x16 screws. Tighten the screws so that they indent the frame slightly. It is physically possible to keep turning the screw at this point, but it isn't necessary.
	
2. Install thrusters 5 and 6, using the M3x12 screws. Tighten the screws so that they indent the frame slightly.

3. Install thrusters 3 and 4, using the M3x16 screws. Tighten the screws so that they indent the frame slightly.

## Mounting the Lights

To install the Lumen mounts you will need the following parts and tools:

- The bag with the Lumen mounts, O-rings, and 4 M3x12 socket head cap screws 
- 2.5mm hex driver 
- ROV side panels
- Thread-locker

1. Apply one drop of thread-locker to each of the M3x12 screws.

2. Install the mounts.

	<img src="/brov2/cad/brov2-light-mounts.png" class="img-responsive" style="max-width:900px" />
	
3. Loop 1 size 133 O-ring from the bag that had the Lumen Mounts and screws around each Lumen Mount and Lumen as shown below.

<img src="/lumen/cad/lumen-tutorial-14.png" class="img-responsive" style="max-width:900px" />	

## Mounting the Tether to the Frame

The tether needs to be firmly mounted to the frame to prevent the tether penetrator from being loosened through normal use. To do this, you will need the following parts and tools:

- Bag with thimble and 5 large zip ties
- Tether 
- ROV frame

1. Grab the tether around 12 inches away from the tether penetrator.

2. Loop the tether around the plastic thimble.
	
3. Firmly attach 3 of the zip ties, alternating directions they are installed, around the tether right where it enters and exits the thimble.

	<img src="/fathom/cad/tether-tutorial-a1.png" class="img-responsive" style="max-width:900px" />	
	
4. Attach the thimble to the rear panel as shown

	<img src="/brov2/cad/brov2-thimble-to-frame.png" class="img-responsive" style="max-width:900px" />	
	
## Finishing the Battery Enclosure

To finish installing the battery enclosure you need the following parts and tools:

- The bag with one black penetrator nut and one O-ring left in it
- The 4 hole 3 inch enclosure end cap
- 1 Penetrator wrench
- XT90 to 3.5 mm bullet connector adapter
- 1.5 inch piece of heat shrink
- heat gun, hairdryer, or lighter
 
1. Find the bag that had the penetrator nuts and O-rings in it and grab the remaining red nut and O-ring.
	
2. Apply Silicone grease to the O-ring.

3. Install the O-ring onto the battery power cable penetrator.
	
4. Install the battery power cable penetrator into the opening in the battery end cap.

	<img src="/brov2/cad/brov2-battery-penetrator.png" class="img-responsive" style="max-width:900px" />

5. Place the 1.5 inch long piece of black heat shrink over the end of the battery power cable penetrator.

6. Apply heat to the heat shrink using your heat gun, hairdryer, or lighter until the heat shrink is firmly attached to the penetrator and snug to the two wires. You should be able to see the threads in the penetrator through the heat shrink.

	<img src="/brov2/cad/brov2-strain-relief-2.png" class="img-responsive" style="max-width:900px" />

7. Install the XT90 to bullet connector adapter to the battery power wire. 

	<img src="/brov2/cad/brov2-bullet-to-xt90.png" class="img-responsive" style="max-width:900px" />


	
## Thruster and Lumen Cable Management

To clean up the thruster and lumen wires, you will need the bag of 30 zip ties and your scissors/wire cutters. 

The primary goal of Thruster and Lumen cable management is to prevent the wires from getting cut by the propellers. Make sure to check that no wire can reach a propeller after you have finished routing the cables.

<img src="/brov2/cad/brov2-cable-routing-port.png" class="img-responsive" style="max-width:900px" />

<img src="/brov2/cad/brov2-cable-routing-starboard.png" class="img-responsive" style="max-width:900px" />

<img src="/brov2/cad/brov2-cable-routing-back.png" class="img-responsive" style="max-width:900px" />

## Installing the Fairings and Buoyancy

The buoyancy comes preinstalled in the fairings, but make sure it is still in all of the fairings prior to installing the fairings. To install the fairings, you will need the following items:

- 4 Fairings with buoyancy installed (included with the ROV)
- Bag with 16 self tapping screws (included with the ROV)
- \#1 Phillips head screwdriver (included with the ROV)

1. Remove the Lumens from their mount.

2. Install the screws through the center panels and into the fairings.
	
	<img src="/brov2/cad/fairing-install-cad.PNG" class="img-responsive" style="max-width:900px" />
	
3. Reinstall the Lumens.

	<img src="/brov2/cad/BlueROV2-front-angle.png" class="img-responsive" style="max-width:900px" />

## Mounting Ballast to the Frame

To mount the ballast to the frame you need the following parts and tools:

- 7 200g ballast weights
- 7 8-16 Thread, 5/8" Long, Thread-Forming Screw   
- \#2 phillips head screwdriver

To get the longest battery life and the best driving experience, it is important to have the ROV close to balanced from front to back in water and close to neutrally buoyant. Trimming the ballast may involve a bit of trial and error. The pictures below should provide a good starting point for mounting ballast if you have a stock BlueROV2 with the [recommended battery.](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=56844)

<b> <font size="4"> BlueROV2 with 2 <i> Lumen </i> Lights </font> </b> 
<p align="center">
<img src="/brov2/cad/ballast-2-lights.PNG" class="img-responsive" style="max-height:500px" />
</p>

<b> <font size="4"> BlueROV2 with 4 <i> Lumen </i> Lights </font> </b> 
<p align="center">
<img src="/brov2/cad/ballast-4-lights.PNG" class="img-responsive" style="max-height:500px" />
</p>

# Topside Setup 

<img src="/brov2/cad/topside-wiring.png" class="img-responsive" style="max-height:500px" />

# Next Steps

First, set up the software on your topside computer. Please see our [Software Setup](/brov2/software-setup/) page.

Next, refer to the [Operating Manual](/brov2/operation/) to learn how complete your first dive.

# Issue Reporting

We're always trying to make our documentation, instructions, software, and user experience better. If you're having an issue with anything, please report it so that we can address it as soon as possible! Here's where to do that depending on what's wrong:

- **ArduSub Issues:** For anything related to the ArduSub software that runs on the Pixhawk and controls the ROV, reports issues on the [ArduSub Github Issues Page](https://github.com/bluerobotics/ardusub/issues). If you're unsure where your issue should be posted, you can report it here.
- **QGroundControl Issues:** For anything related to the QGroundControl software, joystick setup, video streaming, etc., please report an issue on the [QGroundControl Github Issues Page](https://github.com/mavlink/qgroundcontrol/issues).
- **Documentation:** For anything related to the documentation and instructions here, please report an issue on the [Blue Robotics Documentation Github Issues Page](https://github.com/bluerobotics/bluerobotics.github.io/issues).








