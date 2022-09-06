import { useNavigate } from "react-router-dom";
const Analitics = () => {
  let nav=useNavigate('');
  return <div className='CPMainBox1'> 
  <div>
  <h1>Analitics</h1>
  <h1>We will show you this section soon...!</h1>
  <h2>In This section business person can check business retated analitics such as :</h2>
  <ul>
    <li>Daily visits.</li>
    <li>Customer likes</li>
    <li>Monthly Bussiness graph through application</li>
    <li>Ratings, which is given by customer</li>
  </ul>
  <button className='back-btn' onClick={()=>{ nav(-1)}}>Back</button>
  </div>
  </div>;
};

export default Analitics;
