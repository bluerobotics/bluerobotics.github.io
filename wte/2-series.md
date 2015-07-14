---
layout: default
title: 2" Series Watertight Enclosure Documentation
permalink: /watertight-enclosures/2-series/
order: 0
nav:
- Introduction: introduction
- - Important Notes: important-notes
- Specifications: watertight-enclosure-specifications
- - Specification Table: specification-table
- - 3D Model: d-models
- Assembly: assembly
- Making Custom End-Caps: making-custom-end-caps

store-links:
- Watertight Enclosure - 4" Series: https://www.bluerobotics.com/product-category/4-series/
- Watertight Enclosure - 2" Series: https://www.bluerobotics.com/product-category/2-series/

manual-links:
- Watertight Enclosure - 4" Series: /watertight-enclosures/4-series/
- Enclosure Vent: /vent/
---

#Introduction

Blue Robotics offers a series of watertight enclosures for use on ROVs, AUVs, and other marine vehicles. A modular design consisting of a tube, sealing flanges, and various end caps allows lots of flexibility and modification. The enclosures are made of high-quality, precision machined parts and are simple to assemble.

##Important Notes

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>
Always inspect the o-rings before operation in water and especially when replacing the end-caps, aluminum flanges, or penetrators. Any dust, hair, or other particles can cause a leak.

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>
Use plastic tools, NOT steel or other hard tools, to remove the o-rings from the aluminum sealing flange. Hard tools can create scrapes that will compromise sealing ability.

<!--<i class="fa fa-lightbulb-o fa-fw fa-2x blue"></i>
A slight clicking noise is normal, especially when operated dry. It is caused by slight movement of the shaft in the plastic bearings.-->

#Watertight Enclosure Specifications

##Specification Table

| ----------------------------------- | ----------------------------- |
|                          **2" Series Enclosure**                    |
| ----------------------------------- | ----------------------------- |
| Maximum Tested Depth (Saltwater)    | 330 ft        | 100 m         |
| Maximum Pressure                    | 146 psi       | 1000 kPa      |
| Tube Inner Diameter                 | 2 in          | 50.8 mm       |
| Tube Outer Diameter                 | 2.25 in       | 57.2 mm       |
| Tube Thickness                      | 0.125 in      | 3.2 mm        |
| End Cap Thickness                   | 0.24 in       | 6.0 mm        |
| Aluminum Flange Inner Diameter      | 3.5 in        | 89 mm         |
| Total Length                        | 12.7 in       | 322 mm        |
| Radial Seal O-ring (1 used)         | AS568-133, Buna-N             |
| Face Seal O-ring (1 used)           | AS568-030, Buna-N             |

##3D Models

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

###Assembly Model

- [WTE2-ASM-R1.zip](http://www.bluerobotics.com/models/WTE2-ASM-R1.zip)

###Tube (Standard 11.75", 298mm length)

- [WTE2-P-TUBE-12-R1.zip](http://www.bluerobotics.com/models/WTE2-P-TUBE-12-R1.zip)

###Aluminum O-ring Flange

- [WTE2-M-FLANGE-SEAL-R1.zip](http://www.bluerobotics.com/models/WTE2-M-FLANGE-SEAL-R1.zip)

###End-Caps

- Plain solid end-cap: [WTE2-P-END-CAP-R1.zip](http://www.bluerobotics.com/models/WTE2-P-END-CAP-R1.zip)
- With 2 x 10mm Holes: [WTE2-P-END-CAP-2X10MM-R1.zip](http://www.bluerobotics.com/models/WTE2-P-END-CAP-2X10MM-R1.zip)

#Assembly

The assembly process is simple and straightforward - it will take a few minutes!

**Tools Needed:**

* Silicon grease
* 2.5mm Hex Key

**Steps:**

<img src="/assets/images/tutorials/WTE/2-step-1.png" class="img-responsive" style="max-width:600px" />
<img src="/assets/images/tutorials/WTE/2-step-2.png" class="img-responsive" style="max-width:600px" />
1. Lubricate the three O-rings with a thin layer of silicon grease and then install into the grooves on the flange. The thin O-ring is placed in the groove in the face of the flange.

<img src="/assets/images/tutorials/WTE/2-step-3.png" class="img-responsive" style="max-width:600px" />
2. Attach the end caps to the flanges with 6 socket cap screws. Gently tighten the screws so that the O-ring is compressed but not so tight as to damage the plastic

<img src="/assets/images/tutorials/WTE/step-4.png" class="img-responsive" style="max-width:600px" />
3. Install the vent and any necessary cable penetrators into the end-cap.  
<img src="/assets/images/tutorials/WTE/step-5.png" class="img-responsive" style="max-width:600px" />
4. Install the flanges onto the tube and replace the vent cap to seal.

#Making Custom End-Caps

One of the cool things about the watertight enclosure design is that it's compatible with all sort of end-cap sizes and shapes. We've got a few different ones available but we encourage you to design your own to perfectly suit your application.

The CAD files above as long as the DXF drawing file attached below will give you a good starting point for your design. You'll need access to either 3D modeling software like SolidWorks or AutoCAD or 2D drawing software like Adobe Illustrator, Inkscape, and others.

- [WTE2-END-CAP-R1.DXF](/wte/dxf/WTE2-END-CAP-R1.DXF)

Here are a few things to remember:

- For the 2" enclosure we recommend thick 6mm cast acrylic to handle the pressure
- Note the inner diameter of the aluminum sealing flange and ensure that any holes are within that diameter
- Feel free to extend beyond the original shape to add mounting holes, etc.

Once you have a design, you can cut the parts yourself if you have a laser cutter or use an online service. We have frequently used [Pololu Laser Cutting](https://www.pololu.com/product/749) with great results!