import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function Home() {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="container text-center">
      {isAuthenticated ? (
        <h4>Account: {user.email}</h4>
      ) : (
        <h4>No user logged in.</h4>
      )}
    </div>
  );
}

export default Home;
