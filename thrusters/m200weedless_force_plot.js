// Our labels along the x-axis
var pwm_value = [1100,1110,1136,1162,1188,1214,1240,1266,1292,1318,1344,1370,1396,1422,1448,1474,1500,1526,1552,1578,1604,1630,1656,1682,1708,1734,1760,1786,1812,1838,1864,1890,1900]

var thrust_16v = [2.81,2.79,2.64,2.42,2.21,2.04,1.83,1.57,1.42,1.20,0.98,0.82,0.60,0.41,0.24,0.09,0.00,0.21,0.50,0.82,1.17,1.58,1.93,2.37,2.76,3.23,3.57,3.99,4.36,4.84,5.22,5.45,5.63]


var ctx = document.getElementById("m200_thrust");

var m200_thrust = new Chart(ctx, {
  type: 'line',
  data: {
    labels: pwm_value,
    datasets: [
      { 
		yAxisID: 'Thrust',
        data: thrust_16v,
		label: "16 V Thrust",
		borderColor: "#3ecd43",
		fill: false,
      },
	    ]
	  },
  options: {
  	   tooltips: {
            mode: 'index',
            intersect: true,
            axis: 'x'
        },
legend: {
            display: true,
            position: 'bottom',
  
        },
    scales: {
      yAxes: [{
        id: 'Thrust',
        type: 'linear',
        position: 'left',
        scaleLabel: {
        display: true,
        labelString: 'Thrust (Kg f)',
        fontSize: 20,
      },
        ticks: {
//                max: 12,
//                min: 0,
                  stepSize: 1
        }
      }, 
],
    
xAxes: [{
	 ticks: {
          maxTicksLimit: 50,
        },
      	scaleLabel: {
        display: true,
        labelString: 'Reverse                    ESC PWM Input Value (microseconds)                    Forward',
        fontSize: 20,
      }
      }]
    },
        elements: { 
        point: { 
        radius: 0,
        hitRadius: 10, 
        hoverRadius: 5,
      } 
    } 
  }
	});