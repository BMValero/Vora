"use client";
import React from "react";
import dynamic from "next/dynamic.js";
// import { Link } from 'react-router-dom';
import { Row, Col, Card } from "react-bootstrap";

import PageTitle from "../../../layouts/PageTitle";

const ApexBarChart = dynamic(() => import("./ApexBarChart"), { ssr: false });
const ApexChart1 = dynamic(() => import("./ApexChart"), { ssr: false });

// import ApexBarChart from "./ApexBarChart";
// import ApexChart1 from "./ApexChart";

const ApexBar = dynamic(() => import("./Bar"), { ssr: false });
const ApexBar2 = dynamic(() => import("./Bar2"), { ssr: false });
const ApexLine = dynamic(() => import("./Line"), { ssr: false });
const ApexLine2 = dynamic(() => import("./Line2"), { ssr: false });
const ApexLine3 = dynamic(() => import("./Line3"), { ssr: false });
const ApexLine4 = dynamic(() => import("./Line4"), { ssr: false });
const ApexPie = dynamic(() => import("./Pie"), { ssr: false });
const ApexRedialBar = dynamic(() => import("./RadialBar"), { ssr: false });
const ApexNagetivePosative = dynamic(() => import("./NagetivePositive2"), {
  ssr: false,
});
// import ApexBar from "./Bar";
// import ApexBar2 from "./Bar2";
// import ApexLine from "./Line";
// import ApexLine2 from "./Line2";
// import ApexLine3 from "./Line3";
// import ApexLine4 from "./Line4";
// import ApexPie from "./Pie";
// import ApexRedialBar from "./RadialBar";
// import ApexNagetivePosative from "./NagetivePositive2";

function Index() {
  return (
    <div className="h-80">
      <PageTitle
        headingPara="Your business dashboard template"
        motherMenu="Charts"
        activeMenu="ApexChart"
      />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexBarChart />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexBar />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexNagetivePosative />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Bar Chart</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexBar2 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Line</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexChart1 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Line</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexLine />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Line</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexLine2 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Line</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexLine3 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Line</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexLine4 />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Pie</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexPie />
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Redial Bar</Card.Title>
            </Card.Header>
            <Card.Body>
              <ApexRedialBar />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Index;
