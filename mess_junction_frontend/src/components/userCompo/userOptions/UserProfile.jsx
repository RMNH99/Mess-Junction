import './userProfile.css'
import profileImg from '../../../imgs/profile.png'

function UserProfile(props) { 
     
    return(      
      <div className='profileContainer'>
        <img className='profileImg' src={profileImg} alt="" />
        <h1 className='UserName'>{props.userDetailsMain.first_name} {props.userDetailsMain.last_name}</h1>
        <p>{props.userDetailsMain.email}</p>
        <p>{props.userDetailsMain.mo_no}</p>
      </div>
    )
  }
  
  export default UserProfile;