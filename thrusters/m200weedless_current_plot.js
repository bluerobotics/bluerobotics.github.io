// Our labels along the x-axis
var pwm_value = [1100,1110,1136,1162,1188,1214,1240,1266,1292,1318,1344,1370,1396,1422,1448,1474,1500,1526,1552,1578,1604,1630,1656,1682,1708,1734,1760,1786,1812,1838,1864,1890,1900]

var current_draw_16v = [27.4,26.0,23.6,20.3,16.9,14.5,11.8,9.9,7.6,5.9,4.4,3.2,1.9,1.1,0.5,0.2,0.0,0.3,0.7,1.3,2.1,3.5,4.6,6.3,8.0,10.4,12.3,15.0,17.4,20.8,23.9,26.3,27.8]

var ctx = document.getElementById("m200_current_draw");

var m200_current_draw = new Chart(ctx, {
  type: 'line',
  data: {
    labels: pwm_value,
    datasets: [
        { 
		yAxisID: 'Current Draw',
        data: current_draw_16v,
		label: "16 V Current",
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
        id: 'Current Draw',
        type: 'linear',
        position: 'left',
        scaleLabel: {
        display: true,
        labelString: 'Current Draw (A)',
        fontSize: 20,
      },
        ticks: {
//                max: 12,
//                min: 0,
//                stepSize: 2
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