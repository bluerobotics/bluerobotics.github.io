---
layout: default
title: BlueROV2 Specifications
order: 1
nav:
- Introduction: introduction
- Specifications: specifications
- - Physical: physical
- - Performance: performance
- - Battery: battery
- - Analog Camera: standard-rov-electronics-package-camera
- - HD Camera: advanced-rov-electronics-package-camera
- - Lights: lights
- - Tether: tether
- - Sensors: Sensors
- - Control System: control-system-and-electronics
- - Topside: topside
- 3D Model: d-model

store-links:
- BlueROV: https://www.bluerobotics.com/store/rov/bluerov2/

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

The _BlueROV2_ is the world's most affordable high-performance ROV. The _BlueROV2_ is capable of delivering live ultra-low latency video. It comes standard with a highly maneuverable vectored thruster configuration, which is stable and optimized for inspection and research missions. 
It is hand portable and easy to use with a cross-platform user interface. It also has room to expand with three free cable penetrators. 

# Specifications

The kit arrives almost-ready-to-dive with pre-built subassemblies. The expected build time is 4-8 hours to operation depending on experience.

## Specifications

## Physical 

| Length                                 | 457.2 mm                   | 18 in                      |
| Width                                  | 338 mm                     | 13.3 in                    |
| Height                                 | 254 mm                     | 10 in                      |
| Weight in Air (with Ballast)           | ~10.2 kg                   | 22.5 lb                    |
| Weight in Air (without Ballast)        | ~9  kg                     | 20 lb                      |
| Net Buoyancy (with Ballast)            | 0.2 kg                     | 0.5 lb                     |
| Net Buoyancy (without Ballast)         | 1.4 kg                     | 3 lb                	   |
| Watertight Enclosure Inner Diameter    | 102 mm                     | 4.0 in                     |
| Watertight Enclosure Inner Length      | 298 mm                     | 11.75 in                   |
| Cable Penetrator Holes                 | 14 x 10mm                  | 14 x 0.394 in              |
| Construction                           | HDPE frame, aluminum flanges/end cap, and acrylic tubes |
| Main Tube (Electronics Enclosure)      | [Blue Robotics 4 inch series w/ aluminum end caps](https://www.bluerobotics.com/store/watertight-enclosures/wte4-asm-r1/#configuration)        |
| Battery Tube                           | [Blue Robotics 3 inch series w/ aluminum end caps](https://www.bluerobotics.com/store/watertight-enclosures/wte3-asm-r1/#configuration)        |
| Buoyancy Foam                          | [R-3318 Urethane Foam](https://www.generalplastics.com/pdf/R-3300_Series/r-3318-tds.pdf) rated to 210 meters                |
| Ballast Weight                         | 6 x [200 g coated lead weights](https://www.bluerobotics.com/store/parts/ballast-200g-r1/)                             |
| Battery Connector						 | XT90                                                    |

## Performance 

| Maximum Rated Depth                    | 100 m         | 330 ft        |
| Maximum Forward Speed                  | 2 knots       | 1 m/s         |
| Thrusters                              | [Blue Robotics T200](http://docs.bluerobotics.com/thrusters/t200/)            |
| ESC                                    | [Blue Robotics Basic 30A ESC](http://docs.bluerobotics.com/besc/)   |
| Thruster Configuration                 | [6 thrusters](http://ardusub.com/images/vectored-frame.png)                   |
|                                        | - 4 Vectored                  | 
|                                        | - 2 Vertical                  | 
| Forward Bollard Thrust                 | 14.4 kgf      | 31.7 lbf      |
| Vertical Bollard Thrust                | 10.2 kgf      | 22.4 lbf      |
| Lateral Bollard Thrust                 | 14.4 kgf      | 31.7 lbf      |
| Maximum Depth Rating (so far)          | 100 m         | 330 ft        |

## Battery

| Battery Life (Normal Use)              | ~1 hour w/ 10Ah battery ($60 each) |
| Battery Life (Light Use)               | ~4 hours w/ 10Ah battery ($60 each) |

## Standard ROV Electronics Package Camera

| Field of View (Underwater) | 110 degrees (horizontal)                   |
| Light Sensitivity          | 0.0003 [lux](https://en.wikipedia.org/wiki/Lux#Illuminance) | 
| Resolution                 | 700 TVL                                    |
| Tilt Range                 | +/- 90 degree camera tilt (180 total range)|
| Tilt Servo                 | [Hitec HS-5055MG](http://hitecrcd.com/products/servos/micro-and-mini-servos/digital-micro-and-mini-servos/hs-5055mg-economy-metal-gear-feather-servo/product)                            |

## Advanced ROV Electronics Package Camera

| Field of View (Underwater) | TBD                                        |
| Light Sensitivity          | TBD                                        | 
| Resolution                 | 700 TVL                                    |
| Tilt Range                 | +/- 90 degree camera tilt (180 total range)|
| Tilt Servo                 | [Hitec HS-5055MG](http://hitecrcd.com/products/servos/micro-and-mini-servos/digital-micro-and-mini-servos/hs-5055mg-economy-metal-gear-feather-servo/product)                            |

## Lights

| Brightness | 2 x 1500 lumens each with dimming control                  |
| Light Beam Angle | 135 degrees, with adjustable tilt                    |

## Tether

| Diameter | 7.6 mm | 0.30 in |
| Length   | 25-300 m | 82-984 ft |
| Working Strength | 45 kg<sub>f</sub> | 100 lb<sub>f</sub> |
| Breaking Strength | 160 kg<sub>f</sub> | 350 lb<sub>f</sub> |
| Strength Member | Kevlar with waterblock |
| Buoyancy in Freshwater | Neurtral |
| Buoyancy in Saltwater | Slightly Positive |
| Conductors | 4 twisted pairs, 26 AWG |

## Sensors

- 3-DOF Gyroscope 
- 3-DOF accelerometer 
- 3-DOF magnetometer  
- Internal barometer 
- [Blue Robotics Bar 30 Pressure/Depth and Temperature Sensor](http://docs.bluerobotics.com/bar30/) (external) 
- Current and Voltage Sensing 

## Control System and Electronics

For further control system and electronics details please take a look at the [ArduSub Documentation](http://ardusub.com/introduction/#overview)

- Open-source ArduSub control software and hardware 
- [Fathom-S Tether Interface Board](http://docs.bluerobotics.com/fathom-s/) for video and communication

## Topside 

For additional information on the topside please see the [ArduSub Documentation](http://ardusub.com/initial-setup/#wiring-and-connections).

- Laptop or tablet required
- Gamepad controller required
- Analog video screen with RCA input required

## Recommended Electronics and Software

# 3D Model

These are BIG files since the model is fairly complex. If you just want to check out a 3D view of the BlueROV, we recommend [checking out the files on GrabCAD](https://grabcad.com/library/bluerobotics-bluerov2-r1-1-1).

| File Type                  | Link                          |
| -------------------------- | ----------------------------- |
| SolidWorks Part (.sldprt)  | [Assem-BROV2-R1.SLDPRT](#) |
| STEP (.step)               | [Assem-BROV2-R1.STEP](#)   |
| IGES (.igs)                | [Assem-BROV2-R1.IGS](#) |
| STL (.stl)                 | [Assem-BROV2-R1.STL](#)|


