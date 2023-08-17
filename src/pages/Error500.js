"use client";
import React from "react";
import Link from "next/link";

const Error500 = () => {
   return (
      <div className="row justify-content-center align-items-center h-80">
         <div className="col-md-5">
            <div className="form-input-content text-center error-page">
               <h1 className="error-text font-weight-bold">500</h1>
               <h4>
                  <i className="fa fa-times-circle text-danger" /> Internal
                  Server Error
               </h4>
               <p>You do not have permission to view this resource</p>
               <div>
                  <Link className="btn btn-primary" href="/">
                     Back to Home
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Error500;
