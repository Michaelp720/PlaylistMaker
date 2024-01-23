import React, {useState, useEffect} from "react";
//import '../style/App.css';
import NavBar from "./NavBar";
import PlaylistDisplay from "./PlaylistContainer";

function PlaylistSearch() {

  const [search, setSearch] = useState('')

  return (
    <div className="search">
      <input type="text" className="searchTerm" onChange = {e => setSearch(e.target.value)} value = {search} />
    </div>
  );
}

export default PlaylistSearch;