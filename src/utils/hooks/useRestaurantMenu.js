import { useState, useEffect } from 'react';
const URL = 'https://jsonplaceholder.typicode.com/posts'
const useRestaurantMenu = (restaurantId) => {

    const [menuData, setMenuData] = useState(null);
    const fetchMenuData = async () => {
        const data = await fetch(URL);
        const json = await data.json();
        setMenuData(json);
    }
    useEffect(() => {
        fetchMenuData();
    }, []);

    return menuData;
}

export default useRestaurantMenu;