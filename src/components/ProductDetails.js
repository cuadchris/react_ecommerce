import { useAuth0 } from "@auth0/auth0-react";
import { addDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { colRef } from "./firebase";

function ProductDetails() {
  const { id } = useParams();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [productId, setProductId] = useState();
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    const getItem = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      const data = await response.json();
      setTitle(data.title);
      setProductId(data.id);
      setDescription(data.description);
      setImage(data.category.image);
      setPrice(data.price);
    };
    getItem();
  }, []);

  const addToCart = () => {
    addDoc(colRef, {
      user_id: user.email,
      product_id: productId,
    });
    // alert("Item added.");
  };

  return (
    <div className="container text-center my-5">
      <div className="row">
        <div className="col-md-6">
          <img className="img-thumbnail" src={image} alt="Logo" />
        </div>
        <div className="col-md-6">
          <h3>{title}</h3>
          <p className="my-5">{description}</p>
          <p className="my-5">${price}.99</p>
          {isAuthenticated ? (
            <button onClick={addToCart} className="btn btn-primary">
              Add to Cart
            </button>
          ) : (
            <small className="text-muted"> Sign in to add to cart</small>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
