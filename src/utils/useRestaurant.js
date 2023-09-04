import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (id) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantData();
    }, []);

    const getRestaurantData = async () => {
        const data = await fetch(FETCH_MENU_URL + id);
        const json = await data.json();
        setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    }
    
    return restaurant;
}

export default useRestaurant;