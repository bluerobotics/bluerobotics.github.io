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
- Battery Calculator: battery-calculator
- - Learn More: learn-more

manual-links:
- T100 Thruster: /thrusters/
- T200 Thruster: /thrusters/t200
- Basic ESC: /besc/
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

The capacity of a LiPo, or any battery, is in milliamp hours (mAh) or amp hours (Ah) and determines how much energy a battery stores. For example, a 5Ah battery would approximately be able to run a 5 amp device for 1 hour, or a 1 amp device for 5 hours.

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

# Battery Calculator 

## (Beta, please double check results & report bugs!)

This calculator finds battery energy based on voltage and capacity ratings. It also estimates how long a battery will run a thruster at a specific throttle level.

<div class="well">
<form>
<div class="form-group has-feedback" id="voltageInputGroup">
	<label for="voltageInput">Nominal Voltage of Battery</label>
	<input type="text" class="form-control" id="voltageInput" onkeyup="runCalcs()" aria-describedby="inputSuccess2Status" value="11.1 V" />
	<span class="glyphicon form-control-feedback" id="voltageInputIcon" aria-hidden="true"></span>
  <span id="inputSuccess2Status" class="sr-only">(success)</span>
  <span id="helpBlock" class="help-block">Enter voltage followed by unit. (e.g. "11.1 V")</span>
</div>

<div class="form-group has-feedback" id="capacityInputGroup">
	<label for="capacityInput">Capacity of Battery</label>
	<input type="text" class="form-control" id="capacityInput" onkeyup="runCalcs()" aria-describedby="inputSuccess2Status" value="5000 mAh" />
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

<script type="text/javascript" src="/calc/quantities.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/2.0.1/math.min.js"></script>

<script src="https://www.google.com/jsapi"></script>

<script type="text/javascript" src="/calc/battery.js"></script>
