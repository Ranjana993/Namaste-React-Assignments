import { useEffect, useState } from "react";
// import { swiggy_api_URL } from "../constant";

const useResData = (API_URL) =>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    useEffect(() => {
        getData()
    }, [])

    async function getData(){
        try {
            const response = await fetch(API_URL);
            // if response is not ok then throw new Error
            if (!response.ok) {
                const err = response.status;
                throw new Error(err);
            } else {
                const json = await response.json();
                // updated state variable restaurants with Swiggy API data
                setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
                setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    return [allRestaurants, filteredRestaurants]
}
export default useResData