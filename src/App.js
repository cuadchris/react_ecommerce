// import logo from './logo.svg';
// import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="products" element={<Products />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="signin" element={<SignIn/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
