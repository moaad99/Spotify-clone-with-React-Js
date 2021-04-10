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
              <p className="p4">Hip-Hop</p>
              <br/>
              <p className="p4">Electronic</p>
              <br/>
              <p className="p4">Rock</p>
              <br/>
              <p className="p4">Club Beats 2021 🔥</p>
              <br/>
              <p className="p4">Motivation Mix</p>
              <br/>
              <p className="p4">Nightlight ✘ Aurora ✘ Faded </p>
              <br/>
              <p className="p4">lofi hip hop music</p>
            
            

              
              </div>
              </div>
              </div>
    )
}

export default SideBarOption
