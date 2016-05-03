---
layout: default
title: Fathom Tether
order: 1
nav:
- Introduction: introduction
- Quick Start 
- Specifications: specifications
- - Specification Table: specification-table
- - Section View: section-view

- Installation: installation
- - Stripping the Jacket: stripping-the-jacket
- - Stripping the Twisted Pairs: stripping-the-twisted-pairs
- - Installing Into a Penetrator: installing-into-a-penetrator
- - Strain Relief: strain-relief


store-links:
- Fathom:  https://www.bluerobotics.com/store/parts/cables/fathom-tether-nb-4p-26awg-r1/
- Thimble:  https://www.bluerobotics.com/store/parts/fathom-p-thimble-r1/
- Penetrator:  https://www.bluerobotics.com/store/parts/penetrator-10-25-a-8mm-r2/
- Potting Kit: https://www.bluerobotics.com/store/tools/tool-potting-kit-r1/
- Loctite Marine Epoxy: https://www.bluerobotics.com/store/tools/loctite-marine-epoxy/

manual-links:
- Watertight Enclosures: /watertight-enclosures
- BlueROV: /bluerov

---

<img src="/fathom/cad/spool.PNG" class="img-responsive" style="max-width:900px"  />
	
# Introduction

The Fathom Tether is a high quality tether cable designed specifically for ROVs and other subsea applications. 
It is neutrally buoyant, has 350+ lb breaking strength, and is embedded with water-blocking fibers to seal any leaks. The tether has a diameter of 7.6mm and is slimmer than the vast majority of comparable ROV tethers.

We put a lot of time into making sure that it has impeccable electrical qualities. The tether carries four unshielded twisted pairs (UTP) of 26AWG wire. 
These pairs are colored and arranged in the same fashion as a Cat5 networking cable including cross-talk resistance. Each pair is individually jacketed inside the cable to maintain reliable properties and minimize interference between each pair of wires.
 
# Quick Start 

1. Prepare the ends of your tether for use as shown in the [installation tutorial](#installation).

2. Be sure to tin the ends of the conductors prior to installing the tether into your vehicle.

3. Firmly attach the tether to your vehicle by following the [strain relief tutorial](#strain-relief) or some other method that prevents the tether from pulling directly on the tether penetrator. The tether can twist the penetrator loose if you do not provide strain relief.
 
# Specifications

## Specification Table

|      **Physical**       |
| ------------- | --------- |
| **Item** | **Value** |
| Tether Diameter | 7.6 mm | 0.30 in |
| Weight | 0.043 kg/m | 0.0287 lbs/ft
| Buoyancy in Freshwater | Neutral 
| Buoyancy in Saltwater | Slightly Positive
| Wire Gauge   | 26 AWG |
| Working Strength | 35 kg<sub>f</sub> | 80 lb<sub>f</sub> |
| Breaking Strength | 155 kg<sub>f</sub> | 350 lb<sub>f</sub> |
| Minimum Working Bend Diameter | 200 mm | 8 in |
| ------------- | --------- |

|      **Electrical**       |
| ------------- | --------- |
| **Item** | **Value** |
| DC Resistance @ 20&deg;C| 0.0386 &Omega; / ft | 0.127 &Omega; / m |
| Characteristic Impedance @ 1 MHz | 120 &Omega; | 
| Capacitance @ 1 kHz      | 16.5 pF / kft | 54.1 pF / km |
| Insulation Resistance @ 500 VDC | > 500 M&Omega; / kft | > 1640 M&Omega; / km |
| Voltage Rating (Twisted Pair) | 300 VDC
| Voltage Rating (Between Pairs)  | TBD

|      **Twisted Pairs**    |
|---|---|---------------------|
| **Pair 1** | Wire 1 | White |
|         | Wire 2| Blue |
| **Pair 2** | Wire 1 | White |
|        | Wire 2 | Orange |
| **Pair 3** | Wire 1 | White |
|        | Wire 2 | Green |
| **Pair 4** | Wire 1 | White |
|        | Wire 2 | Brown |

## Section View

<img src="/fathom/cad/Tether-Cross-Section.PNG" class="img-responsive" style="max-width:900px"  />

A datasheet for the polyethylene jacket material is available here: [DF4960 Polyethylene Foam](DF4960.pdf).

# Installation

## Stripping the Jacket

1. Wearing a protective glove, bend the cable at the point that you want to cut. Bending the cable makes it easy to see when you have cut through the jacket.

2. Using a sharp knife, gently slice the jacket open using a sawing motion. Stop when the jacket opens and you can see the white Dacron fibers underneath the jacket.

	<img src="/fathom/cad/tether-tutorial-3.PNG" class="img-responsive" style="max-width:700px"  />

3. Turn the tether over and repeat on the other side.

4. To remove the unneeded part of the jacket, lay the tether on a sturdy flat surface, then cut along the top of the part of the tether that you wish to remove. Take care not to cut deeper than the jacket.

	<img src="/fathom/cad/tether-tutorial-5.PNG" class="img-responsive" style="max-width:700px"  />
	
5. Pull off the length of jacket that you just cut.

	<img src="/fathom/cad/tether-tutorial-6.PNG" class="img-responsive" style="max-width:700px"  />
	
	<img src="/fathom/cad/tether-tutorial-7.PNG" class="img-responsive" style="max-width:700px"  />
	
6. Unwind the clear plastic wrap and white fibers that are wound around the outside of the conductor bundle to the jacket.

	<img src="/fathom/cad/tether-tutorial-8.PNG" class="img-responsive" style="max-width:700px"  />

7. Separate out the white Dacron fibers from the conductor bundle and cut off the all white fibers and plastic wrap at the jacket.

	<img src="/fathom/cad/tether-tutorial-9.PNG" class="img-responsive" style="max-width:700px"  />
	
## Stripping the Twisted Pairs
	
9. Take a jacketed, twisted pair and grab it near the end.

	<img src="/fathom/cad/tether-tutorial-10.PNG" class="img-responsive" style="max-width:700px"  />
	
10. Use a knife to split the pair. Cut into the pair 5 to 10 mm and then you can pull the wires apart using your fingers or pliers.

	<img src="/fathom/cad/tether-tutorial-11.PNG" class="img-responsive" style="max-width:700px"  />
	
11. Cut the excess clear jacket.
	
	<img src="/fathom/cad/tether-tutorial-12.PNG" class="img-responsive" style="max-width:700px"  />
	
12. With the 26 AWG slot on a set of wire strippers, remove the insulation from each conductor.

	<img src="/fathom/cad/tether-tutorial-13.PNG" class="img-responsive" style="max-width:700px"  />
	
13. Tin the ends of the conductors.

## Installing into a Penetrator
	
13. Clean the jacket and the tether penetrator that will touch epoxy with isopropyl alcohol.
	
14. Twist the Kevlar and the conductors so that they will slide through the penetrator.

	<img src="/fathom/cad/tether-tutorial-14.PNG" class="img-responsive" style="max-width:700px"  />
	
16. Insert the tether into the penetrator.

	<img src="/fathom/cad/tether-tutorial-15.PNG" class="img-responsive" style="max-width:700px"  />
	
17. Mix a small batch of [Loctite Marine Epoxy](https://www.bluerobotics.com/store/tools/loctite-marine-epoxy/) and pour into a [potting syringe.](https://www.bluerobotics.com/store/tools/tool-potting-kit-r1/)
	
18. Fill the penetrator hole with the epoxy. Move the tether from side to side within the hole to ensure the epoxy is filling all gaps. Use a vice or other secure method to hold the penetrator upright with the tether centered while the epoxy dries.

	<img src="/fathom/cad/tether-tutorial-16.PNG" class="img-responsive" style="max-width:700px"  />
	
19. When the epoxy has dried, apply epoxy to the other side of the penetrator using the same method.

	<img src="/fathom/cad/tether-tutorial-18.PNG" class="img-responsive" style="max-width:700px"  />
	
20. Cut off excess Kevlar strands, and that's it!
	
# Strain Relief

1. Grab the tether somewhere between about 16 and 24 inches away from the penetrator and loop it around a [plastic thimble.](https://www.bluerobotics.com/store/parts/fathom-p-thimble-r1/)

2. Firmly attach three alternating heavy gauge zip ties (included with thimble) at the base of the thimble.

	<img src="/fathom/cad/thimble-r1-3.PNG" class="img-responsive" style="max-width:700px"  />
	
3. Firmly attach the thimble to your vehicle using at least two heavy gauge zip ties.




