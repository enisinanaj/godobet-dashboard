export default {
    type: 'bar',
    height: 170,
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
        colors: ['#4680ff'],
        plotOptions: {
            bar: {
                color: '#4680ff',
                columnWidth: '60%',
            }
        },
        fill: {
            type: 'solid',
        },
        xaxis: {
            crosshairs: {
                width: 1
            },
            labels: {
                show: false,
            },
        },
        grid: {
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
                    formatter: (seriesName) => 'Active Users :'
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12]
    }]
}