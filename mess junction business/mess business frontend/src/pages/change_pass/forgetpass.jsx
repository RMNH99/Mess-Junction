import React,{ useState } from 'react';
import swal from 'sweetalert';
import "./ChangePass.css";
import {Link} from "react-router-dom";

const Forgetpass = ()=>{
    const[inputMobile,setInputMobile]= useState('');
    const[otp,setotp]= useState('');
    const[new_password,setNewPassword]= useState('');
    const[re_password,setRePassword]= useState('');
    
      const chakeFpass=(e)=>{
        e.preventDefault(); 
        
        
   if(new_password !== re_password){
      swal({
        title: "Password Didnt Match",
        icon: "warning",
        button: "OK",
      });
      setNewPassword("");
      setRePassword("");
    }
    else{
      swal({
        title: "Password Updated",
        icon: "success",
        button: "OK",
      });
      setNewPassword("");
      setRePassword("");
    
    }
      }
        return <div>
             <h1 id='CPh1'>Forget Password</h1> 
          <div className='CPMainBox2'>
           
           
            <div >
              <form onSubmit={chakeFpass}>
              <table>
                <tr>
                  <th>Enter Regester Mobile Number</th>
                  <td><input required className='CPcontain-box' type="number" value={inputMobile} onChange={e=>setInputMobile(e.target.value)}/></td>
                </tr>
                <tr>
                  <th>Enter OTP</th>
                  <td><input className='CPcontain-box' type="number" maxLength={4} value={otp} onChange={e=>setotp(e.target.value)}/></td>
                </tr>
                <tr>
                  <th>Enter Newer Password</th>
                  <td><input className='CPcontain-box' maxLength={8} required type="Password" value={new_password}  onChange={e=>setNewPassword(e.target.value)}/></td>
                </tr>
                <tr>
                  <th>Re-Enter Password</th>
                  <td ><input className='CPcontain-box' maxLength={8} required type="Password" value={re_password}  onChange={e=>setRePassword(e.target.value)}/></td>
                </tr>
                <tr>
                  <td>                   
                   </td>
                  <td><button className='CP-btn' type='Submit'>Change</button></td>
                </tr>
              </table>
              </form>
            </div>
            
          </div>
          <br />
          <br />
    <h5 id='CPh1'><i>*</i> If you Forget Username then click on <Link to="/help">"Forget email-ID"</Link> and request to get username</h5>
    <br />
    <br />
        </div>;
      };
export default Forgetpass;
