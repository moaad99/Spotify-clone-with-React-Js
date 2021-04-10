import React from 'react'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import './Footer.css'
export default function Footer() {
    return (
        <div className="footer">
           <div className="footer_left">
               <img className="log" src="https://upload.wikimedia.org/wikipedia/en/d/d6/Lose_Yourself.jpg" alt=""/>
               <div className="song-info">
                   <h4>love yourself</h4>
                   <p>Eminem</p>
               </div>
           </div>
           <div className="footer_center">
           <ShuffleIcon className="a" style={{color:"#1ed15e"}}  />
           <SkipPreviousIcon className="b" />
           <PlayCircleOutlineIcon className="c" fontSize="large" />
           <SkipNextIcon className="d" />
           <RepeatIcon className="e" style={{color:"#1ed15e"}} />
           </div>
           <div className="footer_right">
               <h1>right bro</h1>
           </div>
        </div>
    )
}
