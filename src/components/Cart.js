import React, { useEffect, useState } from "react";

function Cart(props) {
  const cart = props.cartItems;
  const [currentCart, setCurrentCart] = useState([]);

  useEffect(() => {
    populateCart();
    // eslint-disable-next-line
  }, []);

  const populateCart = () => {
    for (let i = 0; i < cart.length; i++) {
      getProduct(cart[i].product_id);
    }
  };

  const getProduct = async (val) => {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${val}`
    );
    const data = await response.json();
    const obj = {
      title: data.title,
      id: data.id,
      price: data.price,
      pic: data.category.image,
      description: data.description,
    };
    setCurrentCart((current) => [...current, obj]);
  };

  return (
    <div className="container">
      {currentCart.map((item, i) => {
        return (
          <div className="my-3" key={i}>
            <p>{JSON.stringify(item.title)}</p>
            <p>${JSON.stringify(item.price)}</p>
            <button className="btn btn-warning">Remove from cart</button>
          </div>
        );
      })}
      <div className="container text-center">
        <button className="btn btn-danger">Delete entire cart</button>
      </div>
    </div>
  );
}

export default Cart;
