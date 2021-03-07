import React from "react";
import { Line } from "react-chartjs-2";

class LineInterpolationChart extends React.Component {
  render() {
    const data = (canvas) => {
      let bar = canvas.getContext("2d");
      let theme_g2 = bar.createLinearGradient(0, 0, 500, 0);
      theme_g2.addColorStop(0, "#828282");
      theme_g2.addColorStop(1, "#828282");

      return {
        labels: [0, 1, 2, 3, 4, 5, 6],
        datasets: [
          {
            label: "Andamento",
            data: [55, 70, 62, 81, 56, 70, 90],
            fill: true,
            borderWidth: 4,
            borderColor: theme_g2,
            backgroundColor: theme_g2,
            hoverborderColor: theme_g2,
            hoverBackgroundColor: theme_g2,
          },
        ],
      };
    };

    return (
      <Line
        data={data}
        responsive={true}
        height={300}
        options={{
          barValueSpacing: 20,
          maintainAspectRatio: false,
        }}
      />
    );
  }
}

export default LineInterpolationChart;
