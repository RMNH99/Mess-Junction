// import Homepage from "./Signup-page-Compo/Homepage";
import './Signout.css';
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";
const Signout = (props) => {
  
  let nav=useNavigate('');
   const logout=()=>{
    swal({
      title: "Logout Successfully",
      icon: "success",
      button: "OK",
    });
    props.setAuth(false); 
    nav('/')
   }
  return(
    <div className="signout">
      <div className='signout-box'>
        <div>
          <h2 className='lgotH1'><p>Logout</p></h2>
          <br />
        <p className='lgotH1'>Are you Sure ?</p>
        <br />
        <br />
        <button className='logout-btn' onClick={logout}>Logout</button>
        <button className='cancel-btn' onClick={()=>{ nav(-1)}}>Cancel</button>
        </div>
      </div>
    </div>
  )
};
export default Signout;


