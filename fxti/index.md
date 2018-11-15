---
layout: default
title: Fathom-X Tether Interface (FXTI) Documentation
permalink: /fxti/
order: 1
topnavbar: brov2
nav:
- Usage: usage
- Integration Examples: integration-examples

store-links:
- FXTI: https://www.bluerobotics.com/store/rov/fxti-asm-r1-rp/
- Fathom ROV Tether R2: https://www.bluerobotics.com/store/cables/fathom-tether-nb-4p-26awg-r2/
- Fathom Spool: https://www.bluerobotics.com/store/rov/bluerov2/tms-asm-spool-r1-rp/
- Binder 770 Plug: https://www.bluerobotics.com/store/connectors/misc-elec-binder-770-plug-r1/

manual-links:
- BlueROV2: /brov2/assembly/
- Fathom ROV Tether R2: /fathom-r2/
- Fathom Spool: /spool/
- Binder 770 Plug: /binder770/
---

<img src="/fxti/cad/FXTI-Banner.JPG" class="img-responsive img-center" style="max-width:400px"  />

# Usage

## Attaching the Fathom Tether connector

<div class="row">
	<div class="col-sm-6">
		<img src="/fxti/cad/FXTI-Tether-Insert.jpg" class="img-responsive img-center" style="max-width:300px"  />
	</div>
	<div class="col-sm-6">
		<img src="/fxti/cad/FXTI-Tether-Locked.jpg" class="img-responsive img-center" style="max-width:300px"  />
	</div>
</div>

Insert the Binder connector from your _Fathom ROV Tether_ (or _Spool_ extension cable) onto the connector bulkhead recepticle so the WHITE ARROW on the plug aligns with the white line. Rotate the connector head clockwise until the connector locks in place and the GREEN LOCK symbol is in the 12 o'clock position.

## Attaching the USB Cable

<img src="/fxti/cad/FXTI-USB.png" class="img-responsive img-center" style="max-width:600px"  />

Insert the USB Type-B connector end of the included cable into the Type-B recepticle on the oposite face of the _FXTI_. Connect the USB Type-A connector into a USB port on your topside computer. Once connected, the indicator lights on the top of the box should illuminate showing the “Power” and “Link” status.

## Configuring Network Settings

<img src="/fxti/cad/Software-setup-page.png" class="img-responsive img-center" style="max-width:400px"  />

Follow the "Network Setup" instructions on the [BlueROV2 Software Setup page](http://docs.bluerobotics.com/brov2/software-setup/) for establishing a connection with your BlueROV2 to QGroundControl.

# Integration Examples

_FXTI_ is highly expandable allowing for reconfiguring connections within the box so that you can quickly use an extra twisted pair from the tether for the Water Linked Analog Locator or any RS485 device.

[Pololu](https://www.pololu.com/category/70/crimp-connector-housings) carries the 3 position 0.1" (2.54mm) Crimp Connector Housings and female crimp pins that may be used for connecting your own devices to the spare tether terminations.

## Water Linked Underwater GPS / BlueROV2 Integration Kit

Below is one example  of how _FXTI_ can be used to neatly connect the Water Linked Underwater GPS / BlueROV2 Integration Kit and omit the earlier connections to a terminal block. 

<img src="/fxti/cad/FXTI-WL-Integration.jpg" class="img-responsive img-center" style="max-width:600px"  />

More examples will be coming to illustrate connecting other accessories by BlueRobotics or other manufacturers.

