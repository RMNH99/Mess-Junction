import './forgotPassword.css'
import { useState } from 'react';

function ForgotPassword(){

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
            onSubmitNumber();
        }else{
            setValidationMsg("Please enter valid Mobile number")
        }
    }

    function onSubmitNumber(){
    
        // let  loginData = {
        //          "id" : mobileInput,
        //      }

        //       // to validate on server*****************************
        //     try {
        //         const response = await  axios.patch("http://localhost:3006/SignupData/"+loginData.id,loginData,
        //           {
        //             headers: { "Content-Type": "application/json" },
        //             withCredentials: true,
        //           }
        //         );
        //         setAuth(true);
        //       } catch (err) {
        //         if (!err?.response) {
        //           setValidationMsg("No Server Response");
        //         } else if (err.response?.status === 400) {
        //             setValidationMsg("Missing Username or Password");
        //         } else if (err.response?.status === 401) {
        //             setValidationMsg("Unauthorized");
        //         } else {
        //             setValidationMsg("Invalid Mobile Number");
        //         }
        //     }
        //     setMobileInput("");
            }

    return(
        <div className='forgotContainer'>
        <form className="forgot"  onSubmit={validate} >

                        <h2>Enter Registered Mobile No.</h2>
                         
            <input placeholder='Mobile Number' type="number"  onChange={mobileInputFun} value={mobileInput} required />
                       
                        <button type="submit">Get Otp</button>
                       
                        <br />
                        <p className='validationErrorMsg'>{validationMsg}</p>
                    </form>
    </div>
    )
}

export default ForgotPassword;