import React from "react";
import Link from "next/link";
import Image from "next/image";

const SingleProductList = (props) => {
  const { previewImg, price, rating, availability, productCode, brand, des } =
    props.product;
  return (
    <div className="col-lg-12 col-xl-6">
      <div className="card">
        <div className="card-body">
          <div className="row m-b-30">
            <div className="col-md-5 col-xxl-12">
              <div className="new-arrival-product mb-4 mb-xxl-4 mb-md-0">
                <div className="new-arrivals-img-contnent">
                  <Image
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="img-fluid w-100"
                    src={previewImg}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-7 col-xxl-12">
              <div className="new-arrival-content position-relative">
                <h4>
                  <Link href="/ecom-product-detail">
                    Solid Women's V-neck Dark T-Shirt
                  </Link>
                </h4>
                <p className="price">${price}</p>
                <p>
                  Availability:
                  <span className="item">
                    {" "}
                    {availability}{" "}
                    <i className="fa fa-check-circle text-success"></i>
                  </span>
                </p>
                <p>
                  Product code:
                  <span className="item"> {productCode}</span>
                </p>
                <p>
                  Brand: <span className="item">{brand}</span>
                </p>
                <p className="text-content">{des}</p>
                <div className="comment-review star-rating text-right">
                  {rating}
                  <span className="review-text">(34 reviews) /</span>
                  <Link className="product-review" href="#">
                    Write a review?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductList;
