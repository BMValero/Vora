"use client";
import React from "react";
import Link from "next/link";

const Error404 = () => {
   return (
      <div className="row justify-content-center  align-items-center h-80">
         <div className="col-md-5">
            <div className="form-input-content text-center error-page">
               <h1 className="error-text font-weight-bold">404</h1>
               <h4>
                  <i className="fa fa-exclamation-triangle text-warning" /> The
                  page you were looking for is not found!
               </h4>
               <p>
                  You may have mistyped the address or the page may have moved.
               </p>
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

export default Error404;
