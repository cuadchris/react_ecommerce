import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";

import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import { React, useEffect, useState } from "react";
import ProductDetails from "./components/ProductDetails";
import { onSnapshot, query, where } from "firebase/firestore";
import { colRef } from "./components/firebase";
import Cart from "./components/Cart";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated } = useAuth0();

  const [objects, setObjects] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (isAuthenticated) {
      const q = query(colRef, where("user_id", "==", user.email));

      onSnapshot(q, (snapshot) => {
        let items = [];
        snapshot.docs.forEach((doc) => {
          items.push({ ...doc.data(), id: doc.id });
          // setCartItems([doc.data()]);
        });
        setCartItems(items);
      });
    }

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
  }, [isAuthenticated]);

  return (
    <div>
      <NavBar length={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="products" element={<Products objects={objects} />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="cart" element={<Cart cartItems={cartItems} />}></Route>
        <Route path="product/:id" element={<ProductDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
