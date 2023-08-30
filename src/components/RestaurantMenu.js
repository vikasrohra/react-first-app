import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const { id } = useParams();

    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        getRestaurantData();
    }, []);

    const getRestaurantData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.1893584&lng=73.17719939999999&restaurantId=" + id);
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
        setMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
    }

    return !restaurant ? <Shimmer /> : (
        <div className="restaurant">
            <div>
                <h1>Restaurant Id: {id}</h1>
                <h2>{restaurant?.name}</h2>
                <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
                <h2>{restaurant?.areaName}</h2>
                <h2>{restaurant?.city}</h2>
                <h2>{restaurant?.avgRating} stars</h2>
                <h2>{restaurant?.cuisines?.join(", ")}</h2>
                <h2>{restaurant?.costForTwoMessage}</h2>
            </div>
            <div>
                <ul>
                    {menu?.map(item => {
                        return <li key={item?.info?.id}>{item?.info?.name}</li>
                    })}
                </ul>
            </div>
        </div> 
    )
}

export default RestaurantMenu;