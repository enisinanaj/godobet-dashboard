export default {
    type: 'bar',
    height: 400,
    options: {
        chart: {
            zoom: {
                enabled: false
            },
        },
        dataLabels: {
            enabled: true
        },
        colors: ['#4680ff'],
        plotOptions: {
            bar: {
                colors: {
                    ranges: [{
                        from: 0,
                        to: 15,
                        color: '#ff5252'
                    }, {
                        from: 16,
                        to: 30,
                        color: '#ffa21d'
                    }, {
                        from: 31,
                        to: 50,
                        color: '#4680ff'
                    }, {
                        from: 51,
                        to: 100,
                        color: '#0e9e4a'
                    }]
                },
                columnWidth: '80%',
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
                    formatter: (seriesName) => 'Click '
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41,
            89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
    }]
}