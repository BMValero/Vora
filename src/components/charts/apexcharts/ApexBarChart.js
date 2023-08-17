import React, { Component } from "react";

// import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic.js";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});
class ApexBarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      render: false, //Set render state to false
      series: [
        {
          name: "Aplication Sent",
          data: [40, 55, 15, 50, 70, 20, 55],
        },
        {
          name: "Appllication Answered",
          data: [55, 55, 35, 15, 35, 55, 20],
        },
        {
          name: "Hired",
          data: [20, 17, 55, 45, 30, 65, 50],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: false,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "35%",

            endingShape: "rounded",
            startingShape: "rounded",
            backgroundRadius: 10,
            colors: {
              backgroundBarColors: [
                "#ECECEC",
                "#ECECEC",
                "#ECECEC",
                "#ECECEC",
                "#ECECEC",
                "#ECECEC",
                "#ECECEC",
              ],
              backgroundBarOpacity: 1,
              backgroundBarRadius: 10,
            },
          },
        },
        colors: ["#2953e8", "#209f84", "#2781d5"],
        xaxis: {
          show: true,
          axisBorder: {
            show: false,
          },

          labels: {
            style: {
              colors: "#828282",
              fontSize: "14px",
              fontFamily: "Poppins",
              fontWeight: "light",
              cssClass: "apexcharts-xaxis-label",
            },
          },
          crosshairs: {
            show: false,
          },

          categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        },
        yaxis: {
          show: false,
        },
        grid: {
          show: false,
        },
        toolbar: {
          enabled: false,
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        fill: {
          opacity: 1,
        },
      },
    };
  }

  componentDidMount() {
    setTimeout(
      function () {
        //Start the timer
        this.setState({ render: true }); //After 1 second, set render to true
      }.bind(this),
      1000
    );
  }

  render() {
    let renderContainer = false;

    if (this.state.render) {
      renderContainer = (
        <div id="columnChart">
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={350}
          />
        </div>
      );
    }

    return renderContainer; //Render the dom elements, or, when this.state == false, nothing.
  }
}
export default ApexBarChart;
