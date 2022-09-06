import UserHome from "./userHome/UserHome";
import UserNavbar from "./userNavbar/UserNavber";
import MessageCompo from "./messageCompo/MessageCompo"
import BusiProfile from "./userSideBusiProfile/BusiProfile";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { useState , useEffect} from "react";
import Bookmarks from "./userOptions/Bookmarks";
import Logout from "./userOptions/Logout";
import UserProfile from "./userOptions/UserProfile";
import BusiStatusLogic from "./busiStatus/BusiStatusLogic";

function UserMainCompo(props){
let [messId,setMessId]=useState();
    let latLong;
    latLong = {
                    latitude:18.490389,
                    longitude:73.819324
                }
    // to get location
    let[location,setLocation]=useState(true)
    // navigator.geolocation.getCurrentPosition(function(position) {
    //     if(position){   
    //          latLong = {
    //             latitude:position.coords.latitude,
    //             longitude:position.coords.longitude
    //         }
    //         console.log(latLong)

    //         setLocation(true);
    //     }
    //   });
      
    return(
        location ? <div>  
            <BrowserRouter>
            <UserNavbar/>
                <Routes>
                    <Route path="/userProfile" element={ <UserProfile userDetailsMain={props.auth[1]}/>}/>
                    <Route path="/messages" element={ <MessageCompo/>}/>
                    <Route path="/userhome" element={ <UserHome latLong={latLong} userDetailsMain={props.auth[1]} setMessId={setMessId}/>}/>
                    <Route path={"/busipro/status"} element={ <BusiStatusLogic messId={messId}setMessId={setMessId} />}/>
                    <Route path={"/busipro"} element={ <BusiProfile setMessId={setMessId} userDetailsMain={props.auth[1]} messId={messId} />}/>
                    <Route path="/bookmarks" element={<Bookmarks setMessId={setMessId} userDetailsMain={props.auth[1]}  messId={messId} /> }/>
                    <Route path="/logout" element={<Logout setAuth={props.setAuth} />}/>   
                </Routes>
            </BrowserRouter>
        </div>
        :
        <h1 style={{"text-align": "center","margin-top":"200px" }}>please give location access to see nearby mess</h1> 
    )
}

export default UserMainCompo;