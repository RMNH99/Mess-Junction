import { useState } from "react";
import "./Signpage.css"
import { FiMail,FiPhoneCall } from "react-icons/fi";
import { RiLockPasswordLine,RiLockPasswordFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
// import axios from 'axios';  //---------->to use api requests
import swal from 'sweetalert';
import logo from '../../../img/logo.png';
import {Link,useNavigate} from "react-router-dom";

const Signuppage = (props)=>{
   
    let nav=useNavigate();

    const [signFname,setSignFName]=useState("");
    const [signLname,setSignLName]=useState("");
    const [signemail,setSignEmail]=useState("");
    const [signnumber,setSignNumber]=useState("");
    const [signpass,setSignupPass]=useState("");
    const [signconpass,setSignupConPass]=useState("");
    const [validationMsg,setValidationMsg]=useState("");
   

    function Regester (e){
        e.preventDefault(); 

        let  signupData = {
            "o_no" : signnumber,
        "first_name" : signFname,
        "last_name" : signLname,
        "email": signemail, 
        "password" : signconpass,
        };
        props.setMo_no(signnumber);
        
        console.log(signupData);


            let phoneno = /^\d{10}$/;
            if( (signnumber.match(phoneno))){
                if(signpass !== signconpass){
                    swal({
                      title: "Password Didn't Match",
                      icon: "warning",
                      button: "OK",
                    });
                    setSignupPass("");
                    setSignupConPass("");
                  }
            }else{
                swal({
                    title: "Please enter valid Mobile number",
                    icon: "warning",
                    button: "OK",
                  });
                setSignNumber("");
            }
                
                  try{
                    fetch("http://localhost:9092/addsignup",{
                        method:"POST",
                        headers:{"Content-Type":"application/json"},
                        body:JSON.stringify(signupData)
                  
                    }).then((res)=>{
                        console.log(res)
                        if(res.ok===false){
                            setValidationMsg("mobile number already registered !")
                        }
                      else  {
                        setSignFName(""); setSignLName(""); setSignEmail("");
                        setSignupPass(""); setSignNumber("");setSignupConPass(""); 

                        setValidationMsg("Register Successfully Please Fill Your Bussiness Details");
                        nav("/details");
                        }
                    })
                }catch(err){
                    setValidationMsg("mobile number already registered");
                    console.log(err)
                }
                   
        }

return <div>

    <h2 className="reg2" >Mess Junction Business</h2>
   
    <div className="Signup-main-box">
    <div className="Signup-box1">
<form onSubmit={Regester}>

<h2 className="reg">Registration</h2>
    <table>
        <tr>
            <td><label className="Signup-icon"><CgProfile/></label></td>
            <td className="td2"><input required className="Signup-input" type="text"
             placeholder="First Name" value={signFname} onChange={e=>setSignFName(e.target.value)} /></td>
        </tr>
        <tr>
            <td></td>
            <td><input required className="Signup-input" type="text"
             placeholder="Last Name" value={signLname} onChange={e=>setSignLName(e.target.value)} /></td>
        </tr>
        <tr>
            <td><label className="Signup-icon"><FiMail/></label></td>
            <td><input className="Signup-input"  type="email" 
            placeholder="Your Email" value={signemail} onChange={e=>setSignEmail(e.target.value)} /></td>
        </tr>
        <tr>
            <td><label className="Signup-icon"><FiPhoneCall /></label></td>
            <td><input className="Signup-input"  type="number" placeholder="Your Mobile Number" 
            value={signnumber} onChange={e=>setSignNumber(e.target.value)} /></td>
        </tr>
        <tr>
            <td><label className="Signup-icon"><RiLockPasswordLine/></label></td>
            <td><input className="Signup-input"  type="password" minLength={8} placeholder="Password" 
            value={signpass} onChange={e=>setSignupPass(e.target.value)}/></td>
        </tr>
        <tr>
            <td><label className="Signup-icon"><RiLockPasswordFill/></label></td>
            <td><input className="Signup-input" minLength={8} type="password" placeholder="Confirm Password" 
            value={signconpass} onChange={e=>setSignupConPass(e.target.value)}/></td>
        </tr>
        <br />
        <tr>
            <td></td>
            <td className="tblebtn"><button className="Signup-btn" type="Submit">Register</button></td>
        </tr>
    </table>
    <br /><br />
    <h5 id='CPh1' className="CPh2" ><i>*</i> Trouble in Regestration ? <Link to="/help"> Click here</Link></h5>
    <p>{validationMsg}</p> <br /><br />
</form>

    </div>
    <div className="Signup-box2">
<img src={logo} alt="" />
    </div>

</div>

</div>
}
export default Signuppage;