export default {
    height: 350,
    type: 'heatmap',
    options: {
        stroke: {
            width: 0
        },
        plotOptions: {
            heatmap: {
                radius: 30,
                enableShades: false,
                colorScale: {
                    ranges: [{
                        from: 0,
                        to: 50,
                        color: '#ffa21d'
                    },
                        {
                            from: 51,
                            to: 100,
                            color: '#ff5252'
                        },
                    ],
                },

            }
        },
        dataLabels: {
            enabled: true,
            style: {
                colors: ['#fff']
            }
        },
        colors: ['#4680ff', '#00acc1', '#0e9e4a', '#ffa21d', '#ff5252'],
        xaxis: {
            type: 'category',
        },
        title: {
            text: 'Rounded (Range without Shades)'
        },
    },
    series: [
        {
            name: 'Metric1',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric2',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric3',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric4',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric5',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric6',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric7',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        }
    ]
}

function generateDatasehrat(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        series.push({
            x: (i + 1).toString(),
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
        i++;
    }
    return series;
}