import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";

export default function SignIn() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <p style={{ fontSize: "1.5rem" }}>Please Login.</p>
          <LoginButton />
        </div>
      ) : (
        <div>
          <h4>account: {user.email}</h4>
        </div>
      )}
    </div>
  );
}
