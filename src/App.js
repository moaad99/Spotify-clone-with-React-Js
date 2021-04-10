import './App.css';
import React , {useEffect,useState} from "react"
import Login from './Component/Login'
import Player from './Component/Player'
import SpotifyWebApi from 'spotify-web-api-js'
import {useDataLayerValue} from './DataLayer'


import {getTokenFromResponse} from "./tools/spotify"
const spotify =new SpotifyWebApi();
function App() {

  const [token,setToken]= useState(null)

  const [{user,playlists}, dispatch]= useDataLayerValue();

  useEffect(()=>{


    const hash =getTokenFromResponse();

    const _token= hash.access_token;

    if(_token){

      setToken(_token);

      spotify.setAccessToken(_token)

      spotify.getMe().then(user => {

        dispatch({

          type:"SET_USER",
          user:user,
        })


      })
      spotify.getPlaylist('37i9dQZEVXcQNdDKQsfcCu').then(res =>{
        dispatch({
          type:"SET_DISCOVER",
          discover_weekly: res,
        })
      })

spotify.getUserPlaylists().then((playlists)=>{

  dispatch({
    type:'SET_PLAYLISTS',
    playlists:playlists,
  })
})
    }
  },[])
console.log('playlist',playlists)
  return (
    <div className="App">

      {token ? <Player spotify={spotify}/> : <Login/>  }


    </div>
  );
}

export default App;
