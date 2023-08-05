import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({image, rating, name, cuisines}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + image} alt="card" />
      <h4>{rating}</h4>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};

export default RestaurantCard;
