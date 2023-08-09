import React, { useState } from 'react'
import "./Home.css"
import Banner from '../pages/Banner/Banner'
import Menu from '../pages/Menu/Menu'
import { Link } from 'react-router-dom'
// import { swiggy_api_URL } from '../contants/data'
// import useResData from '../hooks/useResData'
import { filterData } from '../contants/helper'
import WorkingPage from '../pages/WorkingPage/WorkingPage'
import Payment from '../pages/Payments/Payment'
import Shimmer from './Shimmer/Shimmer'
import useResData from '../hooks/useResData'
import { swiggy_api_URL } from '../contants/data'


const Home = () => {
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const [allRestaurants, filteredRes] = useResData(swiggy_api_URL)

    const searchData = (searchText, restaurants) => {
        if (searchText !== "") {
            // console.log("restaurants ", restaurants)
            const data = filterData(searchText, restaurants);
            setFilteredRestaurants(data);
            setErrorMessage("");
            if (data?.length === 0) {
                setErrorMessage(
                    `Sorry, we couldn't find any results for "${searchText}"`
                );
            }
        } else {
            setErrorMessage("");
            setFilteredRestaurants(restaurants);
        }
    };

    // console.log(filteredRes[0]?.info)

    return (
        <>
            <div className="container-home">
                <div className='wrapper-data'>
                    <div className='crausel-item'>
                        <Banner />
                    </div>
                    {/* Search Item */}
                    <div className="search_container" data-testid="search-btn">
                        <input
                            type="text"
                            data-testid="input-data"
                            placeholder='Search your food item'
                            value={searchText}
                            onChange={(e) => {
                                setSearchText(e.target.value);
                                searchData(e.target.value, allRestaurants);
                            }}
                        />
                        <button onClick={() => { searchData(searchText, allRestaurants) }}>Let's Go</button>
                    </div>
                    {/* Sub Title  */}
                    <div className="items">
                        <h1>What's Your mood just click and You may <span style={{ color: 'red' }}>GO </span></h1>
                    </div>
                    {/* Food Menu Items  */}
                    <div className="food_items" data-testid="data-list">
                        {
                            allRestaurants?.length === 0 && filteredRes?.length === 0 ? <Shimmer /> : (
                                <div className="restaurant-list" >
                                    {errorMessage}
                                    {
                                        (filteredRestaurants === null ? filteredRes : filteredRestaurants).map((restaurant) => {
                                            return (
                                                <Link to={`/resturant/${restaurant?.info?.id}`} >
                                                    <Menu  {...restaurant?.info} />
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>

                    {/* How its Works........... */}
                    <div>
                        <WorkingPage />
                    </div>

                    {/* Payment  */}
                    <div>
                        <Payment />
                    </div>


                </div>
            </div>
        </>
    )
}

export default Home