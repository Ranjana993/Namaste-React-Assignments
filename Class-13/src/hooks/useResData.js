import { useEffect, useState } from "react";



const useResData = (API_URL) => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);


    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])

    async function getData() {
        try {
            const response = await fetch(API_URL);
            console.log("response " ,  response) ///////////////////////////////
            if (!response.ok) {
                const err = response.status;
                throw new Error(err);
            }
            else {
                const json = await response.json();
                console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

                setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants);
                setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements.infoWithStyle.restaurants);


                // setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
                // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
            }
        }
        catch (error) {
            console.log(error)
        }
    }


    return [allRestaurants, filteredRestaurants]
}
export default useResData