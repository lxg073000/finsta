import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import FirebaseContext from "../context/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import * as ROUTES from "../constants/routes";

const SignUp = () => {
  const history = useHistory();
  const { fireAuth, fireDB } = useContext(FirebaseContext);

  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignup = async (event) => {
    event.preventDefault();
    try {
      const userRef = await createUserWithEmailAndPassword(
        fireAuth,
        emailAddress,
        password
      );

      setDoc(doc(fireDB, `users/${userRef.user.uid}`), {
        username,
        fullName,
        emailAddress,
      });

      history.push(ROUTES.DASHBOARD);
    } catch (error) {
      setEmailAddress("");
      setPassword("");
      setError(`Email Already in Use`);
      console.log(error);
    }
  };

  useEffect(() => {
    document.title = "Finsta - Sign Up";
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
          <form onSubmit={handleSignup} action="POST">
            <input
              type="text"
              className="w-full mr-3 mb-2 py-5 px-3 h-2 border rounded border-gray-primary"
              aria-label="enter your username"
              placeholder="Username"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
            <input
              type="text"
              className="w-full mr-3 mb-2 py-5 px-3 h-2 border rounded border-gray-primary"
              aria-label="enter your full name"
              placeholder="Full Name"
              onChange={({ target }) => setFullName(target.value)}
              value={fullName}
            />
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
              disabled={isInvalid}
              className={`w-full h-8 rounded bg-blue-medium text-white font-bold ${
                isInvalid && "opacity-50 cursor-auto"
              }`}
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="flex w-full justify-center p-4 border rounded border-gray-primary">
          <p className="text-sm">
            {`Already have an account? `}
            <Link to={ROUTES.LOGIN} className="font-bold text-blue-medium">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
