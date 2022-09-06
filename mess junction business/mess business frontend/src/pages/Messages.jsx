import { useNavigate } from "react-router-dom";
const Messages = () => {
  let nav=useNavigate('');
  return <div className='CPMainBox1'>
    <div>
       <h1>Messaging</h1>
    <h1>We will show you this section soon...!</h1>
    <h2>In This section business person can chat with customer related mess issues :</h2>
    <ul>
      <li>He able to solve customer queries.</li>
    </ul>
    <button className='back-btn' onClick={()=>{ nav(-1)}}>Back</button>
    </div>
    </div>;
};

export default Messages;
