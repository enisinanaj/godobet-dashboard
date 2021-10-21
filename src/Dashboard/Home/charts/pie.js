export default {
    height: 260,
    type: 'pie',
    options: {
        labels: ["Win", "Lose", "Void"],
        legend: {
            show: true,
            offsetY: 50,
        },
        theme: {
            palette: 'palette2', 
            monochrome: {
                enabled: false,
                color: '#255aee',
                shadeTo: 'light',
                shadeIntensity: 0.65
            },
        },
        responsive: [{
            breakpoint: 768,
            options: {
                chart: {
                    height: 320,

                },
                legend: {
                    position: 'bottom',
                    offsetY: 0,
                }
            }
        }]
    },
    series: [66, 50, 40]
}