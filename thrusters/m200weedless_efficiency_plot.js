// Our labels along the x-axis
var pwm_value = [1100,1110,1136,1162,1188,1214,1240,1266,1292,1318,1344,1370,1396,1422,1448,1474,1500,1526,1552,1578,1604,1630,1656,1682,1708,1734,1760,1786,1812,1838,1864,1890,1900]

var efficiency_16v = [6.37,6.67,6.96,7.43,8.13,8.75,9.65,9.85,11.58,12.57,13.83,15.76,19.45,23.19,29.33,30.06,0.00,47.35,44.19,39.40,34.72,28.07,26.07,23.37,21.44,19.30,18.00,16.48,15.60,14.46,13.57,12.90,12.58]


var ctx = document.getElementById("t500_efficiency");

var m200_efficiency = new Chart(ctx, {
  type: 'line',
  data: {
    labels: pwm_value,
    datasets: [
        { 
		yAxisID: 'Efficiency',
        data: efficiency_16v,
		label: "16 V Efficiency",
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
        id: 'Efficiency',
        type: 'logarithmic',
        position: 'left',
        scaleLabel: {
        display: true,
        labelString: 'Efficiency (g/w)',
        fontSize: 20,
      },
        ticks: {
//                max: 40,
//                min: 0,
//                stepSize: 250
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