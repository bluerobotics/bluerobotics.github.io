---
layout: default
title: Battery Selection
permalink: /battery/
order: 0
nav:
- Introduction: introduction
- LiPo Batteries: lipo-batteries
- - Voltage: voltage
- - Capacity: capacity
- - Discharge Rate: discharge-rate
- - LiPo Safety: lipo-safety
- - Where to Buy: where-to-buy
- Batteries for the Blue ROV: batteries-for-the-blue-rov
- - Battery Clearance: battery-clearance
- - Example Batteries: example-batteries
- Battery Calculator: battery-calculator
- - Learn More: learn-more

manual-links:
- T100 Thruster: /thrusters/
- T200 Thruster: /thrusters/t200
- Basic ESC: /besc/
- Blue ESC: /bluesc
---

<script type="text/javascript" src="http://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML"></script>

# Introduction

<img src="/assets/images/documentation/battery-1.png" class="img-responsive" style="max-width:600px" />

The T100 thruster can be powered off of any 6–16V power source, and the T200 off of 6–20V. This can be an AC power supply, lead acid (Pb) battery such as from a car,  nickel metal hydride (NiMH) battery, or a lithium polymer (LiPo) battery. LiPo batteries are particularly light and energy dense while offering high performance with low voltage drop under load, making them the recommended choice for on board ROV power.

# LiPo Batteries

<img src="/assets/images/documentation/battery-3.png" class="img-responsive" style="max-width:600px" />

## Voltage

LiPo battery packs come in different voltages, in which each cell is nominally 3.7V.  However, when fully charged a LiPo battery cell rests at 4.2V, and this must be taken into account when determining if your electronics will be able to handle your battery. Furthermore, LiPo batteries should not be discharged below an absolute bare minimum of 3.0V per cell, or permanent damage may occur. Recharging a battery well before this point is reached will ensure good performance and long life of the battery. 

| Battery    | Nominal Voltage |  Maximum Voltage |	Recommended Minimum Safe Voltage  (3.4V per cell) |
|------------|-----------------|------------------|---------------------------------------|
| **3s**         |  11.1V           | 12.6V             | 10.2V|
| **4s**         |    14.8V         |   16.8V           | 13.6V|
| **5s**		 | 18.5V            |    21.0V          | 17.0V|

For maximum efficiency, the T100 should be run at 12V, and the T200 at 16V.  A 11.1V 3s LiPo is recommended for the T100, and a 14.8V 4s LiPo for the T200, though the T100 can be safely run with a 4s pack and the T200 with a 5s pack. If you choose to do this, you will see slightly higher performance, but reduced efficiency than when running at the recommended voltages.

## Capacity

The capacity of a LiPo, or any, battery is in milliamp hours (mAh) or amp hours (Ah) and determines how much energy a battery stores. For example, a 5Ah battery would approximately be able to run a 5 amp device for 1 hour, or a 1 amp device for 5 hours.

## Discharge Rate

The discharge rate is a rating of how much current a battery can safely provide. This is a multiplier of battery capacity, for example a 20C 5Ah battery can safely drive 20 x 5 = 100 amps. Similarly, a 50C 7Ah battery can provide up to 50 x 7 = 350 amps. The burst C rating describes safe maximum current bursts, usually a duration of about 10 seconds. Higher C rated LiPos also have lower voltage drop under load, giving a boost in performance and more punch. 

Running more thrusters off of a single battery will put a greater load on it, so you must use a battery rated high enough such that it will safely be able to power your entire ROV.

| Maximum Current Draw Each   | 12V  |  16V	|20V |
|------------|----------------|-------------------|------|
| **T100**   |  14.5A         | 21.5A | N/A
| **T200**   |    18A         |   25A | 32A+

## LiPo Safety:

LiPo batteries have a high energy density and must be treated with the proper precautions. More information about LiPo batteries including their correct use and care can be found on the following webpages.

[iCharger (information)](http://www.icharger.co.nz/articles/ArticleId/6/Introduction-To-Lipo-Batteries.aspx)

[iCharger (Safety)](http://www.icharger.co.nz/articles/ArticleId/3/Lipo-Lithium-Battery-Safety-Guide.aspx)

[Horizon Hobby](http://www.horizonhobby.com/pdf/EFL-LiPoSafetyWarnings.pdf)

[Team Orion LiPo Battery Production Video](https://www.youtube.com/watch?v=6vBH6zlrXuM)

## Where to Buy

LiPo batteries can be bought at hobby shops and online through numerous vendors, including [HobbyKing](http://www.hobbyking.com/hobbyking/store/index.asp). We use HobbyKing's Multistar, Turnigy, and Zippy brands of LiPo batteries for our testing.

# Batteries for the Blue ROV

## Battery Clearance

The Blue ROV electronics tray will accommodate batteries up to 230mm (9in) long. However, if basic ESCs are being used, the ESCs mounted to the bottom of the tray will reduce clreances. Past 125mm (4.9in), 5mm (0.2in) of the height availble is taken up by the ESC wires. Beyond 155mm (6.1in), 10mm (0.4in) is taken up by the ESC itself.

<img src="/assets/images/documentation/batterytraymockup.PNG" class="img-responsive img-center" style="max-width:600px" />

Due to the round shape of the enclosure, the maximum width of a battery is determined by its height. There is 47.2mm (1.858in) of clearance between the bottom of the electronics tray and the inside of the tube. However, up to an additional 2.5mm (0.098in) of clearance can be found if a battery is squeezed in such that the top shelf of the elctronics tray contacts the tube.

You can use the following formula to determine whether a battery of a given height will fit its width in the enclosure:

$$
\begin{align*}
width=2\times\sqrt{d^2-(h+x)^2}
\end{align*}
$$

Here "d" is the inner diameter of the enclosure, "h" the height of the battery, and "x" the distance the lower part of the electronics tray is from the center of the tube. If "width" is greater than or equal to the width of the battery whose height you input, then the battery will fit, at least in height and width.

$$
\begin{align*}
width=2\times\sqrt{50.8^2-(h+3.6)^2}
\end{align*}
$$

For the Blue ROV, "d" is 50.8mm, and "x" is 3.6mm. If your battery is long enough to come up to the ESC wires or another obstruction on the bottom of the elctronics tray, add its height to "x". Conversly, if you wish to allow the battery tray to be moved up by the battery, you can subtract up to 2.5mm from "x". 

Hobbyking's [battery finder tool](http://www.hobbyking.com/hobbyking/store/multifinder.asp?t=lipo) is very useful in finding batteries that will fit the Blue ROV. Note that the "width" and "height" dimensions in the battery finder tool are the reverse from the varaibles in the above fit fomula.

## Example Batteries

These batteries will all fit the Blue ROV with basic ESCs, many of them have been used for our testing at Blue Robotics without any issues.

| Battery | Voltage | Capacity | Discharge Rate | Max Constant Current Draw | Cost**|
|---------|---------|-------------|-------------|---------------------------|-----|
|[Zippy](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=63430)  |11.1V (3s)| 6200mAh    | 40C         |248A| $42
|[Turnigy](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=11939)|11.1V (3s)| 6000mAh    | 25C         |150A| $47
|[Turnigy](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=9184)|11.1V (3s)| 5000mAh    | 20C         |100A| $22
|[Turnigy](http://www.hobbyking.com/hobbyking/store/__9177__Turnigy_5000mAh_4S_20C_Lipo_Pack.html)|14.8V (4s)| 5000mAh    | 20C         |100A| $28
|[Zippy](http://hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=58781)  |14.8V (4s)| 5000mAh    | 30C         |150A| $39
|[Multistar](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=66484)|14.8V (4s)| 6600mAh  | 10C         |66A| $43
|[Multistar](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=66480)*|14.8V (4s)| 10000mAh | 10C         |100A| $59
|[Zippy](http://www.hobbyking.com/hobbyking/store/uh_viewItem.asp?idProduct=9959)  |18.5V (5s)| 4000mAh    | 40C         |160A| $36

*Fits by squeezing electronics tray up, maximum sized battery confirmed to (barely) fit the Blue ROV with basic ESCs.
**Approximate, as of Novemember 2015.

# Battery Calculator 

## (Beta, please double check results & report bugs!)

This calculator finds battery energy based on voltage and capacity ratings. It also estimates how long a battery will run a thruster at a specific throttle level.

<div class="well">
<form>
<div class="form-group has-feedback" id="voltageInputGroup">
	<label for="voltageInput">Nominal Voltage of Battery</label>
	<input type="text" class="form-control" id="voltageInput" onkeyup="runCalcs()" aria-describedby="inputSuccess2Status" value="11.1 V"></input>
	<span class="glyphicon form-control-feedback" id="voltageInputIcon" aria-hidden="true"></span>
  <span id="inputSuccess2Status" class="sr-only">(success)</span>
  <span id="helpBlock" class="help-block">Enter voltage followed by unit. (e.g. "11.1 V")</span>
</div>

<div class="form-group has-feedback" id="capacityInputGroup">
	<label for="capacityInput">Capacity of Battery</label>
	<input type="text" class="form-control" id="capacityInput" onkeyup="runCalcs()" aria-describedby="inputSuccess2Status" value="5000 mAh"></input>
	<span class="glyphicon form-control-feedback" id="capacityInputIcon" aria-hidden="true"></span>
  <span id="inputSuccess2Status" class="sr-only">(success)</span>
  <span id="helpBlock" class="help-block">Enter capacity followed by unit. (e.g. "5000 mAh" or "10 Ah")</span>
</div>



</form>

<br />

<div class="row">
	<div class="col-sm-6">
		<table class="table table-hover table-condensed">
			<tr>
				<th>Battery Energy</th>
			</tr>
			<tbody id="energyTableContent">
			</tbody>
		</table>
	</div>
</div>

<div id="chartEndurance" style="width: 100%;"></div>		

<div id="chartT100" style="width: 100%;"></div>		

<div id="chartT200" style="width: 100%;"></div>				

</div>

## Learn More

This calculator uses the [js-quantities library](https://github.com/gentooboontoo/js-quantities) by gentooboontoo for unit conversions.

<script type="text/javascript" src="https://cdn.rawgit.com/gentooboontoo/js-quantities/master/src/quantities.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/2.0.1/math.min.js"></script>

<script src="https://www.google.com/jsapi"></script>

<script type="text/javascript" src="/calc/battery.js"></script>
