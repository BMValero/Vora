"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
import profile from "../../images/profile/17.jpg";
import avatar from "../../images/avatar/1.jpg";
import { usePathname } from "next/navigation";

const Header = ({ onNote, toggle, onProfile, onActivity, onNotification }) => {
  const [pageName, setPageName] = useState("Dashboard");
  const pathname = usePathname();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const path = pathname.split("/");
      const name = path[path.length - 1].split("-");
      const filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
      const finalName = filterName.includes("app")
        ? filterName.filter((f) => f !== "app")
        : filterName.includes("ui")
        ? filterName.filter((f) => f !== "ui")
        : filterName.includes("uc")
        ? filterName.filter((f) => f !== "uc")
        : filterName.includes("basic")
        ? filterName.filter((f) => f !== "basic")
        : filterName.includes("form")
        ? filterName.filter((f) => f !== "form")
        : filterName.includes("table")
        ? filterName.filter((f) => f !== "table")
        : filterName.includes("page")
        ? filterName.filter((f) => f !== "page")
        : filterName.includes("email")
        ? filterName.filter((f) => f !== "email")
        : filterName.includes("ecom")
        ? filterName.filter((f) => f !== "ecom")
        : filterName.includes("chart")
        ? filterName.filter((f) => f !== "chart")
        : filterName.includes("editor")
        ? filterName.filter((f) => f !== "editor")
        : filterName;

      const formattedPageName = finalName.join(" ") || "Dashboard";
      setPageName(formattedPageName);
    }
  }, [pathname]);
  // var path = window.location.pathname.split("/");
  // var name = path[path.length - 1].split("-");
  // var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
  // var finalName = filterName.includes("app")
  //   ? filterName.filter((f) => f !== "app")
  //   : filterName.includes("ui")
  //   ? filterName.filter((f) => f !== "ui")
  //   : filterName.includes("uc")
  //   ? filterName.filter((f) => f !== "uc")
  //   : filterName.includes("basic")
  //   ? filterName.filter((f) => f !== "basic")
  //   : filterName.includes("form")
  //   ? filterName.filter((f) => f !== "form")
  //   : filterName.includes("table")
  //   ? filterName.filter((f) => f !== "table")
  //   : filterName.includes("page")
  //   ? filterName.filter((f) => f !== "page")
  //   : filterName.includes("email")
  //   ? filterName.filter((f) => f !== "email")
  //   : filterName.includes("ecom")
  //   ? filterName.filter((f) => f !== "ecom")
  //   : filterName.includes("chart")
  //   ? filterName.filter((f) => f !== "chart")
  //   : filterName.includes("editor")
  //   ? filterName.filter((f) => f !== "editor")
  //   : filterName;

  // var page_name =
  //   finalName.join(" ") === "" ? "Dashboard" : finalName.join(" ");

  return (
    <div className="header">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div
                className="dashboard_bar"
                style={{ textTransform: "capitalize" }}
              >
                {pageName}
              </div>
            </div>

            <ul className="navbar-nav header-right">
              <li className="nav-item">
                <div className="input-group search-area d-lg-inline-flex d-none">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <Link href="#">
                        <i className="flaticon-381-search-2"></i>
                      </Link>
                    </span>
                  </div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search here..."
                  />
                </div>
              </li>

              <li className="nav-item dropdown notification_dropdown">
                <Link
                  href="#"
                  className="nav-link bell bell-link"
                  onClick={() => onNote()}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.23779 10.2492L4.66679 11.7064V8.30554L2.23779 10.2492Z"
                      fill="#67636D"
                    />
                    <path
                      d="M1.1665 12.327V23.3334C1.16852 23.8531 1.28817 24.3656 1.5165 24.8325L9.20134 17.15L1.1665 12.327Z"
                      fill="#67636D"
                    />
                    <path
                      d="M26.4832 24.8325C26.7115 24.3656 26.8311 23.8531 26.8332 23.3334V12.327L18.7983 17.15L26.4832 24.8325Z"
                      fill="#67636D"
                    />
                    <path
                      d="M23.3335 8.30554V11.7064L25.7625 10.2492L23.3335 8.30554Z"
                      fill="#67636D"
                    />
                    <path
                      d="M21.0492 13.0772C21.024 12.998 21.0076 12.9162 21.0002 12.8334V7.00004C21.0002 6.69062 20.8773 6.39388 20.6585 6.17508C20.4397 5.95629 20.1429 5.83337 19.8335 5.83337H8.16684C7.85742 5.83337 7.56067 5.95629 7.34188 6.17508C7.12309 6.39388 7.00017 6.69062 7.00017 7.00004V12.8334C6.99274 12.9162 6.97631 12.998 6.95117 13.0772L14.0002 17.3064L21.0492 13.0772Z"
                      fill="#67636D"
                    />
                    <path
                      d="M17.3262 3.50003L14.7292 1.4222C14.5222 1.25653 14.2651 1.16626 14 1.16626C13.7349 1.16626 13.4777 1.25653 13.2708 1.4222L10.6738 3.50003H17.3262Z"
                      fill="#67636D"
                    />
                    <path
                      d="M16.7358 18.3855L14.6008 19.6688C14.4194 19.7778 14.2117 19.8354 14 19.8354C13.7883 19.8354 13.5806 19.7778 13.3991 19.6688L11.2641 18.3855L3.16748 26.4833C3.63438 26.7117 4.14691 26.8313 4.66665 26.8333H23.3333C23.853 26.8313 24.3656 26.7117 24.8325 26.4833L16.7358 18.3855Z"
                      fill="#67636D"
                    />
                  </svg>
                  <span className="badge light text-white bg-primary rounded-circle">
                    6
                  </span>
                </Link>
              </li>
              <li className="nav-item dropdown notification_dropdown">
                <Link
                  href="#"
                  className="nav-link  ai-icon"
                  role="button"
                  data-toggle="dropdown"
                  onClick={() => onActivity()}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.3333 19.8333H23.1187C23.2568 19.4597 23.3295 19.065 23.3333 18.6666V12.8333C23.3294 10.7663 22.6402 8.75902 21.3735 7.12565C20.1068 5.49228 18.3343 4.32508 16.3333 3.80679V3.49996C16.3333 2.88112 16.0875 2.28763 15.6499 1.85004C15.2123 1.41246 14.6188 1.16663 14 1.16663C13.3812 1.16663 12.7877 1.41246 12.3501 1.85004C11.9125 2.28763 11.6667 2.88112 11.6667 3.49996V3.80679C9.66574 4.32508 7.89317 5.49228 6.6265 7.12565C5.35983 8.75902 4.67058 10.7663 4.66667 12.8333V18.6666C4.67053 19.065 4.74316 19.4597 4.88133 19.8333H4.66667C4.35725 19.8333 4.0605 19.9562 3.84171 20.175C3.62292 20.3938 3.5 20.6905 3.5 21C3.5 21.3094 3.62292 21.6061 3.84171 21.8249C4.0605 22.0437 4.35725 22.1666 4.66667 22.1666H23.3333C23.6428 22.1666 23.9395 22.0437 24.1583 21.8249C24.3771 21.6061 24.5 21.3094 24.5 21C24.5 20.6905 24.3771 20.3938 24.1583 20.175C23.9395 19.9562 23.6428 19.8333 23.3333 19.8333Z"
                      fill="#67636D"
                    />
                    <path
                      d="M9.98193 24.5C10.3863 25.2088 10.971 25.7981 11.6767 26.2079C12.3823 26.6178 13.1839 26.8337 13.9999 26.8337C14.816 26.8337 15.6175 26.6178 16.3232 26.2079C17.0289 25.7981 17.6136 25.2088 18.0179 24.5H9.98193Z"
                      fill="#67636D"
                    />
                  </svg>
                  <span className="badge light text-white bg-primary rounded-circle">
                    4
                  </span>
                </Link>
                <div
                  className={`dropdown-menu dropdown-menu-right ${
                    toggle === "activity" ? "show" : ""
                  }`}
                >
                  <PerfectScrollbar
                    id="DZ_W_Notification1"
                    className={` widget-media dlab-scroll p-3 height380 ${
                      toggle === "activity" ? "ps ps--active-y" : ""
                    }`}
                  >
                    <ul className="timeline">
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2">
                            <Image
                              width={50}
                              height={50}
                              alt="avatar"
                              src={avatar.src}
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2 media-info">KG</div>
                          <div className="media-body">
                            <h6 className="mb-1">
                              Resport created successfully
                            </h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2 media-success">
                            <i className="fa fa-home"></i>
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2">
                            <Image
                              width={50}
                              height={50}
                              alt="avatar"
                              src={avatar.src}
                            />
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2 media-danger">KG</div>
                          <div className="media-body">
                            <h6 className="mb-1">
                              Resport created successfully
                            </h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="timeline-panel">
                          <div className="media mr-2 media-primary">
                            <i className="fa fa-home"></i>
                          </div>
                          <div className="media-body">
                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                            <small className="d-block">
                              29 July 2020 - 02:26 PM
                            </small>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </PerfectScrollbar>
                  <Link className="all-notification" href="#">
                    See all notifications <i className="ti-arrow-right"></i>
                  </Link>
                </div>
              </li>

              <li
                className={`nav-item dropdown header-profile ${
                  toggle === "profile" ? "show" : ""
                }`}
                onClick={() => onProfile()}
              >
                <Link
                  href="#"
                  className="nav-link"
                  role="button"
                  data-toggle="dropdown"
                >
                  <Image width={50} height={50} src={profile.src} alt="" />
                  <div className="header-info">
                    <span className="text-black">Peter Parkur</span>
                    <p className="fs-12 mb-0">Super Admin</p>
                  </div>
                </Link>
                <div
                  className={`dropdown-menu dropdown-menu-right ${
                    toggle === "profile" ? "show" : ""
                  }`}
                >
                  <Link href="/app-profile" className="dropdown-item ai-icon">
                    <svg
                      id="icon-user1"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-primary"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span className="ml-2">Profile </span>
                  </Link>
                  <Link href="/email-inbox" className="dropdown-item ai-icon">
                    <svg
                      id="icon-inbox"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-success"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <span className="ml-2">Inbox </span>
                  </Link>
                  <Link href="/page-login" className="dropdown-item ai-icon">
                    <svg
                      id="icon-logout"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-danger"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                      <polyline points="16 17 21 12 16 7"></polyline>
                      <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                    <span className="ml-2">Logout </span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
