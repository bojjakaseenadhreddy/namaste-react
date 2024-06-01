import SearchComponent from "./SearchComponent";
import RestaurantsContainerComponent from "../restaurant/RestaurantsContainerComponent";
import useRestaurantMenu from '../../utils/hooks/useRestaurantMenu'
const BodyComponent = () => {
    const data = useRestaurantMenu();
    return (
        <main className='body-content'>
            {/* <SearchComponent /> */}
            <RestaurantsContainerComponent />
        </main>
    )
}

export default BodyComponent;