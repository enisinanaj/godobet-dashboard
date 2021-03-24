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
        colors: ['#FFF'],
        fill: {
            type: 'solid',
            opacity: 0.4,
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        yaxis: {
            min: 0,
            max: 30,
        },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false
            },
            x: {
                show: false,
            },
            y: {
                title: {
                    formatter: (seriesName) => 'Total Visitors'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        name: 'series1',
        data: [18, 10, 20, 10, 12, 25, 20]
    }]
}