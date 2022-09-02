import React from "react";

function NoteSearch({title, onSearch}){
    return(
        <div className="note-app__header">
        <h1>Notes App</h1>
        <div className="note-search">
            <input id="search" type="text" placeholder="Cari catatan ..." onChange={(event)=> onSearch(event)}/>
        </div>
    </div>
    )
    // onSearch(event.target.value)
}
export default NoteSearch;