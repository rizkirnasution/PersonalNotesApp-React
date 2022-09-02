import React from "react";

class NotesHeaderSearch extends React.Component{
    constructor(props){
        super(props);

        this.state ={
         title:'',       
        }

        this.onSearchChangeEvent = this.onSearchChangeEvent.bind(this);
    }

    onSearchChangeEvent(event){
        this.setState(()=>{
            return{
                title:event.target.value,
            }
        });
    }

    render(){
        const searchFilterNote = !this.state.search ? this.state.notes : this.state.notes.filter((note) => note.title.toLowerCase().match(this.state.title));
        return(
            <div className="note-app__header">
                <h1>Notes App</h1>
                <div className="note-search">
                    <input notes={searchFilterNote} id="search" type="text" placeholder="Cari catatan ..." value={this.state.title} onChange={this.onSearchChangeEvent}/>
                </div>
            </div>
        );
    }
}

export default NotesHeaderSearch;
