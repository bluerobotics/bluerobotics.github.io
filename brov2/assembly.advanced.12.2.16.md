---
layout: default
title: BlueROV2 Advanced Kit Assembly
permalink: /brov2/assembly/advanced/12.2.16
order: 1
topnavbar: brov2
nav:
- Archived Instructions: archived-assembly-instructions
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
- - Lights: lights
- - Leak Sensor: sos-leak-sensor
- What's Not Included: what-you-need-for-operation-that-is-not-included
- Frame Assembly: assembling-the-frame
- - Battery Enclosure: mounting-the-battery-enclosure-to-the-bottom-panel
- - Center Panels: assembling-the-center-panels
- - Frame: assembling-the-frame-1
- Electronics Overview: electronics-enclosure-overview
- Cable Installation: installing-the-cables
- - Penetrator Installation: installing-the-penetrators
- - End Cap Installation: installing-the-end-cap
- - Finishing Battery Enclosure: finishing-the-battery-enclosure
- - Optional Preliminary Vacuum Test: optional-preliminary-vacuum-test
- - Penetrator Power Wiring: installing-the-power-wires-from-the-penetrators
- - Penetrator Signal Wiring: installing-the-signal-wires-from-the-penetrators
- - Cable Routing: cable-routing
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
- BlueROV2: http://bluerobotics.com/store/rov/bluerov2/

manual-links:
- Archived Assembly: /brov2/assembly/
- Software Setup: /brov2/software-setup/
- Specifications: /brov2/
- Operations Manual: /brov2/operation/

---

<img src="/brov2/cad/BlueROV2-Black-Sands-1.png" class="img-responsive img-center" style="max-width:800px" />

# Archived Assembly Instructions

- [Original Assembly Instructions](#)

# Assembly Intro

The BlueROV2 kit comes almost ready to dive. The assembly can be completed with basic hand tools; no soldering or potting is required. We have included a couple of the tools to make assembly and regular use as easy as possible.

## Safety 

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with electricity, especially in water, always practice caution. Always ensure that connections are secure and watertight. Keep your body away from spinning motors and propellers.

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with silicone grease and threadlocker, take care to minimize skin contact. Wear protective nitrile or PVC gloves when handling.

# Required Tools (Not Included)

- \#2 Phillips head screwdriver 
- Wire cutters or scissors (for cutting zip ties)
- Medium-strength (blue) threadlocker such as [Loctite 243](https://www.amazon.com/Loctite-1330799-Resistant-thread-locker-6-milliliter/dp/B004L439FE/ref=sr_1_1?ie=UTF8&qid=1466440165&sr=8-1&keywords=loctite+243+thread-locker)
- Isopropyl alcohol or isopropyl alcohol wipes
- Vacuum pump such as [this one](https://www.amazon.com/HFS-Brake-Bleeder-Vacuum-Tuner/dp/B00NP60URE/ref=sr_1_10?ie=UTF8&qid=1470775016&sr=8-10&keywords=vacuum+pump)
- 2 mm flat head screw driver

# What's Included

## Frame

Quantity      | Part														| Usage
------------- | ------------------------------------------------------------| ----------------------
2             | Front center panel (1/2" thick black HDPE)        			|    
2             | Rear center panel (1/2" thick black HDPE)           		|     	       
1             | Bottom panel (1/2" thick black HDPE)                       	|  
2             | Side panel (3/8" thick black HDPE)                       	|
2             | Enclosure Cradle (4" Series) (black anodized aluminum)  	| Mounting the electronics enclosure to the frame
8 			  | M4x18 socket head cap screw (316 stainless steel)           | Mounting the electronics enclosure cradles to the frame        
12            | M5x16 button head cap screw (316 stainless steel)           | Assembling the frame
7             | 8-16 thread, 5/8" long, thread-forming screw                | Mounting the ballast to the frame                         
7             | Ballast Weight (200g, 7 oz)									| 

## Electronics Enclosure                                                         

Quantity      | Part																		| Usage
------------- | ----------------------------------------------------------------------------| ---------------
1             | Electronics Tray (4" Series)                                                |                      
1             | Watertight Enclosure for ROV/AUV w/ Dome End Cap installed                | Electronics enclosure          
1             | Aluminum End Cap with 14 Holes w/ 3 Cable Penetrator Blank, 1 Bar30 Pressure Sensor, 1 Enclosure Vent and Plug, and 1 power cable (installed)	|
1             | Set of tether board power wires (installed)								| Provided power to the tether board
4             | M3x16 socket head cap screw (316 stainless steel)  							| Mounting the electronics enclosure to the electronics enclosure cradle
1			  | Fathom-X Tether Interface Board installed									| Long distance ethernet connection
1			  | 3DR PixHawk (installed)														| Autopilot
1			  | Raspberry Pi 3 (installed)													| Companion computer
1			  | Raspberry Pi Camera 2 (installed)   										| Camera
1			  | PixHawk Power Module (installed) 											| Powers the PixHawk and monitors current and battery voltage
2             | Universal Battery Elimination Circuit (UBEC) (installed)                    | Powers the Raspberry Pi and PixHawk servo rails         

## Battery Enclosure

Quantity      | Part																		| Usage
------------- | ----------------------------------------------------------------------------| ------------------------
2             | Enclosure Clamp (3" Series) (black anodized aluminum w/ rubber strip)   	| Mounting the battery enclosure to the frame       
1             | Watertight Enclosure for ROV/AUV (3" Series)                       			| Battery Enclosure
1             | Aluminum End Cap (3" Series)    				  							|
1             | Aluminum End Cap with 4 Holes (3" Series) w/ 2 blank penetrators and 1 vent installed (anodized aluminum 6061)  |                                                              
1             | XT90 to 3.5 mm bullet connector adapter										| Adapting power wire connector to battery connector
4             | M4x14 socket head cap screw (316 stainless steel)   						| Mounting the battery cradle to the frame
4             | M3x12 socket head cap screws (316 stainless steel)             				| Connecting the battery cradles to each other    
1			  | 1 1/2" long x 3/8" diameter heat shrink										| Battery cable strain relief       

## Thrusters

Quantity      | Part													| Usage
------------- | --------------------------------------------------------|--------------
3   		  | T200 Thrusters w/ Clockwise Propeller installed			|
3 			  | T200 Thrusters w/ Counter-Clockwise Propeller installed |      
16            | M3x16 socket head cap screw (316 stainless steel)      	| Mounting thrusters 1, 2, 3, and 4 to the frame
8 			  | M3x12 socket head cap screw (316 stainless steel)		| Mounting thrusters 5 and 6 to the frame
30            | 5 1/2" zip ties (nylon)									| Routing the thruster and lumen cables

## Fairings

Quantity      | Part																	|
------------- | ------------------------------------------------------------------------| ---------------------
4             | BlueROV2 Fairings (blue polycarbonate)               					|
4             | Subsea Buoyancy Foam (R-3318 urethane foam)                        		|
16            | #4 size, 3/4" long pan head self tapping screw (316 stainless steel)    | Mounting the fairings and buoyancy to the frame                               

## Tether

Quantity      | Part														| Usage 
------------- | ------------------------------------------------------------|--------------
1             | Fathom Tether w/ installed Cable Penetrator for 8 mm Cable (25-300m)           	|
1             | Tether Cable Thimble                       					| Mounting the tether to the frame	
5             | Heavy Duty Zip Ties											| Mounting the tether to the thimble and frame            

## Tools                                                      

Quantity      | Part													| Usage
------------- | --------------------------------------------------------| ---------------
1             | Silicone Grease - 10g Tube								| Lubricate O-rings prior to installation 
1             | O-Ring Pick   											| Remove and install O-rings
1             | 2.5 mm hex driver										| Install M3 screws 
1			  | #1 Phillips head screwdriver    						| Install the fairing screws 
1			  | Penetrator Wrench             					        | Install penetrators
1			  | 1.5 mm hex key											| Thruster dissassembly
1			  | 2 mm hex key											   	| Change propellers
1			  | 3 mm hex key												| Install M4 and M5 screws

## Lights

Quantity      | Part
------------- | --------------------------------------------------------
1-2           | Lumen Subsea Light w/ Mounts (Pair, Pre-Connected) (Optional)     

## SOS Leak Sensor

Quantity      | Part
------------- | ------------------------------------------------------------
1             | SOS Leak Sensor Probe Host Board (installed)
2             | 6" Probe (installed)
2             | 12" Probe (installed)

## What You Need for Operation that is Not Included 

There are some items necessary for operation that are not included with the kit. 

 - A gamepad controller. We recommend [an Xbox360 Controller](http://www.xbox.com/en-US/xbox-360/accessories/controllers/wired-controller) or [a Logitech F310 Gamepad](http://gaming.logitech.com/en-us/product/f310-gamepad).
 - A laptop or a tablet. ArduSub works on Mac, Linux, and Windows.
 - A 12-20V battery with an XT90 plug. We recommend getting 1 or 2 of our [Lithium-ion Batteries (14.8V, 18Ah)](http://bluerobotics.com/store/rov/bluerov2/battery-li-4s-18ah-r1/)
 - A mini-USB cable.
 - A USB-Ethernet adapter, or an Ethernet patch cable.
 
# Assembling the Frame

## Mounting the Battery Enclosure to the Bottom Panel

To mount the battery enclosure to the bottom panel you will need the following parts and tools:

- 2 x Enclosure Clamp (3" Series)
- 1 x Threadlocker 
- 1 x Bottom panel 
- 1 x Bag with four M4x14 socket head cap screws and four M3x12 socket head cap screws
- 1 x Watertight Enclosure for ROV/AUV (3" Series)
- 1 x 3 mm hex key
- 1 x 2.5 mm hex driver

1. Remove the Aluminum End Cap with 4 Holes (3" Series) to open the Watertight Enclosure for ROV/AUV (3" Series) and set the bags inside of it to the side, except for the bag with four M4x14 and four M3x12 screws in it.

2. Apply one drop of threadlocker to the bottom of each M4x14 socket head cap screw. Roll the screws around on a paper towel to evenly spread the threadlocker and to remove excess threadlocker.

	<img src="/brov2/cad/brov2-loctite-applied.png" class="img-responsive" style="max-width:900px" />

3. Attach one of the Enclosure Clamps (3" Series) to the bottom panel using the four M4x14 socket head cap screws. Be sure that the screw head is in the [counterbore](https://en.wikipedia.org/wiki/Counterbore). The bottom panel is only counterbored on one side. Tighten the screws until you can feel them start to dig into the bottom panel.

	<img src="/brov2/cad/brov-assembly-step1-annotated.png" class="img-responsive" style="max-width:900px" /> 

4. Apply one drop of threadlocker to each of the 4 M3x12 screws. Roll the screws around on a paper towel to evenly spread the threadlocker and to remove excess threadlocker.

6. Place the Watertight Enclosure for ROV/AUV (3" Series) between the two Enclosure Clamps (3" Series) and install the four M3x12 screws into the Enclosure Clamps (3" Series). Note that each of the Enclosure Clamps (3" Series) are tapped on only one side. Install all four screws loosly at first and then slowly tighten them on both sides evenly. Take care not to overtighten the screws. Keep the battery enclosure approximately centered in the Enclosure Clamps (3" Series).

	<img src="/brov2/cad/brov-assembly-step2-annotated.png" class="img-responsive" style="max-width:900px" />

	When you are finished tightening the screws, both sides should look similar to this.

	<img src="/brov2/cad/brov2-battery-cradle-screws-fully-installed.png" class="img-responsive" style="max-width:900px" />
	
## Assembling the Center Panels

To assemble the center panels you will need the following parts and tools:

- 2 x Enclosure Cradle (4" Series)
- 2 x Front center panels 
- 2 x Rear center panels 
- 1 x Threadlocker 
- 1 x Bag with eight M4x18 socket head cap screws 
- 1 x 3 mm hex key 

1. Apply one drop of threadlocker to each of the eight M4x18 screws. Roll the screws around on a paper towel to evenly spread the threadlocker and to remove excess threadlocker.

2. Attach one of the Enclosure Cradle (4" Series) to the rear center panels. Tighten the screws until they indent the rear center panels slightly. 

	<img src="/brov2//cad/brov-assembly-step3-annotated.png" class="img-responsive" style="max-width:900px" />
	
3. Attach the other Enclosure Cradle (4" Series) to the front center panels. Tighten the screws until they indent the front center panels slightly. 

	<img src="/brov2//cad/brov-assembly-step4-annotated.png" class="img-responsive" style="max-width:900px" />
	
## Assembling the Frame

To assemble the frame you will need the following parts and tools:

- 1 x Threadlocker 
- 1 x Bag with 12 M5x16 button head cap screws 
- 2 x Side panels
- 1 x Bottom panel with the Watertight Enclosure for ROV/AUV (3" Series) installed
- 1 x Front center panel assembly
- 1 x Rear center panel assembly
- 1 x 3 mm hex key
	
1. Apply one drop of threadlocker to each of the 12 M5x16 screws. Roll the screws around on a paper towel to evenly spread the threadlocker and to remove excess threadlocker.
	
2. Install both side panels to the bottom panel using four of the M5x16 screws; the Aluminum End Cap (3" Series) on the Watertight Enclosure for ROV/AUV (3" Series) should be on the same side as the Lumen mounting holes. **It is very important to avoid overtightening these screws.** Tighten these screws using the provided 3 mm hex key. Hold the short end of the 3 mm hex key while you are tightening the M5x16 screws. Do not tighten beyond the tightness you can achieve holding the short end of the 3 mm hex key. 

	<img src="/brov2//cad/brov2-assembly-frame-1.png" class="img-responsive" style="max-width:900px" />
	
3. Install the center panel assemblies to the side panels using the remaining eight M5x16 screws. **It is very important to avoid overtightening these screws.** Tighten these screws using the provided 3 mm hex key. Hold the short end of the 3 mm hex key while you are tightening the M5x16 screws. Do not tighten beyond the tightness you can achieve holding the short end of the 3 mm hex key.

	<img src="/brov2//cad/brov2-assembly-frame-2.png" class="img-responsive" style="max-width:900px" />
	
Now the BlueROV2 should look like the picture below. 

<img src="/brov2/cad/frame-assembled.png" class="img-responsive" style="max-width:900px" />

# Electronics Enclosure Overview

The images below show orientation of the main pieces of hardware in the electronics enclosure. They also point out the names of several of the important parts for assembly that will be discussed in the remaining instrustions.

<b> <font size="4"> Top View </font> </b> 
<img src="/brov2//cad/advanced-top-render-1.png" class="img-responsive" style="max-width:900px" />

<b> <font size="4"> Starboard View </font> </b> 
<img src="/brov2//cad/advanced-starboard-render-1.png" class="img-responsive" style="max-width:900px" />

<b> <font size="4"> Port View </font> </b> 
<img src="/brov2//cad/advanced-port-render-1.png" class="img-responsive" style="max-width:900px" />

<b> <font size="4"> Front View </font> </b> 
<img src="/brov2//cad/advanced-front-render-1.png" class="img-responsive" style="max-width:900px" />
	
# Removing the Electronics Enclosure Endcap

The endcap will need to be removed from the electronics enclosure in order to install the cable penetrators. To remove the endcap you will need the following parts and tools:

- 1 x Large flat head screw driver (Optional)
- 1 x The electronics enclosure assembly
- 1 x 2.5 mm key driver 

1. Remove the Watertight Enclosure for ROV/AUV with Dome End Cap installed from the rear O-Ring Flange (4" Series). If this step is difficult, you can place a large flat head screwdriver into the slots on the O-Ring Flange (4" Series), and then twist to get a gap between the acrylic tube and the O-Ring Flange (4" Series). Once you have the gap, you can wedge a screw driver between the end of the acrylic tube and the O-Ring Flange (4" Series) to finish removing the acrylic tube.

	<img src="/brov2/cad/electronics-assembly-step1.PNG" class="img-responsive" style="max-width:900px" />
		
2. Remove the Aluminum End Cap with 14 Holes by removing the six M3x12 screws using the M2.5 hex driver. Place the M3x12 screws, clips (small L-shaped parts), and face seal O-ring in a safe place. 

	<img src="/brov2/cad/electronics-assembly-step2-annotated.png" class="img-responsive" style="max-width:900px" />
	
	[picture of the update electronics tray with the end cap removed]
	
# Installing the Cables 

## Installing the Penetrators

To install the Penetrators you will need the following parts and tools:

- 1 x Bag with one Cable Penetrator Nut (black), eight Cable Penetrator Nut (red), and nine O-rings
- 1 x Silicone Grease - 10g Tube
- 1 x Aluminum End Cap with 14 Holes w/ 3 Cable Penetrator Blanks, 1 Bar30 Pressure Sensor, 1 Enclosure Vent and Plug, and 1 power cable installed
- 3 x T200 with counter-clockwise thrusters 
- 3 x T200 with clockwise thrusters 
- 1 x Set of Lumen lights (optional)
- 1 x Fathom ROV Tether
- 1 x Penetrator Wrench

The Aluminum End Cap with 14 Holes comes with 3 Cable Penetrator Blanks, 1 Bar30 Pressure Sensor, 1 Enclosure Vent and Plug, and 1 power cable installed.

<img src="/brov2/cad/end-cap-as-shipped.png" class="img-responsive" style="max-width:900px" />

If you install the remaining penetrators as shown in the diagram below, it will keep everything neat and organized.

<img src="/brov2/cad/end-cap-final.png" class="img-responsive" style="max-width:900px" />
	
1. Remove eight of the O-rings and apply silicone grease to them. Keep the other O-ring in the bag, you will need it in a minute.

	<img src="/brov2/cad/grease-o-ring.png" class="img-responsive" style="max-width:900px" />

2. Wipe the exterior surface of the electronics enclosure endcap clean, and make sure it is free of any particles in the areas where the penetrator O-rings will sit.

3. Install the O-rings onto all of the thruster penetrators, the lumen penetrator, and the tether penetrator. 

4. Install the penetrators to the end cap in the order shown below. Tighten to finger tight, then use the provided wrench to tighten them an additional ~1/16 of a turn. If you can't loosen them with your fingers, they are tight enough. 

	1. Thruster 1 (CCW propeller) with red penetrator nut
	2. Thruster 5 (CCW propeller) with red penetrator nut
	3. Thruster 3 (CW propeller) with red penetrator nut
	4. Lumen with red penetrator nut
	5. Thruster 4 (CW propeller) with red penetrator nut
	6. Thruster 6 (CW propeller) with red penetrator nut
	7. Thruster 2 (CCW propeller) with red penetrator nut
	8. Tether with black penetrator nut

## Installing the End Cap

To reinstall the Aluminum End Cap with 14 Holes you will need the following parts and tools:

- The face seal O-ring, the 6 M3x12 screws, and the clips that you removed from the end cap earlier
- 1 x Silicone Grease - 10g Tube
- 1 x Aluminum End Cap with 14 Holes with all Cable Penetrators and Blank Penetrators installed
- 1 x 2.5 mm hex driver

1. Clean the O-ring and make sure that it is free of any debris or damage. 

2. Clean the O-Ring Flange (4" Series) and make sure that the O-ring groove is free of any debris or damage.

3. Apply Silicone grease to the O-ring.

4. Install face seal O-ring onto the O-Ring Flange (4" Series). 

5. Apply one drop of threadlocker to each of the M3x12 screws. Roll the screws around on a paper towel to evenly spread the threadlocker and to remove excess threadlocker.
	
6. Install Aluminum End Cap with 14 Holes with all Cable Penetrators and Blank Penetrators installed onto the O-Ring Flange (4" Series). Do not fully tighten any screws when first installing them; it may cause the O-ring to slip out of its groove. The end cap's orientation when installed should match the image below.

	[picture of the end cap installed that makes it clear where the clips should go]

## Finishing the Battery Enclosure

To complete the assembly of the battery enclosure you need the following parts and tools:

- 1 x Bag with one red penetrator nut and one O-ring left in it
- 1 x Silicone Grease - 10g Tube
- 1 x End Cap with 4 Holes (3" Series)
- 1 x Penetrator wrench
- 1 x XT90 to 3.5 mm bullet connector adapter
- 1 x 1.5 inch piece of heat shrink
- 1 x Heat gun, hairdryer, or lighter

1. Apply silicone grease to the O-ring.

2. Install the O-ring onto the battery power cable penetrator.
	
3. Install the battery power cable penetrator into the opening in the battery end cap.

	<img src="/brov2/cad/brov2-battery-penetrator.png" class="img-responsive" style="max-width:900px" />

4. Place the 1.5 inch long piece of black heat shrink over the end of the battery power cable penetrator. 

5. Apply heat to the heat shrink using your heat gun, hairdryer, or lighter until the heat shrink is firmly attached to the penetrator and snug to the two wires. You should be able to see the threads in the penetrator through the heat shrink.

	<img src="/brov2/cad/brov2-strain-relief-2.png" class="img-responsive" style="max-width:900px" />

6. Install the XT90 to bullet connector adapter to the battery power wire. 

	<img src="/brov2/cad/brov2-bullet-to-xt90.png" class="img-responsive" style="max-width:900px" />

7. If you wish to do the Optional Preliminary Vacuum Test, remove the Vent Plug from the Vent Penetrator Bolt and install the endcap onto the battery enclosure. You will also need to remove the Vent Plug for the Vent Penetrator Bolt on the electronics enclosure.

## Optional Preliminary Vacuum Test

This is the best point in the assembly process to perform a vacuum test. Since you have installed all of the penetrators, but have not done any of the wiring, troubleshooting will be as easy as possible. To prepare for the vacuum test you need to purchase a vacuum pump. We recommend [this one](https://www.amazon.com/HFS-Brake-Bleeder-Vacuum-Tuner/dp/B00NP60URE/ref=sr_1_10?ie=UTF8&qid=1470775016&sr=8-10&keywords=vacuum+pump).

1. Install the Watertight Enclosure (4" Series) with installed Dome onto the O-Ring Flange (4" Series) that is attached to the Aluminum End Cap with 14 Holes (4" Series)

	<img src="/brov2/cad/4-inch-end-cap-installed.png" class="img-responsive" style="max-width:900px">

2. Assemble the vacuum tee.

	<img src="/brov2/cad/vacuum-tee-assembled.png" class="img-responsive" style="max-width:900px">

Now you are ready to perform the preliminary vacuum test.

1. Test your vacuum pump to ensure that it is not leaking. See our [Testing the Test Setup Tutorial](http://docs.bluerobotics.com/tutorials/vacuum-test-plug/#testing-the-test-setup) for detailed instructions. 

2. Insert one of the vacuum plugs into the battery enclosure vent penetrator.

	<img src="/brov2/cad/vent-on-3-inch-end-cap.png" class="img-responsive" style="max-width:900px">

3. Insert the other vacuum plug into the electronics enclosure vent penetrator.

	<img src="/brov2/cad/vent-on-4-inch-end-cap.png" class="img-responsive" style="max-width:900px">

4. Pump the vacuum until the gauge reads 10 in. Hg [34 kPa] vacuum. If you cannot pull a vacuum, try the suggestions following step 6, below.

	<img src="/brov2/cad/vacuum-10-inches.png" class="img-responsive" style="max-width:900px">

5. Let the BlueROV2 and pump sit for 15 minutes.

6. If the gauge reads above 9 in. Hg [31 kPa] after 15 minutes, your seals are acceptable.

	<img src="/brov2/cad/vacuum-9-inches.png" class="img-responsive" style="max-width:900px">

If the gauge reads below 9 in. Hg [31 kPa] vacuum after 15 minutes, you should check the following:

1. Make sure that the M3 screws on the front and back end caps of the battery and electronics enclosure using the M2.5 hex driver. If you are able to tighten one or more, attempt the vacuum test again.

2. Make sure that the penetrators on the battery and electronics enclosure are fully tightened. Check by attempting to loosen by hand. If you are able to loosen one or more, tighten them then attempt the vacuum test again.

3. Make sure that all of the O-rings are installed in the penetrators. If any are missing, install then attempt the vacuum test again.

4. Check that the face seal O-rings and radial O-rings are installed in the battery and electronics enclosures and in good condition. If you find a damaged or missing O-ring, install and attempt the vacuum test again.

If you are still having trouble holding vacuum, please contact us at <a href="mailto:support@bluerobotics.com">support@bluerobotics.com</a>

To continue assembling the BlueROV2, remove the acrylic tube and dome from the electronics enclosure.

## Installing the Power Wires from the Penetrators

To install the wires from the penetrators you will need the following parts and tools:

- 1 x Large (~#2) Phillips head screw driver

1. Connect the battery power bullet connectors to bullet connectors on XT60 to bullet connector adapter. 

	<img src="/brov2/cad/electronics-enclosure-power-connection-1.png" class="img-responsive" style="max-width:900px" />

2. Connect the Lumen power wires to the power terminal block. 
	
	<img src="/brov2/cad/lumen-hot.png" class="img-responsive" style="max-width:900px" />

	<img src="/brov2/cad/lumen-ground.png" class="img-responsive" style="max-width:900px" />

## Installing the Signal Wires from the Penetrators
	
To install the wires from the penetrators you will need the following parts and tools:

-1 x Small (~2 mm) flat head screw driver

1. Connect the Lumen signal wire to the PixHawk channel 7 with the yellow wire oriented toward the bottow of the PixHawk. 

	<img src="/brov2/cad/lumen-signal.png" class="img-responsive" style="max-width:900px" />

2. Connect the Bar30 cable to the I<sup>2</sup>C port on the PixHawk.

	<img src="/brov2/cad/brov2-bar30-pixhawk.png" class="img-responsive" style="max-width:900px" />

3. Connect the motor wires to the motor wire terminal block, as shown in the diagrams below.

	<img src="/brov2/cad/port-side-motor-power-wiring.png" class="img-responsive" style="max-width:900px" />

	<img src="/brov2/cad/sboard-side-motor-power-wiring-2.png" class="img-responsive" style="max-width:900px" />	
	
4. Connect the tether wires to the Fathom-X Tether Interface Board. The other 6 wires can do not need to be connected to anything the operate the ROV. They are for future expansion.

	<img src="/brov2/cad/brov2-advanced-tether-in.png" class="img-responsive" style="max-width:900px" />

5. Remove the lens cap from the camera.

## Cable Routing

To route the cables in the Electronics Enclosure so that they will not snag on the Watertight Enclosure for ROV/AUV (4" Series) with Dome End Cap installed you will need the following parts and tools:

- 3 x 5 1/2" zip ties
- 1 x Wire strippers or scissors

1. On the starboard side (PixHawk side) collect the Bar30 wires and the Lumen signal wire and zip tie them to the long hex standoff slightly forward of the Motor Terminal Block using one zip tie. Make sure that the locking head of the zip tie and the wires are oriented to the inside of the long hex standoff.

	<img src="/brov2/cad/zip-tie-starboard.png" class="img-responsive" style="max-width:900px" />

2. On the port side (Fathom-X Tether Interface Board side) collect the Fathom Tether wires and zip tie them to the long hex standoff approximately even with the back of the Fathom-X Tether Interface Board and approximately even with the Motor Terminal Block. Make sure that the locking heads of the zip ties and the wires are oriented to the inside of the long hex standoff. 

	<img src="/brov2/cad/zip-tie-port.png" class="img-responsive" style="max-width:900px" />

# Final Assembly

## Mounting the Electronics Enclosure onto the Frame

To mount the Electronics Enclosure to the frame you need the following parts and tools:

- 1 x Watertight Enclosure for ROV/AUV (4" Series) with Dome End Cap installed
- 1 x Threadlocker
- 1 x Bag with four M3x16 screws
- 1 x 2.5 mm hex driver

1. Apply silicone grease to the two radial O-rings on the O-Ring Flange (4" Series) that is attached to the Electronics Tray then install the Watertight Enclosure (4" Series) with installed Dome End Cap to the O-Ring Flange (4" Series).

2. Apply one drop of threadlocker to each of the four M3x16 screws. Roll the screws around on a paper towel to evenly spread the threadlocker and to remove excess threadlocker.

3. Mount the Electronics Enclosure to the frame using the M3x16 screws so that the dome is on the same side as the front center panels (the center panels _without_ the 3 large holes). Install the M3x16 screws through the clips and into the Enclosure Cradle (4" Series). It is easier to install these screws if the clips are not fully tightened until all screws are through the clips and threading into the Enclosure Cradle (4" Series). This allows to clips to rotate so you can find the threaded hole in the Enclosure Cradle (4" Series) easily. 

	<img src="/brov2/cad/clip-installation.PNG" class="img-responsive" style="max-width:900px" />

## Mounting the Thrusters to the Frame

To mount the thrusters to the frame, you need the following parts and tools:

- 1 x 2.5 mm hex driver
- 3 x T200 Thruster with Clockwise Propeller installed
- 3 x T200 Thruster with Counter-Clockwise Propeller installed
- 1 x Bag with 16 M3x16 screws and 8 M3x12 screws in smaller bag
- 1 x Assembled ROV frame

Here is a diagram of where the thrusters go, and how they should be oriented. The green thrusters should have clockwise propellers and blue thrusters should have clockwise propellers. The order of installation matters here. You cannot get the front thrusters on if the rear ones were installed first.

<p align="center">
<img src="http://ardusub.com/images/vectored-frame.png" class="img-responsive" style="max-width:900px" />
</p>

1. Apply one drop of threadlocker to the 16 M3x16 screws and the 8 M3x12 screws. Roll the screws around on a paper towel to evenly spread the threadlocker and to remove excess threadlocker.

1. Install thrusters 1 and 2 underneath the front center panels, using the M3x16 screws. Tighten the screws so that they indent the frame slightly. It is physically possible to keep turning the screw at this point, but it isn't recommended.
	
2. Install thrusters 5 and 6, using the M3x12 screws on the side panels. Tighten the screws so that they indent the frame slightly.

3. Install thrusters 3 and 4 underneath the rear center panels, using the M3x16 screws. Tighten the screws so that they indent the frame slightly.

## Mounting the Lights

To install the Lumen mounts you will need the following parts and tools:

- 1 x Bag with the Lumen mounts, O-rings, and four M3x12 socket head cap screws 
- 1 x 2.5 mm hex driver 
- 1 x BlueROV2 frame
- 1 x Threadlocker

1. Apply one drop of threadlocker to each of the M3x12 screws. Roll the screws around on a paper towel to evenly spread the threadlocker and to remove excess threadlocker.

2. Install the mounts. Make sure not to overtighten the screw that goes into the slot. Only tighten it so that it slightly indents the frame. 

	<img src="/brov2/cad/brov2-light-mounts.png" class="img-responsive" style="max-width:900px" />
	
3. Loop one of the size 133 O-rings from the bag that had the Lumen Mounts and screws around each Lumen Mount and Lumen as shown below.

<img src="/lumen/cad/lumen-tutorial-14.png" class="img-responsive" style="max-width:900px" />	

## Mounting the Tether to the Frame

The tether needs to be firmly mounted to the frame to prevent the tether penetrator from being loosened through normal use. To do this, you will need the following parts and tools:

- 1 x Bag with thimble and 5 large zip ties
- 1 x Fathom Tether 
- 1 BlueROV2 frame

1. Loop the tether around the plastic thimble at a point about 12 inches (30 cm) away from the tether penetrator.
	
2. Firmly attach 3 of the zip ties, alternating directions as they are installed, around the tether right where it enters and exits the thimble. Hold the tether firmly in place agaisnt the thimble until it is secured.

	<img src="/fathom/cad/tether-tutorial-a1.png" class="img-responsive" style="max-width:900px" />	
	
3. Attach the thimble to the rear panel as shown

	<img src="/brov2/cad/brov2-thimble-to-frame.png" class="img-responsive" style="max-width:900px" />	
	
## Thruster and Lumen Cable Management

To clean up the thruster and lumen wires, you will need the bag of 30 zip ties and your scissors/wire cutters. 

The primary goal of Thruster and Lumen cable management is to prevent the wires from getting cut by the propellers. Make sure to check that no wire can reach a propeller after you have finished routing the cables. Below are some examples of what the cable routing should look like.

<img src="/brov2/cad/brov2-cable-routing-port.png" class="img-responsive" style="max-width:900px" />

<img src="/brov2/cad/brov2-cable-routing-starboard.png" class="img-responsive" style="max-width:900px" />

<img src="/brov2/cad/brov2-cable-routing-back.png" class="img-responsive" style="max-width:900px" />

## Installing the Fairings and Buoyancy

The buoyancy comes preinstalled in the fairings, but make sure it is still in all of the fairings prior to installing the fairings. To install the fairings, you will need the following parts and tools:

- 4 x Fairings with buoyancy installed 
- 1 x Bag with 16 self tapping screws 
- 1 x \#1 Phillips head screwdriver 

1. Remove the Lumens from their mount. You only need to remove the lower two Lumens from their mount if you have four.

	<img src="/brov2/cad/hanging-lumens.png" class="img-responsive" style="max-width:900px" />

2. Install the screws through the center panels and into the fairings.
	
	<img src="/brov2/cad/fairing-install-cad.PNG" class="img-responsive" style="max-width:900px" />
	
3. Reinstall the Lumens.

	<img src="/brov2/cad/BlueROV2-front-angle.png" class="img-responsive" style="max-width:900px" />

## Mounting Ballast to the Frame

To mount the ballast to the frame you need the following parts and tools:

- 7 x 200g ballast weights
- 7 x 8-16 Thread, 5/8" Long, Thread-Forming Screw   
- 1 x \#2 phillips head screwdriver

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

To get your topside ready to connect to the BlueROV2 you will need the following parts and tools:

- 1 x Fathom-X Tether Interface Board
- 1 x 2 mm flat head screw driver
- 1 x Computer (Mac, Windows, Linux)
- 1 x Ethernet cable 
- 1 x USB to Ethernet adapter (if your computer does not have an Ethernet Port)
- 1 x Mini-USB cable

1. Connect the Fathom Tether to the Fathom-X Tether Interface Board. 

2. Connect the Ethernet port of the Fathom-X Tether Interface Board to you computer. If you do not have an Ethernet port on you computer connect the Ethernet port on the Fathom-X Tether Interface Board to a USB to Ethernet adapter then connect the adapter to your computer.

3. Connect your Mini-USB the the Fathom-X Tether Interface Board and to a USB power supply that can supply at least 500 milliamps. Most computer USB ports can do this, but if the "Link" LED does not light up try using a USB charger.

<img src="/brov2/cad/topside-wiring.png" class="img-responsive" style="max-height:500px" />

# Next Steps

First, set up the software on your topside computer. Please see our [Software Setup](/brov2/software-setup/) page.

Next, refer to the [Operating Manual](/brov2/operation/) to learn how complete your first dive.










