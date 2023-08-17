"use client";
import React from "react";
import Link from "next/link";

class Error503 extends React.Component{
	render(){	
		return (
			<div className="row justify-content-center align-items-center h-80">
				<div className="col-md-5">
					<div className="form-input-content text-center error-page">
					<h1 className="error-text font-weight-bold">503</h1>
					<h4>
						<i className="fa fa-times-circle text-danger" /> Service
						Unavailable
					</h4>
					<p>Sorry, we are under maintenance!</p>
					<div>
						<Link className="btn btn-primary" href="/">
							Back to Home
						</Link>
					</div>
					</div>
				</div>
			</div>
		);
	}	
};

export default Error503;
