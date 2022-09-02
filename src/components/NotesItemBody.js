import React from "react";
import {showFormattedDate} from '../utils/index'

function NotesItemBody({title, body}){
    return(
        <div className="note-item__body">
            <h3 className="note-item__title">{title}</h3>
            <span className="note-item__date">{showFormattedDate(new Date())}</span>
            <p className="note-item__body">{body}</p>
        </div>
    );
}

export default NotesItemBody;