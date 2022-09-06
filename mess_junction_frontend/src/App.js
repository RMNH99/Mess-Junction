import { useState } from 'react';
import NologinMain from './components/noLoginCompo/NologinMain';
import UserMainCompo from './components/userCompo/UserMainCompo';

function App() {

  let [auth,setAuth]=useState([false,""]);

   return (
    <div className="App">
    {auth[0] ? <UserMainCompo auth={auth} setAuth={setAuth}/>:<NologinMain setAuth={setAuth}/>}
    </div>
  );
}

export default App;
