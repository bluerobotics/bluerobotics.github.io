---
layout: default
title: BlueROV2
permalink: /brov2/
order: 1
nav:
- Introduction: introduction
- - Features: features
- - What's Included: whats-included
- - What's Not Included: whats-not-included
- - Resources
- Specifications: specifications
- - Physical: physical
- - Performance: performance
- - Battery: battery
- - Lights: lights
- - Tether: tether
- - Sensors: Sensors
- - Camera Tilt: camera-tilt
- - Standard and Advanced Comparison: standard-and-advanced-comparison
- 3D Model: d-model
- Assembly-Manual: assembly-manual
- Control Software: control-software
- Operation-Manual: operation-manual


store-links:
- BlueROV2: https://www.bluerobotics.com/store/rov/bluerov2/

manual-links:
- Assembly Manual: /brov2/assembly/
- Software Setup: /brov2/software-setup/
- Operation Manual: /brov2/operation/

---

<img src="/brov2/cad/BlueROV2-Honaunau-6.png" class="img-responsive" style="max-width:900px" />

# Introduction

The _BlueROV2_ is the world's most affordable high-performance ROV. The 6-thruster vectored configuration, coupled with strong static stability, provides a vehicle that is smooth and stable, yet highly maneuverable. The _BlueROV2_ provides the capabilities of a 
high-end commercial mini-ROV at the price of the most basic commercial ROVs.

<a href="http://bluerobotics.com/downloads/bluerov2.pdf" alt="BlueROV2 Datasheet"><i class="fa fa-download" aria-hidden="true"></i> Download Datasheet</a>

## Features

- Live Ultra-low Latency Video (with Standard Electronics Package)
- Live 1080p HD Video (with Advanced Electronics Package, 200 ms latency)
- Highly Maneuverable Vectored Thruster Configuration
- Stable and Optimized for Inspection- and Research-class Missions
- Easy to Use, Cross-platform User Interface
- Highly Expandable with Three Free Cable Penetrators
- Standard 100m Depth Rating and Up to 300m Tether Available
- 6 T200 Thrusters and Basic ESCs for the Best Thrust-to-Weight Ratio in its Class
- Battery powered With Quick-Swappable Batteries for Long Missions

## What's Included

The kit arrives almost-ready-to-dive with pre-built subassemblies. The expected build time is 4-8 hours to operation depending on experience.

Here is the [Bill of Material](/brov2/assembly/#whats-included) for the each _BlueROV2_ kit.

The Standard and Advanced options have a couple of differences shown [here](/brov2/#standard-and-advanced-comparison)

## What's Not Included

There are some items necessary for operation that are not included with the kit. 

 - Analog screen for the Standard _BlueROV2_. We recommend [this one](https://www.adafruit.com/products/2261).
 - A gamepad controller. We recommend [this XBox360 Controller](http://www.xbox.com/en-US/xbox-360/accessories/controllers/wired-controller) or [this Logitech Gamepad](http://gaming.logitech.com/en-us/product/f310-gamepad).
 - A laptop or a tablet. ArduSub works on Mac, Linux, Windows, iOS, and Android devices.
 - A LiPo battery. We recommend getting two or three of [these](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=56844)

## Resources

 - [Assembly Instructions](/brov2/assembly/)
 - [Bill of Materials](/brov2/assembly/#whats-included)
 - [Initial ArduSub Set-up](http://ardusub.com/initial-setup/)
 - [ArduSub Operation](#)

# Specifications

## Physical 

| Length                                 | 457 mm                     | 18 in                      |
| Width                                  | 338 mm                     | 13.3 in                    |
| Height                                 | 254 mm                     | 10 in                      |
| Weight in Air (with Ballast)           | 10-11 kg                   | 22-24 lb                   |
| Weight in Air (without Ballast)        | 9-10 kg                    | 20-22 lb                   |
| Net Buoyancy (with Ballast)            | 0.2 kg                     | 0.5 lb                     |
| Net Buoyancy (without Ballast)         | 1.4 kg                     | 3 lb                	   |
| Watertight Enclosure Inner Diameter    | 102 mm                     | 4.0 in                     |
| Watertight Enclosure Inner Length      | 298 mm                     | 11.75 in                   |
| Cable Penetrator Holes                 | 14 x 10mm                  | 14 x 0.4 in                |
| Construction                           | HDPE frame, aluminum flanges/end cap, and acrylic tubes |
| Main Tube (Electronics Enclosure)      | [Blue Robotics 4 inch series w/ aluminum end caps](http://docs.bluerobotics.com/watertight-enclosures/#specifications-4-series)        |
| Battery Tube                           | [Blue Robotics 3 inch series w/ aluminum end caps](http://docs.bluerobotics.com/watertight-enclosures/#specifications-3-series)        |
| Buoyancy Foam                          | [R-3318 Urethane Foam](https://www.bluerobotics.com/store/parts/float-r1/) rated to 210 meters                |
| Ballast Weight                         | 6 x [200 g coated lead weights](https://www.bluerobotics.com/store/parts/ballast-200g-r1/)                             |
| Battery Connector						 | XT90                                                    |

## Performance 

| Maximum Rated Depth                    | 100 m         | 330 ft        |
| Maximum Tested Depth (so far)          | 130 m         | 425 ft        |
| Maximum Forward Speed                  | 1 m/s         | 2 knots       |
| Thrusters                              | [Blue Robotics T200](http://docs.bluerobotics.com/thrusters/t200/)            |
| ESC                                    | [Blue Robotics Basic 30A ESC](http://docs.bluerobotics.com/besc/)   |
| Thruster Configuration                 | [6 thrusters](http://ardusub.com/images/vectored-frame.png)                   |
|                                        | - 4 Vectored                  | 
|                                        | - 2 Vertical                  | 
| Forward Bollard Thrust                 | 14 kg<sub>f</sub>      | 30 lb<sub>f</sub>     |
| Vertical Bollard Thrust                | 9 kg<sub>f</sub>       | 20 lb<sub>f</sub>      |
| Lateral Bollard Thrust                 | 14 kg<sub>f</sub>      | 30 lb<sub>f</sub>      |

## Battery

| Battery Life (Normal Use)              | ~1 hour w/ [10Ah battery](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=56844) ($60 each) |
| Battery Life (Light Use)               | ~4 hours w/ [10Ah battery](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=56844) ($60 each) |

The batteries can be changed in about 30 seconds.

## Lights

| Brightness       | 2 x 1500 lumens each with dimming control                  |
| Light Beam Angle | 135 degrees, with adjustable tilt                    |

## Tether

| Diameter | 7.6 mm | 0.30 in |
| Length   | 25-300 m | 80-980 ft |
| Working Strength | 45 kg<sub>f</sub> | 100 lb<sub>f</sub> |
| Breaking Strength | 160 kg<sub>f</sub> | 350 lb<sub>f</sub> |
| Strength Member | Kevlar with waterblock |
| Buoyancy in Freshwater | Neutral |
| Buoyancy in Saltwater | Slightly Positive |
| Conductors | 4 twisted pairs, 26 AWG |

## Sensors

- 3-DOF Gyroscope (on the PixHawk)
- 3-DOF Accelerometer (on the PixHawk)
- 3-DOF Magnetometer (on the PixHawk)
- Internal barometer (on the PixHawk)
- [Blue Robotics Bar 30 Pressure/Depth and Temperature Sensor](http://docs.bluerobotics.com/bar30/) (external) 
- Current and Voltage Sensing (included with the PixHawk)

## Camera Tilt
					   
| Tilt Range                 | +/- 90 degree camera tilt (180 total range)                                             | 
| Tilt Servo                 | [Hitec HS-5055MG](https://www.bluerobotics.com/store/servos/hs-5055mg-servo/)           |

## Standard and Advanced Comparison

|                            |**Standard Camera**                                                                    | **Advanced Camera**                                                                                                |
| Field of View (Underwater) | 110 degrees (horizontal)                                                              | TBD                                                                                                                |
| Light Sensitivity          | 0.0003 [lux](https://en.wikipedia.org/wiki/Lux#Illuminance)                           | TBD                                                                                                                |
| Resolution                 | 700 TVL                                                                               | 1080p                                                                                                          |
|                            | **Standard Control System**                                            		      | **Advanced Control System**                                                                        | 
| Tether Board               | [Fathom-S Tether Interface Board](http://docs.bluerobotics.com/fathom-s/) 			     | [Fathom-X Tether Interface Board](http://docs.bluerobotics.com/fathom-x/)                     |
| Control System  | Autopilot Controller such as the [3DR PixHawk](https://www.bluerobotics.com/store/electronics/pixhawk-r1/) | Autopilot Controller such as the [3DR PixHawk](https://www.bluerobotics.com/store/electronics/hawk-r1/)         |
|                            |                                                                                                 | Computer such as the Raspberry Pi 3                                                                           |
|                            | **Standard Required Topside**                                                             | **Advanced Required Topside**                                                        |
|                            | Laptop or Tablet                     												      | Laptop or Tablet                                                                                                    |
 | |Gamepad Controller such as [Xbox](http://www.xbox.com/en-US/xbox-360/accessories/controllers/wired-controller) or [Logitech](http://gaming.logitech.com/en-us/product/f310-gamepad)   | Gamepad Controller  such as [Xbox](http://www.xbox.com/en-US/xbox-360/accessories/controllers/wired-controller) or [Logitech](http://gaming.logitech.com/en-us/product/f310-gamepad)                                                          |
|                            | [Analog video screen with RCA Input](https://www.adafruit.com/products/2261)                                                                    |                                                                                                                    |

# 3D Model

These are BIG files since the model is fairly complex. If you just want to check out a 3D view or 3D models of the BlueROV, we recommend [checking out the CAD files on GrabCAD](https://grabcad.com/library/bluerov2-1).

# Assembly Manual

Please look at our [Assembly Tutorial Page](/brov2/assembly) for more detailed assembly instructions.

# Control Software

If you received your BlueROV2 after October 24, 2016, please look at our [Software Setup Page](/brov2/software-setup/) for more details on setting up your topside computer. 

If you received your BlueROV2 prior to October 24, 2016 please look at our [ArduSub Documentation](http://ardusub.com/introduction/#overview) for more details on the control software.

# Operation Manual

Please look at our [_BlueROV2_ Operation Page](/brov2/operation) for a detailed operating manual.


