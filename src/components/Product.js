import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  const item = props.item;
  return (
    <div>
      <h4>{item.title}</h4>
      <Link to={`/product/${item.id}`}>
        <button className="btn btn-warning">See Item</button>
      </Link>
      <hr />
    </div>
  );
}

export default Product;
