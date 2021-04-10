import React from 'react'
import './SongRow.css'
export default function SongRow({track}) {
    return (
        <div className="song">
            <img className="album" src={track.album.images[0].url} alt=""/>
            <div className="songinfo">

            <h1>{track.name}</h1>
            <p>
          {track.artists.map((artist) => artist.name).join(",")} -{" "}
          {track.album.name}
        </p>
            </div>
        </div>
    )
}
