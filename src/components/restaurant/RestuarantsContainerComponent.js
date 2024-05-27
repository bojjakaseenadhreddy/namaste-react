import { useState } from "react";
import { DATA_OBJ } from "../../utils/constants";
import RestaurantListComponent from "./RestaurantListComponent";
const RestuarantsContainerComponent = () => {
    const [restaurants, setRestaurants] = useState(DATA_OBJ);
    console.log(restaurants);

    return (
        <div className='restaurants-container'>
            <button onClick={() => {
                const filteredRestaurants = restaurants.filter((r) => r.rating > 4);
                setRestaurants(filteredRestaurants);
            }
            } >Top rated restaurants</button>
            <RestaurantListComponent restaurants={restaurants} />
        </div>
    )
}
export default RestuarantsContainerComponent;