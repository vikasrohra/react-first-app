import { RESTAURANT_LIST } from "../constants";
import RestaurantCard from './RestaurantCard';

const Body = () => {
  return (
    <div className="restaurant-list">
      {RESTAURANT_LIST.map((restaurant) => {
        return <RestaurantCard {...restaurant.data} key={restaurant.data.id} />;
      })}
    </div>
  );
};

export default Body;