import React from "react";

function Products(props) {
  const objects = props.objects;
  return (
    <div>
      {objects.map((item, i) => {
        return (
          <div key={i}>
            <h2>price: {item.price}</h2>
            <h2>description: {item.description}</h2>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Products;
