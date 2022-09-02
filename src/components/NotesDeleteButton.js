import React from "react";

function NotesDeleteButton({id, onDelete}){
    return <button className='note-item__delete-button' onClick={()=>onDelete(id)}>Delete</button>
}

export default NotesDeleteButton;