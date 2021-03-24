export default {
    height: 250,
    type: 'area',
    options: {
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        colors: ["#ff5252", "#4680ff"],
        fill: {
            type: 'solid',
            opacity: 0.2,
        },
        markers: {
            size: 3,
            opacity: 0.9,
            colors: "#fff",
            strokeColor: ["#ff5252", "#4680ff"],
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },

        xaxis: {
            type: 'datetime',
            categories: ["2019-01-19", "2019-02-19", "2019-03-19", "2019-04-19", "2019-05-19", "2019-06-19", "2019-07-19"],
        },
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm'
            },
        }
    },
    series: [{
        name: 'Expense',
        data: [40, 75, 20, 45, 30, 50, 30]
    }, {
        name: 'Income',
        data: [90, 40, 60, 20, 10, 0, 0]
    }]
}