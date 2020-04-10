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
    return (
        <div>
            <Header />
            <CreateArea 
                onAdd={addNote}
            />
           { handleText.map((notes)=>{
                return <Note 
                    title = {notes.title}
                    content = {notes.content}
                />
            })
           }
            <Footer />
        </div>
    )
}

export default App;