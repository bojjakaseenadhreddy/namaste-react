import SearchComponent from "./SearchComponent";
import RestuarantsContainerComponent from "../restaurant/RestuarantsContainerComponent";
const BodyComponent = () => {
    return (
        <main className='body-content'>
            {/* <SearchComponent /> */}
            <RestuarantsContainerComponent />
        </main>
    )
}

export default BodyComponent;