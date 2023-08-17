"use client";
import React, { Component } from "react";
import { Line, } from "react-chartjs-2";

class BasicLine extends Component {
   render() {
      const data = {
         labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
         ],
         datasets: [
            {
               label: "My First dataset",
               data: [65, 59, 80, 81, 56, 55, 80, 81, 56, 55, 40, 89],
               borderColor: "rgba(41,83,232, 1)",
               borderWidth: "0",
               backgroundColor: this.props.color
                  ? this.props.color
                  : "rgba(41,83,232, 0.7)",
            },
         ],
      };

      const options = {
		plugins:{
			tooltips: {
				enabled: true,
			 },
			 legend: {
				display: false,
				labels: {
				   usePointStyle: false,
				},
			 },	
		},
         maintainAspectRatio: false,
         
         scales: {
            yAxes: [
               {
                  ticks: {
                     beginAtZero: false,
                     min: 0,
                  },
                  gridLines: {
                     display: true,
                     drawBorder: false,
                  },
               },
            ],
            xAxes: [
               {
                  barPercentage: 0.7,
                  gridLines: {
                     display: true,
                     drawBorder: true,
                  },
               },
            ],
         },
      };

      return (
         <>
            <Line
               data={data}
               width={this.props.width ? this.props.width : 433}
               height={this.props.height ? this.props.height : 251}
               options={options}
            />
         </>
      );
   }
}

export default BasicLine;
