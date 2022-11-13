// import logo from './logo.svg';
// import './App.css';
// import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
// import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import { React, useEffect, useState } from "react";

function App() {
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    // let clothesObjects = [];

    const getRandomInt = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    };

    const populateClothes = () => {
      const ids = [];
      while (ids.length < 5) {
        const i = getRandomInt(5, 199);
        if (!ids.includes(i)) {
          ids.push(i);
          getProduct(i);
        }
      }
    };

    const getProduct = async (val) => {
      const response = await fetch(
        `https://api.escuelajs.co/api/v1/products/${val}`
      );
      const data = await response.json();
      const obj = {
        price: data.price,
        pic: data.category.image,
        description: data.description,
      };
      setObjects((current) => [...current, obj]);
    };
    populateClothes();
  }, []);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<Products objects={objects} />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
