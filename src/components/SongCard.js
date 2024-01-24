import React, {useState, useEffect} from "react";
//import '../style/Home.css';

function SongCard({id, playlistId, artist, album, title, cover, location, handleAddRemove}){

    const thisSong = {id: id, playlistId: playlistId, title: title, cover: cover, artist: artist, album: album}


    // "id": 4,
    //     "playlistId": 2,
    //     "cover": "https://upload.wikimedia.org/wikipedia/en/a/af/GrizzlyBearShields.jpg",
    //     "title": "Yet Again",
    //     "artist": "Grizzly Bear",
    //     "album": "Shields"

//onClick = {() => handleAddRemove(thisSong)}

    if(location === "form"){
        return(
        <div class="card">
         {/* <img class="card-img-top" src={cover} alt="album cover"></img> */}
            <div class="card-body">
                {`${title}`}
            </div>
            <button onClick = {() => handleAddRemove(thisSong)}>Remove</button>
        </div>
        )
    }
    else if(location === "all"){
        return(
        <div class="card">
         {/* <img class="card-img-top" src={cover} alt="album cover"></img> */}
            <div class="card-body">
                {`${title}`}
            </div>
            <button onClick = {() => handleAddRemove(thisSong)}>Add</button>
        </div>
        )
    }
    else{
    return(
        <div class="card">
         {/* <img class="card-img-top" src={cover} alt="album cover"></img> */}
            <div class="card-body">
                {`${title}`}
            </div>
        </div>
    )}


}

export default SongCard;

{/* <div>
        <h4>{title}</h4>
        <img src={cover} alt="album cover" width="50" />
      </div> */}