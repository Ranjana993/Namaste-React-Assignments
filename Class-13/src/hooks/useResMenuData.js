import { useEffect, useState } from "react";


const useResMenuData = (MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY, swiggy_menu_api_URL, id) => {
    const [restaurant, setRestaurant] = useState(null);
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => { getRestaurantInfo() }, []);

    async function getRestaurantInfo() {
        try {
            const response = await fetch(swiggy_menu_api_URL + id);
            const json = await response.json();
            console.log(json) ////////////////////////////////////////////////
            const restaurantData = json?.data?.cards?.map(x => x.card)?.find(x => x && x.card['@type'] === RESTAURANT_TYPE_KEY)?.card?.info || null;
            setRestaurant(restaurantData);

            // Set menu item data
            const menuItemsData = json?.data?.cards.find(x => x.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map(x => x.card?.card)?.filter(x => x['@type'] === MENU_ITEM_TYPE_KEY)?.map(x => x.itemCards).flat().map(x => x.card?.info) || [];

            // console.log(menuItemsData) ////////////////////////////////////////////////////////////

            const uniqueMenuItems = [];
            menuItemsData.forEach((item) => {
                if (!uniqueMenuItems.find(x => x.id === item.id)) {
                    uniqueMenuItems.push(item);
                }
            })
            setMenuItems(uniqueMenuItems);
        } catch (err) {
            setMenuItems([]);
            setRestaurant(null);
            console.log(err);
        }
    }
    return [restaurant, menuItems]
}

export default useResMenuData