import React from "react";
import Product from "./Product";

function Products(props) {
  const items = props.objects;
  return (
    <div className="container my-3">
      {items.map((item) => {
        return (
          <div key={item.id}>
            <Product item={item}/>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
