import React, {useState, useEffect} from "react";
//import '../style/App.css';

function PlaylistCard({id, title, image, description, followPlaylist}) {


  return (
    <div className="PlaylistCard" onClick = {() => followPlaylist(id)}>
      <h2>{title}</h2>
      {/* Display other Playlist info */}
    </div>
  );
}

export default PlaylistCard;