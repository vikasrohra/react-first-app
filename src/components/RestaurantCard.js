import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({cloudinaryImageId, avgRatingString, name, cuisines}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="card" />
      <h4>{avgRatingString}</h4>
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
    </div>
  );
};

export default RestaurantCard;
