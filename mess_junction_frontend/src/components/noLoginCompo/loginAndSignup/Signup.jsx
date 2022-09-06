import { useState } from 'react';
import './signup.css'
// import axios from 'axios';  //---------->to use api requests

function Signup() {


    let [firstNameInput,setFirstNameInput]=useState("") ;
    function firstNameInputFun (e) {
        setFirstNameInput (e.target.value);
    }
    let [lastNameInput,setLastNameInput]=useState("") ;
    function lastNameInputFun (e) {
         setLastNameInput (e.target.value);
    }
    let [emailInput,setEmailInput]=useState("");
    function emailInputFun (e) {
         setEmailInput (e.target.value);
    }
    let [passInput,setPassInput]=useState("");
    function passInputFun(e) {
        setPassInput( e.target.value);
    } 
    let [confirmPassInput,setConfirmPassInput]=useState("");
    function confirmPassInputFun(e){
        setConfirmPassInput(e.target.value);
    }
    let [mobileInput,setMobileInput]=useState("");
    function mobileInputFun(e) {
        setMobileInput( e.target.value);
    } 

    // to validate the mobile number and password input from user
    let[validationMsg, setValidationMsg]=useState("")
    function validate (e){
        e.preventDefault();
        let phoneno = /^\d{10}$/;
        if( (mobileInput.match(phoneno))){
            setValidationMsg("")
            if(passInput===confirmPassInput){
                setValidationMsg("");
                onSubmitSignup();
            }
            else{
                setValidationMsg("Password doesn't match ") 
            }
        }else{
            setValidationMsg("Please enter valid Mobile number")
        }
    }

    // it will submit on server
    function onSubmitSignup(){

   const  signupData = {
            "mo_no" : mobileInput,
            "first_name" : firstNameInput,
            "last_name" : lastNameInput,
            "email": emailInput, 
            "password" : passInput
        }
        // APi for backend.........................
        try{
            fetch("http://localhost:9090/signup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(signupData)
          
            }).then((res)=>{
                console.log(res)
                if(res.ok===false){
                    setValidationMsg("mobile number already registered !")
                }
              else  {
                    setValidationMsg("SignUp successFull, please Login !")
                    setLastNameInput(""); setFirstNameInput(""); setEmailInput("");setPassInput("");setMobileInput("");setConfirmPassInput("")
                }
            })
        }catch(err){
            setValidationMsg("mobile number already registered");
            console.log(err)
        }
    }
    
    return (
        <div  className="signupContainer">
            <form className="signup" onSubmit={validate}>
                <h2>SignUp</h2>
                <input placeholder='First Name' type="text" maxLength={30} onChange={firstNameInputFun} value={firstNameInput} required />

                <input placeholder='Last Name' type="text" maxLength={30} onChange={lastNameInputFun} value={lastNameInput} required />
                
                <input placeholder='Mobile Number' type="number" onChange={mobileInputFun} value={mobileInput} required />
               
                <input placeholder='Email' type="email" onChange={emailInputFun} value={emailInput} />
                
                <input placeholder='Password' type="password" minLength={8} onChange={passInputFun} value={passInput} required />

                <input placeholder='Confirm Password' type="password" minLength={8} onChange={confirmPassInputFun} value={confirmPassInput} required />
                
                <button type="submit">Signup</button>
                <p className='validationErrorMsg'>{validationMsg}</p>
            </form>
        </div>
    )
}

export default Signup;