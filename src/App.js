import './App.css';
import React , {useEffect} from "react"
import Login from './Component/Login'

import {getTokenFromResponse} from "./tools/spotify"
function App() {
  useEffect(()=>{

    const hash =getTokenFromResponse();

    const token= hash.access_token;
    
    console.log("token",token)

  },[])

  return (
    <div className="App">

<Login/>
    </div>
  );
}

export default App;
