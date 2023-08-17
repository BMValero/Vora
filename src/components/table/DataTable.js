"use client";
import dynamic from "next/dynamic.js";
import React, { Fragment } from "react";
import PageTitle from "../../layouts/PageTitle";

const BasicDatatable = dynamic(() => import("./BasicDatatable"), {
  ssr: false,
});
const SimpleDataTable = dynamic(() => import("./SimpleDataTable"), {
  ssr: false,
});
const ProfileDatatable = dynamic(() => import("./ProfileDatatable"), {
  ssr: false,
});
const FeesCollection = dynamic(() => import("./FeesCollection"), {
  ssr: false,
});
const PatientTable = dynamic(() => import("./PatientTable"), {
  ssr: false,
});
// import BasicDatatable from "./BasicDatatable";
// import SimpleDataTable from "./SimpleDataTable";
// import ProfileDatatable from "./ProfileDatatable";
// import FeesCollection from "./FeesCollection";
// import PatientTable from "./PatientTable";

const DataTable = () => {
  return (
    <Fragment>
      <PageTitle activeMenu="Datatable" motherMenu="Table" />
      <div className="row">
        <BasicDatatable></BasicDatatable>
        <SimpleDataTable></SimpleDataTable>
        <ProfileDatatable></ProfileDatatable>
        <FeesCollection></FeesCollection>
        <PatientTable></PatientTable>
      </div>
    </Fragment>
  );
};

export default DataTable;
