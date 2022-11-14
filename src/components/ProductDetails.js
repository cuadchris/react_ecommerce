import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const [item, SetItem] = useState();
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const { isAuthenticated } = useAuth0()

  useEffect(() => {
    const getItem = async () => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      const data = await response.json();
      setTitle(data.title);
      setDescription(data.description);
      setImage(data.category.image);
      setPrice(data.price);
    };
    getItem();
  }, []);

  //   {JSON.stringify(item.image)} !!!!!!!!!!
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
            <button className="btn btn-primary">Add to Cart</button>
          ):(
            <small className="text-muted"> Sign in to add to cart</small>
          )}
          
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
