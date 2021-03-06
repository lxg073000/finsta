import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import * as ROUTES from "../constants/routes";
import FirebaseContext from "../context/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const history = useHistory();
  const { firebase, fireAuth, fireDB } = useContext(FirebaseContext);

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(fireAuth, emailAddress, password);
      console.log(fireAuth.currentUser);
      history.push(ROUTES.DASHBOARD);
    } catch (err) {
      setEmailAddress("");
      setPassword("");
      setError("Invalid Username or Password");
      console.log(fireAuth.currentUser);
    } finally {
      console.log(firebase, fireDB, fireAuth, error);
    }
  };
  useEffect(() => {
    document.title = "Finsta - Login";
  }, []);
  return (
    <div className="container flex mx-auto max-w-screen-md h-screen items-center">
      <div className="flex w-3/5">
        <img src="/images/iphone-with-profile.jpg" alt="iphone with profile" />
      </div>
      <div className="flex flex-col w-2/5">
        <div className="flex flex-col justify-center items-center p-4 mb-4 bg-white border border-gray-primary rounded">
          <h1 className="flex-col w-full justify-center items-center text-center">
            <img
              src="/images/logo.png"
              alt="Instagram"
              className="mx-auto w-6/12 mb-4 mt-2"
            />
            {error && <p className="text-xs text-red-primary mb-4">{error}</p>}
          </h1>
          <form onSubmit={handleLogin} action="POST">
            <input
              type="text"
              className="w-full mr-3 mb-2 py-5 px-3 h-2 border rounded border-gray-primary"
              aria-label="enter your email address"
              placeholder="Email Address"
              onChange={({ target }) => setEmailAddress(target.value)}
              value={emailAddress}
            />
            <input
              type="password"
              className="w-full mr-3 mb-2 py-5 px-3 h-2 border rounded border-gray-primary"
              aria-label="enter your password"
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
              value={password}
            />
            <button
              className={`w-full h-8 rounded bg-blue-medium text-white font-bold ${
                isInvalid && "opacity-50 cursor-auto"
              }`}
            >
              Log In
            </button>
          </form>
        </div>
        <div className="flex w-full justify-center p-4 border rounded border-gray-primary">
          <p className="text-sm">
            {`Don't have an account? `}
            <Link to={ROUTES.SIGN_UP} className="font-bold text-blue-medium">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
