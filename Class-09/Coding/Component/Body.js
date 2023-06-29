import React, { useEffect, useState } from "react";
import Resturant from "./ResturantCard";
import { swiggy_api_URL } from "../constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../helper";
import useResData from "../hooks/useResData";
import useOnline from "../hooks/useOnline";



const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [allRestaurants, filteredRes] = useResData(swiggy_api_URL) // custom hook from useRes 
    const isOnline = useOnline()

    if (!isOnline) {
        return <h1> 🔴 You are offline </h1>
    }

    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
            const data = filterData(searchText, restaurants);
            setFilteredRestaurants(data);
            setErrorMessage("");
            if (data.length === 0) {
                setErrorMessage(
                    `Sorry, we couldn't find any results for "${searchText}"`
                );
            }
        } else {
            setErrorMessage("");
            setFilteredRestaurants(restaurants);
        }
    };

    return (
        <>
            <div id="search-bar">
                <input
                    type="text"
                    placeholder="Search a restaurant you want..."
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        searchData(e.target.value, allRestaurants);
                    }}
                />
                <button onClick={() => { searchData(searchText, allRestaurants) }} >Search </button>
            </div>
            {errorMessage}
            {
                allRestaurants?.length === 0 && filteredRes?.length === 0 ? <Shimmer /> : (
                    <div className="restaurant-list">
                        {
                            (filteredRestaurants === null ? filteredRes : filteredRestaurants).map((restaurant) => {
                                return (
                                    <Link to={`/resturant/${restaurant?.data.id}`} key={restaurant?.data.id}>
                                        <Resturant  {...restaurant.data} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                )
            }
        </>
    )
}

export default Body