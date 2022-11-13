// import logo from './logo.svg';
// import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import SignIn from "./components/SignIn";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <p style={{ fontSize: "1.5rem" }}>Please Login.</p>
          <LoginButton />
        </div>
      ) : (
        <div>
          <LogoutButton />
          <SignIn />
        </div>
      )}
    </div>
  );
}

export default App;
