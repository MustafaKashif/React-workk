import React, { memo } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import ProductDetails from "./ProductDetails";

const ProductCard = (props) => {
  const { Name, Price, pid, image, Description } = props;
  return (
    <div className="card">
      <h2>{Name}</h2>
      <p>{Price}</p>
      <img
        src={image === null ?  "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg" : image }
      />
      <p>{Description}</p>
      <Link to={`/product/${pid}`}>View Details</Link>
    </div>
  );
};

export default memo(ProductCard);
