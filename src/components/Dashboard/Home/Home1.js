"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import Image from "next/image";
import { Dropdown, ProgressBar, Tab, Nav } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
//** Import Image */

import ApexchartsNegPost from "./ApexNagetivePosative";
import ApexchartsNegPost1 from "./ApexNagetivePosative1";
import Radialchart from "./Radialchart";
import Linechart from "./Linechart";

import user1 from "../../../images/users/1.jpg";
import user2 from "../../../images/users/2.jpg";
import user3 from "../../../images/users/3.jpg";
import user4 from "../../../images/users/4.jpg";
import user5 from "../../../images/users/5.jpg";
import user6 from "../../../images/users/6.jpg";
import user7 from "../../../images/users/7.jpg";
import user8 from "../../../images/users/8.jpg";
import user9 from "../../../images/users/9.jpg";
import user10 from "../../../images/users/10.jpg";
import user11 from "../../../images/users/11.jpg";
import user12 from "../../../images/users/12.jpg";
import user13 from "../../../images/users/1.png";
import user14 from "../../../images/users/2.png";
import user15 from "../../../images/users/3.png";

const tabData = [
  {
    name: "Home",
    percenet: "0,45%",
    content: <ApexchartsNegPost />,
  },
  {
    name: "Profile",
    percenet: "5,75%",
    content: <ApexchartsNegPost1 />,
  },
  {
    name: "Contact",
    percenet: "1,20%",
    content: <ApexchartsNegPost />,
  },

  {
    name: "Message",
    percenet: "0,45%",
    content: <ApexchartsNegPost />,
  },
];

const Home1 = () => {
  return (
    <Fragment>
      {/* <!-- Add Order --> */}
      <div className="modal fade" id="addOrderModalside">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Create Project</h5>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label className="text-black font-w500">Project Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="text-black font-w500">Deadline</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="form-group">
                  <label className="text-black font-w500">Client Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-primary">
                    CREATE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-6">
          <div className="row">
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="media-body mr-3">
                      <h2 className="num-text text-black font-w600">78</h2>
                      <span className="fs-14">Total Project Handled</span>
                    </div>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.4221 13.9831C34.3342 13.721 34.1756 13.4884 33.9639 13.3108C33.7521 13.1332 33.4954 13.0175 33.2221 12.9766L23.6491 11.5141L19.3531 2.36408C19.232 2.10638 19.04 1.88849 18.7996 1.73587C18.5592 1.58325 18.2803 1.5022 17.9956 1.5022C17.7108 1.5022 17.432 1.58325 17.1916 1.73587C16.9512 1.88849 16.7592 2.10638 16.6381 2.36408L12.3421 11.5141L2.76908 12.9766C2.49641 13.0181 2.24048 13.1341 2.02943 13.3117C1.81837 13.4892 1.66036 13.7215 1.57277 13.9831C1.48517 14.2446 1.47139 14.5253 1.53293 14.7941C1.59447 15.063 1.72895 15.3097 1.92158 15.5071L8.89808 22.6501L7.24808 32.7571C7.20306 33.0345 7.23685 33.3189 7.34561 33.578C7.45437 33.8371 7.63373 34.0605 7.86325 34.2226C8.09277 34.3847 8.36321 34.4791 8.64377 34.495C8.92432 34.5109 9.20371 34.4477 9.45008 34.3126L18.0001 29.5906L26.5501 34.3126C26.7965 34.4489 27.0762 34.5131 27.3573 34.4978C27.6385 34.4826 27.9097 34.3885 28.1399 34.2264C28.37 34.0643 28.55 33.8406 28.659 33.5811C28.7681 33.3215 28.8019 33.0365 28.7566 32.7586L27.1066 22.6516L34.0786 15.5071C34.2703 15.3091 34.4038 15.0622 34.4644 14.7933C34.525 14.5245 34.5103 14.2441 34.4221 13.9831Z"
                        fill="#2953E8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="media-body mr-3">
                      <h2 className="num-text text-black font-w600">214</h2>
                      <span className="fs-14">Contacts You Have</span>
                    </div>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.8936 22.4999C23.6925 22.4999 28.3936 17.7989 28.3936 11.9999C28.3936 6.20095 23.6925 1.49994 17.8936 1.49994C12.0946 1.49994 7.39355 6.20095 7.39355 11.9999C7.39355 17.7989 12.0946 22.4999 17.8936 22.4999Z"
                        fill="#2953E8"
                      />
                      <path
                        d="M29.5606 21.3344C29.2171 20.9909 28.8511 20.6699 28.4761 20.3564C27.216 21.96 25.6079 23.2562 23.7734 24.1472C21.9389 25.0382 19.926 25.5007 17.8865 25.4996C15.8471 25.4986 13.8346 25.0342 12.001 24.1414C10.1674 23.2486 8.56061 21.9507 7.30209 20.3459C5.4471 21.8906 3.95587 23.8256 2.9348 26.013C1.91373 28.2003 1.38799 30.586 1.39509 32.9999C1.39509 33.3978 1.55313 33.7793 1.83443 34.0606C2.11573 34.3419 2.49727 34.4999 2.89509 34.4999H32.8951C33.2929 34.4999 33.6744 34.3419 33.9557 34.0606C34.2371 33.7793 34.3951 33.3978 34.3951 32.9999C34.4005 30.8324 33.976 28.6854 33.1461 26.683C32.3163 24.6807 31.0976 22.8627 29.5606 21.3344Z"
                        fill="#2953E8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="media-body mr-3">
                      <h2 className="num-text text-black font-w600">93</h2>
                      <span className="fs-14">Total Unfinished Task</span>
                    </div>
                    <svg
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 1.5H6C3.51472 1.5 1.5 3.51472 1.5 6V29.8125C1.5 32.2977 3.51472 34.3125 6 34.3125H12C14.4853 34.3125 16.5 32.2977 16.5 29.8125V6C16.5 3.51472 14.4853 1.5 12 1.5Z"
                        fill="#2953E8"
                      />
                      <path
                        d="M30 1.5H24C21.5147 1.5 19.5 3.51472 19.5 6V12C19.5 14.4853 21.5147 16.5 24 16.5H30C32.4853 16.5 34.5 14.4853 34.5 12V6C34.5 3.51472 32.4853 1.5 30 1.5Z"
                        fill="#2953E8"
                      />
                      <path
                        d="M30 19.5H24C21.5147 19.5 19.5 21.5147 19.5 24V30C19.5 32.4853 21.5147 34.5 24 34.5H30C32.4853 34.5 34.5 32.4853 34.5 30V24C34.5 21.5147 32.4853 19.5 30 19.5Z"
                        fill="#2953E8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card">
                <div className="card-body">
                  <div className="media align-items-center">
                    <div className="media-body mr-3">
                      <h2 className="num-text text-black font-w600">12</h2>
                      <span className="fs-14">Unread Messages</span>
                    </div>
                    <svg
                      width="46"
                      height="46"
                      viewBox="0 0 46 46"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M34.4998 1.91666H11.4998C8.95911 1.9197 6.52332 2.93035 4.72676 4.72691C2.93019 6.52348 1.91955 8.95927 1.9165 11.5V26.8333C1.91929 29.0417 2.68334 31.1816 4.07988 32.8924C5.47642 34.6031 7.42004 35.7801 9.58317 36.225V42.1667C9.58312 42.5137 9.67727 42.8542 9.85558 43.1518C10.0339 43.4495 10.2897 43.6932 10.5956 43.8569C10.9016 44.0206 11.2462 44.0982 11.5928 44.0814C11.9394 44.0645 12.2749 43.9539 12.5636 43.7613L23.5748 36.4167H34.4998C37.0406 36.4136 39.4764 35.403 41.2729 33.6064C43.0695 31.8098 44.0801 29.374 44.0832 26.8333V11.5C44.0801 8.95927 43.0695 6.52348 41.2729 4.72691C39.4764 2.93035 37.0406 1.9197 34.4998 1.91666ZM30.6665 24.9167H15.3332C14.8248 24.9167 14.3373 24.7147 13.9779 24.3553C13.6184 23.9958 13.4165 23.5083 13.4165 23C13.4165 22.4917 13.6184 22.0041 13.9779 21.6447C14.3373 21.2853 14.8248 21.0833 15.3332 21.0833H30.6665C31.1748 21.0833 31.6623 21.2853 32.0218 21.6447C32.3812 22.0041 32.5832 22.4917 32.5832 23C32.5832 23.5083 32.3812 23.9958 32.0218 24.3553C31.6623 24.7147 31.1748 24.9167 30.6665 24.9167ZM34.4998 17.25H11.4998C10.9915 17.25 10.504 17.0481 10.1446 16.6886C9.78511 16.3292 9.58317 15.8417 9.58317 15.3333C9.58317 14.825 9.78511 14.3375 10.1446 13.978C10.504 13.6186 10.9915 13.4167 11.4998 13.4167H34.4998C35.0082 13.4167 35.4957 13.6186 35.8551 13.978C36.2146 14.3375 36.4165 14.825 36.4165 15.3333C36.4165 15.8417 36.2146 16.3292 35.8551 16.6886C35.4957 17.0481 35.0082 17.25 34.4998 17.25Z"
                        fill="#2953E8"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card">
                <Tab.Container defaultActiveKey={tabData[0].name.toLowerCase()}>
                  <div className="card-header mb-0 d-sm-flex flex-wrap d-block shadow-sm border-0 align-items-center">
                    <div className="mr-auto pr-3 mb-3">
                      <h4 className="text-black fs-20 mb-sm-0 mb-2">
                        Project Created
                      </h4>
                    </div>
                    <div className="card-action card-tabs  mt-sm-0 mb-3 mt-sm-0 ">
                      <Nav as="ul" className="nav nav-tabs ">
                        {tabData.map(
                          (data, i) =>
                            i !== tabData.length - 1 && (
                              <Nav.Item as="li" key={i}>
                                <Nav.Link eventKey={data.name.toLowerCase()}>
                                  {" "}
                                  {i === 1
                                    ? "Weekly"
                                    : i === 2
                                    ? "Monthly"
                                    : "Daily"}
                                </Nav.Link>
                              </Nav.Item>
                            )
                        )}
                      </Nav>
                    </div>
                  </div>
                  <div className="card-body">
                    <Tab.Content className="">
                      {tabData.map(
                        (data, i) =>
                          i !== tabData.length - 1 && (
                            <Tab.Pane
                              eventKey={data.name.toLowerCase()}
                              key={i}
                            >
                              <div className="d-flex align-items-center">
                                <span className="fs-36 text-black font-w600 mr-4">
                                  {data.percenet}
                                </span>
                                <div>
                                  <svg
                                    className="mr-2"
                                    width="27"
                                    height="14"
                                    viewBox="0 0 27 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M0 13.435L13.435 0L26.8701 13.435H0Z"
                                      fill="#2FCA51"
                                    />
                                  </svg>
                                  <span>last month $563,443</span>
                                </div>
                              </div>
                              <div>{data.content}</div>
                            </Tab.Pane>
                          )
                      )}
                    </Tab.Content>
                  </div>
                </Tab.Container>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-12 col-md-6">
              <div className="card">
                <div className="card-header border-0 shadow-sm">
                  <h4 className="fs-20 text-black font-w600">Monthly Target</h4>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant
                      className="table-dropdown icon-false p-0"
                    >
                      <Link
                        href="#"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                            stroke="#575757"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                            stroke="#575757"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                            stroke="#575757"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-right">
                      <Dropdown.Item href="#">Edit</Dropdown.Item>
                      <Dropdown.Item href="#">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body text-center">
                  <div>
                    <Radialchart />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-xxl-12 col-md-6">
              <div className="card">
                <div className="card-header border-0 shadow-sm">
                  <h4 className="fs-20 text-black font-w600">New Clients</h4>
                  <Dropdown className="dropdown ">
                    <Dropdown.Toggle
                      variant
                      className="table-dropdown icon-false p-0"
                    >
                      <Link
                        href="#"
                        data-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                            stroke="#575757"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                            stroke="#575757"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                            stroke="#575757"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </Link>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu-right">
                      <Dropdown.Item href="#">Edit</Dropdown.Item>
                      <Dropdown.Item href="#">Delete</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
                <div className="card-body text-center">
                  <Linechart />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="row">
            <div className="col-xl-6 col-xxl-12 col-md-6">
              <div className="card">
                <div className="card-header shadow-sm">
                  <div className="mr-2">
                    <h4 className="fs-20 mb-0 font-w600 text-black">
                      Quick To-Do List
                    </h4>
                    <span className="fs-14">Lorem ipsum dolor sit amet</span>
                  </div>
                  <Link href="/contacts" className="plus-icon">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </Link>
                </div>
                <PerfectScrollbar
                  className="card-body loadmore-content height620 dlab-scroll  pb-0"
                  id="RecentActivitiesContent"
                >
                  <div>
                    <div className="border-bottom pb-4 mb-4">
                      <Link
                        href="#"
                        className="btn btn-sm btn-success rounded-xl mb-2"
                      >
                        Graphic Deisgner
                      </Link>
                      <p className="font-w600">
                        <Link href="/post-details" className="text-black">
                          Visual Graphic for Presentation to Client
                        </Link>
                      </p>
                      <div className="row justify-content-between">
                        <ul className="users col-6">
                          <li>
                            <Image
                              src={user1.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src={user2.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src={user3.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src={user4.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                        </ul>
                        <div className="col-6 pl-0">
                          <h6 className="fs-14">
                            Progress
                            <span className="pull-right font-w600">24%</span>
                          </h6>
                          <ProgressBar
                            now={24}
                            variant="bg-primary"
                            style={{ height: "7px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom pb-4 mb-4">
                      <Link
                        href="#"
                        className="btn btn-sm btn-secondary rounded-xl mb-2"
                      >
                        Digital Marketing
                      </Link>
                      <p className="font-w600">
                        <Link href="/post-details" className="text-black">
                          Build Database Design for Fasto Admin v2
                        </Link>
                      </p>
                      <div className="row justify-content-between">
                        <ul className="users col-6">
                          <li>
                            <Image
                              src={user5.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src={user6.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src={user7.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src={user8.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                        </ul>
                        <div className="col-6 pl-0">
                          <h6 className="fs-14">
                            Progress
                            <span className="pull-right font-w600">79%</span>
                          </h6>
                          <ProgressBar
                            now={79}
                            variant="bg-primary"
                            style={{ height: "7px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom pb-4 mb-4">
                      <Link
                        href="#"
                        className="btn btn-sm btn-warning rounded-xl mb-2"
                      >
                        Programmer
                      </Link>
                      <p className="font-w600">
                        <Link href="/post-details" className="text-black">
                          Make Promotional Ads for Instagram Fasto’s
                        </Link>
                      </p>
                      <div className="row justify-content-between">
                        <ul className="users col-6">
                          <li>
                            <Image
                              src={user9.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src={user10.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src={user11.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src={user12.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                        </ul>
                        <div className="col-6 pl-0">
                          <h6 className="fs-14">
                            Progress
                            <span className="pull-right font-w600">36%</span>
                          </h6>
                          <ProgressBar
                            now={36}
                            variant="bg-primary"
                            style={{ height: "7px" }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom pb-4 mb-4">
                      <Link
                        href="#"
                        className="btn btn-sm btn-secondary rounded-xl mb-2"
                      >
                        Digital Marketing
                      </Link>
                      <p className="font-w600">
                        <Link href="/post-details" className="text-black">
                          Build Database Design for Fasto Admin v2
                        </Link>
                      </p>
                      <div className="row justify-content-between">
                        <ul className="users col-6">
                          <li>
                            <Image
                              src={user5.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src={user6.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src={user7.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                          <li>
                            <Image
                              src={user8.src}
                              width={30}
                              height={30}
                              alt=""
                            />
                          </li>
                        </ul>
                        <div className="col-6 pl-0">
                          <h6 className="fs-14">
                            Progress
                            <span className="pull-right font-w600">79%</span>
                          </h6>
                          <ProgressBar
                            now={79}
                            variant="bg-primary"
                            style={{ height: "7px" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
                <div className="card-footer">
                  <Link
                    href="#"
                    className="btn d-block btn-primary light dlab-load-more"
                    rel="ajax/recent-activities.	"
                    id="RecentActivities"
                  >
                    <strong>26</strong> Tasks More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-6 col-xxl-12 col-md-6">
              <div className="card">
                <div className="card-header shadow-sm">
                  <div className="mr-2">
                    <h4 className="fs-20 mb-0 font-w600 text-black">
                      Upcoming Projects
                    </h4>
                  </div>
                  <Link href="/contacts" className="plus-icon">
                    <i className="fa fa-plus" aria-hidden="true"></i>
                  </Link>
                </div>
                <PerfectScrollbar
                  className=" card-body height620 dlab-scroll"
                  id="upcomingprojects"
                >
                  <div className="">
                    <div className="border-bottom pb-4 mb-4">
                      <span className="fs-14 text-primary mb-2 d-block font-w500">
                        Yoast Esac
                      </span>
                      <div className="d-flex">
                        <p className="font-w600 mr-auto mb-2">
                          <Link href="/post-details" className="text-black">
                            Redesign Kripton Mobile App
                          </Link>
                        </p>
                        <Dropdown className="dropdown mb-3">
                          <Dropdown.Toggle
                            variant
                            className="table-dropdown icon-false p-0"
                          >
                            <Link
                              href="#"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                  stroke="#575757"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                  stroke="#575757"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                  stroke="#575757"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </Link>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu-right">
                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                            <Dropdown.Item href="#">Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="mb-3">
                        <i
                          className="fa fa-calendar-o mr-3"
                          aria-hidden="true"
                        ></i>
                        Created on Sep 8th, 2020
                      </div>
                      <div className="media align-items-center">
                        <div className="d-inline-block mr-3 position-relative donut-chart-sale">
                          <svg className="peity" height="50" width="50">
                            <path
                              d="M 25 0 A 25 25 0 1 1 7.322330470336315 42.67766952966369 L 3.786796564403577 46.21320343559643 A 30 30 0 1 0 25.000000000000004 -5"
                              data-value="5"
                              fill="rgb(41, 83, 232)"
                            ></path>
                            <path
                              d="M 7.322330470336315 42.67766952966369 A 25 25 0 0 1 24.999999999999996 0 L 24.999999999999993 -5 A 30 30 0 0 0 3.786796564403577 46.21320343559643"
                              data-value="3"
                              fill="rgba(200, 200, 200, 0.5)"
                            ></path>
                          </svg>
                          <small className="text-primary fs-30">
                            <i className="fa fa-bolt" aria-hidden="true"></i>
                          </small>
                        </div>
                        <div className="media-body">
                          <p className="mb-1">Deadline</p>
                          <span className="text-black font-w600">
                            Tuesday, Sep 29th 2020
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom pb-4 mb-4">
                      <span className="fs-14 text-primary mb-2 d-block font-w500">
                        Yoast Esac
                      </span>
                      <div className="d-flex">
                        <p className="font-w600 mr-auto mb-2">
                          <Link href="/post-details" className="text-black">
                            Build Branding Persona for Etza.id
                          </Link>
                        </p>
                        <Dropdown className="dropdown mb-3">
                          <Dropdown.Toggle
                            variant
                            className="table-dropdown icon-false p-0"
                          >
                            <Link
                              href="#"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                  stroke="#575757"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                  stroke="#575757"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                  stroke="#575757"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </Link>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu-right">
                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                            <Dropdown.Item href="#">Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="mb-3">
                        <i
                          className="fa fa-calendar-o mr-3"
                          aria-hidden="true"
                        ></i>
                        Created on Sep 8th, 2020
                      </div>
                      <div className="media align-items-center">
                        <div className="d-inline-block mr-3 position-relative donut-chart-sale">
                          <svg className="peity" height="50" width="50">
                            <path
                              d="M 25 0 A 25 25 0 0 1 50 25 L 55 25 A 30 30 0 0 0 25.000000000000004 -5"
                              data-
                              value="2"
                              fill="rgb(41, 83, 232)"
                            ></path>
                            <path
                              d="M 50 25 A 25 25 0 1 1 24.999999999999996 0 L 24.999999999999993 -5 A 30 30 0 1 0 55 25"
                              data-value="6"
                              fill="rgba(200, 200, 200, 0.5)"
                            ></path>
                          </svg>
                          <small className="text-primary fs-30">
                            <i className="fa fa-bolt" aria-hidden="true"></i>
                          </small>
                        </div>
                        <div className="media-body">
                          <p className="mb-1">Deadline</p>
                          <span className="text-black font-w600">
                            Tuesday, Sep 29th 2020
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="pb-4">
                      <span className="fs-14 text-primary mb-2 d-block font-w500">
                        Yoast Esac
                      </span>
                      <div className="d-flex">
                        <p className="font-w600 mr-auto mb-2">
                          <Link href="/post-details" className="text-black">
                            Manage SEO for Eclan Company Profile
                          </Link>
                        </p>
                        <Dropdown className="dropdown mb-3">
                          <Dropdown.Toggle
                            variant
                            className="table-dropdown icon-false p-0"
                          >
                            <Link
                              href="#"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                  stroke="#575757"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z"
                                  stroke="#575757"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z"
                                  stroke="#575757"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </Link>
                          </Dropdown.Toggle>
                          <Dropdown.Menu className="dropdown-menu-right">
                            <Dropdown.Item href="#">Edit</Dropdown.Item>
                            <Dropdown.Item href="#">Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="mb-3">
                        <i
                          className="fa fa-calendar-o mr-3"
                          aria-hidden="true"
                        ></i>
                        Created on Sep 8th, 2020
                      </div>
                      <div className="media align-items-center">
                        <div className="d-inline-block mr-3 position-relative donut-chart-sale">
                          <svg className="peity" height="50" width="50">
                            <path
                              d="M 25 0 A 25 25 0 1 1 7.322330470336308 7.322330470336315 L 3.78679656440357 3.786796564403577 A 30 30 0 1 0 25.000000000000004 -5"
                              data-value="7"
                              fill="rgb(41, 83, 232)"
                            ></path>
                            <path
                              d="M 7.322330470336308 7.322330470336315 A 25 25 0 0 1 24.999999999999996 0 L 24.999999999999993 -5 A 30 30 0 0 0 3.78679656440357 3.786796564403577"
                              data-value="1"
                              fill="rgba(200, 200, 200, 0.5)"
                            ></path>
                          </svg>
                          <small className="text-primary fs-30">
                            <i className="fa fa-bolt" aria-hidden="true"></i>
                          </small>
                        </div>
                        <div className="media-body">
                          <p className="mb-1">Deadline</p>
                          <span className="text-black font-w600">
                            Tuesday, Sep 29th 2020
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </PerfectScrollbar>
              </div>
            </div>
            <div className="col-xl-12">
              <div className="card message-bx">
                <div className="card-header d-sm-flex d-block shadow-sm">
                  <div>
                    <h4 className="fs-20 mb-0 font-w600 text-black mb-sm-0 mb-2">
                      Recent Messages
                    </h4>
                  </div>
                  <Link href="/contacts" className="btn btn-primary rounded">
                    + New Message
                  </Link>
                </div>
                <div className="card-body">
                  <div className="media mb-4">
                    <div className="image-bx mr-sm-4 mr-2">
                      <Image
                        src={user13.src}
                        width={30}
                        height={30}
                        alt=""
                        className="rounded-circle img-1"
                      />
                      <span className="active"></span>
                    </div>
                    <div className="media-body d-sm-flex justify-content-between d-block align-items-center">
                      <div className="mr-sm-3 mr-0">
                        <h6 className="fs-16 font-w600 mb-sm-2 mb-0">
                          <Link href="/messages" className="text-black">
                            Chandara Kiev
                          </Link>
                        </h6>
                        <p className="text-black mb-sm-3 mb-1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut
                        </p>
                        <span className="fs-14">5m ago</span>
                      </div>
                      <Link
                        href="/messages"
                        className="btn btn-primary light rounded mt-sm-0 mt-2"
                      >
                        Reply
                      </Link>
                    </div>
                  </div>
                  <div className="media mb-4">
                    <div className="image-bx mr-sm-4 mr-2">
                      <Image
                        src={user14.src}
                        width={30}
                        height={30}
                        alt=""
                        className="rounded-circle img-1"
                      />
                      <span className="active"></span>
                    </div>
                    <div className="media-body d-sm-flex justify-content-between d-block align-items-center">
                      <div className="mr-sm-3 mr-0">
                        <h6 className="fs-16 font-w600 mb-sm-2 mb-0">
                          <Link href="/messages" className="text-black">
                            Samuel Quequeee
                          </Link>
                        </h6>
                        <p className="text-black mb-sm-3 mb-1">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut
                        </p>
                        <span className="fs-14">41m ago</span>
                      </div>
                      <Link
                        href="/messages"
                        className="btn btn-primary light rounded mt-sm-0 mt-2"
                      >
                        Reply
                      </Link>
                    </div>
                  </div>
                  <div className="media">
                    <div className="image-bx mr-sm-4 mr-2">
                      <Image
                        src={user15.src}
                        width={30}
                        height={30}
                        alt=""
                        className="rounded-circle img-1"
                      />
                    </div>
                    <div className="media-body d-sm-flex justify-content-between d-block align-items-center">
                      <div className="mr-sm-3 mr-0">
                        <h6 className="fs-16 font-w600 mb-sm-2 mb-0">
                          <Link href="/messages" className="text-black">
                            Laurenz Jumawa
                          </Link>
                        </h6>
                        <p className="text-black mb-sm-3 mb-1">
                          Nisi ut aliquip ex ea commodo consequat. Duis aute
                          irure dolor in reprehenderit in voluptate velit esse
                          cillum...
                        </p>
                        <span className="fs-14">25m ago</span>
                      </div>
                      <Link
                        href="/messages"
                        className="btn btn-primary light rounded mt-sm-0 mt-2"
                      >
                        Reply
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home1;
