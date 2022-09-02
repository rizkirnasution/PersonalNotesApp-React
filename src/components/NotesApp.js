import React from "react";
import NotesList from "./NotesList";
import { getInitialData, showFormattedDate } from "../utils/index";
import NotesInput from "./NotesInput";
import NotesEmptyMessage from "./NotesEmptyMessage";
// import NotesHeaderSearch from "./NotesHeaderSearch";
import NoteSearch from "./NotesSearch";


class NotesApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // title:"",
            notes:getInitialData(),
            keyword:"",
            date:showFormattedDate(new Date()),
        }

        this.onSearchChangeEvent = this.onSearchChangeEvent.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note=> 
            note.id !== id);
            this.setState({notes});
    }

    onArchivedEventHandler(id){
        const notes = this.state.notes.map((note)=>
        note.id === id ? {...note, archived : !note.archived } : note)
        this.setState({notes});
    }

    onToggleArchiveNoteHandler(id) {
        const notes = this.state.notes.map((note) => {
          if (note.id === id) return { ...note, archived: !note.archived };
    
          return note;
        });
        this.setState({ notes });
      }

    onAddNotesHandler({title, body}){
        this.setState((prevState) =>{
            return{
                notes:[
                    ...prevState.notes,
                    {
                        id:+new Date(),
                        title, 
                        body,
                        archived: false,
                        createdAt: this.state.date,
                    }
                ],
            }
        })
    }

    onSearchChangeEvent(event){
        this.setState(()=>{
            return{
                keyword:event.target.value,
            }
        });
    }


    render(){
        const NotesNonActive = this.state.notes.filter((note)=>{
            return note.archived === false
        });

        const NotesActive = this.state.notes.filter((note)=>{
            return note.archived === true
        });

        return(
           
            <div>
                <NoteSearch search={this.state.search} onSearch={this.onSearchChangeEvent} />
    
                <div className="note-app__body">
                <NotesInput addNotes = {this.onAddNotesHandler}/>
                <h2>Catatan Aktif</h2>
                {NotesNonActive.length > 0 ? <NotesList keyword={this.state.keyword} notes={NotesNonActive} onDelete={this.onDeleteHandler} onArchived={this.onArchivedEventHandler} /> : <NotesEmptyMessage />}
               
               <h2>Arsip</h2>
                {NotesActive.length > 0 ? <NotesList keyword={this.state.keyword} notes={NotesActive} onDelete={this.onDeleteHandler} onArchived={this.onArchivedEventHandler} />
                 : <NotesEmptyMessage />}
                 
                </div>
                

            </div>
        );
    }
}


export default NotesApp;