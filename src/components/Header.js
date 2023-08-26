import { useState } from "react";

const Title = () => (
  <a href="/">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx76pUGIu1KXqWiqRHteqox-vTDYnsMp6PQ&usqp=CAU"
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
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
      {!isLoggedIn && <button onClick={() => setIsLoggedIn(true)}>Login</button>}
      {isLoggedIn && <button onClick={() => setIsLoggedIn(false)}>Logout</button>}
    </div>
  );
};

export default Header;
