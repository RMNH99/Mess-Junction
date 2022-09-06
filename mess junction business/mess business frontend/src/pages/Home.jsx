import Additem from "./HomeContent/Add_item";
import Profile from "./HomeContent/Profile";
const Home = (props) => {
  return <div>
  <Profile mo_no={props.mo_no}/>
  <Additem mo_no={props.mo_no}/>
    </div>
};

export default Home;
