import React, { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";


function App () {
    const [handleText, setHandleText] = useState([]);

    function addNote(note){
        setHandleText(prevNote =>{
            return [...prevNote, note];
        })
    }
    function deleteNote(id){
        setHandleText(prevNote =>{
            return prevNote.filter((item, index) =>{
                return (index !== id);
            })
        })
    }
    return (
        <div>
            <Header />
            <CreateArea 
                onAdd={addNote}
            />
           { handleText.map((notes, index)=>{
                return <Note 
                    key = {index}
                    id = {index}
                    title = {notes.title}
                    content = {notes.content}
                    onDelete={deleteNote}
                />
            })
           }
            <Footer />
        </div>
    )
}

export default App;