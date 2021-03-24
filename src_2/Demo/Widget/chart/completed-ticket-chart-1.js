export default {
    type: 'line',
    height: 80,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 3,
            curve: 'smooth',
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
                    formatter: (seriesName) =>  ''
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        data: [45, 66, 41, 89, 25, 44, 9, 54]
    }]
}