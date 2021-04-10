import React from 'react'
import Header from './Header'
import {useDataLayerValue} from '../DataLayer'
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

import './Body.css'
export default function Body({spotify}) {
    const [{discover_weekly}, dispatch]= useDataLayerValue();

    return (
        <div className="bod">
            <Header spotify={spotify} />


            <div className="info">
                <img src={discover_weekly?.images[0].url} alt=""/>
          
            <div className="description">
                <strong>PLAYLIST</strong>
                <h2>{discover_weekly?.name}</h2>
                <p>{discover_weekly?.description}</p>
                {console.log(discover_weekly)}
            </div>
           </div>

           <div className="body_songs">

                <div className="icons">
               
          <PlayCircleFilledIcon
            className="body__shuffle"
         
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
                </div>

           </div>
        </div>
    )
}
