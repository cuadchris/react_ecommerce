import React from "react";
import Product from "./Product";

function Products(props) {
  const items = props.objects;
  return (
    <div>
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
