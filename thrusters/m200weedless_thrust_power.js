var thrust_16v = [-2.81,-2.79,-2.64,-2.42,-2.21,-2.04,-1.83,-1.57,-1.42,-1.2,-0.98,-0.82,-0.6,-0.41,-0.24,-0.09,0,0.21,0.5,0.82,1.17,1.58,1.93,2.37,2.76,3.23,3.57,3.99,4.36,4.84,5.22,5.45,5.63]
var power_16v = [441.14,418.6,379.96,326.83,272.09,233.45,189.98,159.39,122.36,94.99,70.84,51.52,30.59,17.71,8.05,3.22,0,4.83,11.27,20.93,33.81,56.35,74.06,101.43,128.8,167.44,198.03,241.5,280.14,334.88,384.79,423.43,447.58]

var thrust_power_16v = thrust_16v.map((x, i) => {
  return {
    x: x,
    y: power_16v[i]
  };
});

var ctx = document.getElementById("m200_thrust_power");

var m200_thrust_power = new Chart(ctx, {
     type: 'scatter',
    data: {
        datasets: [{
            data: thrust_power_16v,
            showLine:true,
            label: "16 V Thrust and Power                    ",
            borderColor: "#3ecd43",
            fill: false,
        }]
    },
    options: {
      tooltips: {
            mode: 'single',
            intersect: true,
           // position: 'average',
            axis: 'x'
        },
legend: {
            display: true,
            position: 'bottom',
  
        },
        scales: {
                yAxes: [{
        id: 'Efficiency',
        type: 'linear',
        position: 'left',
        scaleLabel: {
        display: true,
        labelString: 'Power (W)',
        fontSize: 20,
      },
        ticks: {
//                max: 40,
//                min: 0,
                stepSize: 50,
        }
      }, 
],
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                ticks: {
                          maxTicksLimit: 100,
                          stepsize: 0.5
        },
        scaleLabel: {
        display: true,
        labelString: 'Reverse                    Thrust (Kg f)                    Forward',
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