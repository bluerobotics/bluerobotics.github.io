---
layout: default
title: BlueROV2 Software Setup
permalink: /brov2/software-setup/
order: 1
topnavbar: brov2
nav:
- Introduction: software-intro
- Install QGroundControl: install-qgroundcontrol
- Computer Set Up: setting-up-your-computer
- - Windows 10 Setup: windows-10-setup
- - Mac Setup: mac-setup
- - Linux Setup: linux-setup
- Connect Joystick: connect-joystick-to-qgroundcontrol
- - Windows: windows
- - Mac: mac
- - Linux: linux
- Joystick Calibration: joystickgamepad-calibration
- Button Setup: button-setup
- Sensor Calibration: sensor-calibration
- Configure Motor Directions: configure-motor-directions
- Voltage and Current Measurement Setup: voltage-and-current-measurement-setup
- SOS Leak Sensor Setup: sos-leak-sensor-setup
- To The First Dive!: to-the-first-dive
- Issue Reporting: issue-reporting

store-links:
- BlueROV: https://www.bluerobotics.com/store/rov/bluerov2/

manual-links:
- BlueROV2 Specifications: /brov2/
- Assembly Manual: /brov2/assembly/
- Operations Manual: /brov2/operation/
---

<img src="/brov2/cad/ROV-scuba-1.png" class="img-responsive img-center" style="max-width:800px" />

# Software Intro

These are instructions for the first time that you set up your computer to work with the BlueROV2. If you have not assembled your BlueROV2, please see our [Assembly Manual](/brov2/assembly/) and assemble your BlueROV2 prior to setting up the software.

# Install QGroundControl

To connect your computer to the BlueROV2, you need to download and install QGroundControl from one of the following links:

- [Windows](https://s3.amazonaws.com/downloads.bluerobotics.com/QGC/QGroundControl-installer.exe)
- [Mac](https://s3.amazonaws.com/downloads.bluerobotics.com/QGC/QGroundControl.dmg)
- [Linux](https://s3.amazonaws.com/downloads.bluerobotics.com/QGC/QGroundControl.AppImage)

# Setting Up Your Computer

If your computer does not have an Ethernet port, you will need a USB to Ethernet adaptor. We recommend using [this one.](https://www.amazon.com/Cable-Matters-Ethernet-Network-Adapter/dp/B00ET4KHJ2)

## Windows 10 Setup

**Network Settings**

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

## Mac Setup

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

## Linux Setup

**Network Settings**

1. Click the Network Icon in the toolbar at the top of the screen, and click "Edit Connections..."

	<img src="/brov2/cad/linuxsetup/LinuxStep1.png" class="img-responsive img-center" style="max-width:800px" />

2. Click "Add"

	<img src="/brov2/cad/linuxsetup/LinuxStep2.png" class="img-responsive img-center" style="max-width:800px" />

3. Select "Ethernet" for the connection type and click "Create..."

	<img src="/brov2/cad/linuxsetup/LinuxStep3.png" class="img-responsive img-center" style="max-width:800px" />

4. From the "Device MAC Address" dropdown, select the ethernet interface you want to use. If you are using the built in ethernet card on your computer, there will be only one choice. If you are using a USB to Ethernet adapter, find out which interface corresponds to the adapter by looking at the options before and after plugging the adapter into the computer.

	<img src="/brov2/cad/linuxsetup/LinuxStep4.png" class="img-responsive img-center" style="max-width:800px" />

5. Click the "IPv4 Settings" tab, and from the "Method" dropdown menu, select "Manual". Click "Add", and enter 192.168.2.1 for the Address, 255.255.255.0 for the Netmask and 0.0.0.0 for the Gateway. Click "Save..." to complete the setup.

	<img src="/brov2/cad/linuxsetup/LinuxStep5.png" class="img-responsive img-center" style="max-width:800px" />


# Connect Joystick to QGroundControl

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

**Note: This driver is unstable for wireless XBox 360 controllers in macOS Sierra.**

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

All required drivers come pre-loaded on Ubuntu 14.04 and 16.04, no setup necessary!

**Logitech GamePad (F710 and F310)**

Logitech controllers should have the switch on the back set to "X"

# Joystick/Gamepad Calibration

Some joysticks require calibration before you can enable them for use with QGroundControl. If your joystick requires calibration, the *Joystick* tab on the *Vehicle Settings* page will be red, and you should follow these steps to calibrate your joystick. If your joystick does not require calibration, the *Joystick* tab will not be red, and you can skip this step!

1. Go to the *Vehicle Settings* page in QGroundControl, then click on the red *Joystick* tab in the sidebar on the left.

2. Ensure the 'TX Mode' selection is set to 3.

3. Click "Calibrate", then click "Next".
 
4. Follow the step-by-step instructions, move the sticks as indicated in the diagram in QGroundControl.

When completed, the *Joystick* tab will no longer be red, and the *Enabled* checkbox on the Joystick page should be checked.

# Button Setup

The default button setup for the BlueROV2 is as shown in the image below:

<img src="/brov2/cad/joystick-defaults.png" class="img-responsive img-center" style="max-width:800px" />

The button functions may be reconfigured in the *Joystick* tab on the *Vehicle Settings* page.

# Sensor Calibration

1. Go to the *Vehicle Settings* page in QGroundControl and select the red _Sensors_ tab in the sidebar on the left.
2. Choose `Roll90` for the *Autopilot Orientation* selection.
3. Click on the _Accelerometers_ and follow the instructions.
4. Click on _Compass_ and follow the instructions.

When completed, the _Sensors_ tab will no longer be red.

# Configure Motor Directions

The motor directions for the BlueROV2 must be tested prior to use. 

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>Be sure to keep all body parts and clothing clear of thrusters while the BlueROV2 is armed.

<i class="fa fa-exclamation-triangle fa-fw fa-2x text-warning"></i>**Do not** run thrusters for longer than 30 seconds in air.

1. Set the flight mode to "Manual".

2. Arm the BlueROV2 by pressing "Start".

3. Move the left-hand joystick forwards and verify that the thrusters are running the correct way. Air should be blowing out of the four vectored thrusters towards the back of the vehicle. If one of the thrusters is blowing air towards the front, go to _Settings_ in QGroundContorl, then go to _Parameters_ and select _MOT_. Select the motor that is blowing air towards the front and switch the motor direction using the dropdown on the right.

	<img src="/brov2/cad/configure-motor-directions-annotated.png" class="img-responsive img-center" style="max-width:800px" />

4. Move the right-hand joystick forwards and verify that the thrusters are running the correct way. Air should be blowing out of the two vertical thrusters towards the bottom of the vehicle. If one of the thrusters is blowing air towards the top, go to _Settings_ in QGroundControl, then go to _Parameters_ and select _MOT_. Select the motor that is blowing air towards the top and switch the motor direction using the dropdown on the right.

# Voltage and Current Measurement Setup 

The default settings for voltage and current measurement are for the [Multistar High Capacity 4s 10,000mAh](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=56844) battery that we recommend. If you select a different battery, you can adjust your voltage and current measurement setup by going to _Settings_ then select _Power_. The only thing that you will need to change is the "Battery capacity", which can changed by simply typing in the size of the battery into the box.

<img src="/brov2/cad/current-monitoring-setup.PNG" class="img-responsive img-center" style="max-width:800px" />

# SOS Leak Sensor Setup

In the Safety tab, select "Pixhawk Aux6" as the leak detector pin, and set the Logic when dry to "Low."

<img src="/sos/cad/sos-software.png" class="img-responsive" style="max-width:800px"  />

# To The First Dive! 

Your computer setup is now complete! Please see our [Operations Manual](/brov2/operation/) to finish getting ready for your first dive!

# Issue Reporting

We're always trying to make our documentation, instructions, software, and user experience better. If you're having an issue with anything, please report it so that we can address it as soon as possible! Here's where to do that depending on what's wrong:

- **ArduSub Issues:** For anything related to the ArduSub software that runs on the Pixhawk and controls the ROV, reports issues on the [ArduSub Github Issues Page](https://github.com/bluerobotics/ardusub/issues). If you're unsure where your issue should be posted, you can report it here.
- **QGroundControl Issues:** For anything related to the QGroundControl software, joystick setup, video streaming, etc., please report an issue on the [QGroundControl Github Issues Page](https://github.com/mavlink/qgroundcontrol/issues).
- **Documentation:** For anything related to the documentation and instructions here, please report an issue on the [Blue Robotics Documentation Github Issues Page](https://github.com/bluerobotics/bluerobotics.github.io/issues).




