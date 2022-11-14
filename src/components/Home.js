import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import '../styles/home.css';

function Home() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="container text-center">
      {isAuthenticated ? (

        <h1>Welcome {user.email}!</h1>
        
      ) : (
        <h4>No user logged in.</h4>
      )}
    </div>
  );
}

export default Home;
