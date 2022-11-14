import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const item = props.item;
  return (
    <div>
      <h4>price: {item.price}</h4>
      <h4>description: {item.description}</h4>
      <h4>id: {item.id}</h4>
      <Link to={`/product/${item.id}`}>
        <button>see item</button>
      </Link>
      <hr />
    </div>
  );
}

export default Product;
