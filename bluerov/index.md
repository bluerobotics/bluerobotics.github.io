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
- - Thrusters: thruster-installation
- - Electronics Tray: electronics-tray-assembly
- Advanced: advanced

store-links:
- BlueROV: http://bluerobotics.com/store/rov/bluerov/

manual-links:
- T100/T200 Thrusters: /thrusters/
- M100 Motor: /thrusters/motors/
---

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
14            | M5x12 Button-Head Socket Cap Screws                     
12            | M4x10 Button-Head Socket Cap Screws                     
2             | Velcro Straps                                           
1             | Rubber Edge Strip    

##Thrusters                                                         

Quantity      | Part
------------- | --------------------------------------------------------
6             | T100 Thrusters                                          
6             | Basic ESC 30A                                           
24            | M3x10 Button-Head Socket Cap Screws                     

##Watertight Enclosure

Quantity      | Part
------------- | --------------------------------------------------------
1             | Tube (11.75" L, 4.5" OD, 4" ID, cast acrylic)           
1             | Clear Endcap (cast acrylic)                             
1             | Clear Endcap with 8 x 10mm holes (cast acrylic)         
2             | CNC Aluminum Sealing Flange                             
4             | O-rings for Flange                                      
12            | M3x16 Socket-Head Cap Screws                            

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
8             | M3x6 Button-Head Socket Cap Screws                              
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
1             | Silicon grease tube                                     

#Specifications

##Specification Table

The following specifications are given for the BlueROV with T100 Thrusters and Basic ESCs.

|    **Physical**                                                        |
| -------------------------------------- | ----------------------------- |
| Length                                 | 483 mm        | 19.0 in       |
| Width                                  | 330 mm        | 13.0 in       |
| Height                                 | 267 mm        | 10.5 in       |
| Weight (no electronics)                |     kg        |      lb       |
| Net Buoyancy (no electronics)          |     kg        |      lb       |
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
| Operating Voltage                      | 12 volts                      |
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

* 2.5mm Hex Key
* 3mm Hex Key

1. Remove the protective paper from all plastic parts.  

	<img src="/assets/images/tutorials/bluerov-manual/Picture1.png" class="img- responsive" style="max-width:600px" />

2. Next, we will loosely assemble the center structure before attaching it to the rest of the ROV. Start with the Center Panel, two Aluminum T-Slot Bars, four T-Slot Nuts, and four M5x12 Button-Head Socket Caps screws as shown above.

	<img src="/assets/images/tutorials/bluerov-manual/Picture2.png" class="img-responsive" style="max-width:600px" />

3. Insert the four screws into the Center Panel and lightly attached the T-slot Nuts as shown.

	<img src="/assets/images/tutorials/bluerov-manual/Picture3.png" class="img-responsive" style="max-width:600px" />

4. Slide the two Aluminum T-Slot Bars onto the T-Slot Nuts. Make sure the Center Panel is centered on both bars and gently tighten the screws.

	<img src="/assets/images/tutorials/bluerov-manual/Picture4.png" class="img-responsive" style="max-width:600px" />

5. Next we'll add the two Watertight Enclosure Cradles using four more nuts and screws. Insert the nut into the screw a few turns and then slide into the T-Slot bar. Then insert the Plastic Cradle so that the screws fill the notches.

	<img src="/assets/images/tutorials/bluerov-manual/Picture5.png" class="img-responsive" style="max-width:600px" />
	<img src="/assets/images/tutorials/bluerov-manual/Picture6.png" class="img-responsive" style="max-width:600px" />

6. Gently tighten the screws to secure the Cradle as shown above.

	<img src="/assets/images/tutorials/bluerov-manual/Picture7.png" class="img-responsive" style="max-width:600px" />
	
7. Next, install the Rear Thruster Mount with the same method. The tab on the Mount fits into the notch on the Center Panel to align the mount.

	<img src="/assets/images/tutorials/bluerov-manual/Picture8.png" class="img-responsive" style="max-width:600px" />
	
8. Last, insert the straps that will hold the Watertight Enclosure and cut two pieces of Rubber Edge Strip to fit on the curved surface of the cradle. You can secure the strips with hot glue if desired, but it is not necessary.

	<img src="/assets/images/tutorials/bluerov-manual/Picture9.png" class="img-responsive" style="max-width:600px" />

9. Using six M4x10 Button-Head Socket Cap Screws, attach the six Round Aluminum Standoffs to one of the Side Panels. The Blue Robotics logo should face outward on each panel.  

	<img src="/assets/images/tutorials/bluerov-manual/Picture10.png" class="img-responsive" style="max-width:600px" />

10. Using two M5x12 Button-Head Socket Cap Screws, attach the center panel assembly to the Side Panel assembly. Use a measuring device to ensure that the Center Panel is centered between the two Side Panels. If not, you can loosen the screws and adjust it.  

	<img src="/assets/images/tutorials/bluerov-manual/Picture11.png" class="img-responsive" style="max-width:600px" />

11. Attach the remaining Side Panel using two M5x12 Button-Head Socket Cap Screws and six M4x10 Button-Head Socket Cap Screws.
	
	<img src="/assets/images/tutorials/bluerov-manual/picture12.png" class="img-responsive" style="max-width:600px" />

12. That's it! The frame is complete. 

##Watertight Enclosure Assembly

Please see the [Watertight Enclosure Assembly Tutorial](/watertight-enclosures/) for detailed instructions on how to assemble the Watertight Enclosure. Once the enclosure is assembled, do the following:

1. We need the enclosure in place to measure the necessary length of each thruster cable. Attach the enclosure to the frame using the two velcro straps.  

2. The enclosure can be moved forward and backward to adjust center of gravity and center of buoyancy of the vehicle. 

##Thruster Installation

1. First, we'll change the propellers on two thrusters so that we have counter-rotating pairs. Follow the instructions on the [Thruster Manual](/thrusters/) to do so.  

2. Next, we'll attached the size thrusters to the frame using twenty-four M3x10 Button-Head Socket Cap screws. See the pictures for proper orientation or refer to the following:
  * The two front thrusters should be counter-rotating and face upwards
  * The rear thruster faces upwards
  * The two middle thrusters face forward and should be counter-rotating
  * The bottom thrusters faces with the front pointing towards the left side of the ROV

3. Now that the thrusters are mounted, we will measure the length necessary for each cable. Route the cables carefully and insert them into the six lower holes in the rear end-cap of the ROV. Leaving a few inches of slack, mark each cable where it enters the enclosure.

4. Cut each cable to a length about 4" longer than the mark that was just made.

5. Follow the [Cable Stripping Tutorial](/tutorials/cable-stripping/) to remove 4" of cable jacket from each cable.

6. Next, follow the [Cable Penetrator Tutorial](/tutorials/cable-penetrator/) to install the cable penetrator bolt on each cable. Allow time for the sealant to dry on each penetrator before installation on the end cap.

7. Install each of the cable penetrators on the end cap by first applying silicon grease to each o-ring and sliding onto the penetrator bolt. Pass the penetrator through the end-cap and secure with the nut. A firm hand-tightness is adequate.

8. That's it! We recommend using the included bullet connectors with the Basic ESCs to attach the ESC to the thruster cables.

##Electronics Tray Assembly

The BlueROV comes with an electronics tray designed to fit the ESCs, a Raspberry Pi 1/2 computer, and an 3DR APM 2.6 autopilot. It also has a power distribution terminal block and straps to hold a battery.

1. First attach the terminal block in the center of the tray on top using the two provided holes.

2. Next, attach the ESCs using the provided zip ties. The ESC should be arranged with the "BlueRobotics" logo facing toward the tray which will expose the warm parts of the ESC to air to enable cooling. Three ESCs are attached on top and three on bottom.

3. We recommend attaching the Raspberry Pi and camera now as well. Hardware is not provided.

4. Next, install the Secondary Tray above the main tray using the four provided Aluminum Hex Standoffs and eight M3x6 Button-Head Socket Cap screws.

5. The round legs can be snapped on to each end of the tray. You can use glue to secure the legs if desired. 

6. The provided velcro strap is used to secure a battery (not included).

#Advanced
