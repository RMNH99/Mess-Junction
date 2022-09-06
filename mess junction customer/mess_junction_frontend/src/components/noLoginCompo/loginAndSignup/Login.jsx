import './login.css'
// import axios from 'axios';  //---------->to use api requests
import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'

function Login(props){

    // to navige user to home after login
     const nav=useNavigate();
    
    let [passInput,setPassInput]=useState("");
    function passInputFun(e) {
        setPassInput( e.target.value);
    } 
    let [mobileInput,setMobileInput]=useState("");
    function mobileInputFun(e) {
        setMobileInput( e.target.value);
    } 

    let[validationMsg, setValidationMsg]=useState("")
    function validate (e){
        e.preventDefault();
        let phoneno = /^\d{10}$/;
        if( (mobileInput.match(phoneno))){
            setValidationMsg("")
            onSubmitLogin();
        }else{
            setValidationMsg("Please enter valid Mobile number")
        }
    }

    // it will submit on server
   async function onSubmitLogin(){
    
   let  loginData = {
           "mo_no" : mobileInput,
           "password" : passInput
        }

            // to validate on server*****************************
            try {
                await fetch("http://localhost:9090/login",
                  {
                    headers: { "Content-Type": "application/json" },
                    method:"POST",
                    body:JSON.stringify(loginData),
                    withCredentials: true
                  }
                ).then((res) => res.json())
                .then((user) => {
                    if(user.first_name!=null){
                        props.setAuth([true,user]);
                        nav( "/userHome");
                    }else{
                        setValidationMsg("Invalid Username or Password");
                    } 
                  return user;
                });
              
              } catch (err) {
                console.log(err)
                    setValidationMsg("Invalid UserName or Password");
            }
            
            setPassInput("");setMobileInput("");
    }

    return(
        <div className='loginContainer'>
            <form className="login" onSubmit={validate}>
                            <h2>LogIn</h2>
                             
                <input placeholder='Mobile Number' type="number" onChange={mobileInputFun} value={mobileInput} required />
                           
                            <input placeholder='Password' type="password" minLength={8} onChange={passInputFun} value={passInput} required />
                            <button type="submit" >Login</button>
                            <Link to="/forgotPassword">
                            Forgot Password
                            </Link>
                           
                            <br />
                            <p className='validationErrorMsg'>{validationMsg}</p>
                        </form>
                       
        </div>
    )
}

export default Login;