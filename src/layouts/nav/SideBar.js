"use client";

import React, { Component } from "react";

/// Link
import Link from "next/link";
/// modal
import { Modal } from "react-bootstrap";

/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import { usePathname } from "next/navigation";

/// Menu
import MetisMenu from "metismenujs";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {
    //this.mm("dispose");
    this.mm.dispose();
  }
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  /// model box
  state = {
    // initial state
    show: false,
  };

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");

    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }

    btn.addEventListener("click", toggleFunc);

    //sidebar icon Heart blast
    var handleheartBlast = document.querySelector(".heart");

    function heartBlast() {
      return handleheartBlast.classList.toggle("heart-blast");
    }
    handleheartBlast.addEventListener("click", heartBlast);
  }
  render() {
    /// Path
    let path = this.props.pathName;
    path = path.split("/");
    path = path[path.length - 1];

    /// Active menu
    let deshBoard = [
        "",
        "projects",
        "contacts",
        "kanban",
        "calendar",
        "messages",
        //"analytics",
        //"companies",
        //"statistics",
      ],
      app = [
        "app-profile",
        "post-details",
        "app-calender",
        "email-compose",
        "email-inbox",
        "email-read",
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
      ],
      charts = [
        "chart-morris",
        "chart-chartjs",
        "chart-chartist",
        "chart-sparkline",
        "chart-peity",
      ],
      bootstrap = [
        "ui-accordion",
        "ui-badge",
        "ui-alert",
        "ui-button",
        "ui-modal",
        "ui-button-group",
        "ui-list-group",
        "ui-media-object",
        "ui-card",
        "ui-carousel",
        "ui-dropdown",
        "ui-popover",
        "ui-progressbar",
        "ui-tab",
        "ui-typography",
        "ui-pagination",
        "ui-grid",
      ],
      plugins = [
        "uc-select2",
        "uc-sweetalert",
        "uc-toastr",
        "uc-jqvmap",
        "uc-noui-slider",
        "uc-lightgallery",
      ],
      widget = ["widget"],
      forms = [
        "form-element",
        "form-wizard",
        "form-editor-summernote",
        "form-pickers",
        "form-validation-jquery",
      ],
      table = [
        "table-filtering",
        "table-sorting",
        "table-bootstrap-basic",
        "table-datatable-basic",
      ];

    return (
      <div className="dlabnav">
        <PerfectScrollbar className="dlabnav-scroll">
          <MM className="metismenu" id="menu">
            <li className={`${deshBoard.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" href="#">
                <i className="flaticon-381-networking"></i>
                <span className="nav-text">Dashboard</span>
              </Link>
              <ul>
                <li>
                  <Link
                    className={`${path === "" ? "mm-active" : ""}`}
                    href="/"
                    onClick={() => this.props.onClick3()}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "projects" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/projects"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "contacts" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/contacts"
                  >
                    Contacts
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "kanban" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/kanban"
                  >
                    Kanban
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "calendar" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="calendar"
                  >
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "messages" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="messages"
                  >
                    Messages
                  </Link>
                </li>
                {/* <li>
							<Link href="analytics">Analytics</Link>
							</li>
							<li>
							<Link href="review">Review</Link>
							</li>
							<li>
							<Link href="order">Order</Link>
							</li>
							<li>
							<Link href="order-list">Order List</Link>
							</li>
							<li>
							<Link href="customer-list">Customer List</Link>
							</li> */}
              </ul>
            </li>
            <li className={`${app.includes(path) ? "mm-active" : ""}`}>
              <Link className="has-arrow ai-icon" href="#">
                <i className="flaticon-381-television"></i>
                <span className="nav-text">Apps</span>
              </Link>
              <ul>
                <li>
                  <Link
                    className={`${path === "app-profile" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/app-profile"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "post-details" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/post-details"
                  >
                    Post Details
                  </Link>
                </li>
                <li>
                  <Link className="has-arrow" href="#">
                    {" "}
                    Email
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className={`${
                          path === "email-compose" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        href="/email-compose"
                      >
                        Compose
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "email-inbox" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        href="/email-inbox"
                      >
                        Inbox
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "email-read" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        href="/email-read"
                      >
                        Read
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className={`${path === "app-calender" ? "mm-active" : ""}`}
                    href="/app-calender"
                    onClick={() => this.props.onClick()}
                  >
                    Calendar
                  </Link>
                </li>
                <li>
                  <Link className="has-arrow" href="#">
                    Shop
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-product-grid" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        href="/ecom-product-grid"
                      >
                        Product Grid
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-product-list" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        href="/ecom-product-list"
                      >
                        Product List
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-product-detail" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        href="/ecom-product-detail"
                      >
                        Product Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-product-order" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        href="/ecom-product-order"
                      >
                        Order
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-checkout" ? "mm-active" : ""
                        }`}
                        href="/ecom-checkout"
                        onClick={() => this.props.onClick()}
                      >
                        Checkout
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-invoice" ? "mm-active" : ""
                        }`}
                        href="/ecom-invoice"
                        onClick={() => this.props.onClick()}
                      >
                        Invoice
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "ecom-customers" ? "mm-active" : ""
                        }`}
                        href="/ecom-customers"
                        onClick={() => this.props.onClick()}
                      >
                        Customers
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li
              className={`${charts.includes(path.slice(1)) ? "mm-active" : ""}`}
            >
              <Link className="has-arrow ai-icon" href="#">
                <i className="flaticon-381-controls-3"></i>
                <span className="nav-text">Charts</span>
              </Link>
              <ul>
                <li>
                  <Link
                    className={`${path === "chart-rechart" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/chart-rechart"
                  >
                    RechartJs
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "chart-float" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/chart-float"
                  >
                    Chart Float
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "chart-chartjs" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/chart-chartjs"
                  >
                    Chartjs
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "chart-chartist" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    href="/chart-chartist"
                  >
                    Chartist
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "chart-sparkline" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    href="/chart-sparkline"
                  >
                    Sparkline
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "chart-apexchart" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    href="/chart-apexchart"
                  >
                    Apexchart
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`${
                bootstrap.includes(path.slice(1)) ? "mm-active" : ""
              }`}
            >
              <Link className="has-arrow ai-icon" href="#">
                <i className="flaticon-381-internet"></i>
                <span className="nav-text">Bootstrap</span>
              </Link>
              <ul>
                <li>
                  <Link
                    className={`${path === "ui-accordion" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-accordion"
                  >
                    Accordion
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-alert" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-alert"
                  >
                    Alert
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-badge" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-badge"
                  >
                    Badge
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-button" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-button"
                  >
                    Button
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-modal" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-modal"
                  >
                    Modal
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "ui-button-group" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    href="/ui-button-group"
                  >
                    Button Group
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-list-group" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-list-group"
                  >
                    List Group
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "ui-media-object" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    href="/ui-media-object"
                  >
                    Media Object
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-card" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-card"
                  >
                    Cards
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-carousel" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-carousel"
                  >
                    Carousel
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-dropdown" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-dropdown"
                  >
                    Dropdown
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-popover" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-popover"
                  >
                    Popover
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "ui-progressbar" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    href="/ui-progressbar"
                  >
                    Progressbar
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-tab" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-tab"
                  >
                    Tab
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-typography" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-typography"
                  >
                    Typography
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-pagination" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-pagination"
                  >
                    Pagination
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "ui-grid" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/ui-grid"
                  >
                    Grid
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`${
                plugins.includes(path.slice(1)) ? "mm-active" : ""
              }`}
            >
              <Link className="has-arrow ai-icon" href="#">
                <i className="flaticon-381-heart"></i>
                <span className="nav-text">Plugins</span>
              </Link>
              <ul>
                <li>
                  <Link
                    className={`${path === "uc-select2" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/uc-select2"
                  >
                    Select 2
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "uc-noui-slider" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    href="/uc-noui-slider"
                  >
                    Noui Slider
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "uc-sweetalert" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/uc-sweetalert"
                  >
                    Sweet Alert
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "uc-toastr" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/uc-toastr"
                  >
                    Toastr
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "map-jqvmap" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/map-jqvmap"
                  >
                    Jqv Map
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "uc-lightgallery" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    href="/uc-lightgallery"
                  >
                    Light Gallery
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`${widget.includes(path.slice(1)) ? "mm-active" : ""}`}
            >
              <Link href="widget-basic" className="ai-icon">
                <i className="flaticon-381-settings-2"></i>
                <span className="nav-text">Widget</span>
              </Link>
            </li>
            <li
              className={`${forms.includes(path.slice(1)) ? "mm-active" : ""}`}
            >
              <Link className="has-arrow ai-icon" href="#">
                <i className="flaticon-381-notepad"></i>
                <span className="nav-text forms">Forms</span>
              </Link>
              <ul>
                <li>
                  <Link
                    className={`${path === "form-element" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/form-element"
                  >
                    Form Elements
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "form-wizard" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/form-wizard"
                  >
                    Wizard
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "form-editor-summernote" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    href="/form-editor-summernote"
                  >
                    Summernote
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "form-pickers" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/form-pickers"
                  >
                    Pickers
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "form-validation-jquery" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    href="/form-validation-jquery"
                  >
                    Jquery Validate
                  </Link>
                </li>
              </ul>
            </li>
            <li
              className={`${table.includes(path.slice(1)) ? "mm-active" : ""}`}
            >
              <Link className="has-arrow ai-icon" href="#">
                <i className="flaticon-381-network"></i>
                <span className="nav-text">Table</span>
              </Link>
              <ul>
                <li>
                  <Link
                    className={`${
                      path === "table-bootstrap-basic" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    href="/table-bootstrap-basic"
                  >
                    Bootstrap
                  </Link>
                </li>

                <li>
                  <Link
                    className={`${
                      path === "table-datatable-basic" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    href="/table-datatable-basic"
                  >
                    Datatable
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${
                      path === "table-filtering" ? "mm-active" : ""
                    }`}
                    onClick={() => this.props.onClick()}
                    href="/table-filtering"
                  >
                    Table Filtering
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${path === "table-sorting" ? "mm-active" : ""}`}
                    onClick={() => this.props.onClick()}
                    href="/table-sorting"
                  >
                    Table Sorting
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="has-arrow ai-icon" href="#">
                <i className="flaticon-381-layer-1"></i>
                <span className="nav-text">Pages</span>
              </Link>
              <ul>
                <li>
                  <Link href="/page-register">Register</Link>
                </li>
                <li>
                  <Link href="/page-login">Login</Link>
                </li>
                <li>
                  <Link className="has-arrow" href="#">
                    Error
                  </Link>
                  <ul>
                    <li>
                      <Link href="/page-error-400">Error 400</Link>
                    </li>
                    <li>
                      <Link href="/page-error-403">Error 403</Link>
                    </li>
                    <li>
                      <Link href="/page-error-404">Error 404</Link>
                    </li>
                    <li>
                      <Link href="/page-error-500">Error 500</Link>
                    </li>
                    <li>
                      <Link href="/page-error-503">Error 503</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/page-lock-screen">Lock Screen</Link>
                </li>
              </ul>
            </li>
          </MM>
          <div className="plus-box">
            <Link
              href="#"
              onClick={this.handleShow}
              className="add-menu-sidebar d-block"
              data-toggle="modal"
              data-target="#addOrderModalside"
            >
              + New Project
            </Link>
          </div>
          <div className="copyright">
            <p>
              <strong>Vora React Admin Dashboard</strong> © 2022 All Rights
              Reserved
            </p>
            <p>
              Made with <span className="heart"></span> by DexignLab
            </p>
          </div>
        </PerfectScrollbar>

        {/* <!-- Add Order -->  model click by new project button*/}
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          className="modal fade"
          id="addOrderModalside"
        >
          <div role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Project</h5>
                <button
                  type="button"
                  onClick={this.handleClose}
                  className="close"
                  data-dismiss="modal"
                >
                  <span>&times;</span>{" "}
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
        </Modal>
      </div>
    );
  }
}
const withHook = (Component) => {
  return (props) => {
    const pathname = usePathname();
    return <Component pathName={pathname} {...props} />;
  };
};
export default withHook(SideBar);
