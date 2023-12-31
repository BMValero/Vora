"use client";
import React, { Fragment } from "react";

import PageTitle from "../../layouts/PageTitle";
import { Row, Col, Card, Tab, Nav } from "react-bootstrap";

const UiTab = () => {
  const tabData = [
    {
      name: "Home",
      icon: "home",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },
    {
      name: "Profile",
      icon: "user",
      content:
        "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
    },
    {
      name: "Contact",
      icon: "phone",
      content:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.",
    },

    {
      name: "Message",
      icon: "envelope",
      content:
        "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor.      ",
    },
  ];

  return (
    <Fragment>
      <PageTitle headingPara="Tab" activeMenu="Tab" motherMenu="Bootstrap" />
      <Row>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Default Tab</Card.Title>
            </Card.Header>
            <Card.Body>
              {/* <!-- Nav tabs --> */}
              <div className="default-tab">
                <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                  <Nav as="ul" className="nav-tabs">
                    {tabData.map((data, i) => (
                      <Nav.Item as="li" key={i}>
                        <Nav.Link eventKey={data.name.toLowerCase()}>
                          <i className={`la la-${data.icon} mr-2`} />
                          {data.name}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Tab.Content className="pt-4">
                    {tabData.map((data, i) => (
                      <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                        <h4>This is {data.name} title</h4>
                        <p>{data.content}</p>
                        <p>{data.content}</p>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Custom Tab 1</Card.Title>
            </Card.Header>
            <Card.Body>
              {/* <!-- Nav tabs --> */}
              <div className="custom-tab-1">
                <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                  <Nav as="ul" className="nav-tabs">
                    {tabData.map((data, i) => (
                      <Nav.Item as="li" key={i}>
                        <Nav.Link eventKey={data.name.toLowerCase()}>
                          <i className={`la la-${data.icon} mr-2`} />
                          {data.name}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Tab.Content className="pt-4">
                    {tabData.map((data, i) => (
                      <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                        <h4>This is {data.name} title</h4>
                        <p>{data.content}</p>
                        <p>{data.content}</p>
                      </Tab.Pane>
                    ))}
                  </Tab.Content>
                </Tab.Container>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Nav Pills Tabs</Card.Title>
            </Card.Header>
            <Card.Body>
              <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                <Nav as="ul" className="nav-pills mb-4 light">
                  {tabData.map(
                    (data, i) =>
                      i !== tabData.length - 1 && (
                        <Nav.Item as="li" key={i}>
                          <Nav.Link eventKey={data.name.toLowerCase()}>
                            Tab {i === 1 ? "One" : i === 2 ? "Two" : "Three"}
                          </Nav.Link>
                        </Nav.Item>
                      )
                  )}
                </Nav>
                <Tab.Content className="pt-4">
                  {tabData.map(
                    (data, i) =>
                      i !== tabData.length - 1 && (
                        <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                          <p>{data.content}</p>
                          <p>{data.content}</p>
                        </Tab.Pane>
                      )
                  )}
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Nav Pills Tabs</Card.Title>
            </Card.Header>
            <Card.Body>
              <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                <Nav as="ul" className="nav-pills mb-4 justify-content-end">
                  {tabData.map(
                    (data, i) =>
                      i !== tabData.length - 1 && (
                        <Nav.Item as="li" key={i}>
                          <Nav.Link eventKey={data.name.toLowerCase()}>
                            Tab {i === 1 ? "One" : i === 2 ? "Two" : "Three"}
                          </Nav.Link>
                        </Nav.Item>
                      )
                  )}
                </Nav>
                <Tab.Content className="pt-4">
                  {tabData.map(
                    (data, i) =>
                      i !== tabData.length - 1 && (
                        <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                          <p>{data.content}</p>
                          <p>{data.content}</p>
                        </Tab.Pane>
                      )
                  )}
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </Col>

        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Vertical Nav Pill</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                  <div className="col-xl-3 col-xxl-4 col-lg-4 col-sm-4">
                    <Nav as="ul" className="flex-column nav-pills mb-3">
                      {tabData.map((data, i) => (
                        <Nav.Item as="li" key={i}>
                          <Nav.Link eventKey={data.name.toLowerCase()}>
                            {data.name}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </div>
                  <div className="col-xl-9 col-xxl-8 col-lg-8 col-sm-8">
                    <Tab.Content className="ml-2">
                      {tabData.map((data, i) => (
                        <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                          <p>
                            {data.content} {data.content}
                          </p>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>{" "}
                  </div>
                </Tab.Container>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={6}>
          <Card>
            <Card.Header>
              <Card.Title>Vertical Nav Pill</Card.Title>
            </Card.Header>
            <Card.Body>
              <Row>
                <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                  <div className="col-xl-9 col-xxl-8 col-lg-8 col-sm-8">
                    <Tab.Content>
                      {tabData.map((data, i) => (
                        <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                          <p>
                            {data.content} {data.content}
                          </p>
                        </Tab.Pane>
                      ))}
                    </Tab.Content>
                  </div>
                  <div
                    className="col-xl-3 col-xxl-4 col-lg-4 col-sm-4"
                    id="order-2"
                  >
                    <Nav as="div" variant="pills" className="flex-column">
                      {tabData.map((data, i) => (
                        <Nav.Item key={i}>
                          <Nav.Link eventKey={data.name.toLowerCase()}>
                            {data.name}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </div>
                </Tab.Container>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <div className="col-xl-12">
          <Card>
            <Card.Header>
              <Card.Title>Tab with icon</Card.Title>
            </Card.Header>
            <Card.Body>
              <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                <Nav as="ul" className="nav-tabs">
                  {tabData.map(
                    (data, i) =>
                      i !== tabData.length - 1 && (
                        <Nav.Item as="li" key={i}>
                          <Nav.Link eventKey={data.name.toLowerCase()}>
                            <i
                              className={`ti-${i === 2 ? "email" : data.icon}`}
                            />
                          </Nav.Link>
                        </Nav.Item>
                      )
                  )}
                </Nav>
                <Tab.Content className="pt-4">
                  {tabData.map(
                    (data, i) =>
                      i !== tabData.length - 1 && (
                        <Tab.Pane eventKey={data.name.toLowerCase()} key={i}>
                          <h4>This is icon title</h4>
                          <p>{data.content}</p>
                          <p>{data.content}</p>
                        </Tab.Pane>
                      )
                  )}
                </Tab.Content>
              </Tab.Container>
            </Card.Body>
          </Card>
        </div>
      </Row>
    </Fragment>
  );
};

export default UiTab;
