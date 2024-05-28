import { IMG_URL } from "../../utils/constants";
import { useDispatch } from 'react-redux'
import { addItem } from '../../utils/slices/cartSlice'
const RestaurantListItemComponent = ({ restaurant }) => {
    const dispatch = useDispatch()
    const handleAddItem = () => {
        dispatch(addItem("data"))
    }
    return (
        <div className='restaurant-list-item'>
            <img className='restaurant-list-item-banner' src={IMG_URL} />
            <div className='restaurant-list-item-content'>
                <p className='restaurant-name'>{restaurant.restaurantName}</p>
                <p className='price-for-two'>Price For Two - ${restaurant.costForTwo}</p>
                <p className='rating'>Rating {restaurant.rating}</p>
                <button onClick={handleAddItem} >Add+</button>
            </div>
        </div>
    )
}

export default RestaurantListItemComponent;