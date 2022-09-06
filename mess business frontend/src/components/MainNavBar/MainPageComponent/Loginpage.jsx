import { useState } from "react";
import "./Signpage.css"
import {FiPhoneCall } from "react-icons/fi";
import { RiLockPasswordLine} from "react-icons/ri";
// import axios from 'axios';  //---------->to use api requests
import swal from 'sweetalert';
import { Link, useNavigate } from "react-router-dom";
import logo from '../../../img/logo.png'


const Loginpage =(props)=>{
    
    let nav=useNavigate();
    const [Loginnumber,setLoginNumber]=useState("");
    const [Loginpass,setLoginPass]=useState("");

    function Login (e){
        e.preventDefault(); 

            let phoneno = /^\d{10}$/;
            if( (Loginnumber.match(phoneno))){
                onSubmitLogin();
            }else{
                swal({
                    title: "Please enter valid Mobile number",
                    icon: "warning",
                    button: "OK",
                  });
                  setLoginNumber("");
            }
                    
        function onSubmitLogin(){
    
            let  loginData = {
                     o_no : Loginnumber,
                     pass : Loginpass
                 }
                 props.setlidMo_no(Loginnumber);
                    console.log(loginData);
                   fetch(`http://localhost:9092/login?o_no=${Loginnumber}&password=${Loginpass}`,
                      {
                        headers: { "Content-Type": "application/json" },
                        withCredentials: true,
                        method:"POST"
                      }
                    ).then((res)=>{ return res.json()})
                    .then((Response)=>{
                        console.log(Response);
                    if(Response.o_no===0 & Response.object===null){
                        swal({
                            title: "Invalid Username or Password",
                            icon: "warning",
                            button: "OK",
                          });

                    }else if(Response.o_no===0 & Response.object!=null){
                        swal({
                            title: "Please Fill Details",
                            icon: "warning",
                            button: "OK",
                          });

                    props.setlMo_no(true);
                        nav("/details");
                    }else{
                        swal({
                            title: "Login Successfully",
                            icon: "success",
                            button: "OK",
                          });
                    props.setReg(true);
                    props.setAuth(true);
                    nav("/additems");
                    }
                    });

                setLoginPass("");setLoginNumber("");
        }
    }
return <div>
    <h2 className="reg2">Mess Junction Business</h2>
    <div className="Signup-main-box">
    <div className="Signup-box1">
<form onSubmit={Login}>

<h2 className="reg3">Login</h2>
    <table className="table">
        <tr>
            <td><label className="Signup-icon"><FiPhoneCall /></label></td>
            <td className="td2"><input required className="Signup-input"  type="number" placeholder="Your Mobile Number" 
            value={Loginnumber} onChange={e=>setLoginNumber(e.target.value)} /></td>
        </tr>
        <tr>
            <td><label className="Signup-icon"><RiLockPasswordLine/></label></td>
            <td><input required className="Signup-input"  type="password" minLength={4} maxLength={8} placeholder="Password" 
            value={Loginpass} onChange={e=>setLoginPass(e.target.value)}/></td>
        </tr>
        <br />
        <tr>
            <td>
            </td>
            <td className="tblebtn"><button className="Signup-btn" type="Submit">LOGIN</button></td>
        </tr>
    </table>
    <h4  className="reg">Don't You have Register yet ?<Link to="/signup"> Register here</Link></h4>
    <h4  className="reg">forget Password ?<Link to="/forget-password"> Click here</Link></h4>
</form>

    </div>
    <div className="Signup-box2">
<img src={logo} alt="" />
    </div>

</div>
</div>
}
export default Loginpage;