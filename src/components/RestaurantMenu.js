import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () => {
    const { id } = useParams();

    const restaurant = useRestaurant(id);
        
    return !restaurant ? <Shimmer /> : (
        <div className="menu">
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
                    {/* {menu?.map(item => {
                        return <li key={item?.info?.id}>{item?.info?.name}</li>
                    })} */}
                </ul>
            </div>
        </div> 
    )
}

export default RestaurantMenu;