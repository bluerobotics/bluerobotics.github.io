---
layout: default
title: Battery and Power Calculator
permalink: /calc/battery/
order: 0
nav:
- Calculator: calculator
- Learn More: learn-more
---

#Calculator 

#(Beta, please double check results & report bugs!)

This calculator finds the buoyancy of an object based on it's volume. It also uses the object weight or density to find the net buoyancy.

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

<div class="btn-group" data-toggle="buttons">
    <label class="btn btn-primary active">
        <input type="radio" id="freshwater" name="waterType" value="fresh" checked="checked" onchange="runCalcs()" /> Freshwater
    </label> 
    <label class="btn btn-primary">
        <input type="radio" id="saltwater" name="waterType" value="salt" onchange="runCalcs()"  /> Saltwater
    </label> 
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
	<div class="col-sm-6">
		<table class="table table-hover table-condensed">
			<tr>
				<th>Buoyancy</th>
			</tr>
			<tbody id="buoyancyTableContent">
			</tbody>
		</table>
	</div>
</div>

<div id="chartEndurance" style="width: 100%;"></div>		

<div id="chartT100" style="width: 100%;"></div>		

<div id="chartT200" style="width: 100%;"></div>				

</div>

#Example Batteries

<table class="table table-hover table-condensed">
	<tr>
		<th>Battery</th>
		<th>Voltage</th>
		<th>Capacity</th>
	</tr>
	<tbody id="batteryTableContent">
	</tbody>
</table>

#Learn More

This calculator uses the [js-quantities library](https://github.com/gentooboontoo/js-quantities) by gentooboontoo for unit conversions.

<script type="text/javascript" src="https://cdn.rawgit.com/gentooboontoo/js-quantities/master/src/quantities.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/2.0.1/math.min.js"></script>

<script src="https://www.google.com/jsapi"></script>

<script type="text/javascript" src="/calc/battery.js"></script>

