var pressureUnits = ["kPa","bar","atm","psi"];
var depthUnits = ["meters","feet","fathoms"];

checkValidDepth();

function checkValidDepth() {
	var depthInput = Qty.parse(document.getElementById("depthInput").value);

	if ( depthInput == null || !(depthInput.kind() == 'length' || depthInput.kind() == 'pressure' ) ) {
		document.getElementById("depthInputGroup").classList.remove("has-success");
		document.getElementById("depthInputGroup").classList.add("has-error");
		document.getElementById("depthInputIcon").classList.remove("glyphicon-ok");
		document.getElementById("depthInputIcon").classList.add("glyphicon-remove");

		clearTable();
	} else {
		document.getElementById("depthInputGroup").classList.remove("has-error");
		document.getElementById("depthInputGroup").classList.add("has-success");
		document.getElementById("depthInputIcon").classList.remove("glyphicon-remove");
		document.getElementById("depthInputIcon").classList.add("glyphicon-ok");

		calculate();
	}
}

function calculate() {
var input = Qty.parse(document.getElementById("depthInput").value);

var freshwaterDensity = 999.97;
var saltwaterDensity = 1024;
var density;
var gravity = 9.81;
var floatInput;
var pressure;
var depth;

if ( document.getElementById("freshwater").checked ) {
	density = freshwaterDensity;
} else {
	density = saltwaterDensity;
}

if ( input.kind() == 'length' ) {
	floatInput = Number(input.toString('m').replace(/[^0-9.,]+/g, ''));
	pressure = new Qty(floatInput*density*gravity+" Pa");
	depth = new Qty(input.toString('m'));
} else if ( input.kind() == 'pressure' ) {
	floatInput = Number(input.toString('Pa').replace(/[^0-9.,]+/g, ''));
	pressure = new Qty(input.toString());
	depth = new Qty(floatInput/density/gravity+" m");
}

var pressureTableHTML = '';
var depthTableHTML = '';

for ( i = 0 ; i < depthUnits.length ; i++ ) {
	depthTableHTML += '<tr><td>'+depth.to(depthUnits[i]).toPrec(0.01).toString()+'</td></tr>';
}

for ( i = 0 ; i < pressureUnits.length ; i++ ) {
	pressureTableHTML += '<tr><td>'+pressure.to(pressureUnits[i]).toPrec(0.01).toString()+'</td></tr>';
}

document.getElementById("depthTableContent").innerHTML = depthTableHTML;
document.getElementById("pressureTableContent").innerHTML = pressureTableHTML;

}

function clearTable() {
	var pressureTableHTML = '';
	var depthTableHTML = '';

	for ( i = 0 ; i < depthUnits.length ; i++ ) {
		depthTableHTML += '<tr><td>- '+depthUnits[i]+'</td></tr>';
	}

	for ( i = 0 ; i < pressureUnits.length ; i++ ) {
		pressureTableHTML += '<tr><td>- '+pressureUnits[i]+'</td></tr>';
	}

	document.getElementById("depthTableContent").innerHTML = depthTableHTML;
	document.getElementById("pressureTableContent").innerHTML = pressureTableHTML;
}