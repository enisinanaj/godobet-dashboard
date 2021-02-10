export default {
    type: 'area',
    height: 100,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#9ccc65'],
        fill: {
            type: 'solid',
            opacity: 0.3,
        },
        markers: {
            size: 0,
            opacity: 0.9,
            colors: '#fff',
            strokeColor: '#9ccc65',
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        stroke: {
            width: 3,
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
                    formatter: (seriesName) => 'Sale Income :'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        name: 'series1',
        data: [9, 54, 25, 66, 41, 66, 41, 89, 25, 66, 41, 89, 25, 44, 12, 36, ]
    }]
}