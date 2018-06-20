---
layout: default
title: Lithium-Ion Battery Documentation
order: 1
nav:
- Introduction: introduction
- Specifications (Li-ion 18Ah): specifications-li-ion-18ah
- - Specification Table: specification-table-li-ion-18ah
- - Models: models-li-ion-18ah
- Safety: safety
- Charging: charging
- Discharging: discharging
- Storage: storage


store-links:
- Lithium-ion Battery (14.8V, 18Ah): https://www.bluerobotics.com/store/electronics/batteries/battery-li-4s-18ah-r2-rp/
- Lithium Battery Charger: http://www.bluerobotics.com/store/electronics/batteries/lithium-battery-charger/

manual-links:
- BlueROV2: /brov2
- Lithium Battery Charger: /charger
---

<img src="/batteries/cad/BL4-1-2-crop.PNG" class="img-responsive" style="max-width:900px"  />

# Introduction

The Blue Robotics <em>Lithium-ion Battery (14.8V, 18Ah)</em> is a high capacity custom battery pack made from high quality 18650 lithium-ion cells designed for use in the [BlueROV2](https://www.bluerobotics.com/store/rov/bluerov2/). This 4S (14.8V) battery has a nominal capacity of 18.0Ah, plenty for up to 4 hours of continuous moderate to heavy use on the BlueROV2. The lithium-ion cells the battery is comprised of have excellent performance characteristics, as well as a high tolerance for accidental mishandling. The battery is CE (Conformité Européenne) approved, ROHS compliant, and UN38.3 certified. Certificates can be provided upon request.

# Specifications (Li-ion 18Ah)

## Specification Table (Li-ion 18Ah)

For further information please see the [INR18650-30Q Data Sheet](https://eu.nkon.nl/sk/k/30q.pdf).

|      **Electrical**       |
| ------------- | --------- |
| Nominal Voltage | 14.8V |
| Nominal Capacity | 18.0Ah | 266.4Wh |
| Cell Configuration | 4S6P |
| Maximum Continuous Current Draw*| 90A | 5C |
| Maximum Burst Current Draw (10s)*| 132A | 7.3C |
| Maximum Charge Current | 20A | 1.1C |
| Minimum Safe Voltage | 12V | 3.0V/Cell |
| Discharge Connector | XT90 |
| Balance Plug | 5 pin JST-XH |
| Thermistor Plug | 2 pin JST-XH |
| Thermistor Type | NTC, β = 3435K |
| Thermistor Resistance | R<sub>25</sub> = 10kΩ, ±1% (at 25°C) |
| Thermistor Working Temperature | -40-110°C | -40-230°F |
| ------------- | --------- |

*Current draw rating dependent on adequate cooling, 60°C safety cutoff. See more information in Discharging section below.

|  **Physical (Typical)**  |
| ------------- | --------- |
| Diameter | 75 mm | 2.95 in |
| Length | 141 mm | 5.55 in |
| Lead Length | 55 mm | 2.16 in |
| Weight | 1152 g| 2.54 lb |
|----------------------|

## Models (Li-ion 18Ah)

All 3D models are provided in zip archives containing the follow file types:

- SolidWorks Part (.sldprt)
- IGES (.igs) 
- STEP (.step)
- STL (.stl)

|		**Lithium-ion Battery (14.8V, 18Ah)**																						|
| --------------------------------------------------------------------------------------------- |
| Battery | [BATTERY-LI-4S-18AH-R1.zip](cad/BATTERY-LI-4S-18AH-R1.zip) |

# Safety

Although they are encased in metal and are safe enough to be used in everyday devices (phones, laptops. etc.) lithium-ion batteries have a high energy density and must, like all batteries, be treated with care to ensure proper operation and a long lifecycle.

* Avoid discharging below 3.0V/cell (12.0V) and never below 2.5V/cell (10.0V)
* Never charge over 4.20V/cell (16.8V)
* Do not puncture, crush, cut, or disassemble
* Do not burn or expose to termeratures above 60°C (140°F)
* Always use a lithium-ion compatible balance charger
* Do not leave unattended while charging
* Do not exceed maximum charge (20A) or discharge (90A*) rate
* Do not pick up by discharge leads, always handle by gripping battery body.

[Detailed Lithium-ion Safety Information](https://batterybro.com/pages/18650-battery-safety)

<img src="/batteries/cad/BL4-2-2-crop.PNG" class="img-responsive" style="max-width:900px"  />

# Charging

Always use a lithium-ion compatible balance charger when charging, attempting to use another type of charger will damage the battery. Make sure to keep it away from flammable materials and monitor the battery as it charges, discontinue charging if it becomes hot or changes in appearance.

This battery can be safely charged at up to 20A, which will bring it back up to full charge in about one hour. However, we recommend charging at 10-15A (about two hours) at most regularly, in order to maximize capacity and lifespan. We recommend balancing the battery at every charge to keep all cells at the same level of charge, but this can aso be done every few cycles if quick charging is a priority.

Our [Lithium Battery Charger](http://www.bluerobotics.com/store/electronics/batteries/lithium-battery-charger/) is recommended for use with this battery. 

# Discharging

Once charged, connect the XT90 discharge plug to your vehicle, and the battery is ready to use. The battery can sustain a constant discharge of up to 90A, and up to 132A in short bursts of a few seconds. Make sure to never short the battery discharge plug or plug it into a circuit that may be shorted.

Note that the maximum safe discharge rating is dependent on adequate cooling to keep the battery below 60°C. If used in an enclosed space without flowing air, constant current draw must be decreased appropriatley to to keep the battery at a  safe temperature. For example, in a BlueROV2 we recommend keeping full throttle thruster bursts at 100% gain to no more than 15 seconds each to keep the battery at a safe temperature and allow it to cool.

Temperature can be monitored on the R2 version of the battery with the integrated 3435K negative temperature coefficient (NTC) thermistor, which has a resistance of 10kΩ at 25°C.

<img src="/batteries/cad/BL4-3-2-crop.PNG" class="img-responsive" style="max-width:500px"  />

# Storage

Charge will be lost over time when the battery is stored, and care must be taken to make certain long term storage does not damage the battery. Storage temperature should always be below 60°C (140°F), and the lower, the better. Ideally, the batteries should be stored at about 50% charge, or 3.7V/cell (14.8V). The lithium-ion batteries should be periodically checked and charged to keep each cell above the 2.5V minimum. Short term storage at full charge is fine, and a couple days of storage at 100% charge will yield about 90-95% of the full capacity.

[Detailed Lithium-ion Storage Information](https://batterybro.com/blogs/18650-wholesale-battery-reviews/77975750-how-to-store-18650-batteries-safely)





