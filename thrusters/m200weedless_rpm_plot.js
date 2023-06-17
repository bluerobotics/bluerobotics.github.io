// Our labels along the x-axis
var pwm_value = [1100,1110,1136,1162,1188,1214,1240,1266,1292,1318,1344,1370,1396,1422,1448,1474,1500,1526,1552,1578,1604,1630,1656,1682,1708,1734,1760,1786,1812,1838,1864,1890,1900]

var rpm_16v = [2824,2767,2723,2654,2542,2454,2320,2224,2080,1933,1761,1591,1376,1149,888,580,0,537,824,1060,1270,1477,1633,1802,1940,2089,2207,2342,2434,2548,2643,2715,2751]


var ctx = document.getElementById("m200_rpm");

var m200_thrust = new Chart(ctx, {
  type: 'line',
  data: {
    labels: pwm_value,
    datasets: [
        { 
		yAxisID: 'RPM',
        data: rpm_16v,
		label: "16 V RPM",
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
        id: 'RPM',
        type: 'linear',
        position: 'left',
        scaleLabel: {
        display: true,
        labelString: 'RPM',
        fontSize: 20,
      },
        ticks: {
//                max: 12,
//                min: 0,
                stepSize: 250
        }
      }, 
],
    
xAxes: [{
	 ticks: {
          maxTicksLimit: 50,
        },
      	scaleLabel: {
        display: true,
        labelString: 'Reverse                    ESC PWM input Value (microseconds)                    Forward',
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