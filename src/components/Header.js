import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from '../assets/img/foodvilla.png';
import useOnline from "../utils/useOnline";

const Title = () => (
  <a href="/">
    <img
      src={Logo}
      alt="logo"
      className="logo"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  return (
    <div className="header">
      <Title />
      <div className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      {isOnline ? "Online" : "Offline"}
      {!isLoggedIn && <button onClick={() => setIsLoggedIn(true)}>Login</button>}
      {isLoggedIn && <button onClick={() => setIsLoggedIn(false)}>Logout</button>}
    </div>
  );
};

export default Header;
