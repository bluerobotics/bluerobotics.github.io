---
layout: default
title: Water Linked Underwater GPS / BlueROV2 Integration Kit Documentation
order: 1
nav:
- Introduction: introduction
- - Function Diagram: function-diagram
- Specifications: specifications
- - Specification Table: specification-table
- Installation: installation
- - Included Parts: included-parts
- - Inside WL Box: inside-wl-box
- - To ROV: to-rov

store-links:
- Switch: http://www.bluerobotics.com/store/electronics/underwater-gps/aps-wl-11001/

manual-links:
- Water Linked Underwater GPS: /waterlinked
---

<!--<img src="/switch/cad/switch-4a.png" class="img-responsive" style="max-width:900px"  />-->

# Introduction

Coming soon!

## Function Diagram

### Internal Wiring Diagram

<img src="/waterlinked/wlik-box-diagram.png" class="img-responsive img-center" style="max-width:600px" />

### Connections From Box to Topside Fathom-X to ROV

<img src="/waterlinked/wlik-setup-diagram.png" class="img-responsive img-center" style="max-width:600px" />

# Specifications

## Specification Table

| **Item** | **Value** |
| Cable Length (WL Box to Fathom-X) | 8 meters | 26 ft |

# Installation

## Included Parts

| **Quantity** | **Part** |
| 1 | 8 meter cable with Bulgin 8pos (to WL box) to cable penetrator (to BlueROV2 topside) |
| 1 | Internal battery cable (XT90 to Molex 3mm connector) |
| 1 | Fathom-X power cable (JST-GH to ferrules) |
| 1 | Pre-wires bulkhead connector (Bulgin 8pos to JST-GH 3pos and ferrules) |
| 1 | Fathom-X Tether Interface Board |

## Inside WL Box

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

## To ROV