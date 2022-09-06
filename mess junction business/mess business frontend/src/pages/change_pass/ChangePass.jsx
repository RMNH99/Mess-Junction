import React,{ useState } from 'react';
import swal from 'sweetalert';
import "./ChangePass.css";
import {Link} from "react-router-dom"

const Changepass=()=>{

const[old_password,setOldPassword]= useState('');
const[new_password,setNewPassword]= useState('');
const[re_password,setRePassword]= useState('');


  const chakepass=(e)=>{
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
  setOldPassword("");
}
  }
    return <div>
         <h1 id='CPh1'>Change Password</h1> 
      <div className='CPMainBox'>
       
       
        <div >
          <form onSubmit={chakepass}>
          <table>
            <tr>
              <th>Enter Older Password</th>
              <td><input className='CPcontain-box' required type="Password" value={old_password} onChange={e=>setOldPassword(e.target.value)}/></td>
            </tr>
            <tr>
              <th>Enter Newer Password</th>
              <td><input className='CPcontain-box' required type="Password" value={new_password}  onChange={e=>setNewPassword(e.target.value)}/></td>
            </tr>
            <tr>
              <th>Re-Enter Password</th>
              <td ><input className='CPcontain-box' required type="Password" value={re_password}  onChange={e=>setRePassword(e.target.value)}/></td>
            </tr>
            <tr>
              <td>
              <Link to="/settings/change_password/forgetpassword">Forget Password</Link>

               </td>
              <td><button className='CP-btn' type='Submit'>Change</button></td>
            </tr>
          </table>
          {/* <p className='validationErrorMsg'>{validationMsg}</p> */}
          </form>
        </div>
        
      </div>

    </div>;
  };
  export default Changepass;