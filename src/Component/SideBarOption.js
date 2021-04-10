import React from 'react'
import './SideBarOption.css'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from "../DataLayer"
function SideBarOption() {
  const [{playlists}, dispatch]= useDataLayerValue();
    return (
        <div >
        
        <div className="sidebaroption">
            {HomeIcon &&   <p className="p1">  <HomeIcon /> <p style={{marginInline:"10px"}}>Home</p> </p> }
           
            <br/>
           <p className="p2"> <SearchIcon /> <p style={{marginInline:"10px"}}> Search</p> </p>
            <br/>
         <p className="p3"> <LibraryMusicIcon /> <p style={{marginInline:"10px"}}>Your Library</p> </p>
      <br/>
      
        </div>
        <div style={{marginTop:"35px"}}>
        <strong style={{marginInline:"30px",color:"white"}}>PLAYLISTS</strong>
      
        <br/><br/>
              <hr/>
            <div style={{marginInline:"30px",color:"grey"}}>
              <p>Hip-Hop</p>
              <br/>
              <p>Electronic</p>
              <br/>
              <p>Rock</p>
              </div>
              </div>
              </div>
    )
}

export default SideBarOption
