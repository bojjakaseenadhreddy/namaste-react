import { Link } from "react-router-dom";
import { LOGO_URL } from "../../utils/constants";

const HeaderComponent = () => {
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
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent;