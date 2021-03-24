export default {
    height: 250,
    type: 'line',
    options: {
        chart: {
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: ['1/11/2019', '2/11/2019', '3/11/2019', '4/11/2019', '5/11/2019', '6/11/2019', '7/11/2019'],
        },
        colors: ['#4680ff', '#9ccc65', "#ffba57", "#ff5252"],
        fill: {
            type: 'solid',
        },
        markers: {
            size: 5,
            colors: ['#4680ff', '#9ccc65', "#ffba57", "#ff5252"],
            opacity: 0.9,
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        grid: {
            borderColor: '#e2e5e885',
        },
        yaxis: {
            min: 10,
            max: 70,
        }
    },
    series: [{
        name: 'Trial',
        data: [20, 50, 30, 60, 30, 50, 40]
    }, {
        name: 'Bronze',
        data: [40, 20, 50, 15, 40, 65, 20]
    }, {
        name: 'Gold',
        data: [64, 40, 20, 30, 20, 40, 65]
    }, {
        name: 'Platinum',
        data: [30, 25, 40, 15, 20, 15, 30]
    }]
}