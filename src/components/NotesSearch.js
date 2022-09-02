import React from "react";

function NoteSearch({search, onSearch}){
    return(
        <div className="note-app__header">
        <h1>Notes App</h1>
        <div className="note-search">
            <input value={search} id="search" type="text" placeholder="Cari catatan ..." onChange={(event)=> onSearch(event)}/>
        </div>
    </div>
    )
}
export default NoteSearch;