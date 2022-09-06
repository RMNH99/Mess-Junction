import './MainHome.css';
import logo from './../../../img/logo.png'
const MainHome =()=>{
    return (
        <div className='grid'>
        <div className='displayFlex'>
            <div className='Mbox1'>
                <div>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h2>
                <br />
                <p>Facilis necessitatibus aliquid nesciunt alias amet excepturi tenetur voluptate?</p>
                <br />
                <p>Debitis ipsa tenetur ducimus pariatur, fugiat unde dolorum odio deserunt? Quod. Natus, accusantium. </p>
                </div>
            </div>
            <div className='displyFloat' >
               <img src={logo} alt="logo" />
            </div>
            
        </div>
        </div>
    );
}
export default MainHome;