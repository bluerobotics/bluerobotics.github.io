---
layout: default
title: Water Linked Underwater GPS / BlueROV2 Integration Kit Documentation
order: 1
permalink: /waterlinked/integration-kit/
topnavbar: waterlinked
nav:
- Introduction: introduction
- Installation: installation
- - Inside WL Box: inside-wl-box
- - To ROV: to-rov

store-links:
- WL Underwater GPS: http://www.bluerobotics.com/store/electronics/underwater-gps/aps-wl-11001/
- WL Integration Kit: http://www.bluerobotics.com/store/electronics/underwater-gps/aps-wl-brov2-kit-r1/

manual-links:
- Water Linked Underwater GPS: /waterlinked
---

<!--<img src="/switch/cad/switch-4a.png" class="img-responsive" style="max-width:900px"  />-->

# Introduction

The Water Linked Underwater GPS is designed with a generic connection interface so that it can be used in a wide variety of applications, but in its stock configuration, it can be difficult to integrate with the BlueROV2. The *Water Linked Underwater GPS / BlueROV2 Integration Kit* provides a few components to make a seamless connection between the BlueROV2 system and the Water Linked system.

To install the kit on a Water Linked system, you first add a Fathom-X tether interface board to the box so that it can join the BlueROV2's network without an Ethernet switch. We also swap the Ethernet bulkhead on the box for an 8-pin connector that provides a single cable connection between the BlueROV2 topside electronics and the box.

The integration kit requires some minor assembly and instructions are below!

# Installation

## Inside WL Box

Inside the Water Linked box, we'll be adding a Fathom-X tether interface board and a few cables to make integration seamless. This Fathom-X board will be *in addition* to the Fathom-X board that is already used on the ROV topside. The two boards are connected in parallel to the same twisted pair, putting the ROV, topside computer, and Water Linked box on the same computer network.

Here's a diagram of what we'll be connecting inside the box:

<img src="/waterlinked/wlik-box-diagram-rev2.jpg" class="img-responsive img-center" style="max-width:600px" />

1. Remove the backing from the red 3M VHB tape on the back of the Fathom-X mount. 
<img src="/waterlinked/wlik-installation-1.jpg" class="img-responsive img-center" style="max-width:500px" />

2. Install the Fathom-X board in the Water Linked box as shown below.
<img src="/waterlinked/wlik-installation-2.jpg" class="img-responsive img-center" style="max-width:600px" />

3. Unplug the Ethernet cable from the connector on the side of the box, route underneath the Water Linked board, and plug into the Fathom-X module.
<img src="/waterlinked/wlik-installation-3.jpg" class="img-responsive img-center" style="max-width:600px" />

4. Remove the Ethernet bulkhead connector from the side of the box. Remove the protective cap from that connector for reuse with the new connector.
<img src="/waterlinked/wlik-installation-4.jpg" class="img-responsive img-center" style="max-width:600px" />

5. Install the new bulkhead connector into the same hole, making sure the circle on the connector body is facing upwards. Replace the protective cap.
<img src="/waterlinked/wlik-installation-5.jpg" class="img-responsive img-center" style="max-width:600px" />

6. Using a small flathead screwdriver, connect the red and black wires to the positive and negative tether input terminals on the Fathom-X board.
<img src="/waterlinked/wlik-installation-6.jpg" class="img-responsive img-center" style="max-width:600px" />

7. Next, unplug the small A1 plug from the top right corner of the Water Linked board. Plug in the new A1 plug and leave the original one hanging loose.
<img src="/waterlinked/wlik-installation-7.jpg" class="img-responsive img-center" style="max-width:600px" />

8. Plug the Fathom-X power cable into port D5 or D6 on the Water Linked board. Then connect the ferrules on the other ends of those wires to the positive and negative power input on the Fathom-X board (black terminal block).
<img src="/waterlinked/wlik-installation-8.jpg" class="img-responsive img-center" style="max-width:600px" />

9. Add a zip tie to the wiring harness to keep all wires tidy.
<img src="/waterlinked/wlik-installation-10.jpg" class="img-responsive img-center" style="max-width:600px" />

Nice job! You're done with modifications to the Water Linked box. Up next, we'll show you how to connect the box to your ROV.

## To ROV
### If using an FXTI (recommended method)
The connections made inside the FXTI will connect the ROV, Topside Computer, and Water Linked systems to each other. Here's a high level diagram of what that will look like:

<img src="/waterlinked/wlik-setup-diagram-fxti.png" class="img-responsive img-center" style="max-width:600px" />

The connections are made on the Tether Connection PCB on the FXTI Electronics Tray and connecting the green Locator-A1 wires. Below is a picture of how the components are connected together along with step by step connection instructions.

<img src="/waterlinked/wlik-setup-fxti.png" class="img-responsive img-center" style="max-width:600px" />

1. Remove one of the black plastic FXTI plugs from one of the auxiliary ports.

2. Thread the Water Linked Box to FXTI Cable into the open port and secure in place with the 3D printed spacer and black penetrator nut.

3. Connect the blue and blue/white wire pair into the FXTI Tether Connection PCB matching the orientation of the pre-installed blue and white wire connections.

3. Connect the green and green/white Locator-A1 wire pair into the green and white pair on the Binder connector pigtail, matching colors.

4. Reassemble the FXTI box.

### If using the terminal block and a Fathom-X (depreciated method)
The connections made near the topside Fathom-X interface and topside computer will connect the ROV, Topside Computer, and Water Linked systems to each other. Here's a high level diagram of what that will look like:

<img src="/waterlinked/wlik-setup-diagram.png" class="img-responsive img-center" style="max-width:600px" />

These connections are made on a terminal block with a few provided wires. Note that this isn't the nicest solution in the world, using an FXTI as shown above yields a much cleaner installation. Below is a diagram of how the components are connected together along with step by step connection instructions.

<img src="/waterlinked/wlik-temp-topside-1.jpg" class="img-responsive img-center" style="max-width:600px" />

1. Connect the red and black wires to the topside Fathom-X board. White and blue heatshrink is used to show the functional connection to the other twisted pairs.

2. Connect the tether blue/white and green/white pairs to the terminal block, matching the existing blue/white and green/white pairs. 

3. Plug the wires from the black Integration Kit cable into the header connectors, matching colors.

<img src="/waterlinked/wlik-temp-topside-2.jpg" class="img-responsive img-center" style="max-width:600px" />

**Note:** We strongly recommend mounting the Fathom-X and terminal block in a protective box or case. The wiring here is fairly fragile and easy to damage. Blue Robotics is working on a much better solution to this that will be available in the future.
