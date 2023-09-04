import { useEffect, useState } from "react";

import { RESTAURANT_LIST } from "../constants";
import RestaurantCard from './RestaurantCard';
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from '../utils/Helper';

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1893584&lng=73.17719939999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    // Optional Chaining
    setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  // Not render component (Early return)
  if(!allRestaurants) return null;  

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input type="text" className="search-input" placeholder="Search" value={searchText} onChange={e => setSearchText(e.target.value)} />
        <button className="search-btn" onClick={() => {
          const data = filterData(searchText, allRestaurants);
          setFilteredRestaurants(data);
        }}>Search</button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.length > 0 ? filteredRestaurants?.map((restaurant) => {
          return (
            <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        }) : <h1>No Restaurants found!</h1>}
      </div>
    </>
  );
};

export default Body;