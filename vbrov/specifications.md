---
layout: default
title: BlueROV2 Specifications
order: 1
nav:
- Introduction: introduction
- - Safety: safety
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

# Introduction

The **BlueROV** is an unassembled ROV kit with frame, watertight enclosure, thrusters, and speed controllers. Hardware/software experience required. It uses six thrusters to provide five-degree-of-freedom control allowing you to point the ROV in any orientation to film anything, grab anything with a simple robot arm, and have a lot of fun! 

## Safety 

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with electricity, especially in water, always practice caution. Always ensure that connections are secure and watertight. Keep your body away from spinning motors and propellers.

# Specifications

## Specification Table

The following specifications are given for the BlueROV with T100 Thrusters and Basic ESCs at 12 volts.

|    **Physical**                                                        |
| -------------------------------------- | ----------------------------- |
| Length                                 | 457.2 mm      | 18 in         |
| Width                                  | 338 mm        | 13.3 in       |
| Height                                 | 254 mm        | 10 in         |
| Weight (no electronics)                |      kg       |      lb       |
| Net Buoyancy (no electronics)          |      kg       |      lb       |
| Watertight Enclosure Inner Diameter    | 102 mm        | 4.0 in        |
| Watertight Enclosure Inner Length      | 298 mm        | 11.75 in      |
| Cable Penetrator Holes                 | 14 x 10mm                     |
| -------------------------------------- | ----------------------------- |
|   **Performance**                                                      |
| -------------------------------------- | ----------------------------- |
| Total Forward Thrust                   | 14.4 kgf      | 31.7 lbf      |
| Total Vertical Thrust                  | 10.2 kgf      | 22.4 lbf      |
| Total Side Thrust                      | 14.4 kgf      | 31.7 lbf      |
| Maximum Depth Rating (so far)          | 100 m         | 330 ft        |
| -------------------------------------- | ----------------------------- |
|    **Electrical**                                                      |
| -------------------------------------- | ----------------------------- |
| Operating Voltage                      | 12-16 volts                   |
| -------------------------------------- | ----------------------------- |

## Recommended Electronics and Software

We recommend the open-source **bluerov-ros-pkg** software. For recommended electronics, please see the [bluerov-ros-pkg documentation](https://github.com/bluerobotics/bluerov-ros-pkg/blob/master/docs/index.md).

## 3D Model

These are BIG files since the model is fairly complex. If you just want to check out a 3D view of the BlueROV, we recommend [checking out the files on GrabCAD](https://grabcad.com/library/bluerobotics-bluerov-r1-1-1).

| File Type                  | Link                          |
| -------------------------- | ----------------------------- |
| SolidWorks Part (.sldprt)  | [BROV-R1.SLDPRT](http://www.bluerobotics.com/models/bluerov-r1/BROV-R1.SLDPRT) |
| STEP (.step)               | [BROV-R1.STEP](http://www.bluerobotics.com/models/bluerov-r1/BROV-R1.STEP)   |
| IGES (.igs)                | [BROV-R1.IGS](http://www.bluerobotics.com/models/bluerov-r1/BROV-R1.IGS) |
| STL (.stl)                 | [BROV-R1.STL](http://www.bluerobotics.com/models/bluerov-r1/BROV-R1.STL) |


