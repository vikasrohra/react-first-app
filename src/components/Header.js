import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import Logo from '../assets/img/foodvilla.png';
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

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

  const {user} = useContext(UserContext);

  return (
    <div className="flex">
      <Title />
      <div className="nav-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/instamart">Instamart</Link></li>
          <li>Cart</li>
        </ul>
      </div>
      {isOnline ? "Online" : "Offline"}
      <h1 className="font-bold text-red-300 p-2">{user.name}</h1>
      {!isLoggedIn && <button onClick={() => setIsLoggedIn(true)}>Login</button>}
      {isLoggedIn && <button onClick={() => setIsLoggedIn(false)}>Logout</button>}
    </div>
  );
};

export default Header;
