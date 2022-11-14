// import logo from './logo.svg';
// import './App.css';
// import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
// import Product from "./components/Product";
// import LoginButton from "./components/LoginButton";
// import LogoutButton from "./components/LogoutButton";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import { React, useEffect, useState } from "react";
import ProductDetails from "./components/ProductDetails";
import { getDocs, onSnapshot } from "firebase/firestore";
import { colRef } from "./components/firebase";
import Cart from "./components/Cart";

function App() {
  const [objects, setObjects] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // getDocs(colRef).then((snapshot) => {
    //   let items = [];
    //   snapshot.docs.forEach((doc) => {
    //     items.push({ ...doc.data(), id: doc.id });
    //     setCartItems((prev) => [...prev, doc.data()]);
    //   });
    // });

    onSnapshot(colRef, (snapshot) => {
      let items = [];
      snapshot.docs.forEach((doc) => {
        items.push({ ...doc.data(), id: doc.id });
        // setCartItems([doc.data()]);
      });
      setCartItems(items)
    })

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
        title: data.title,
        id: data.id,
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
      <NavBar length = {cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<Products objects={objects} />}></Route>
        {/* <Route path="product" element={<Product />}></Route> */}
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="cart" element={<Cart cartItems={cartItems} />}></Route>
        <Route path="product/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
