"use client";
import React from "react";
import dynamic from "next/dynamic.js";
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";
const BarChart = dynamic(() => import("./bar"), { ssr: false });
const LineChart = dynamic(() => import("./line"), { ssr: false });
const AreaChart = dynamic(() => import("./area"), { ssr: false });
const PolarChart = dynamic(() => import("./polar"), { ssr: false });
const DonutChart = dynamic(() => import("./donut"), { ssr: false });
const Bubble = dynamic(() => import("./Bubble"), { ssr: false });
// import BarChart from "./bar";
// import LineChart from "./line";
// import AreaChart from "./area";
// import PolarChart from "./polar";
// import DonutChart from "./donut";
// import Bubble from "./Bubble";

function ChartChartist() {
  return (
    <>
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Bar</Card.Title>
            </Card.Header>
            <Card.Body>
              <BarChart />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Line</Card.Title>
            </Card.Header>
            <Card.Body>
              <LineChart />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Area</Card.Title>
            </Card.Header>
            <Card.Body>
              <AreaChart />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Bi Polar</Card.Title>
            </Card.Header>
            <Card.Body>
              <PolarChart />
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Donut</Card.Title>
            </Card.Header>
            <Card.Body>
              <DonutChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Donut</Card.Title>
            </Card.Header>
            <Card.Body>
              <Bubble />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default ChartChartist;
