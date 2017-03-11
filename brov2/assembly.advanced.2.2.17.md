---
layout: default
title: BlueROV2 Advanced Kit Assembly (Starting December 2, 2016)
permalink: /brov2/assembly/advanced/yo
order: 1
topnavbar: brov2
nav:
- Past Revisions: assembly-for-bluerov2s-shipped-prior-to-december-2-2016
- Standard Kit: assembly-for-bluerov2-standard-kit
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
- - Advanced Electronics: advanced-electronics-package
- - Lights: lights
- What's Not Included: what-you-need-for-operation-that-is-not-included
- Frame Assembly: assembling-the-frame
- - Battery Enclosure: mounting-the-battery-enclosure-to-the-bottom-panel
- - Center Panels: assembling-the-center-panels
- - Frame: assembling-the-frame-1
- Changing Propellers: changing-the-propellers
- Cable Installation: installing-the-cables
- - Overview: overview
- - Removing the Electronics Enclosure Endcap: -removing-the-electronics-enclosure-endcap
- - Penetrator Installation: installing-the-penetrators
- - End Cap Installation: installing-the-end-cap
- - Finishing Battery Enclosure: finishing-the-battery-enclosure
- - Optional Preliminary Vacuum Test: optional-preliminary-vacuum-test
- - Installing the SOS Leak Sensor: installing-the-sos-leak-sensor
- - Penetrator Power Wiring: installing-the-power-wires-from-the-penetrators
- - Penetrator Motor Wiring: installing-the-motor-wires-from-the-penetrators
- - Penetrator Signal Wiring: installing-the-signal-wires-from-the-penetrators
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

store-links:
- BlueROV: http://bluerobotics.com/store/rov/bluerov2/

manual-links:
- Standard Assembly: #
- Software Setup: /brov2/software-setup/
- Specifications: /brov2/
- Operations Manual: /brov2/operation/

---

<img src="/brov2/cad/BlueROV2-Black-Sands-1.png" class="img-responsive img-center" style="max-width:800px" />

# Assembly for BlueROV2s Shipped Prior to December 2, 2016

- [August 5, 2016 to November ?, 2016](#)
- [November ?, 2016 to December 1, 2016](#)

# Assembly for BlueROV2 Standard Kit

- [BlueROV2 Standard Kit Assembly Instructions](#)

# Assembly Intro

The _BlueROV_ kit comes almost ready to dive. The assembly can be completed with basic hand tools; no soldering or potting is required. We have included a couple of the tools that will be used most often to make assembly and regular use go as smoothly as possible.

## Safety 

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with electricity, especially in water, always practice caution. Always ensure that connections are secure and watertight. Keep your body away from spinning motors and propellers.

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with silicone grease and threadlocker, take care to minimize skin contact. Wear protective nitrile or PVC gloves when handling.

# Required Tools Not Included

- \#2 Phillips Head Screwdriver
- Wire Cutters or Scissors (for cutting zip ties)
- Medium-strength (blue) thread-locker such as [Loctite 243](https://www.amazon.com/Loctite-1330799-Resistant-thread-locker-6-milliliter/dp/B004L439FE/ref=sr_1_1?ie=UTF8&qid=1466440165&sr=8-1&keywords=loctite+243+thread-locker)
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
7             | 200g Ballast Weights										| 

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

<img src="/brov2/cad/brov2-box-open-parts-displayed.png" class="img-responsive" style="max-width:900px" />

## What You Need for Operation that is Not Included 

There are some items necessary for operation that are not included with the kit. 

 - A gamepad controller. We recommend [an Xbox360 Controller](http://www.xbox.com/en-US/xbox-360/accessories/controllers/wired-controller) or [a Logitech F310 Gamepad](http://gaming.logitech.com/en-us/product/f310-gamepad).
 - A laptop or a tablet. ArduSub works on Mac, Linux, Windows, iOS, and Android. 
 - A 12 - 20V battery with an XT90 plug for the BlueROV2. We recommend getting 2 or 3 of [these](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=56844)
 - A mini-USB cable.
 - A USB-Ethernet adapter, or an Ethernet patch cable. (Advanced Electronics Package Only)
 
# Assembling the Frame

## Mounting the Battery Enclosure to the Bottom Panel

To mount the battery enclosure to the bottom panel you will need the following parts and tools:

- 2 battery cradles with rubber strips
- Thread-locker 
- Bottom panel 
- Bag with 4 M4x14 socket head cap screws and 4 M3x12 socket head cap screws
- Battery Enclosure
- 3 mm allen hex key
- 2.5 mm allen hex driver

1. Open the battery enclosure and set the bags inside of it to the side, except for the bag with 4 M4x14 and 4 M3x12 screws in it.

2. Apply one drop of threadlocker to the bottom of each M4x14. 

	<img src="/brov2/cad/brov2-loctite-applied.png" class="img-responsive" style="max-width:900px" />

3. Attach a battery cradle to the bottom panel with 4 M4x14 socket head cap screws. Be sure that the screw head is in the [counterbore](https://en.wikipedia.org/wiki/Counterbore). The bottom panel is only counterbored on one side. 

	<img src="/brov2/cad/brov-assembly-step1-annotated.png" class="img-responsive" style="max-width:900px" /> 

4. Tighten the screws into the bottom panel until they are flush with the bottom of the bottom panel. 

	<img src="/brov2/cad/brov2-battery-cradle-screws-flush.png" class="img-responsive" style="max-width:900px" /> 

5. Apply one drop of thread-locker to the end of each of the 4 M3x12 screws.

6. Place the battery enclosure between the two battery cradles and install the 4 M3x12 screws into the cradles to clamp the battery enclosure into place. Note that each of the cradles are tapped on only one side. Install all four screws loosly at first and then slowly tighten them on both sides evenly. Take care not to overtighten the screws. Keep the battery enclosure approximately centered in the cradles.

	<img src="/brov2/cad/brov-assembly-step2-annotated.png" class="img-responsive" style="max-width:900px" />

	When you are finished tightening the screws, both sides should look similar to this.

	<img src="/brov2/cad/brov2-battery-cradle-screws-fully-installed.png" class="img-responsive" style="max-width:900px" />
	
## Assembling the Center Panels

To assemble the center panels you will need the following tools and items:

- 2 Electronics cradles (No rubber strips)
- 2 Front center panels 
- 2 Rear center panels 
- Thread-locker 
- The bag with 8 M4x18 socket head cap screws 
- 3 mm allen hex key 

1. Apply one drop of thread-locker to the end of each of the 8 M4x18 screws.

2. Attach one of the electronics enclosure cradles to the rear center panels. 

	<img src="/brov2//cad/brov-assembly-step3-annotated.png" class="img-responsive" style="max-width:900px" />
	
3. Attach the other electronics enclosure cradle to the front center panels.

	<img src="/brov2//cad/brov-assembly-step4-annotated.png" class="img-responsive" style="max-width:900px" />
	
## Assembling the Frame

To assemble the frame you will need the following tools and items:

- Thread-locker 
- The bag with 12 M5x16 button head cap screws 
- 2 Side Panels
- The bottom panel with the battery enclosure installed
- The front center panel assembly
- The rear center panel assembly
- 3 mm hex key
	
1. Apply one drop of thread-locker to the end of the 12 M5x16 screws.
	
2. Install the side panels to the bottom panel; the blank (no holes) end cap on the battery enclosure should be on the same side as the Lumen mounting holes. Take care not to overtighten; turn with the short end of the hex key. 

	<img src="/brov2//cad/brov2-assembly-frame-1.png" class="img-responsive" style="max-width:900px" />
	
3. Install the center panel assemblies to the side panels. Take care not to overtighten; turn with the short end of the hex key.

	<img src="/brov2//cad/brov2-assembly-frame-2.png" class="img-responsive" style="max-width:900px" />
	
Now the ROV should look like the picture below, and it is time to move on to setting up the electronics enclosure.

<img src="/brov2//cad/assembled-frame.png" class="img-responsive" style="max-width:900px" />

# Changing the Propellers

To change the propellers on three of the thrusters you will need the following items and tools:

- 3 T200 Thrusters (included with ROV)
- Large (~#3) Phillips Head Screwdriver (not included)
- 2mm Allen Hex Key (included with ROV)

1. Remove 3 thrusters from their tubes. These will later be designated as Thrusters 1, 2, and 5.
	
2. Switch the propellers from the clockwise thrusters that come installed to the counter-clockwise thrusters that come along with the thrusters. Please refer to our [Changing the Propeller Tutorial](/tutorials/changing-the-propeller) for detailed instructions. Make sure to line up the cable entry into the motor core with the mounting holes on the cone when reassembling the thrusters.

3. The next few steps will be easier if you keep the clockwise and counter-clockwise thrusters seperated. The picture below shows clockwise and counter-clockwise propellers installed on thrusters for reference.

	<img src="/brov2/cad/clockwise-counter-clockwise.png" class="img-responsive" style="max-width:900px" />
	
# Installing the Cables

## Overview

The pictures below show orientation of the main pieces of hardware in the electronics enclosure. They also point out the names of several of the important parts for assembly that will be discussed in the remaining instrustions.

<b> <font size="4"> Top View </font> </b> 
<img src="/brov2//cad/advanced-top-render-1.png" class="img-responsive" style="max-width:900px" />

<b> <font size="4"> Starboard View </font> </b> 
<img src="/brov2//cad/advanced-starboard-render-1.png" class="img-responsive" style="max-width:900px" />

<b> <font size="4"> Port View </font> </b> 
<img src="/brov2//cad/advanced-port-render-1.png" class="img-responsive" style="max-width:900px" />

<b> <font size="4"> Front View </font> </b> 
<img src="/brov2//cad/advanced-front-render-1.png" class="img-responsive" style="max-width:900px" />

## Removing the Electronics Enclosure Endcap

The endcap will need to be removed from the electronics enclosure in order to install the cable penetrators. To remove the endcap you will need the following tools and items:

- Large flat head screw driver (Optional)
- The electronics enclosure assembly
- 2.5 mm allen key driver 

1. Remove the vent plug from the electronics enclosure by turning counter-clockwise to unscrew, and then pulling it out of the vent penetrator. Put the vent plug in a safe place.

2. Remove the tube from the rear flange. You can twist a large flat head screwdriver in the slots if it does not pull off easily.

	<img src="/brov2/cad/electronics-assembly-step1.PNG" class="img-responsive" style="max-width:900px" />
		
3. Remove the rear 14 hole end cap by removing the screws using the M2.5 allen driver. Place the M3x12 screws, clips, and face seal O-ring in a safe place. 

	<img src="/brov2/cad/electronics-assembly-step2-annotated.png" class="img-responsive" style="max-width:900px" />
	
	<img src="/brov2/cad/etray-disassemble.png" class="img-responsive" style="max-width:900px" />
	
## Installing the Penetrators

To install the penetrators you will need the following items and tools:

- The bag with 1 black penetrator nut, 8 red penetrator nuts, and 9 O-rings
- Silicone grease 
- 14 hole end cap with blanks, Bar30, vent, and power wire installed 
- 3 T200 with counter-clockwise thrusters 
- 3 T200 with clockwise thrusters 
- 1 set of daisy chained Lumen lights 
- 1 tether with penetrator installed
- 1 Penetrator wrench

The electronics enclosure end cap ships with 3 blank penetrators, 1 Bar30 pressure sensor, 1 vent, and 1 battery power wire penetrator installed.

<img src="/brov2/cad/end-cap-as-shipped.png" class="img-responsive" style="max-width:900px" />

If you install the remaining penetrators as shown in the diagram below, it will keep everything neat and organized.

<img src="/brov2/cad/end-cap-final.png" class="img-responsive" style="max-width:900px" />
	
1. Remove 8 of the O-rings and apply Silicone grease to them. Keep the other O-ring in the bag, you will need it in a minute. 

	<img src="/brov2/cad/grease-o-ring.png" class="img-responsive" style="max-width:900px" />
	
2. Wipe the exterior surface of the electronics enclosure endcap clean, and make sure it is free of any particles in the areas where the penetrator O-rings will sit.
	
3. Install the O-rings onto all of the thruster penetrators, the lumen penetrator, and the tether penetrator. 
	
4. Install the penetrators to the end cap in the order shown below. Tighten to finger tight, then use the provided wrench to tighten them an additional ~1/16 of a turn. If you can't loosen them with your fingers, they are tight enough. 

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

- The face seal O-ring, the 6 M3x12 screws, and the clips that you removed from the end cap earlier
- Silicone grease
- End cap with installed thrusters, lumen, tether, and power cable
- 2.5 mm allen head hex driver

1. Retrieve the face seal O-ring, the 6 M3x12 screws, and the 2 clips that you removed earlier

	<img src="/brov2/cad/etray-disassemble.png" class="img-responsive" style="max-width:900px" />
	
2. Clean the O-ring and make sure that it is free of any debris or damage. If it appears to be damaged, replace it with the spare 4" face seal O-ring.

3. Apply Silicone grease to the O-ring.

4. Install O-ring back onto the flange seal. 

5. Reapply one drop of thread-locker to the end of the 6 M3x12 screws.
	
6. Install the end cap onto the O-ring. Do not fully tighten any screws when first installing them; it may cause the O-ring to slip out of its groove. The end cap's orientation when installed should match the image below.

	<img src="/brov2/cad/brov2-endcap-installed-iso.png" class="img-responsive" style="max-width:900px" />
	
## Finishing the Battery Enclosure

To finish installing the battery enclosure you need the following parts and tools:

- The bag with one red penetrator nut and one O-ring left in it
- Silicone grease
- 1 Penetrator wrench
- XT90 to 3.5 mm bullet connector adapter
- 1.5 inch piece of heat shrink
- Heat gun, hairdryer, or lighter
- The 4 hole battery enclosure endcap
 
1. Remove the vent plug from the battery enclosure by turning counter-clockwise to unscrew, and then pulling it out of the vent penetrator. Put the vent plug in a safe place.

2. Remove the rear flange with the 4 hole endcap from the battery enclosure.

3. Find the bag that had the penetrator nuts and O-rings in it and retrieve the remaining red nut and O-ring.
	
4. Apply Silicone grease to the O-ring.

5. Install the O-ring onto the battery power cable penetrator.
	
6. Install the battery power cable penetrator into the opening in the battery end cap.

	<img src="/brov2/cad/brov2-battery-penetrator.png" class="img-responsive" style="max-width:900px" />

7. Place the 1.5 inch long piece of black heat shrink over the end of the battery power cable penetrator. This will provide some strain releif to the power wires.

8. Apply heat to the heat shrink using your heat gun, hairdryer, or lighter until the heat shrink is firmly attached to the penetrator and snug to the two wires. You should be able to see the threads in the penetrator through the heat shrink.

	<img src="/brov2/cad/brov2-strain-relief-2.png" class="img-responsive" style="max-width:900px" />

9. Install the XT90 to bullet connector adapter to the battery power wire. 

	<img src="/brov2/cad/brov2-bullet-to-xt90.png" class="img-responsive" style="max-width:900px" />
	
10. Reinstall the rear flange and end cap into the battery enclosure, and put the vent plug back into the vent penetrator.

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

4. Pump the vacuum until the gauge reads 10 in. Hg [34 kPa] vacuum. If you cannot pull a vacuum, try the suggestions following step 6, below.

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

- Bag with SOS Leak Sensor, 3 pin extension cable, foam tape, and four probes.
- Scissors
- Isopropyl alcohol
- Cleaning cloth/cotton swab

1. Cut to size and use the included double sided foam tape and secure the <em>SOS</em> Leak Sensor board in a convenient location on your BlueROV2 electronics tray. We like to put it behind the tether interface board or Pixhawk. Make sure that you mount the sensor close enough to the Pixhawk that the 3 pin extension cable will be able comfortably reach the Pixhawk outputs.

	<img src="/sos/cad/sos-layout.png" class="img-responsive" style="max-width:900px"  />

2. Prep the probe mounting surfaces with some isopropyl alcohol, then peel off the backing and stick the blue SOS Leak Sensor probes in the suggested locations, as shown above, or secure them with a small zip tie. Be sure to place the probes at the bottom of the watertight enclosure, where leaking water is likely to collect. Plug the white JST-GH ends of the probes into the SOS Leak Sensor board in any combination.

	<img src="/sos/cad/probe-placement.png" class="img-responsive" style="max-width:900px"  />
	
3. Connect the 3 pin extension cable to the <em>SOS</em> Leak Sensor board and Pixhawk port AUX OUT 6, taking care to plug the cable in the right orientation with ground (black) facing the top of the Pixhawk.

	<img src="/sos/cad/board-placement.png" class="img-responsive" style="max-width:900px"  />

## Installing the Power Wires from the Penetrators

To install the wires from the penetrators you will need the following parts and tools:

- Large (~#2) Phillips head screw driver
 
1. Connect the battery power bullet connectors to bullet connectors on XT60 to bullet connector adapter.

2. Connect the Lumen power wires to the power terminal block

## Installing the Motor Wires from the Penetrators

Connect the motor wires to the motor wire terminal block, as shown in the diagrams below

	<img src="/brov2/cad/port-side-motor-power-wiring.png" class="img-responsive" style="max-width:900px" />

	<img src="/brov2/cad/sboard-side-motor-power-wiring-2.png" class="img-responsive" style="max-width:900px" />
	
## Installing the Signal Wires from the Penetrators
	
To install the wires from the penetrators you will need the following parts and tools:

- Small (~2 mm) flat head screw driver

1. Connect the Lumen signal wire to the PixHawk channel 7 with the yellow wire oriented toward the bottom of the Pixhawk.

	<img src="/brov2/cad/brov2-pixhawk-signal-wires.png" class="img-responsive" style="max-width:900px" />

2. Connect the Bar30 cable to the I<sup>2</sup>C port on the PixHawk

	<img src="/brov2/cad/brov2-bar30-pixhawk.png" class="img-responsive" style="max-width:900px" />	
	
3. Connect the tether wires to the Fathom-X Tether Interface Board.

	<img src="/brov2/cad/brov2-advanced-tether-in.png" class="img-responsive" style="max-width:900px" />

# Final Assembly

## Mounting the Electronics Enclosure onto the Frame

To mount the electronics enclosure to the frame you need the following parts and tools:

- 4" WTE with dome installed
- Thread-locker
- Bag with 4 M3x16 screws
- 2.5 mm hex driver

1. Reapply silicone grease to the O-rings at the back of the electronics tray, then reinstall tube with dome over the electronics tray.

	<img src="/brov2/cad/installed-etray-empty-frame.png" class="img-responsive" style="max-width:900px" />

2. Apply one drop of thread-locker to each of the 4 M3x16 screws.

3. Mount the electronics enclosure to the frame using the M3x16 screws by installing the M3x16 screws through the clips and into the cradles. It is easier to install these screws if the clips are not fully tightened until all screws are through the clips and threading into the cradles. This allows to clips to rotate so you can find the cradle hole easily. It also helps to lift the electronics enclosure away from the cradles as the clips are tightened to leave a small gap between the enclosure and the cradles.

	<img src="/brov2/cad/clip-installation.PNG" class="img-responsive" style="max-width:900px" />

## Mounting the Thrusters to the Frame

To mount the thrusters to the frame, you need the following parts and tools:

- 2.5 mm hex driver
- 6 T200 thrusters
- Bag with 16 M3x16 screws and 8 M3x12 screws in smaller bag
- The ROV frame

Here is a diagram of where the thrusters go, and how they should be oriented. The order of installation matters here. You cannot get the front thrusters on if the rear ones were installed first.

<p align="center">
<img src="http://ardusub.com/images/vectored-frame.png" class="img-responsive" style="max-width:900px" />
</p>

1. Install thrusters 1 and 2 underneath the front center panels, using the M3x16 screws. Tighten the screws so that they depress into the frame slightly. It is physically possible to keep turning the screw at this point, but it isn't necessary.
	
2. Install thrusters 5 and 6 on the side panels, using the M3x12 screws. Tighten the screws so that they depress into the frame slightly.

3. Install thrusters 3 and 4 underneath the rear center panels, using the M3x16 screws. Tighten the screws so that they depress into the frame slightly.

## Mounting the Lights

To install the Lumen mounts you will need the following parts and tools:

- The bag with the Lumen mounts, O-rings, and 4 M3x12 socket head cap screws 
- 2.5mm hex driver 
- The ROV frame
- Thread-locker

1. Apply one drop of thread-locker to each of the M3x12 screws.

2. Install the mounts.

	<img src="/brov2/cad/brov2-light-mounts.png" class="img-responsive" style="max-width:900px" />
	
3. Loop one of the size 133 O-rings from the bag that had the Lumen Mounts and screws around each Lumen Mount and Lumen as shown below.

<img src="/lumen/cad/lumen-tutorial-14.png" class="img-responsive" style="max-width:900px" />	

## Mounting the Tether to the Frame

The tether needs to be firmly mounted to the frame to prevent the tether penetrator from being loosened through normal use. To do this, you will need the following parts and tools:

- Bag with thimble and 5 large zip ties
- Tether 
- ROV frame

1. Loop the tether around the plastic thimble at a point about 12 inches away from the tether penetrator.
	
2. Firmly attach 3 of the zip ties, alternating directions as they are installed, around the tether right where it enters and exits the thimble. Hold the tether firmly in place against the thimble until it is secured.

	<img src="/fathom/cad/tether-tutorial-a1.png" class="img-responsive" style="max-width:900px" />	
	
3. Attach the thimble to the rear panel as shown

	<img src="/brov2/cad/brov2-thimble-to-frame.png" class="img-responsive" style="max-width:900px" />	
	
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









