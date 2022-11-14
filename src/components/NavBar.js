import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function NavBar(props) {
  const cart = props.length;
  const { isAuthenticated } = useAuth0();
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-link">
                Products
              </Link>
            </li>
            {!isAuthenticated ? (
              <li className="nav-item">
                <LoginButton />
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <LogoutButton />
                </li>
                <li className="nav-item mx-5 my-1 fa-lg">
                  <Link to="/cart">
                    <button
                      type="button"
                      className="btn btn-primary position-relative"
                    >
                      <i className="fa-solid fa-bag-shopping"></i>
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart}
                      </span>
                    </button>
                  </Link>
                  {/* <i className="fa-solid fa-bag-shopping"></i> */}
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
