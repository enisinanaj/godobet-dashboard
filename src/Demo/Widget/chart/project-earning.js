export default {
    type: 'bar',
    height: 200,
    options: {
        chart: {
            zoom: {
                enabled: false
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#fff'],
        plotOptions: {
            bar: {
                color: '#fff',
                columnWidth: '60%',
            }
        },
        fill: {
            type: 'solid',
            opacity: 1,
        },
        xaxis: {
            crosshairs: {
                width: 1
            },
            labels: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                style: {
                    color: '#fff',
                }
            },
        },
        grid: {
            borderColor: '#ffffff85',
            padding: {
                bottom: 0,
                left: 10,
            }
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
                    formatter: (seriesName) => 'Total Earnings'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36]
    }]
}