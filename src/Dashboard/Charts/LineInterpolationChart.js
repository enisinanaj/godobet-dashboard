import React from "react";
import Chart from "react-apexcharts";

class LineInterpolationChart extends React.Component {
  render() {
    // console.log(Math.max(this.props.data));
    const data = () => {
      return {
          type: 'area',
          height: "500px",
          options: {
            maintainAspectRatio: false,
            theme: {
                monochrome: {
                    enabled: true,
                    color: '#4CAF50',
                    shadeTo: 'light',
                    shadeIntensity: 0.65
                }
            },
            annotations: {
                position: 'front' ,
                yaxis: [{
                    y: 0,
                    y2: -9999,
                    strokeDashArray: 0,
                    borderColor: undefined,
                    fillColor: '#ffdddd',
                    opacity: 0.3,
                    offsetX: 0,
                    width: '100%',
                    yAxisIndex: 0
                }]
            },
            noData: {  
                text: "Dati in caricamento...",  
                align: 'center',  
                verticalAlign: 'middle',  
                offsetX: 0,  
                offsetY: 0,  
                style: {  
                  color: "#000000",  
                  fontSize: '14px',  
                  fontFamily: "Helvetica"  
                }  
            }, 
            chart: {
                sparkline: {
                    enabled: false
                },
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth'
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
                        formatter: () => 'Profitto'
                    }
                },
                marker: {
                    show: false
                }
            },
            yaxis: {
                show: true,
                axisTicks: {
                    show: true,
                    borderType: 'solid',
                    color: '#78909C',
                    width: 6,
                    offsetX: 0,
                    offsetY: 0
                },
                showAlways: true,
                showForNullSeries: true,
                tickAmount: this.props.data.length - 1,
                min: Math.min(...(this.props.data.map(el => el.y))),
                max: Math.max(...(this.props.data.map(el => el.y))),
                labels: {
                    formatter: value => value.toLocaleString("it-IT", {maximumFractionDigits: 2, minimumFractionDigits: 2}) + "%",
                }
            },
            scales: {
                x: {
                    type: 'time',
                    time: {displayFormats: {quarter: 'DD MMM YYYY'}}
                },
                yAxes: [{
                    ticks: {
                        beginAtZero: true //make sure zero line exists on the graph
                    }
                }]
            }
          },
          series: [{
              data: this.props.data
          }]
      }
    };

    return (
      <Chart {...data()} />
    );
  }
}

export default LineInterpolationChart;
