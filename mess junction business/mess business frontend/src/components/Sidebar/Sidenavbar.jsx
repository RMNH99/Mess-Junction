import "./Sidenavbar.css"

import SideBar from "./SideBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import Analitics from "../../pages/Analitics";
import Messages from "../../pages/Messages";
import Help from "../../pages/Help";
import Signout from "../../pages/Signout";
import Forgetpassroute from "../../pages/change_pass/Forgerpassroute";

import Setting from "../../pages/Setting";
import Changepassword from "../../pages/ChangePassword";
import Updateprofile from "../../pages/UpdateProfile";
import Updatelocation from "../../pages/UpdateLocation";
import Status from "../../pages/Status";
import Addalbum from "../../pages/Add_Album";

const SidebarMenu =(props)=>{
    return (<>
        <Router>
          <SideBar>
            <Routes>
              <Route  path="/additems" element={<Home mo_no={props.lidmo_no}/>} />
              <Route path="/Analitics" element={<Analitics />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/help" element={<Help />} />
          
              <Route path="/Signout" element={<Signout setAuth={props.setAuth}/>} />
              <Route exact path="/settings" element={<Setting />} />
              <Route path="/status" element={<Status mo_no={props.lidmo_no}/>} />

            {/*************************** Setting *****************************************  */}
            <Route path="/settings/change_password" element={<Changepassword />} />
            <Route path="/settings/update_location" element={<Updatelocation />} />
            <Route path="/settings/update_profile" element={<Updateprofile />} />
            <Route path='/settings/change_password/forgetpassword' element={<Forgetpassroute/>}/>
            <Route path="/settings/addAlbum" element={<Addalbum mo_no={props.lidmo_no}/>} />
    
            {/* ******************************************************************* */}
              <Route path="*" element={<> not found</>} />
            </Routes>
          </SideBar>
        </Router>
        </>
      );

}
export default SidebarMenu;