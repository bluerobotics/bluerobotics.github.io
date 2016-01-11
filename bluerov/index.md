---
layout: default
title: BlueROV Documentation
order: 1
nav:
- Introduction: introduction
- - Safety: safety
- What's Included: whats-included
- - Frame: frame
- - Thrusters: thrusters
- - Watertight Enclosure: watertight-enclosure
- - Enclosure Vent: enclosure-vent
- - Cable Penetrators: cable-penetrators
- - Electronics Tray: electronics-tray
- - Miscellaneous: miscellaneous
- Specifications: specifications
- - Specification Table: specification-table
- - Recommended Electronics and Software: recommended-electronics-and-software
- - 3D Model: d-model
- Assembly: assembly
- - Frame: frame-assembly
- - Watertight Enclosure: watertight-enclosure-assembly
- - Thrusters: thruster-preparation
- - Electronics Tray: electronics-tray-assembly
- - Cable Potting: cable-potting


store-links:
- BlueROV: http://bluerobotics.com/store/rov/bluerov/

manual-links:
- T200 Thrusters: /thrusters/
- M100 Motor: /thrusters/motors/
---

<img src="/assets/images/tutorials/bluerov-manual/michal-rov-banner.png" class="img-responsive" style="max-width:900px" />

#Introduction

The **BlueROV** is an unassembled ROV kit with frame, watertight enclosure, thrusters, and speed controllers. Hardware/software experience required. It uses six thrusters to provide six-degree-of-freedom control allowing you to point the ROV in any orientation to film anything, grab anything with a simple robot arm, and have a lot of fun! 

##Safety 

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with electricity, especially in water, always practice caution. Always ensure that connections are secure and watertight. Keep your body away from spinning motors and propellers.

#What's Included

##Frame

Quantity      | Part
------------- | --------------------------------------------------------
1             | Left Side Panel (Black Acrylic)                         
1             | Right Side Panel (Black Acrylic)                        
2             | 20mm Aluminum T-Slot, 319mm L                           
6             | Round Aluminum Standoff, 319mm L                        
1             | Center Panel (Light Blue Acrylic)                       
1             | Rear Thruster Mount (Black Delrin)                      
2             | Watertight Enclosure Cradles (Black Delrin)             
10            | T-Slot Nuts                                             
12            | M5x12 Cross Head Plastic Screws                     
12            | M4x10 Button-Head Hex Screws                     
2             | Velcro Straps
1             | Double Sided Velco Strap                             
1             | Rubber Edge Strip    

##Thrusters                                                         

Quantity      | Part
------------- | --------------------------------------------------------
6             | T200 Thrusters                                          
6             | Basic ESC 30A                                           
24            | M3x10 Button-Head Hex Screws                     

##Watertight Enclosure

Quantity      | Part
------------- | --------------------------------------------------------
1             | Tube (11.75" L, 4.5" OD, 4" ID, cast acrylic)           
1             | Clear Endcap (cast acrylic)                             
1             | Clear Endcap with 8 x 10mm holes (cast acrylic)         
2             | CNC Aluminum Sealing Flange                             
4             | O-rings for Flange                                      
12            | M3x16 Socket-Head Hex Screws                            

##Enclosure Vent

Quantity      | Part
------------- | --------------------------------------------------------
1             | Vent Bolt                                               
1             | Vent Nut                                                
1             | Vent Plug                                               
2             | O-rings for Vent Plug                                   
1             | O-ring for Vent Bolt                                    

##Cable Penetrators

Quantity      | Part
------------- | --------------------------------------------------------
8             | Cable Penetrator Bolt for 6mm Cable                     
2             | Cable Penetrator Bolt (No Hole)                         
10            | Cable Penetrator Nut                                    
10            | O-rings for Cable Penetrators                           

##Electronics Tray

Quantity      | Part
------------- | --------------------------------------------------------
1             | Main Tray (Black Delrin)                                
1             | Secondary Tray (Black Delrin)                           
2             | Semi-circular Tray Legs (Black Delrin)                  
4             | Aluminum Hex Standoff, 25mm                             
8             | M3x6 Button-Head Hex Screws                              
1             | Velcro Battery Strap                                    
1             | 8-Position Power Terminal Block                                    
6             | Terminal Block Jumpers
5             | Zip Ties                                                
1             | BlueRobotics Power Junction Board (*If BlueESC included*)
1             | BlueRobotics Signal Junction Board (*If BlueESC included*)
1             | BlueESC Power Cable, 1m (*If BlueESC included*)
1             | BlueESC Signal Cable, 1m (*If BlueESC included*)    


##Miscellaneous                                                      


Quantity      | Part
------------- | --------------------------------------------------------
1             | Silicone grease tube                                     

#Specifications

##Specification Table

The following specifications are given for the BlueROV with T100 Thrusters and Basic ESCs at 12 volts.

|    **Physical**                                                        |
| -------------------------------------- | ----------------------------- |
| Length                                 | 483 mm        | 19.0 in       |
| Width                                  | 330 mm        | 13.0 in       |
| Height                                 | 267 mm        | 10.5 in       |
| Weight (no electronics)                | 3.73 kg       |  8.2 lb       |
| Net Buoyancy (no electronics)          |      kg       |      lb       |
| Watertight Enclosure Inner Diameter    | 102 mm        | 4.0 in        |
| Watertight Enclosure Inner Length      | 298 mm        | 11.75 in      |
| Cable Penetrator Holes                 | 10 x 10mm                     |
| -------------------------------------- | ----------------------------- |
|   **Performance**                                                      |
| -------------------------------------- | ----------------------------- |
| Total Forward Thrust                   | 4.72 kgf      | 10.4 lbf      |
| Total Vertical Thrust                  | 7.08 kgf      | 15.6 lbf      |
| Total Side Thrust                      | 2.36 kgf      | 5.2 lbf       |
| Maximum Depth Rating (so far)          | 100 m         | 330 ft        |
| -------------------------------------- | ----------------------------- |
|    **Electrical**                                                      |
| -------------------------------------- | ----------------------------- |
| Operating Voltage                      | 12-16 volts                   |
| -------------------------------------- | ----------------------------- |

##Recommended Electronics and Software

We recommend the open-source **bluerov-ros-pkg** software. For recommended electronics, please see the [bluerov-ros-pkg documentation](https://github.com/bluerobotics/bluerov-ros-pkg/blob/master/docs/index.md).

##3D Model

These are BIG files since the model is fairly complex. If you just want to check out a 3D view of the BlueROV, we recommend [checking out the files on GrabCAD](https://grabcad.com/library/bluerobotics-bluerov-r1-1-1).

| File Type                  | Link                          |
| -------------------------- | ----------------------------- |
| SolidWorks Part (.sldprt)  | [BROV-R1.SLDPRT](http://www.bluerobotics.com/models/bluerov-r1/BROV-R1.SLDPRT) |
| STEP (.step)               | [BROV-R1.STEP](http://www.bluerobotics.com/models/bluerov-r1/BROV-R1.STEP)   |
| IGES (.igs)                | [BROV-R1.IGS](http://www.bluerobotics.com/models/bluerov-r1/BROV-R1.IGS) |
| STL (.stl)                 | [BROV-R1.STL](http://www.bluerobotics.com/models/bluerov-r1/BROV-R1.STL) |

#Assembly

##Frame Assembly

The frame is the structure of the ROV and includes several laser-cut plastic pieces as well as metal hardware.

**Tools Needed:**

* 2mm Hex Driver
* 2.5mm Hex Driver
* Flathead Screwdriver
* Phillips screwdriver
* Knife or Scissors
* Syringe with Luer Tip
* Wire cutters
* Wire Strippers

1. Remove the Brown protective paper from all plastic parts.  

	<img src="/assets/images/tutorials/bluerov-manual/Picture1.png" class="img-responsive" style="max-width:600px" />

2. Next, we will loosely assemble the center structure before attaching it to the rest of the ROV. Start with the Center Panel, two Aluminum T-Slot Bars, four T-Slot Nuts, and four M5x12 Cross Head Plastic Screws as shown above. Note: old screw hardware in image above.

	<img src="/assets/images/tutorials/bluerov-manual/Picture2.png" class="img-responsive" style="max-width:600px" />

3. Insert the four screws into the Center Panel and lightly attached the T-slot Nuts as shown. Note thate the beveled edge of the T-slot nuts faces inward into the Aluminum T-Slot Bars.

	<img src="/assets/images/tutorials/bluerov-manual/Picture3.png" class="img-responsive" style="max-width:600px" />

4. Slide the two Aluminum T-Slot Bars onto the T-Slot Nuts. Make sure the Center Panel is centered on both bars and gently tighten the screws.

	<img src="/assets/images/tutorials/bluerov-manual/Picture4.png" class="img-responsive" style="max-width:600px" />

5. Next we'll add the two Watertight Enclosure Cradles using four more nuts and plastic screws. Insert the nut into the screw a few turns and then slide into the T-Slot bar. Then insert the Plastic Cradle so that the screws fill the notches.

	<img src="/assets/images/tutorials/bluerov-manual/Picture5.png" class="img-responsive" style="max-width:600px" />
	<img src="/assets/images/tutorials/bluerov-manual/Picture6.png" class="img-responsive" style="max-width:600px" />

6. Gently tighten the screws to secure the Cradle as shown above.

	<img src="/assets/images/tutorials/bluerov-manual/Picture7.png" class="img-responsive" style="max-width:600px" />
	
7. Next, install the Rear Thruster Mount with the same method. The tab on the Mount fits into the notch on the Center Panel to align the mount.

	<img src="/assets/images/tutorials/bluerov-manual/Picture8.png" class="img-responsive" style="max-width:600px" />
	
8. Last, open and insert the straps that will hold the Watertight Enclosure and cut two pieces of Rubber Edge Strip to fit on the curved surface of the cradle. You can secure the strips with hot glue if desired, but it is not necessary.

	<img src="/assets/images/tutorials/bluerov-manual/Picture9.png" class="img-responsive" style="max-width:600px" />

9. Using six  M4x10 Button-Head Hex Screws, attach the six Round Aluminum Standoffs along the outer rim of one of  the Side Panels. The Blue Robotics logo should face outward on each panel.  

	<img src="/assets/images/tutorials/bluerov-manual/Picture10.png" class="img-responsive" style="max-width:600px" />

10. Using two M5x12 Cross Head Plastic Screws, attach the center panel assembly to the Side Panel assembly, with the Rear Thruster Mount facing the back (shorter) end of the Side Panel. Use a measuring device to ensure that the Center Panel is centered between the two Side Panels. If not, you can loosen the screws and adjust it.  

	<img src="/assets/images/tutorials/bluerov-manual/Picture11.png" class="img-responsive" style="max-width:600px" />

11. Attach the remaining Side Panel using two M5x12 Cross Head Plastic Screws and six M4x10 Button-Head Hex Screws.
	
	<img src="/assets/images/tutorials/bluerov-manual/picture12.png" class="img-responsive" style="max-width:600px" />

12. That's it! The frame is complete. 

##Watertight Enclosure Assembly

Please see the [Watertight Enclosure Assembly Tutorial](/watertight-enclosures/4-series/#assembly) for detailed instructions on how to assemble the Watertight Enclosure.
<img src="/assets/images/tutorials/bluerov-manual/BR-3.png" class="img-responsive" style="max-width:600px" />
The above shows the suggested penetrator configuration for the Blue ROV, with the vent plug placed in the upper right hole. This configuration will enable easy access to the vent plug, and clean cable routing for all six thrusters.

##Thruster Preparation

1. First, we'll change the propellers on two thrusters so that we have counter-rotating pairs. Follow the instructions in the [Propeller Changing Tutorial](/tutorials/changing-the-propeller) to do so. These two thrusters will be the right horizontal and right vertical thrusters.
<img src="/assets/images/tutorials/bluerov-manual/BR-11.png" class="img-responsive" style="max-width:600px" /> 
2. Label the thrusters with the location of where they will be going on the ROV. The standard thruster label configuration for the Blue ROV is shown above.
   From left to right, the vertical thrusters are 1 and 2, with the horizontal thrusters 3 and 4. Thus one of the thrusters with the counter-rotating blade should be labelled 2, and the other 4. The rear vertical thruster is 5, and the strafing thruster 6.

3. Once the thrusters have been labelled and set aside for specific locations, cut the cables to length. We suggest the following lengths, measured from where they exit the nose of the thruster:
  * Thrusters 1 and 2 (Front Vertical) to 84cm (33")
  * Thrusters 3 and 4 (Horizontal) to 68cm (27")
  * Thruster 5 (Rear Vertical) to 51cm (20")
  * Thruster 6 (Strafing) to 68cm (27")
  
	Cutting the cables to these lengths will eliminate unnecessary extra cable, but allow them to be potted a second time if a mistake is made and still reach the enclosure.

4. When the cables have been cut to length, follow the [Cable Stripping Tutorial](/tutorials/cable-stripping/) to remove 10-12cm (4-5")of cable jacket from each cable. Stip a small length of the wires at the end to allow connectors to be soldered on.  

##Electronics Tray Assembly

The BlueROV comes with an electronics tray designed to fit the ESCs, a Raspberry Pi 1/2 computer, and an 3DR APM 2.6 autopilot. It also has a power distribution terminal block and straps to hold a battery.


<img src="/assets/images/tutorials/bluerov-manual/Electronics-tray/elec-step-1.png" class="img-responsive" style="max-width:600px" />
<img src="/assets/images/tutorials/bluerov-manual/Electronics-tray/elec-step-4.png" class="img-responsive" style="max-width:600px" />

1. First, install the Secondary Tray above the main tray using the four provided Aluminum Hex Standoffs and eight M3x6 Button-Head Hex Screws.

	<img src="/assets/images/tutorials/bluerov-manual/Electronics-tray/elec-step-5.png" class="img-responsive" style="max-width:600px" />
	<img src="/assets/images/tutorials/bluerov-manual/Electronics-tray/elec-step-7.png" class="img-responsive" style="max-width:600px" />
	<img src="/assets/images/tutorials/bluerov-manual/Electronics-tray/elec-step-8.png" class="img-responsive" style="max-width:600px" />

2. Next, attach the Terminal Block Jumpers to the Terminal Block, leaving out a jumper in the middle. 

	<img src="/assets/images/tutorials/bluerov-manual/Electronics-tray/elec-step-9.png" class="img-responsive" style="max-width:600px" />
	<img src="/assets/images/tutorials/bluerov-manual/Electronics-tray/elec-step-10.png" class="img-responsive" style="max-width:600px" />

3. Next, attach the terminal block in the center of the tray on top using the two provided holes. This can be done with M3 screws or zip ties. Put the screws through the holes in the terminal block closest to the electronics shelf to allow clearance for the wires coming from the ESCs mounted to the underside of the board.
<img src="/assets/images/tutorials/bluerov-manual/BR-7.png" class="img-responsive" style="max-width:600px" />

4. Next, attach the ESCs using the provided zip ties. The ESC should be arranged with the "BlueRobotics" logo facing toward the tray which will expose the warm parts of the ESC to air to enable cooling. Three ESCs are attached on top and three on bottom. Label the ESCs 1-6 before mounting in order to keep track of which will be controlling which motor. We suggest the above configuration to allow for the most direct wire routing.
<img src="/assets/images/tutorials/bluerov-manual/BR-8.png" class="img-responsive" style="max-width:600px" />

5. First loosly attatch 2 ESCs to the top and bottom of the electronics tray, leaving enough slack in the zip tie to be able to adjust the positions of the ESCs.
<img src="/assets/images/tutorials/bluerov-manual/BR-9.png" class="img-responsive" style="max-width:600px" />

6. Cut and strip the power input wires of the ESCs to an appropriate length to attatch them to the terminal block, negative wires on the left side and positive on the right. We use crimped spade connectors at the ends of the wires, but just the bare wires will work fine as well. If you need additional clearance to route or bend a wire, the clear heat shrink on the ESC can be cut back a bit to give a little extra room.
<img src="/assets/images/tutorials/bluerov-manual/BR-13.png" class="img-responsive" style="max-width:600px" />

7. Repeat for the 4 additional ESCs. Take your time in laying out the cables, and be sure that they will reach the terminal block before cutting. Attatch a battery lead with the connector of your choice to the terminal block, and route the cable below to the battery area.

8. We recommend attaching the Raspberry Pi and camera now as well. Hardware is not provided.

9. The round legs can be snapped on to each end of the tray. You can use glue to secure the legs if desired. 

10. The provided double sided velcro strap is used to secure a battery (not included). We recommend using a 4s (14.8v) lithium polymer battery, either from a local hobby shop or a retailer such as [Hobby King](http://www.hobbyking.com/hobbyking/store/index.asp). You can also use a 3s (11.1v) battery, and the T200 can be safely run with up to a 5s (18.5v) battery.

##Cable Potting

Please see the [Cable Penetrator Tutorial](/tutorials/cable-penetrator/) on wire potting instructions. To make the Blue ROV wire potting as easy as possible, follow these steps.
<img src="/assets/images/tutorials/bluerov-manual/BR-4.png" class="img-responsive" style="max-width:600px" />

1. Take your completed endcap, and feed each thruster cable through its corresponding suggested penetrator, gluing the jacket with CA glue as in the cable penetrator tutorial. Try to keep each cable as straight as possible where it enters the penetrator. If the cable is tilting slightly, direct it towards the rim of the endcap as seen above.
<img src="/assets/images/tutorials/bluerov-manual/BR-5.png" class="img-responsive" style="max-width:600px" />

2. Pot the cables with marine epoxy, being sure to slightly agitate the cable afterwards to work out any air bubbles.
<img src="/assets/images/tutorials/bluerov-manual/BR-6.png" class="img-responsive" style="max-width:600px" />

3. Once the epoxy has cured (about 24 hours), flip the endcap over and pot the other side where the wires exit to the inside. You may find it convenient to prop up the encap to make this process easier, we use the cardboard tubes that the thrusters are packaged in to do the job.

4. Solder 3.5mm male bullet connectors to the motor wires, and cover the joints with heat shrink.
<img src="/assets/images/tutorials/bluerov-manual/BR-12.png" class="img-responsive" style="max-width:600px" />

5. Attach the bullet connectors of each motor to its corresponding ESC, and slide the electronics tray into the watertight enclosure. Put on the endcap, and secure the enclosure to the ROV frame with the two provided velcro straps. The enclosure can be moved forward and backward to adjust center of gravity and center of buoyancy of the vehicle. Now your frame, enclosure, and motors are ready to go!




