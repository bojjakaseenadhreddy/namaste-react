import { IMG_URL } from "../../utils/constants";

const RestaurantListItemComponent = ({ restaurant }) => {
    return (
        <div className='restaurant-list-item'>
            <img className='restaurant-list-item-banner' src={IMG_URL} />
            <div className='restaurant-list-item-content'>
                <p className='restaurant-name'>{restaurant.restaurantName}</p>
                <p className='price-for-two'>Price For Two - ${restaurant.costForTwo}</p>
                <p className='rating'>Rating {restaurant.rating}</p>
            </div>
        </div>
    )
}

export default RestaurantListItemComponent;