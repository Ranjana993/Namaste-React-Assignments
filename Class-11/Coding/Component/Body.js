import React, { useEffect, useState } from "react";
import Resturant from "./ResturantCard";
import { restaurantList, swiggy_api_URL } from "../constant";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
        restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
}

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    const getData = async () => {
        try {
            const data = await fetch(swiggy_api_URL);
            const json = await data.json();
            setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])


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
                        const data = filterData(searchText, allRestaurants);
                        setFilteredRestaurants(data);
                    }}
                >
                    Search
                </button>
            </div>
            {
                allRestaurants?.length === 0 ? <Shimmer /> : (
                    <div className="restaurant-list">
                        {
                            filteredRestaurants.map((restaurant) => {
                                return <Link to={`/resturant/${restaurant?.data.id}`} key={restaurant?.data.id}> <Resturant  {...restaurant.data} /></Link>;
                            })
                        }
                    </div>
                )
            }
        </>
    )
}

export default Body