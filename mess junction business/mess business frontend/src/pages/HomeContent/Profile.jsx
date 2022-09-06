import "./Profile.css"
import Meal from "../../img/Meal.jpg"
import veg from '../../img/veg1.png'
import logo from '../../img/doodle1.png'
import logo2 from '../../img/logo.png'
import nonveg from '../../img/nonveg.png'
import vegnonveg from '../../img/Veg-nonveg.jpg'
import { Link} from "react-router-dom";
import { useEffect, useState } from "react"

const Profile = (props) =>{

  console.log(props.mo_no)
  let [busiProfile, setBusiProfile]=useState({});
  useEffect(() => {
    fetch("http://localhost:9092/sendMessProfile?messId="+props.mo_no,{
      method:"POST",
  })
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
            setBusiProfile(result);
        },
         (error) => {
         console.log(error);
        }
      )
  }, [])

  let vegicon=(busiProfile.veg);
  let vegImg;
  if(vegicon==="Veg"){
      vegImg = veg;
  }else if(vegicon==="Non-Veg"){
      vegImg = nonveg;
  }
  else{
    vegImg = vegnonveg;
  }

    return <div>
      <div className="Profile-icon-bar" >
        <div className="Profile-icon-bar-title" >
          <img className="Profile-icon-bar-title-img" src={logo2} alt="" /><p>Mess Junction</p>
        </div>
        <div className="Profile-title" >Profile
        </div>
        <div>
          <Link to="/settings/update_profile"><img className="Profile-icon" src={Meal} alt="profile icon" /></Link>
        </div>
      </div>
          <div className="desc-img-flex">
              <div class="box1">      
                      <div>
                          <img className="Bussiness_img" src={Meal} alt="Profile"></img>
                      </div>
                  
                      <div className="profdetail">
                          <h1>{busiProfile.mname}</h1>
                          <p>{busiProfile.veg} <img src={vegImg}  alt="vegicon" /><br/></p>
                          <p>{busiProfile.mtype}</p>
                            <p className="description">{busiProfile.description}
                             </p>
                      </div>
                      
                  </div>
                  <div className="logoimg"> <img className="doodle" src={logo} alt="" /></div>
             </div>
          </div> ;
}
export default Profile;