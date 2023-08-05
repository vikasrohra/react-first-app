import { useState } from "react";
import { RESTAURANT_LIST } from "../constants";
import RestaurantCard from './RestaurantCard';

const Body = () => {
  const [restaurants, setRestaurants] = useState(RESTAURANT_LIST);
  const [searchText, setSearchText] = useState("");

  const filterData = (searchText, restaurants) => {
    return restaurants.filter(restaurant => restaurant.data.name.includes(searchText));
  } 

  return (
    <>
      <div className="search-container">
        <input tyle="text" className="search-input" placeholder="Search" value={searchText} onChange={e => setSearchText(e.target.value)} />
        <button className="search-btn" onClick={() => {
          const data = filterData(searchText, restaurants);
          setRestaurants(data);
        }}>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;