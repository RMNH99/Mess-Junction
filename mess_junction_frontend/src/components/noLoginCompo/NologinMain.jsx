import Navbar from '../noLoginCompo/navbar/Navbar'
import Home from './home/Home'
import About from './about/About'
import Contact from './contact/Contact'
import Login from './loginAndSignup/Login';
import Signup from './loginAndSignup/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForgotPassword from './forgotPassword/ForgotPassword';


function NologinMain(props) {

    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/login" element={<Login setAuth={props.setAuth} />} />
                    <Route path="/forgotPassword" element={<ForgotPassword />} />
                    <Route path="/signup" element={<Signup />} />

                </Routes>
            </BrowserRouter>
        </div>

    )
}

export default NologinMain;