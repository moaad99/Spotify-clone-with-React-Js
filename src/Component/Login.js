import React from 'react'

import {loginUrl} from "../tools/spotify"
function Login() {
    return (
        <div className="login">
            <img src="https://www.djmagitalia.com/wp-content/uploads/2016/03/spotify-logo-horizontal-black.jpg" alt=""/>
       
            <a href={loginUrl}>Login with Spotify</a>
       
       
        </div>
    )
}

export default Login
