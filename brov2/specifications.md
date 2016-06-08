---
layout: default
title: BlueROV2 Specifications
order: 1
nav:
- Introduction: introduction
- Build Time: build-time
- Specifications: specifications
- - Physical: physical
- - Performance: performance
- - Battery: battery
- - Lights: lights
- - Tether: tether
- - Sensors: Sensors
- - Camera Tilt: camera-tilt
- Standard and Advanced Comparison: standard-and-advanced-comparison
- Control Software: control-software
- 3D Model: d-model

store-links:
- BlueROV2: https://www.bluerobotics.com/store/rov/bluerov2/

manual-links:
- T200 Thrusters: /thrusters/
- Lumen Subsea Light: /lumen/
- Fathom-S: /fathom-s/
- Basic ESC: /besc/
- Watertight Enclosures: /watertight-enclosures/
- Vent: /vent/
- Cable Penetrator: /cable-penetrator/
- Bar 30 Pressure Sensor: /bar30/
- Fathom Tether: /fathom/

---

<img src="/vbrov/cad/brov-banner.png" class="img-responsive" style="max-width:900px" />

# Introduction

The _BlueROV2_ is the world's most affordable high-performance ROV. The _BlueROV2_ is capable of delivering live ultra-low latency video. It comes standard with a highly maneuverable vectored thruster configuration, which is stable and optimized for inspection 
and research missions. It is hand portable and easy to use with a cross-platform user interface. It also has room to expand with three free cable penetrators. 

# Build Time

The kit arrives almost-ready-to-dive with pre-built subassemblies. The expected build time is 4-8 hours to operation depending on experience.

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
| Buoyancy Foam                          | [R-3318 Urethane Foam](http://docs.bluerobotics.com/float/) rated to 210 meters                |
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

| Battery Life (Normal Use)              | ~1 hour w/ 10Ah battery ($60 each) |
| Battery Life (Light Use)               | ~4 hours w/ 10Ah battery ($60 each) |

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

- 3-DOF Gyroscope 
- 3-DOF accelerometer 
- 3-DOF magnetometer  
- Internal barometer 
- [Blue Robotics Bar 30 Pressure/Depth and Temperature Sensor](http://docs.bluerobotics.com/bar30/) (external) 
- Current and Voltage Sensing 

## Camera Tilt
					   
| Tilt Range                 | +/- 90 degree camera tilt (180 total range)                                             | 
| Tilt Servo                 | [Hitec HS-5055MG](https://www.bluerobotics.com/store/servos/hs-5055mg-servo/)           |

## Standard and Advanced Comparison

|                            |**Standard Camera**                                                                                         | **Advanced Camera**                                                                                                |
| Field of View (Underwater) | 110 degrees (horizontal)                                                                                   | TBD                                                                                                                |
| Light Sensitivity          | 0.0003 [lux](https://en.wikipedia.org/wiki/Lux#Illuminance)                                                | TBD                                                                                                                |
| Resolution                 | 700 TVL                                                                                                    | up to 4k                                                                                                           |
|                            | **Standard Control System and Electronics**                                                                | **Advanced Control System and Electronics**                                                                        | 
| Tether Board               | [Fathom-S Tether Interface Board](http://docs.bluerobotics.com/fathom-s/) for video and communication      | [Fathom-X Tether and Interface Board](http://docs.bluerobotics.com/fathom-x/) (tether > 100m)                      |
|                            |                                                                                                            | [Fathom-E Tether and Interface Board](https://www.bluerobotics.com/store/electronics/fathom-e-r1/)  (tether < 100m)|
| Control System             | Autopilot Controller such as the [3DR PixHawk](https://www.bluerobotics.com/store/electronics/pixhawk-r1/) | Autopilot Controller such as the [3DR PixHawk](https://www.bluerobotics.com/store/electronics/pixhawk-r1/)         |
|                            |                                                                                                            | Computer such as the [Raspberry Pi 3](#)                                                                           |
|                            | **Standard Required Topside**                                                                              | **Advanced Required Topside**                                                                                      |
|                            | Laptop or Tablet                                                                                           | Laptop or Tablet                                                                                                   |
|                            | Gamepad Controller such as [Xbox](#) or [Logitech](#)                                                      | Gamepad Controller  such as [Xbox](#) or [Logitech](#)                                                          |
|                            | [Analog video screen with RCA Input](#)                                                                    |                                                                                                                    |

# Control Software

Please look at our [ArduSub Documentation](http://ardusub.com/introduction/#overview) for more details on the control software.

# 3D Model

These are BIG files since the model is fairly complex. If you just want to check out a 3D view of the BlueROV, we recommend [checking out the files on GrabCAD](https://grabcad.com/library/bluerobotics-bluerov2-r1-1-1).

| File Type                  | Link                          |
| -------------------------- | ----------------------------- |
| SolidWorks Part (.sldprt)  | [Assem-BROV2-R1.SLDPRT](#) |
| STEP (.step)               | [Assem-BROV2-R1.STEP](#)   |
| IGES (.igs)                | [Assem-BROV2-R1.IGS](#) |
| STL (.stl)                 | [Assem-BROV2-R1.STL](#)|


