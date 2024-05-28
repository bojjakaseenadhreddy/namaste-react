import SearchComponent from "./SearchComponent";
import RestuarantsContainerComponent from "../restaurant/RestuarantsContainerComponent";
import useRestaurantMenu from '../../utils/hooks/useRestaurantMenu'
const BodyComponent = () => {
    const data = useRestaurantMenu();
    debugger
    return (
        <main className='body-content'>
            {/* <SearchComponent /> */}
            <RestuarantsContainerComponent />
        </main>
    )
}

export default BodyComponent;