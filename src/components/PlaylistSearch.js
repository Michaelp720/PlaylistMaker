import React, {useState, useEffect} from "react";
//import '../style/App.css';

function PlaylistSearch({search, setSearch}) {

  const [search, setSearch] = useState('')

  return (
    <div className="playlist-search">
      <input type="text" className="searchTerm" onChange = {e => setSearch(e.target.value)} value = {search} />
    </div>
  );
}

export default PlaylistSearch;