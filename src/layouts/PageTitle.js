import React from "react";
import Link from "next/link";

const PageTitle = ({ headingPara, motherMenu, activeMenu }) => {
  return (
    <div className="page-titles">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link href="#">{motherMenu}</Link>
        </li>
        <li className="breadcrumb-item active">
          <Link href="#">{activeMenu}</Link>
        </li>
      </ol>
    </div>
  );
};

export default PageTitle;
