---
layout: default
title: BlueROV2 Software Setup
permalink: /brov2/software-setup/
order: 1
nav:
- Introduction: introduction
- Required Equipment: required-equipment
- Install QGroundControl: install-qgroundcontrol
- Computer Set Up: setting-up-your-computer
- - Windows Setup: windows
- - Mac Setup: mac
- - Linux Setup: Linux
- Connect Controller: connect-controller-to-qgroundcontrol
- - XBox Controller: xbox-controller
- Sensor Calibration: sensor-calibration
- Joystick Calibration: joystickgamepad-calibration
- Button Setup: button-setup
- Configure Motor Directions: configure-motor-directions
- Voltage and Current Measurement Setup: voltage-and-current-measurement-setup
- Operations Manual: operations-manual 


store-links:
- BlueROV: https://www.bluerobotics.com/store/rov/bluerov2/

manual-links:
- BlueROV2 Specifications: /brov2/
- Assembly Manual: /brov2/assembly/
- Operations Manual: /brov2/operation/
---

<img src="/brov2/cad/ROV-scuba-1.png" class="img-responsive img-center" style="max-width:800px" />

# Introduction

These are instructions for the first time that you set up your computer to work with the BlueROV2. If you have not assembled your BlueROV2, please see our [Assembly Manual](/brov2/assembly/) and assemble your BlueROV2 prior to setting up the software. If you received your BlueROV2 prior to October 24, 2016 proceed to [ArduSub.com](http://ardusub.com/initial-setup/#install-qgroundcontrol) for software setup information. The **PixHawks** that shipped **prior to October 24, 2016** were **not flashed with firmware** and require some **QGroundControl parameters to be changed**. 

# Install QGroundControl

To connect your computer to the BlueROV2, you need to **download the most recent daily build of QGroundControl.**

Here are the direct links to the most recent daily builds:

- [Windows](https://s3-us-west-2.amazonaws.com/qgroundcontrol/latest/QGroundControl-installer.exe)
- [Mac OSX](https://s3-us-west-2.amazonaws.com/qgroundcontrol/builds/master/QGroundControl.dmg)
- Linux
	- [AppImage](https://s3-us-west-2.amazonaws.com/qgroundcontrol/builds/master/QGroundControl.AppImage)
	- [Compressed Archive](https://s3-us-west-2.amazonaws.com/qgroundcontrol/builds/master/QGroundControl.tar.bz2)

# Setting Up Your Computer

If your computer does not have an Ethernet port, you will need a USB to Ethernet adaptor. We recommend using [this one.](https://www.amazon.com/Cable-Matters-Ethernet-Network-Adapter/dp/B00ET4KHJ2)

## Windows

**Internet Sharing**

1. Go to _Control Panel_ > _Network and Sharing Center_ and then choose "Change adapter settings".

	<img src="/brov2/cad/network-and-sharing-center-annotated.png" class="img-responsive img-center" style="max-width:800px" />

2. Right click on the Ethernet adapter, then choose _Properties_.

	<img src="/brov2/cad/network-connections-annotated.png" class="img-responsive img-center" style="max-width:800px" />

3. In the properties dialog, choose _Internet Protocol Version 4 (TCP/IPv4)_, then click _Properties_.

	<img src="/brov2/cad/internet-protocol-version-4-annotated.png" class="img-responsive img-center" style="max-width:800px" />

4. Select "Use the following IP address" And enter 192.168.2.1 for the IP address and 255.255.255.0 for the Subnet mask. Then select OK.

	<img src="/brov2/cad/static-ip-annotated.png" class="img-responsive img-center" style="max-width:800px" />

**Firewall**

1. Go to _Control Panel_ > _Windows Firewall_ and then select "Allow an app or feature through Windows Firewall".

2. Select "Change Settings" and then select "Open source ground control app provided by QGroundControl dev team" or "QGroundControl".

	<img src="/brov2/cad/windows-firewall-annotated.png" class="img-responsive img-center" style="max-width:800px" />

## Mac

**Network Settings**

1. Go to _System Preferences_ > _Network_

2. If your computer has an Ethernet port, select Ethernet from the options on the left side. If you had to get a USB to Ethernet adapter, plug it in now then select it.

3. Select the dropdown next to "Configure IPv4" and then select "Manually"

4. Enter 192.168.2.1 for the IP Address and 255.255.255.0 for the Subnet Mask and then select apply.

	<img src="/brov2/cad/mac-network-settings-annotated.png" class="img-responsive img-center" style="max-width:800px" />

**Sharing Settings**

1. Go to _Sharing_ and select "Internet Sharing". 

2. Select "Wi-Fi" from the "Share your connection from" dropdown.

3. Select "USB 10/100 LAN" (if using the recommended Ethernet USB adaptor) or your Ethernet port or adapter from the "To computers using" menu.

	<img src="/brov2/cad/mac-sharing-settings-annotated.png" class="img-responsive img-center" style="max-width:800px" />

## Linux

# Connect Controller to QGroundControl

## Windows

**XBox 360 Controller** 

- Plug and Play

**XBox One Controller** 

- Wired: Plug and Play 
- Wireless: 
	1. Plug in [Microsoft XBox Wireless Adapter for Windows](https://www.amazon.com/Microsoft-Xbox-Wireless-Adapter-Windows-one/dp/B00ZB7W4QU).
	2. Turn on the controller, then press the Wireless Enrollment button on the top of the controller and on the wireless adapter.

**Logitech GamePad (F710 and F310)**

Logitech controllers should have the switch on the back set to "X".

## Mac

**XBox 360 Controller**

1. Download the driver [here](https://github.com/360Controller/360Controller/releases/download/v0.16.4/360ControllerInstall_0.16.4.dmg). For more information on this driver, see the [Readme File.](https://github.com/360Controller/360Controller#about)
2. Install the XBox 360 controller driver.
2. Plug in the Windows XBox 360 Wireless Receiver for Windows.
3. Turn on the XBox 360 Controller.

**XBox One Controller**
There is currently no support for wireless use.

1. Download the driver [here](https://github.com/360Controller/360Controller/releases/download/v0.16.4/360ControllerInstall_0.16.4.dmg). For more information on this driver, see the [Readme File.](https://github.com/360Controller/360Controller#about)
2. Install the XBox 360 controller driver.
2. Plug in the XBox One Controller directly to the computer using a micro USB cable.
3. Turn on the XBox One Controller.

**Logitech GamePad (F710 and F310)**

Logitech controllers should have the switch on the back set to "X"

## Linux


**XBox One Controller**


1. Plug in the wireless dongle into a USB Port

# Sensor Calibration

1. Go to the settings tab in QGroundControl and select the red _Sensors_ tab on the left sidebar.
2. Choose your autopilot orientation:
	- `Roll90` for the BlueROV2
3. Click on the _Accelerometers_ and follow the instructions.
4. Click on _Compass_ and follow the instructions.

When completed, the _Sensors_ tab will no longer be red.

# Joystick/Gamepad Calibration

The first time you use a new joystick or gamepad in QGroundControl, you will be asked to calibrate it. This allows QGroundControl to detect which axis is which and what the range of each axis is.

**Important Note:** The Calibration process is a little confusing. This will be fixed in upcoming versions of QGroundControl, but for now, you must follow this process.

1. Click "Calibrate" on the joystick page, then click "Next".
 
2. **We want to calibrate the joysticks in the opposite way that QGroundControl asks us to.** When asked to move each axis, move the following sticks:

	- Throttle: Right stick up/down
	- Yaw: Right stick right/left
	- Roll: Left stick right/left
	- Pitch: Left stick up/down

# Button Setup

The default button setup for the BlueROV2 is as shown in the image below:

<img src="/brov2/cad/controller-buttons.png" class="img-responsive img-center" style="max-width:800px" />

# Configure Motor Directions

The motor directions for the BlueROV2 must be tested prior to use. 

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>Be sure to keep all body parts and clothing clear of thrusters while the BlueROV2 is armed.

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>**Do not** run thrusters for longer than 30 seconds in air.

1. Set the flight mode to "Manual".

2. Arm the BlueROV2 by pressing "Start"

3. Move the left joystick forwards and verify that the thrusters are running the correct way. Air should be blowing out of the four vectored thrusters towards the back of the vehicle.

4. Move the right joystick forwards and verify that the thrusters are running the correct way. Air should be blowing out of the two vertical thrusters towards the bottom of the vehicle.

# Voltage and Current Measurement Setup 

The default settings for voltage and current measurement are for the [Multistar High Capacity 4s 10,000mAh](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=56844) battery that we recommend. If you select a different battery, you can adjust your voltage and current measurement setup by going to _Settings_ then select _Power_. The only thing that you will need to change is the "Battery capacity", which can changed by simply typing in the size of the battery into the box.

<img src="/brov2/cad/current-monitoring-setup.PNG" class="img-responsive img-center" style="max-width:800px" />

# Operations Manual 

Your computer setup is now complete! Please see our [Operations Manual](/brov2/operation/) to finish getting ready for your first dive!




