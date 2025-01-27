import "./Product.css";
import { Link } from "react-router-dom";
import React from 'react';


const Product = ({ imageUrl, description, price, name, productId }) => {
  console.log('gk'+imageUrl, description, price, name, productId )
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">RS.{price}</p>

        <Link to={`/product/${productId}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
