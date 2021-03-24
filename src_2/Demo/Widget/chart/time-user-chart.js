export default {
    height: 400,
    type: 'heatmap',
    options: {
        dataLabels: {
            enabled: false
        },
        colors: ['#4680ff']
    },
    series: [
        {
            name: 'Metric1',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric2',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric3',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric4',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric5',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric6',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric7',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric9',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric10',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric11',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric12',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric13',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric14',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        }
    ]
}

function generateDataSabraThat(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        series.push({
            x: 'w' + (i + 1).toString(),
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
        i++;
    }
    return series;
}