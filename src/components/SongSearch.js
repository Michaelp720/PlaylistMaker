import React, {useState, useEffect} from "react";
//import '../style/App.css';

function SongSearch({search, setSearch}) {


  return (
    <div className="song-search">
      <input type="text" className="searchTerm" onChange = {e => setSearch(e.target.value)} value = {search} />
    </div>
  );
}

export default SongSearch;