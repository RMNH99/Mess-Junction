import { useNavigate } from "react-router-dom";
const Updateprifile = () => {
  let nav=useNavigate('');
    return <div className='CPMainBox1'> 
    <div>
    <h1>Edit Profile info</h1>
    <h1>We will show you this section soon...!</h1>
    <h2>In This section business person can edit his profile :</h2>
    <ul>
      <li>Update Profile picture.</li>
      <li>Mobile no. (which provides for customer)</li>
      <li>Mess Timing</li>
      <li>Mess Description</li>
    </ul>
    <button className='back-btn' onClick={()=>{ nav(-1)}}>Back</button>
    </div>
   
    </div>;
  };
  
  export default Updateprifile;