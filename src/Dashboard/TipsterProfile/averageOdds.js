export default {
    type: 'bar',
    height: 160,
    options: {
        chart: {
            sparkline: {
                enabled: true
            }
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#56be7f'],
        plotOptions: {
            bar: {
                columnWidth: '60%'
            }
        },
        xaxis: {
            crosshairs: {
                width: 1
            },
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
                    formatter: (seriesName) => 'Amount Spent :'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        data: [3.5]
    }]
}