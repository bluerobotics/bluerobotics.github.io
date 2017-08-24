---
layout: default
title: BlueROV2
permalink: /brov2/
order: 1
topnavbar: brov2
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
- - Camera: camera
- 3D Model: 3d-model
- User Manuals: user-manuals
- Issue Reporting: issue-reporting

store-links:
- BlueROV2: https://www.bluerobotics.com/store/rov/bluerov2/

manual-links:
- Assembly Manual: /brov2/assembly/
- Software Setup: /brov2/software-setup/
- Operation Manual: /brov2/operation/

---

<img src="/brov2/cad/BlueROV2-Honaunau-6.png" class="img-responsive img-center" style="max-width:800px" />

# Introduction

The _BlueROV2_ is the world's most affordable high-performance ROV. The 6-thruster vectored configuration, coupled with strong static stability, provides a vehicle that is smooth and stable, yet highly maneuverable. The _BlueROV2_ provides the capabilities of a 
high-end commercial mini-ROV at the price of the most basic commercial ROVs.

<a href="http://bluerobotics.com/downloads/bluerov2.pdf" alt="BlueROV2 Datasheet"><i class="fa fa-download" aria-hidden="true"></i> Download Datasheet</a>

## Features

- Live 1080p HD video
- Highly maneuverable vectored thruster configuration
- Stable and optimized for inspection- and research-class missions
- Easy to use, cross-platform user interface
- Highly expandable with three free cable penetrators
- Standard 100m depth rating and up to 300m tether available
- 6 T200 Thrusters and Basic ESCs for the best thrust-to-weight ratio in its class
- Battery powered with quick-swappable batteries for long missions

## What's Included

The kit arrives almost-ready-to-dive with pre-built subassemblies. The expected build time is 1.5-3 hours to operation depending on experience.

Here is the [Bill of Materials](/brov2/assembly/#whats-included) for the _BlueROV2_ kit.

## What's Not Included

There are some items necessary for operation that are not included with the kit. 

 - A gamepad controller. We recommend [this XBox360 Controller](http://www.xbox.com/en-US/xbox-360/accessories/controllers/wired-controller) or [this Logitech Gamepad](http://gaming.logitech.com/en-us/product/f310-gamepad).
 - A laptop or a Windows 10 tablet. QGroundControl works on Mac, Windows 10, and Linux.
 - A battery for the BlueROV2. We recommend getting our [18Ah Lithium-ion Battery](http://www.bluerobotics.com/store/electronics/batteries/battery-li-4s-18ah-r1/) or 2 or 3 of [these](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=56844)
 - A battery charger, such as our [Lithium Battery Charger](http://www.bluerobotics.com/store/electronics/batteries/lithium-battery-charger/).  

## Resources

 - [Assembly Instructions](/brov2/assembly/)
 - [Bill of Materials](/brov2/assembly/#whats-included)
 - [Initial Software Setup](/brov2/software-setup)
 - [Operating Manual](/brov2/operation)

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

| Battery Life (Normal Use)              | ~3 hours w/ [18AH Lithium-ion Battery](http://www.bluerobotics.com/store/electronics/batteries/battery-li-4s-18ah-r1/) |
| Battery Life (Light Use)               | ~5 hours w/ [18AH Lithium-ion Battery](http://www.bluerobotics.com/store/electronics/batteries/battery-li-4s-18ah-r1/) |

The batteries can be changed in about 30 seconds.

## Lights

| Brightness       | 1500 lumens each with dimming control                  |
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
| Tilt Servo                 | Hitec HS-5055MG         |

## Camera

| Field of View (Underwater) | 110 degrees (horizontal)                                                              |                                                      
| Light Sensitivity          | 0.01[lux](https://en.wikipedia.org/wiki/Lux#Illuminance)                              |
| Resolution                 | 1080p                                                                                 |

## Control System

| Tether Interface Board              	| [Fathom-X Tether Interface Board](http://docs.bluerobotics.com/fathom-x/)                |
| Control System 						| [M Robotics PixHawk](https://www.bluerobotics.com/store/electronics/pixhawk-r1/)         |


# 3D Model

These are BIG files since the model is fairly complex. If you just want to check out a 3D view or 3D models of the BlueROV, we recommend [checking out the CAD files on GrabCAD](https://grabcad.com/library/bluerov2-1).

# User Manuals

1. Please look at our [Assembly Manual](/brov2/assembly) for more detailed assembly instructions.

2. If you **received your BlueROV2 after October 24, 2016**, please look at our [Software Setup Manual](/brov2/software-setup/) for more details on setting up your topside computer. If you **received your BlueROV2 prior to October 24, 2016** please look at our [ArduSub Documentation](http://ardusub.com/introduction/#overview) for more details on the control software.

3. Please look at our [_BlueROV2_ Operating Manual](/brov2/operation) for a detailed operating manual.

# Issue Reporting

We're always trying to make our documentation, instructions, software, and user experience better. If you're having an issue with anything, please report it so that we can address it as soon as possible! Here's where to do that depending on what's wrong:

- **ArduSub Issues:** For anything related to the ArduSub software that runs on the Pixhawk and controls the ROV, reports issues on the [ArduSub Github Issues Page](https://github.com/bluerobotics/ardusub/issues). If you're unsure where your issue should be posted, you can report it here.
- **QGroundControl Issues:** For anything related to the QGroundControl software, joystick setup, video streaming, etc., please report an issue on the [QGroundControl Github Issues Page](https://github.com/mavlink/qgroundcontrol/issues).
- **Documentation:** For anything related to the documentation and instructions here, please report an issue on the [Blue Robotics Documentation Github Issues Page](https://github.com/bluerobotics/bluerobotics.github.io/issues).


