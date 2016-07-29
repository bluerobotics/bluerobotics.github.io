---
layout: default
title: Buoyancy Calculator
permalink: /calc/buoyancy/
order: 0
nav:
- Calculator: calculator
- Densities of Common Materials: densities-of-common-materials
- Learn More: learn-more
---

# Calculator 

# (Beta, please double check results & report bugs!)

This calculator finds the buoyancy of an object based on it's displacement. It also uses the object weight or density to find the net buoyancy.

<div class="well">
<form>
<div class="form-group has-feedback" id="volumeInputGroup">
	<label for="volumeInput">Displacement of Object</label>
	<input type="text" class="form-control" id="volumeInput" onkeyup="runCalcs()" aria-describedby="inputSuccess2Status" value="50 in^3" />
	<span class="glyphicon form-control-feedback" id="volumeInputIcon" aria-hidden="true"></span>
  <span id="inputSuccess2Status" class="sr-only">(success)</span>
  <span id="helpBlock" class="help-block">Enter volume followed by unit. (e.g. "0.1 m^3" or "20 in^3")</span>
</div>

<div class="form-group has-feedback" id="weightInputGroup">
	<label for="weightInput">Object Weight, Mass, or Density</label>
	<input type="text" class="form-control" id="weightInput" onkeyup="runCalcs()" aria-describedby="inputSuccess2Status" value="12 lb/ft^3" />
	<span class="glyphicon form-control-feedback" id="weightInputIcon" aria-hidden="true"></span>
  <span id="inputSuccess2Status" class="sr-only">(success)</span>
  <span id="helpBlock" class="help-block">Enter weight or density followed by unit. (e.g. "2.1 kg" or "12 lb/ft^3")</span>
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
				<th>Net Buoyancy</th>
			</tr>
			<tbody id="netBuoyancyTableContent">
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

<div class="row">
	<div class="col-sm-6">
		<table class="table table-hover table-condensed">
			<tr>
				<th>Weight</th>
			</tr>
			<tbody id="weightTableContent">
			</tbody>
		</table>
	</div>
	<div class="col-sm-6">
		<table class="table table-hover table-condensed">
			<tr>
				<th>Average Density</th>
			</tr>
			<tbody id="densityTableContent">
			</tbody>
		</table>
	</div>
</div>

</div>

# Densities of Common Materials

<table class="table table-hover table-condensed">
	<tr>
		<th>Material</th>
		<th colspan="2">Density (click to use above)</th>
	</tr>
	<tbody id="materialTableContent">
	</tbody>
</table>

# Learn More

This calculator uses the [js-quantities library](https://github.com/gentooboontoo/js-quantities) by gentooboontoo for unit conversions.

<script type="text/javascript" src="{{site.baseurl}}/calc/quantities.js"></script>

<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mathjs/2.0.1/math.min.js"></script>

<script type="text/javascript" src="/calc/buoyancy.js"></script>

