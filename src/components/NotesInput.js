import React from "react";

class NotesInput extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title:'',
            body:'',
            limit:50,
        };
        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }

    onTitleChangeEventHandler(event){
        this.setState(()=>{
            return{
                title:event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event){
        this.setState(()=>{
            return{
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event){
        event.preventDefault();
        this.props.addNotes(this.state);
        const message = `
        Berhasil Ditambahkan.
        Data Berikut:
        Title: ${this.state.title}
        Body: ${this.state.body}
      `;
  
      alert(message);
    }
    render(){
        return(
            <div>
                <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <h2>Buat Catatan</h2>
                    <p className="note-input__title__char-limit">
                        Sisa Karakter = {this.state.limit - this.state.title.length}
                    </p>
                    <input type="text" id="title" placeholder="Ini adalah judul ..."
                    required value={this.state.title} onChange={this.onTitleChangeEventHandler}/>
                    <textarea id="body" placeholder="Masukkan Catatan Di sini" required value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                    <button type="submit" id="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NotesInput;