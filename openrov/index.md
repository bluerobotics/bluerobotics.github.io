---
layout: default
title: OpenROV Compatible Kit Documentation
permalink: /openrov/
order: 1
nav:
- Introduction: introduction
- - What's Included: whats-included
- - Safety: safety
- - Tools You Need: tools-you-need
- - What to Know Before You Start: what-to-know-before-you-start
- - Other Resources: other-resources
- Vertical Thruster: vertical-thruster-replacement
- - Step 1 - Remove the Vertical Thruster: step-1-remove-the-vertical-thruster
- - Step 2 - Cut and Strip Vertical Thruster Wires: step-2-cut-and-strip-vertical-thruster-wires
- - Step 3 - Tin the Wires and M100 Solder Pads: step-3-tin-the-wires-and-m100-solder-pads
- - Step 4 - Solder Wires to M100: step-4-solder-wires-to-m100
- - Step 5 - Seal the Electrical Connection: step-5-seal-the-electrical-connection
- - Step 6 - Install the OpenROV Mounting Adapter: step-6-install-the-openrov-mounting-adapter
- - Step 7 - Install in the OpenROV: step-7-install-in-the-openrov
- - Step 8 - Replace Thrust Guard: step-8-replace-thrust-guard
- Forward Thrusters: forward-thruster-replacement
- - Step 1 - Remove the Forward Thrusters: step-1-remove-the-forward-thrusters
- - Step 2 - Remove the Plastic Thrust Guards: step-2-remove-the-plastic-thrust-guards
- - Step 3 - Drill Holes for the T100 Thruster: step-3-drill-holes-for-the-t100-thruster
- - Step 4 - Install the T100 Thruster: step-4-install-the-t100-thruster
- - Step 5 - Cut and Strip Wires: step-5-cut-and-strip-wires
- - Step 6 - Solder and Seal Connections: step-6-solder-and-seal-connections
---

#Introduction

The Blue Robotics OpenROV Compatible Thruster Kit provides powerful, corrosion-proof thrusters for your OpenROV. This tutorial describes how to change from the standard OpenROV thrusters to the Blue Robotics thrusters.

##What's Included

* 2 x T100 Thrusters
* 1 x M100 Motor
* 1 x M100 Propeller
* 1 x OpenROV Mounting Adapter and Hardware

##Safety

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with tools, always use caution. This tutorial is provided as guidance and should be followed at your own risk.

##Tools You Need

* Wire cutter
* Wire strippers
* 2mm and 2.5mm hex keys
* 1/8" (3mm) or slightly larger drill bit and drill
* Good soldering iron with a small tip
* Sharp knife (razor blade or X-Acto knife work well)
* Protective gloves
* Liquid electrical tape like MG Chemicals 4229

##What to Know Before You Start

In the images below, we've started with the electronics tube and batteries removed to provide good access to the thrusters.

Installing the Blue Robotics thrusters requires permanently removing some components from the OpenROV. It is not easily undone. Please make sure that you read the instructions thoroughly before installing them on your ROV.

The T100 and M100 thrusters are heavier than the original thrusters and require the addition of some flotation foam at the back of the ROV. Please see the forum posts below for more info.

##Other Resources

Please also see discussions on our forums about the OpenROV Compatible Kit:

* [OpenROV v2.7 with BR Compatible Kit](https://www.bluerobotics.com/forums/topic/openrov-v2-7-with-br-compatible-kit/)

#Vertical Thruster Replacement

##Step 1: Remove the Vertical Thruster

<img src="/assets/images/tutorials/openrov-kit/openrov-1.png" class="img-responsive" />

Remove the thrust guard for easier access to the vertical thruster.

<img src="/assets/images/tutorials/openrov-kit/openrov-2.png" class="img-responsive" />

Remove the four M2 nuts and bolts that secure the motor to the plastic. In this picture, we've removed the bell and base from the motor, but that is not necessary.

##Step 2: Cut and Strip Vertical Thruster Wires

<img src="/assets/images/tutorials/openrov-kit/openrov-3.png" class="img-responsive" />

First, use a wire cutters to remove the zip ties that secure the wires for the vertical motor. 

<img src="/assets/images/tutorials/openrov-kit/openrov-4.png" class="img-responsive" />

Remove the second zip tie.

<img src="/assets/images/tutorials/openrov-kit/openrov-5.png" class="img-responsive" />

Now, cut the white motor wires. You want to cut them close to the motor so that you have as much wire available as possible to reach the new M100 motor.

<img src="/assets/images/tutorials/openrov-kit/openrov-6.png" class="img-responsive" />

After cutting, ensure that the loose ends will reach the vertical thruster position. If they are too short, you may have to splice in additional wire.

<img src="/assets/images/tutorials/openrov-kit/openrov-7.png" class="img-responsive" />

Using a wire strippers, remove about 4mm of insulation from the end of each wire.

##Step 3: Tin the Wires and M100 Solder Pads

<img src="/assets/images/tutorials/openrov-kit/openrov-8.png" class="img-responsive" />

We recommend tinning the ends of the wire to make it easier to solder to the M100 pads. With a soldering iron, heat up the end of the wire and apply solder. Don't leave the heat on too long or use too much solder as it will travel under the insulation and make the wire stiff.

<img src="/assets/images/tutorials/openrov-kit/openrov-9.png" class="img-responsive" />

Next, tin the pads on the M100. Heat up each pad and then apply a small amount of solder - just enough to make a small mound on the pad.

##Step 4: Solder Wires to M100

<img src="/assets/images/tutorials/openrov-kit/openrov-10.png" class="img-responsive" />

Since both the wire and pad are tinned, you shouldn't have to add any solder to connect the two. Hold the tinned wire to the pad and apply heat to both until they join. Again, it's best to do this quickly to avoid having solder travel up the cable. Repeat for the other two wires and check to make sure there are no shorts between solder joints.

##Step 5: Seal the Electrical Connection

<img src="/assets/images/tutorials/openrov-kit/openrov-11.png" class="img-responsive" />

Next, we seal the wire connections. We recommend using a liquid electrical tape like MG Chemicals 4229 or Loctite Marine Epoxy. The electrical tape requires several coats for good coverage.

<img src="/assets/images/tutorials/openrov-kit/openrov-12.png" class="img-responsive" />

Make sure you cover all exposed electrical connections. Allow several hours for the coating to dry.

##Step 6: Install the OpenROV Mounting Adapter

<img src="/assets/images/tutorials/openrov-kit/openrov-13.png" class="img-responsive" />

Once the coating is dry, attach the OpenROV mounting adapter using two M3 screws. Note that there are two sets of holes on the M100 but only the wider set is the right width for the adapter.

##Step 7: Install in the OpenROV

<img src="/assets/images/tutorials/openrov-kit/openrov-14.png" class="img-responsive" />

Once attached, lower the assembly into position inside the OpenROV. Make sure that the motor wires are clear of the propeller.

<img src="/assets/images/tutorials/openrov-kit/openrov-15.png" class="img-responsive" />

Using the 4 included M2 screws and washers, secure the motor to the plastic. 

<img src="/assets/images/tutorials/openrov-kit/openrov-16.png" class="img-responsive" />

This image shows the complete vertical thruster from below...

<img src="/assets/images/tutorials/openrov-kit/openrov-17.png" class="img-responsive" />

...and from above.

##Step 8: Replace Thrust Guard

<img src="/assets/images/tutorials/openrov-kit/openrov-18.png" class="img-responsive" />

Replace the thrust guard on top. The motor shaft should stick through the center hole.

#Forward Thruster Replacement

##Step 1: Remove the Forward Thrusters

<img src="/assets/images/tutorials/openrov-kit/openrov-19.png" class="img-responsive" />

First, cut the zip ties that secure the forward thruster wires.

<img src="/assets/images/tutorials/openrov-kit/openrov-20.png" class="img-responsive" />

Remove both thrusters using the M2 hex key. Note, in this image we removed the bell from the motor and removed the motor from the base. This is not necessary if you can remove the motor without disassembly.

##Step 2: Remove the Plastic Thrust Guards

<img src="/assets/images/tutorials/openrov-kit/openrov-21.png" class="img-responsive" />

The clear plastic rings that surround the original propellers need to be removed. This is easy accomplished with a brisk prying motion. Alternatively, you may cut the joints with a knife or saw.

<img src="/assets/images/tutorials/openrov-kit/openrov-22.png" class="img-responsive" />

The small piece of plastic that the plastic rings were glued to must also be removed.

<img src="/assets/images/tutorials/openrov-kit/openrov-23.png" class="img-responsive" />

When completed, the OpenROV will look like this. Both motors have been removed and the plastic rings have been removed.

##Step 3: Drill Holes for the T100 Thruster

<img src="/assets/images/tutorials/openrov-kit/openrov-24.png" class="img-responsive" />

Next, position the first thruster. The mounting holes will face outwards towards the outer shell of the OpenROV.

<img src="/assets/images/tutorials/openrov-kit/openrov-25.png" class="img-responsive" />

Here you can see the four mounting holes through the translucent plastic.

<img src="/assets/images/tutorials/openrov-kit/openrov-26.png" class="img-responsive" />

Use a marker or other method to mark the location of the four holes.

<img src="/assets/images/tutorials/openrov-kit/openrov-27.png" class="img-responsive" />

Using an 1/8" (3mm) or slightly larger drill bit, drill through the four holes. We recommend using a glove for protection.

##Step 4: Install the T100 Thruster

<img src="/assets/images/tutorials/openrov-kit/openrov-28.png" class="img-responsive" />

Now the thruster can be secured using the included M3 screws. Tighten gently with the 2.5mm hex key.

<img src="/assets/images/tutorials/openrov-kit/openrov-29.png" class="img-responsive" />

Here all four screws are installed.

<img src="/assets/images/tutorials/openrov-kit/openrov-30.png" class="img-responsive" />

It's best to tuck the thruster cable next to the shell as shown above to allow some excess length. We will cut the thruster cable and the original motor wires and splice them together.

##Step 5: Cut and Strip Wires

<img src="/assets/images/tutorials/openrov-kit/openrov-31.png" class="img-responsive" />

We have to cut the wires to the existing thrusters and reconnect those wires to the three thruster wires. Cut the wires relatively close to the motor to leave as much wire as possible for the connection.

<img src="/assets/images/tutorials/openrov-kit/openrov-32.png" class="img-responsive" />

Using a wire strippers, remove about 4mm of insulation from the end of each wire. You also have to strip the end of the thruster cable. Please the [cable stripping tutorial](/tutorials/cable-stripping/) for more info on how to do that.

<img src="/assets/images/tutorials/openrov-kit/openrov-33.png" class="img-responsive" />

We'll be using heat shrink combined with liquid electrical tape like MG Chemicals 4229. Cut a few pieces of heat shrink (not included) to size to seal the connections. We used three pieces of 3/16" tubing and one piece of 1/4" tubing. 

##Step 6: Solder and Seal Connections

<img src="/assets/images/tutorials/openrov-kit/openrov-34.png" class="img-responsive" />

First of all, make sure you slide all of the heat shrink on before soldering anything!

<img src="/assets/images/tutorials/openrov-kit/openrov-35.png" class="img-responsive" />

This is a good time to borrow a friend or use a third hand tool. Solder the three white wires to the three thruster wires. The order of connections does not matter. We'd recommend tinning each wire separately and then connecting them together. 

<img src="/assets/images/tutorials/openrov-kit/openrov-36.png" class="img-responsive" />

The connections are sealed by first covering in liquid electrical tape and then sealing in heat shrink to add extra protection. 

<img src="/assets/images/tutorials/openrov-kit/openrov-37.png" class="img-responsive" />

The heat shrink can be shrunk while the liquid electrical tape is still wet.

<img src="/assets/images/tutorials/openrov-kit/openrov-38.png" class="img-responsive" />

We put a second coating over the first layer of heat shrink and seal that in the larger heat shrink. This adds a second level of protection and should guarantee a sealed connection.

<img src="/assets/images/tutorials/openrov-kit/openrov-39.png" class="img-responsive" />

Here's the finished connection. Now, just repeat these steps for the other forward thruster!