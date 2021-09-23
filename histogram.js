makeChart = function() {

    const binEdges = [
	0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0, 3.5, 4.0, 4.5, 5.0,
	5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 8.5, 9.0, 9.5, 10
    ];
    
    const binValues = [
	0, 1, 2, 7, 14, 21, 30, 29, 42, 33,
	25, 13, 7, 5, 2, 1, 0, 0, 0, 0
    ];

    if ( binEdges.length !== binValues.length+1 ) {
	alert('There is a problem with your histogram bins and values');
    }
    
    const data = {
	labels: binEdges,
	datasets: [{
	    label: "M",
	    backgroundColor: 'rgba(0, 0, 255, 0.5)',
	    barPercentage: 1,
	    categoryPercentage: 1,
	    data: binValues,
	    xAxisID: "xM"
	}]
    };

    const options = {
	responsive: true,
	maintainAspectRatio: true,
	
	scales: {
	    
	    xM: {
		display: false,
		max: binValues.length - 1,
		position: 'bottom'
	    },
   
	    x: {
		display: true,
		offset: false,
		grid: {
      		    offset: false
		}
	    },

	    y: {
		ticks: {
		    beginAtZero: true
		}
	    }

	}
    };

    const ctx = document.getElementById("histogram").getContext("2d");

    const chart = new Chart(ctx, {
	type: 'bar',
	data: data,
	options: options
    });

};

window.addEventListener('load', (event) => {

    makeChart();

});
