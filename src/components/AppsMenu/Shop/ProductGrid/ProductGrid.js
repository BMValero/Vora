"use client";
import dynamic from "next/dynamic.js";
import React, { Fragment } from "react";
// import Products from "./Products";
const Products = dynamic(() => import("./Products"), { ssr: false });

/// Data
import productData from "../productData";
// const productData = dynamic(() => import("../productData"), { ssr: false });
import PageTitle from "../../../../layouts/PageTitle";

const ProductGrid = () => {
  return (
    <Fragment>
      <PageTitle
        headingPara="Your business dashboard template"
        activeMenu="Blank"
        motherMenu="Layout"
      />
      <div className="row">
        {productData.map((product) => (
          <Products key={product.key} product={product} />
        ))}
      </div>
    </Fragment>
  );
};

export default ProductGrid;
