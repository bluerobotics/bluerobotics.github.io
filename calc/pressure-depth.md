---
layout: default
title: Pressure/Depth Calculator
permalink: /calc/pressure-depth/
order: 0
nav:
- Calculator: calculator
- Learn More: learn-more
---

# Calculator

This calculator determines the water depth to reach or given pressure or the pressure at a given depth. You can enter the depth or pressure input with most common units and it will be converted automatically. This calculator *does not* add air pressure at the surface - the results are relative to the surface pressure.

<div class="well">
<form>
<div class="form-group has-feedback" id="depthInputGroup">
	<label for="depthInput">Input Pressure or Depth</label>
	<input type="text" class="form-control" id="depthInput" placeholder="100 m" onkeyup="checkValidDepth()" aria-describedby="inputSuccess2Status" value="100 m"></input>
	<span class="glyphicon form-control-feedback" id="depthInputIcon" aria-hidden="true"></span>
  <span id="inputSuccess2Status" class="sr-only">(success)</span>
  <span id="helpBlock" class="help-block">Enter depth or pressure followed by unit. (e.g. "110 psi" or "450 ft")</span>
</div>
<div class="btn-group" data-toggle="buttons">
    <label class="btn btn-primary active">
        <input type="radio" id="freshwater" name="waterType" value="fresh" checked="checked" onchange="checkValidDepth()" /> Freshwater
    </label> 
    <label class="btn btn-primary">
        <input type="radio" id="saltwater" name="waterType" value="salt" onchange="checkValidDepth()"  /> Saltwater
    </label> 
</div>
</form>

<br />

<div class="row">
	<div class="col-sm-6">
		<table class="table table-hover table-condensed">
			<tr>
				<th>Depth</th>
			</tr>
			<tbody id="depthTableContent">
			</tbody>
		</table>
	</div>
	<div class="col-sm-6">
		<table class="table table-hover table-condensed">
			<tr>
				<th>Pressure</th>
			</tr>
			<tbody id="pressureTableContent">
			</tbody>
		</table>
	</div>
</div>

</div>

# Learn More

[See here](http://hyperphysics.phy-astr.gsu.edu/hbase/pflu.html) for an explanation of static fluid pressure.

For watertight enclosure design, please check out [Under Pressure](/resources/#under-pressure-software).

This calculator uses the [js-quantities library](https://github.com/gentooboontoo/js-quantities) by gentooboontoo for unit conversions.

<script type="text/javascript" src="https://cdn.rawgit.com/gentooboontoo/js-quantities/master/src/quantities.js"></script>

<script type="text/javascript" src="/calc/pressure-depth.js"></script>

