import { useNavigate } from "react-router-dom";
const Updatelocation = () => {
  let nav=useNavigate('');
    return <div className='CPMainBox1'>
      <div>
         <h1>Update Location</h1>
    <h1>We will show you this section soon...!</h1>
    <h2>In This section business person can update his mess location : </h2>
    <button className='back-btn' onClick={()=>{ nav(-1)}}>Back</button>
    </div>
    </div>;
  };
  
  export default Updatelocation;