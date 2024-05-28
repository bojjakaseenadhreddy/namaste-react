import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";
import {useSelector} from 'react-redux'
const HeaderComponent = () => {

    const cartItems = useSelector((store)=> store.cart.items);
    return (
        <header className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL}></img>
            </div>
            <nav className='nav-items'>
                <ul>
                    <li >
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" >About US</Link>
                    </li>
                    <li>Contact US</li>
                    <li>Cart ({cartItems.length} items)</li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent;