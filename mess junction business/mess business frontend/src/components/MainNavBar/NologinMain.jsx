import Navbar from './Navbar';
import MainHome from './MainPageComponent/MainHome';
import About from './MainPageComponent/About';
import Contact from './MainPageComponent/Contact';
import Signuppage from './MainPageComponent/Signpage';
import Loginpage from './MainPageComponent/Loginpage';
import HpDetail from './MainPageComponent/Details';
import Forgetpassroute from '../../pages/change_pass/Forgerpassroute';
import HelpBox from '../../pages/Help/HelpComp';
import { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function NologinMain(props) {
    const [mo_no,setMo_no]=useState("");
    const [lmo_no,setlMo_no]=useState(false);
    console.log(mo_no);
    props.setMo_no(mo_no)

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                    <Routes>
                        <Route exact path="/" element={<MainHome />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/login" element={<Loginpage setReg={props.setReg} setlMo_no={setlMo_no} setlidMo_no={props.setlidMo_no} setAuth={props.setAuth}/>} />
                        <Route path="/signup" element={<Signuppage setMo_no={setMo_no} />} />
                        <Route path="/details" element={<HpDetail setReg={props.setReg} lmo_no={lmo_no} mo_no={mo_no} lidmo_no={props.lidmo_no} />} />
                        <Route path="/forget-password" element={<Forgetpassroute />} />
                        <Route path="/help" element={<HelpBox />} />
                    </Routes>
            </BrowserRouter>

        </div>

    )
}

export default NologinMain;