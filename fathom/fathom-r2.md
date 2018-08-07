---
layout: default
title: Fathom ROV Tether (R2)
permalink: /fathom-r2/
order: 1
nav:
- Introduction: introduction
- Quick Start: quick-start
- Specifications: specifications
- - Specification Table: specification-table
- - Section View: section-view

- Installation: installation

store-links:
- Fathom ROV Tether R2 (ROV ready): https://www.bluerobotics.com/store/cables/fathom-tether-nb-4p-26awg-r2/
- Fathom ROV Tether R2 (by the meter): https://www.bluerobotics.com/store/cables/cab-nbpuf-4utp-26awg/
- FXTI: https://www.bluerobotics.com/store/rov/fxti-asm-r1-rp/
- Fathom Spool: https://www.bluerobotics.com/store/rov/bluerov2/tms-asm-spool-r1-rp/
- Binder 770 Plug: https://www.bluerobotics.com/store/connectors/misc-elec-binder-770-plug-r1/
- Thimble:  https://www.bluerobotics.com/store/parts/fathom-p-thimble-r1/
- Penetrator:  https://www.bluerobotics.com/store/parts/penetrator-10-25-a-8mm-r2/
- Potting Kit: https://www.bluerobotics.com/store/tools/tool-potting-kit-r1/
- Loctite Marine Epoxy: https://www.bluerobotics.com/store/tools/loctite-marine-epoxy/

manual-links:
- BlueROV2: /brov2/
- FXTI: /FXTI/
- Fathom Spool: /spool/
- Binder 770 Plug: /binder770/
- Cable Penetrator: /cable-penetrator/
- Fathom-X: /fathom-x/

---

<img src="/fathom/cad/fathom-r2-banner.png" class="img-responsive img-center" style="max-width:400px"  />
	
# Introduction

<i class="fa fa-lightbulb-o fa-fw fa-2x blue"></i>
This page is the most recent _Fathom_ ROV Tether documentation page. If you have an older version, you may wish to refer to the archived documentation page: [_Fathom_ ROV Tether R1 (Retired August 2018)](http://docs.bluerobotics.com/fathom/).

The _Fathom_ Tether is a high quality tether cable designed specifically for ROVs and other subsea applications. 
It is neutrally buoyant, has 350+ lb breaking strength, and is embedded with water-blocking fibers to seal any leaks. The tether has a diameter of 7.6mm and is slimmer than the vast majority of comparable ROV tethers.

The tether carries four unshielded twisted pairs (UTP) of 26AWG wire. These pairs are colored and arranged in the same fashion as a Cat5 networking cable including cross-talk resistance. Kevlar strength fibers through the tether allow the tether to carry a significant force without breaking.

The _Fathom_ Tether has a polyurethane outer jacket for better flexibility and adherence to potting material. The tether is sold [by-the-meter](https://www.bluerobotics.com/store/cables/cab-nbpuf-4utp-26awg/) and also in an [**ROV-Ready** version](https://www.bluerobotics.com/store/cables/fathom-tether-nb-4p-26awg-r2/) with a pre-installed cable penetrator, Binder 770 Connector, and tether thimble. 

[Pololu](https://www.pololu.com/category/70/crimp-connector-housings) carries the 3 position 0.1” (2.54mm) Crimp Connector Housings and male crimp pins that may be used for connecting your own devices to the spare tether terminations.
 
# Quick Start (ROV-Ready Fathom Tether)

1. Install the tether on your BlueROV2 or enclosure by lubricating the penetrator O-ring, tightening the nut with a penetrator wrench, and plugging the blue (-) / blue-white (+) twisted pair into the Fathom-X tether interface.

2. Attached the tether thimble with three **thick** zip ties and secure the thimble to the ROV frame. It's very important that the thimble supports the tether so that you don't pull on the cable penetrator often. Use the [mounting instructions] (http://docs.bluerobotics.com/brov2/assembly/#mounting-the-tether-to-the-frame) for the _BlueROV2_ as an example.
 
# Specifications

## Specification Table

|      **Physical**       |
| ------------- | --------- |
| **Item** | **Value** |
| Tether Diameter | 7.6 mm | 0.30 in |
| Weight | 0.043 kg/m | 0.0287 lbs/ft
| Buoyancy in Freshwater | Neutral 
| Buoyancy in Saltwater | Slightly Positive
| Wire Gauge | 26 AWG |
| Working Strength | 35 kg<sub>f</sub> | 80 lb<sub>f</sub> |
| Breaking Strength | 155 kg<sub>f</sub> | 350 lb<sub>f</sub> |
| Minimum Working Bend Diameter | 200 mm | 8 in |
| Tether Connection, ROV Side (ROV-Ready Only) | 8mm Cable Penetrator |
| Tether Connection, Topside (ROV-Ready Only) | Binder 770 Plug |
| ------------- | --------- |

|      **Electrical**       |
| ------------- | --------- |
| **Item** | **Value** |
| DC Resistance @ 20&deg;C| 0.0386 &Omega; / ft | 0.127 &Omega; / m |
| Characteristic Impedance @ 1 MHz | 120 &Omega; | 
| Capacitance @ 1 kHz      | 16.5 pF / kft | 54.1 pF / km |
| Insulation Resistance @ 500 VDC | > 500 M&Omega; / kft | > 1640 M&Omega; / km |
| Voltage Rating (Twisted Pair) | 300 VDC |
| Voltage Rating (Between Pairs)  | 600 VDC |

|      **Twisted Pairs**    | | **Color** | **Binder Connector Pin #** |
|---|---|---------------------|
| **Pair 1** | Wire 1 | Blue/White | 1 |
|         | Wire 2| Blue | 2 |
| **Pair 2** | Wire 1 | Orange/White | 3 |
|        | Wire 2 | Orange | 4 |
| **Pair 3** | Wire 1 | Green/White | 5 |
|        | Wire 2 | Green | 6 |
| **Pair 4** | Wire 1 | Brown/White | 7 |
|        | Wire 2 | Brown | 8 |

## Section View

<img src="/fathom/cad/CAB-NBPUF-4UTP-26AWG-R2-PUBLIC.PNG" class="img-responsive img-center" style="max-width:600px"  />

# Installation

Installation tutorial with updated pictures coming soon. For now, please refer to the [_Fathom_ ROV Tether R1 (retired) tutorial](http://docs.bluerobotics.com/fathom/#installation).


