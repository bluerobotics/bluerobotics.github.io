---
layout: default
title: BlueROV2 Operating Manual
permalink: /brov2/operation/
order: 1
topnavbar: brov2
nav:
- Introduction: operating-manual-intro
- - Safety: safety
- Batteries: batteries
- - LiPo Safety: lipo-safety
- - Charging: how-to-charge-your-battery
- - Swapping Batteries: swapping-batteries
- First Dive: getting-ready-for-your-first-dive
- - Connecting Batteries: connecting-your-batteries
- - Topside Setup: setting-up-your-topside-control
- - Vacuum Test: vacuum-test
- - Controller Functions: controller-functions
- - Dive Modes: dive-modes
- Pre-Dive Checklists: pre-dive-checklists
- - Comprehensive Checklist: comprehensive-checklist
- - Pre-Dive Checklist: pre-dive-checklist
- Launch: launch
- - All Launches: all-launches
- - Boat Launch: boat-launch
- - Shore Launch: shore-launch
- - Dock Launch: dock-launch 
- Operation: operation
- - Tether Managament: tether-management
- - Driving Guidelines: driving-guidelines
- - Between Dives: storage-between-dives
- Recovery: recovery
- - Powered Recovery: powered-recovery
- - Unpowered Recovery: unpowered-recovery
- Post-Mission Checklist: post-mission-checklist
- Preventative Maintenance: preventative-maintenance
- - Every 100 Hours: every-100-hours-of-operation-or-every-6-months 
- Issue Reporting: issue-reporting

store-links:
- BlueROV: https://www.bluerobotics.com/store/rov/bluerov2/

manual-links:
- Specifications: /brov2/
- Assembly Manual: /brov2/assembly/
- Software Setup: /brov2/software-setup/
---

<img src="/brov2/cad/BR2-banner.png" class="img-responsive img-center" style="max-width:800px" />

# Operating Manual Intro

The information on this page is for operating the BlueROV2. In order to operate the BlueROV2, it must be assembled and the software must be set up. If you have not assembled your BlueROV2, please see our [Assembly Manual](/brov2/assembly/). If you have not completed the software setup, please see our [Software Setup](/brov2/software-setup/) page.

## Safety 

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> When working with electricity, especially in water, always practice caution. Always ensure that connections are secure and watertight. Keep your body away from spinning motors and propellers.

# Batteries

We recommend using LiPo batteries for the _BlueROV2_. If you do not have any experience with LiPo batteries, [our Battery Selection Guide](/battery/) has good introductory information on LiPo batteries. 

## LiPo Safety

[Our Battery Selection Guide](/battery/#lipo-safety) has several links to detailed LiPo safety information. The highlights are as follows:

- Charge LiPo batteries in a fire proof bag
- Let LiPo batteries cool off for at least 15 minutes after use before charging
- Never leave a LiPo battery unattended when charging
- Install a smoke detector in the area where you charge your LiPo batteries

## How to Charge Your Battery

To ensure that your LiPo batteries last as long as possible, it is important to not discharge the battery below 3.2 volts per cell or 12.8 volts if you are using a 4S battery.  

A nominal 14.8 volt (a 4s pack) LiPo battery is fully charged when it reaches 16.8 volts (4.2 volts per cell). If you charge a 4S battery beyond 16.8 volts, the battery may become damaged or catch fire. To safely charge a LiPo battery, you should charge with a LiPo-compatible charger. A LiPo-compatible charger will prevent over-charging; it will also balance the cells. A good rule of thumb is to charge your LiPo battery at less than or equal to "1C" or 1 time its capacity. So, if you are using the 10,000mAh battery, you would want to charge at or less than 10 amps.

## Swapping Batteries

To exchange batteries in the _BlueROV2_ use the following procedure:

1. Move the _BlueROV2_ to a dry area.
2. Remove the vent plug from the vent penetrator. Place the vent plug in a safe place
3. Remove the 4-hole end cap from the battery enclosure
4. Disconnect battery and remove it from the battery enclosure.
5. Connect new battery and place it in the battery enclosure.
6. Install 4-hole end cap onto battery enclosure.
7. Check the O-rings on the vent plug, then install it into the vent penetrator.

# Getting Ready for Your First Dive

Before putting the BlueROV2 in the water, there are a few things that you need to do. 

Your first dive should be in a body of water that is shallow, still, and clear. We recommend a pool or a test tank. Testing in a more controlled environment will provide a good opportunity to check that the ROV is ballasted correctly. It will also allow you to confirm that your controller is set up correctly and your ROV is behaving how you expect it to. 

## Connecting Your Batteries

To get ready for your first dive, you need to start by connecting a charged battery using the same process as shown in the [Swapping Batteries](#swapping-batteries) section. 

## Setting up Your Topside Control

To set up your topside control follow the instructions on the [Software Setup](/brov2/software-setup/) page.

## Vacuum Test 

To perform a vacuum test on the _BlueROV2_, you need a vacuum pump. If you do not own one, we recommend [this pump.](https://www.amazon.com/HFS-Brake-Bleeder-Vacuum-Tuner/dp/B00NP60URE/ref=sr_1_10?ie=UTF8&qid=1470775016&sr=8-10&keywords=vacuum+pump) It is important to do a vacuum test prior to putting the _BlueROV2_ in the water for the first time. It is also important to perform a vacuum test after changing anything that could compromise a seal, such as changing out a penetrator or an O-ring.

The vacuum test can be performed using the following procedure:

1. Remove the vent plugs from both the electronics and the battery enclosure.
2. Install one of the vacuum plugs on the included tee in the electronics enclosure and the other in the battery enclosure.
3. Pump until the gauge reads 10 in. Hg [34 kPa] vacuum.
4. Let the _BlueROV2_ and pump sit for 15 minutes.
5. If the gauge reads above 9 in. Hg [31 kPa] vacuum after 15 minutes, your seals are acceptable.

If the gauge reads below 9 in. Hg [31 kPa] vacuum after 15 minutes, you should check the following:

1. Make sure that the M3 screws on the front and back end caps of the battery and electronics encloure using the M2.5 hex driver. If you are able to tighten one or more, attempt the vacuum test again. 
2. Make sure the the penetrators on the battery and electronics enclosure are fully tightened. Check by attempting to loosen by hand. If you are able to tighten one or more, attempt the vacuum test again.
3. Make sure that all of the O-rings are installed in the penetrators. If any are missing, install then attempt the vacuum test again.
4. Check that the Face seal O-rings and radial O-rings are installed in the battery and electronics enclosures and in good condition. If you find a damaged or missing O-ring, install and attempt the vacuum test again.

## Controller Functions

The BlueROV2 comes with the button setup shown below as a default:

<img src="/brov2/cad/controller-buttons.png" class="img-responsive img-center" style="max-width:800px" />

If you do not like the button settings, you can change the button setup in QGroundControl.

1. Go to _Settings_ then select "Joystick" 

2. Under "Button actions:" QGroundControl shows what all buttons are currently set to control.

3. Press the button that you are interested in changing. The button number will light up.

4. Select what you would like the button to do from the dropdown to the right of the button number.

## Dive Modes

- In **Manual Mode** the BlueROV2 will only output motor controls based on the pilot input from the joysticks. There is no feedback stabilization, heading holding, or depth holding.

- In **Stabilize Mode** the BlueROV2 will stabilize roll to level and it will maintain heading when not commanded to turn. The vertical control is left entirely to the pilot.

- In **Depth Hold Mode** the BlueROV2 will hold depth unless you command it to dive/ascend. It will also stabilize roll to level and maintain heading when not commanded to turn.

# Pre-Dive Checklists

## Comprehensive Checklist

This checklist is more thorough than the [Pre-Dive Checklist](#pre-dive-checklist) and should be done in a couple of circumstances:

- After travel by airplane
- After extended travel by car or boat (>1 hour)
- After taking off the electronics enclosure
- After replacing or exchanging penetrators
- After replacing any sealing O-ring

**Comprehensive Checklist**

- Check that the ROV has connected to QGroundControl
- Tighten the M5x16 screws that hold the frame to the center and bottom panels using the short part of the M3 hex key as the handle or an M3 hex driver.
- Tighten the M3x12 screws that hold the back end caps to the flange seals using the M2.5 hex driver.
- Tighten the M3x16 screws that hold the clips to the electronics enclosure.
- Tighten the M3x12 screws that hold the dome and the front battery end cap to the flange seals using the M2.5 hex driver.
- Gently attempt to twist the ballast weights clockwise.
- Pull on the side panels and attempt to twist the frame. 
- Pull on the cable bundles going into the 14 hole end cap.
- Pull on and twist the tether thimble.
- Attempt to loosen all of the penetrators by hand.
- Check that the vent plugs are installed.
- Push and twist the battery enclosure.
- Visually check that all screws holding the back end caps are installed and look tight.
- Pull on all of the thrusters.
- Grab and shake the fairings.
- Pull on the _Lumens_.
- Visually check that all screws holding the dome and front battery end cap are installed and look tight.
- Visually check the radial seals on the electronics and battery enclosure.
- Put the ROV on the ground and make sure that people are clear of the thrusters.
- Put the ROV in manual mode.
- Arm the ROV.
- Press the forward/reverse stick forward to check that the vectored thrusters are spinning freely.
- Press the ascend/descend stick forward to check that the vertical thrusters are spinning freely.
- Disarm the ROV.
- Launch.

## Pre-Dive Checklist

This checklist should be done every time the ROV is put into the water, prior to putting the ROV in the water. This checklist starts after you have connected the battery, reinstalled the battery enclosure end cap, and reinstalled the battery enclosure vent plug.

- Check that the ROV has connected to QGroundControl.
- Gently attempt to twist the ballast weights clockwise.
- Pull on the side panels and attempt to twist the frame. 
- Pull on the cable bundles going into the 14 hole end cap.
- Pull on and twist the tether thimble.
- Attempt to loosen all of the penetrators by hand.
- Check that the vent plugs are installed.
- Push and twist the battery enclosure.
- Visually check that all screws holding the back end caps are installed and look tight.
- Pull on all of the thrusters.
- Grab and shake the fairings.
- Pull on the _Lumens_.
- Visually check that all screws holding the dome and front battery end cap are installed and look tight.
- Visually check the radial seals on the electronics and battery enclosure.
- Put the ROV on the ground and make sure that people are clear of the thrusters.
- Put the ROV in manual mode.
- Arm the ROV.
- Press the forward/reverse stick forward to check that the vectored thrusters are spinning freely. Do not run the thrusters for more than 30 seconds in air.
- Press the ascend/descend stick forward to check that the vertical thrusters are spinning freely. Do not run the thrusters for more than 30 seconds in air.
- Disarm the ROV
- Now you are ready to launch

# Launch

<img src="/brov2/cad/brov2-launch.png" class="img-responsive img-center" style="max-width:800px" />

The _BlueROV2_ can be launched in many conditions. Some conditions require special care.

## All Launches

- Do not launch the ROV near swimmers or divers.  
- Do not release the ROV prior to it touching the water. If necessary, use the tether to lower it down. When lowereing the ROV, keep the dome away from any hard or sharp objects.
- Do not launch in water that is too shallow to freely drive the ROV.
- Keep the ROV away from boats that do not know that the ROV is in the water.
- Do not arm until the ROV is in the water and the launcher is clear of the ROV.

## Boat Launch

- Keep the ROV and tether clear of the boat's propellers or jets.
- Make sure that the captain of the boat knows that the ROV is about to be launched.

## Shore Launch

- Do not launch the ROV in heavy surf.
- You may need to walk the ROV into the water to get to a point where the water is deep enough to drive the ROV.

## Dock Launch

# Operation

## Tether Management

When diving the _BlueROV2_ the tether will require some active management. Here are some guidelines for good tether management:

- Keep the tether away from propellers or jets if you are operating on a boat.
- Keep the tether and ROV away from other boats that are not aware that it is in the water.
- Keep the tether away from sharp objects such as coral, rocks, etc.
- Do not deploy too much tether. Excess tether in the water will add drag to the ROV and opportunity for the tether to get caught on something.
- Do not deploy the tether over sharp edges or rough ground.
- Do not step on the tether.

## Driving Guidelines

- Do not drive into a sandy bottom. If you do drive into a sandy bottom, stop driving the vehicle and allow it to float up to prevent sand from getting into the vertical thrusters.
- Drive smoothly and on low gain when possible to maximize battery life.
- Do not touch coral with the ROV to prevent damage to the coral.
- Avoid driving into seaweed when possible. Seaweed can get sucked into and stop the thrusters from spinning.
- When diving, it is helpful to follow down a chain or a line to give a frame of reference. 

## Storage Between Dives

If you have a break between dives where the _BlueROV2_ is out of the water for more than 15 minutes, make sure to keep it in a shaded area. If there is no shade nearby, a towel draped over the ROV will supply sufficient shade. 

# Recovery

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i> Disarm the _BlueROV2_ prior to attempting to recover it.

## Powered Recovery

Typically, you will be recovering the _BlueROV2_ when it is under power.

- The ROV pilot should find the tether and follow it back to the launching area.
- While the pilot is driving back pull in the tether slack. Clean debris off of the tether and inspect for cuts or nicks while pulling in.
- When the ROV arrives back to the launching location, disarm the ROV.
- Pick up the ROV directly if practical, or pull the ROV up using the tether. Avoid sharp or hard object while lifting the ROV by the tether; allow space for the ROV to swing.
- Remove the vent plug from the battery enclosure vent penetrator.
- Disconnect the battery.

## Unpowered Recovery

If the ROV loses power or connection to QGroundControl while diving, you should do the following:

- Pull the tether in at a moderate pace. Don't try to pull it in as fast as possible.

# Post Mission Checklist

- Rinse down with fresh water
- If you were operating in a sandy environment or seaweed, clean sand and seaweed from the thrusters.

# Preventative Maintenance

## Every 100 Hours of Operation or Every 6 Months 

- Replace _Lumen_ mount O-rings. 
- Replace radial battery cap O-rings on the side that you open and close when swapping batteries.
- Replace vent plug O-rings.

# Issue Reporting

We're always trying to make our documentation, instructions, software, and user experience better. If you're having an issue with anything, please report it so that we can address it as soon as possible! Here's where to do that depending on what's wrong:

- **ArduSub Issues:** For anything related to the ArduSub software that runs on the Pixhawk and controls the ROV, reports issues on the [ArduSub Github Issues Page](https://github.com/bluerobotics/ardusub/issues). If you're unsure where your issue should be posted, you can report it here.
- **QGroundControl Issues:** For anything related to the QGroundControl software, joystick setup, video streaming, etc., please report an issue on the [QGroundControl Github Issues Page](https://github.com/mavlink/qgroundcontrol/issues).
- **Documentation:** For anything related to the documentation and instructions here, please report an issue on the [Blue Robotics Documentation Github Issues Page](https://github.com/bluerobotics/bluerobotics.github.io/issues).

