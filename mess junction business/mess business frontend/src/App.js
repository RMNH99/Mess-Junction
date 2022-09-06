import { useState } from "react";
import SidebarMenu from "./components/Sidebar/Sidenavbar";
import NologinMain from "./components/MainNavBar/NologinMain";
import HpDetail from "./components/MainNavBar/MainPageComponent/Details";

function App() {
  const [auth, setAuth] = useState(false);
  const [reg, setReg] = useState(false);
  const [mo_no,setMo_no]=useState("");
  const [lidmo_no,setlidMo_no]=useState("");
  
  
  return (
   <>
   {auth ? reg ? <SidebarMenu mo_no={mo_no} lidmo_no={lidmo_no} setAuth={setAuth}/>:<HpDetail setReg={setReg}/>:<NologinMain setReg={setReg} setMo_no={setMo_no} setlidMo_no={setlidMo_no} lidmo_no={lidmo_no} setAuth={setAuth}/>}
   {/* <SidebarMenu/> */}
   </>
  );
}

export default App;
