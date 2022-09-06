import logo from '../../../imgs/logo.png'
import './navbar.css'
import { NavLink,Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {

    // for the mobile screen 
    let[hamMenu, letHamMenu]=useState(false)
function slideMenu(){
letHamMenu(!hamMenu)
}

    return (

        <div>
        <div className='navbar' >
            <img id='logo' src={logo} alt="" />
            <div id="hamburger" onClick={slideMenu} class={hamMenu?"open":"openHam"}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul style={{"left":hamMenu?"0px":"-200px"}}>

                <NavLink onClick={ slideMenu} activeClassName="active" to="/">
                    <li>Home</li>
                </NavLink>

                <NavLink onClick={ slideMenu} activeClassName="active" to="/about" >
                    <li>About</li>
                </NavLink>

                <NavLink onClick={ slideMenu} activeClassName="active" to="/contact" >
                    <li>Contact</li>
                </NavLink>

                <Link onClick={ slideMenu} to="/login" >
                    <li id='loginBtn'>log In</li>
                </Link>

                <Link onClick={ slideMenu}  to="/signup" >
                    <li id='signupBtn'>Sign up</li>
                </Link>

            </ul>
          
            </div>
            <div class="voidNav"></div>
        </div>
    )
}
export default Navbar;