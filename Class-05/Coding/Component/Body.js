import React, { useState } from "react";
import Resturant from "./ResturantCard";
import { restaurantList } from "../constant";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [restaurants, setRestaurants] = useState(restaurantList);

    return (
        <>
            <div id="search-bar">
                <input
                    type="text"
                    placeholder="Search a restaurant you want..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                ></input>
                <button
                    onClick={() => {
                        const data = filterData(searchText, restaurants);
                        setRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            <div className="restaurant-list">
                {restaurants.map((restaurant) => {
                    return <Resturant key={restaurant.data.id} {...restaurant.data} />;
                })}
            </div>
        </>

    )
}

export default Body