import logo from '../../img/logo.png'
import './navbar.css'
import { NavLink,Link } from 'react-router-dom'

function Navbar() {
    return (
<div>
        <div className='navbar'>
            <img id='logo' src={logo} alt="" />
            <ul>

                <NavLink activeClassName="active" to="/">
                    <li>Home</li>
                </NavLink>

                <NavLink activeClassName="active" to="/about" >
                    <li>About</li>
                </NavLink>

                <NavLink activeClassName="active" to="/contact" >
                    <li>Contact</li>
                </NavLink>

                <Link to="/login" >
                    <li id='loginBtn'>log In</li>
                </Link>

                <Link  to="/signup" >
                    <li id='signupBtn'>Sign up</li>
                </Link>

            </ul>
        </div>
        <hr className='hr'/>
        </div>
    )
}
export default Navbar;