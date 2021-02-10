export default {
    type: 'bar',
    height: 310,
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
        colors: ["#fff"],
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
                    formatter: function(seriesName) {
                        return 'Total absent'
                    }
                }
            },
            marker: {
                show: false
            }
        }
    },
    series: [{
        data: [5, 6, 1, 9, 3, 5, 4, 2, 6, 9, 4, 5]
    }]
}