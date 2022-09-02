import React from "react";
import NotesItemBody from "./NotesItemBody";
import NotesDeleteButton from "./NotesDeleteButton";
import NotesArchiveButton from "./NotesArchiveButton";

function NotesItem({title, body, id, onDelete, onArchived, isArchived}){
    return(
        <div className="note-item">
            <NotesItemBody title={title} body={body}/>
            <NotesDeleteButton id={id} onDelete={onDelete}/>
            <NotesArchiveButton id={id} onArchived={onArchived} isArchived={isArchived}/>
     
        </div>
    );
}

export default NotesItem;