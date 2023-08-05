import React from "react";
import ReactDOM from "react-dom/client";

// React Element - single line
const Title = () => (
  <a href="/">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNx76pUGIu1KXqWiqRHteqox-vTDYnsMp6PQ&usqp=CAU"
      alt="logo"
      className="logo"
    />
  </a>
);

// Component inside another component => Composing component
const Header = () => {
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
    </div>
  );
};

const restrauntList = [
  {
    data: {
      name: "My Family Restraunt",
      image: "ee5f8e06b300efc07c9fe3f4df40dfc4",
      cuisines: ["South India", "North Indian"],
      rating: "3.6",
    }    
  },
  {
    data: {
      name: "Domino's Pizza",
      image: "sno2ooxhnjkwldjkukmu",
      cuisines: ["Pizzas", "Italian"],
      rating: "4.0",
    }    
  },
];

const RestrauntCard = ({image, name, cuisines, rating}) => {
  return (
    <div className="card">
      <img
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + image}
        alt="card"
      />
      <h4>{rating}</h4>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="restraunt-list">
      {
        restrauntList.map(restraunt => {
          return <RestrauntCard {...restraunt.data} />
        })
      }
    </div>
  );
};

const Footer = () => {
  return <h4>Footer</h4>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
