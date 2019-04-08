---
layout: default
title: Water Linked Underwater GPS Documentation
order: 1
topnavbar: waterlinked
nav:
- Introduction: introduction
- Integration Kit: integration-kit
- Using with the BlueROV2: using-with-the-bluerov2
- - Installation: installation
- - Software Setup: software-setup

store-links:
- WL Underwater GPS: http://www.bluerobotics.com/store/electronics/underwater-gps/aps-wl-11001/
- WL Integration Kit: http://www.bluerobotics.com/store/electronics/underwater-gps/aps-wl-brov2-kit-r1/

manual-links:
- WL Integration Kit: /waterlinked/integration-kit/

redirect: https://www.bluerobotics.com/learn/water-linked-bluerov2-integration/
---

<!--<img src="/switch/cad/switch-4a.png" class="img-responsive" style="max-width:900px"  />-->

# Introduction

The Water Linked Underwater GPS provides global position of an underwater locator device using acoustic positioning and traditional GPS. On the BlueROV2 or other underwater vehicles it is a huge asset that allows position tracking for navigation, inspection, and mapping.

<i class="fa fa-star fa-fw fa-1x text-default blue"></i>
This manual only covers usage of the Underwater GPS with the BlueROV2. For general info and other applications, please visit [Water Linked's website](http://www.waterlinked.com), [quickstart guide](https://waterlinked.github.io/docs/explorer-kit/introduction/), and official [User Manual](https://waterlinked.com/usermanual).

# Integration Kit

<img src="http://www.bluerobotics.com/wp-content/uploads/2017/09/wlik-product-3.png" class="img-responsive img-center" style="max-width:500px;" />

For use with the BlueROV2, we highly recommend the [Water Linked Underwater GPS / BlueROV2 Integration Kit](http://www.bluerobotics.com/store/electronics/underwater-gps/aps-wl-brov2-kit-r1/) to get started smoothly.

Please visit the [setup manual for the integration kit](/waterlinked/integration-kit).

# Using with the BlueROV2

The following instructions assume that you have [installed and set up](/waterlinked/integration-kit) the [Integration Kit](http://www.bluerobotics.com/store/electronics/underwater-gps/aps-wl-brov2-kit-r1/).

## Installation

Before the first use, you need to install the Analog Locator (A1) on the BlueROV2. The locator will use one of the spare cable penetrations in the back of the BlueROV2 and will connect to the spare green and white twisted pair in the tether.

Here's our recommended installation instructions.

1. Loosen the enclosure clip screws at the front of the top enclosure and remove the tube from the ROV.

2. Using the silver cable penetrator wrench, loosen and remove one of the spare cable penetrators.

3. Install the Analog Locator (with pre-installed penetrator) into the hole and tighten with the penetrator wrench.

4. Using the pre-crimped header pin connector on the Analog Locator, connect the locator wires (green/white) to a spare twisted pair of the tether (green/white). If the tether does not have a matching connector, you can a) install one, b) hardwire the connection instead, c) use a terminal block for wire to wire connection (not provided).

5. Route the locator to the side of the ROV and use the included aluminum mounting bracket to secure to the existing holes on the ROV.

6. That's it! Close up the enclosure, vacuum test to ensure a good seal, and you're ready to dive!

## Software Setup

Configure the Waterlinked system with a static ip address of 192.168.2.94 according to section 3.1 of the [user manual](https://waterlinked.com/usermanual). Power on the ROV and Waterlinked system, and connect your computer.

If everything is operating correctly, you should now find an ROV position on the map in QGroundControl. The ROV position is indicated by a BlueROV image. The position of the surface vessel or Water Linked Master Electronics box is indicated by a red arrow. The small 'H' icon indicates the 'home position', the location of the ROV's first GPS lock.

<img src="/waterlinked/wlik-qgc-display.png" class="img-responsive img-center" style="max-width:650px;" />

To configure the Water Linked Underwater GPS system, navigate to [http://192.168.2.94/](http://192.168.2.94/) in your browser and click on the 'Configuration' menu item. Please refer to the [Water Linked Underwater GPS User Manual](https://waterlinked.com/usermanual) for further information on configuration.

### Software Update

Check the Waterlinked system for available software updates. You can check the Underwater GPS software version at [192.168.2.94/#/about](http://192.168.2.94/#/about). The update process is documented on the [Waterlinked website](https://waterlinked.github.io/docs/explorer-kit/gui/upgrader/).
