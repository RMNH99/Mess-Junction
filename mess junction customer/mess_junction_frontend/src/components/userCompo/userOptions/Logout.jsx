import './Logout.css'
import {useNavigate} from 'react-router-dom'

function Logout(props){
  
    // to navige user to home after login
   const nav=useNavigate();
    
    return(
        <div className='logoutContainer'>
 <div  className="logoutMsg">
           <p>Are you sure ?</p>
           <button onClick={()=>{ props.setAuth([false,""]); nav("/") }} >Logout</button>
           <button className="logout1" onClick={()=>{ nav(-1) }} >cancel</button>
        </div>
        </div>
    )
}

export default  Logout;