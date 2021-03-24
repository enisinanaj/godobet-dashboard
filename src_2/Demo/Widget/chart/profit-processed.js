export default {
    type: 'area',
    height: 50,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#ffba57'],
        fill: {
            type: 'solid',
            opacity: 0.3,
        },
        markers: {
            size: 3,
            opacity: 0.9,
            colors: '#fff',
            strokeColor: '#ffba57',
            strokeWidth: 2,
            hover: {
                size: 7,
            }
        },
        stroke: {
            curve: 'straight',
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
                    formatter: (seriesName) => 'Profit Processed :'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        name: 'series1',
        data: [25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63]
    }]
}