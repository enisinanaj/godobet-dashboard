export default {
    type: 'line',
    height: 30,
    options: {
        chart: {
            sparkline: {
                enabled: true
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 2,
        },
        yaxis: {
            min: -2,
            max: 5
        },
        tooltip: {
            fixed: {
                enabled: false
            },
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: (seriesName) => ''
                }
            },
            marker: {
                show: false
            }
        },
        colors: ['#FF9800']
    },
    series: [{
        data: [3, 0, 1, 2, 1, 1, 2]
    }]
}