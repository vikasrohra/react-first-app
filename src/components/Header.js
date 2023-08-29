import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from '../assets/img/foodvilla.png';

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
      {!isLoggedIn && <button onClick={() => setIsLoggedIn(true)}>Login</button>}
      {isLoggedIn && <button onClick={() => setIsLoggedIn(false)}>Logout</button>}
    </div>
  );
};

export default Header;
