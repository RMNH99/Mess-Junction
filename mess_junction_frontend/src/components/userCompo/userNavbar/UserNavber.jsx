import './userNavbar.css'
import logo from '../../../imgs/logo.png'
import homeImg from '../../../imgs/home.png'
import msgImg from '../../../imgs/message.png'
import profileImg from '../../../imgs/profile.png'
import {Link} from 'react-router-dom';

function UserNavbar(){

    return(
        <div>
        <div className='userNavbar'>
           <img id='logo' src={logo} alt="" />
            <ul className='navlist'>
               <Link to="/userhome">
                <li id='homeLogo'><img src={homeImg} alt="home" /></li>
                </Link> 

                <Link to="/messages">
                <li ><img src={msgImg} alt="message" /></li>
                </Link> 

                <li id='profileLogo'><img src={profileImg} alt="profile"/></li> 

                <ul className='profileHoverList'>     
                <Link to="/userProfile" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <li>My Profile</li>
                    </Link>

                    <Link to={"/bookmarks"} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <li>Bookmarks</li>
                    </Link>

                    <Link to="/logout" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <li>Logout</li>
                    </Link>
                    </ul>    
            </ul>
        </div>
        <div class="voidNav"></div>
        </div>
    )
}
export default UserNavbar;