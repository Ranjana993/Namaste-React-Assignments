import React, { useEffect, useState } from "react";
import Resturant from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
import { filterData } from "../../helper";
import { swiggy_api_URL } from "../../constant";
import useResData from "../hooks/useResData";



const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [allRestaurants, filteredRestaurant] = useResData(swiggy_api_URL) // custom hook from useRes
    const isOnline = useOnline()

    if (!isOnline) {
        return <h1> 🔴 You are offline </h1>
    }

console.log(allRestaurants)
    
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
            <div id="" className="my-10 mx-5 ">
                <input
                className="border p-2 w-[40%] rounded-md "
                    type="text"
                    placeholder="Search a restaurant you want..."
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                        searchData(e.target.value, allRestaurants);
                    }}
                />
                <button className="bg-green-600 text-white w-40 p-2.5 rounded-xl " onClick={() => { searchData(searchText, allRestaurants) }} >Search </button>
            </div>
            {errorMessage}
            {
                allRestaurants?.length === 0 && filteredRestaurant?.length === 0 ? <Shimmer /> : (
                    <div className="flex flex-row flex-wrap m-auto">
                        {
                            (filteredRestaurants === null ? filteredRestaurant : filteredRestaurants)?.map((restaurant) => {
                                return (
                                    <Link to={`/resturant/${restaurant?.data?.id}`} key={restaurant?.data?.id}>
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