import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import App from "./Main";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

import { FaBehance, FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export const links = [
  {
    id: 1,
    url: "/Login",
    text: "Log in",
  },
  {
    id: 2,
    url: "/Signup",
    text: "Sign up",
  },
  {
    id: 3,
    url: "/App",
    text: "Home",
  },
  {
    id: 4,
    url: "/contact",
    text: "Contact",
  },
  {
    id: 5,
    url: "/about",
    text: "About",
  },
];

export const social = [
  {
    id: 1,
    url: "https://github.com/sayedhany",
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: "https://www.linkedin.com/in/sayed-hany-b30946192/",
    icon: <FaLinkedin />,
  },
];

function Data() {
  return (
    <div>

      {/* Navigation Link to App component */}
      <Link to="/Home" style={{ textDecoration: "none", color: "black" }}>
        <button>Home</button>
      </Link>

      {/* Navigation Link to LoginForm component */}
      <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
        <button>Log in</button>
      </Link>

            {/* Navigation Link to Signupform component */}
            <Link to="/Signup" style={{ textDecoration: "none", color: "black" }}>
        <button>Sign Up</button>
      </Link>

      {/* Routes */}
      <Switch>
        <Route exact path="/Home" component={App} />
        <Route path="/Login" component={LoginForm} />
        <Route path="/Signup" component={SignUpForm} />
      </Switch>
    </div>
  );
}

export default Data;

