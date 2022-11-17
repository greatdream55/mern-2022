import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import noteStyle from "./Main.module.css"


const Main = (props) => {

    const navigate = useNavigate()

    const [notes, setNotes] = useState([])

    // trigger when the component has finished loading
    useEffect(() => {
        // get all the notes from our server
        axios.get("http://localhost:8000/api/notes")
            .then(res => {
                console.log(res.data)
                setNotes(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // go to the update route
    const goToUpdate = (noteMongoID) => {
        // console.log(noteMongoID)
        navigate("/notes/" + noteMongoID + "/edit")
    }

    // DELETE
    const deleteNote = (deleteID) => {

        if (window.confirm("really????")) {
            axios.delete("http://localhost:8000/api/notes/" + deleteID)
                .then(res => {
                    console.log("DELETE SUCCESS", res.data)

                    // remove form the DOM after a successful delete
                    setNotes(notes.filter((note) => note._id !== deleteID))
                })
                .catch(err => console.log(err))
        }
    }

    return (
        <fieldset>
            <legend>Main.jsx</legend>
            {/* {JSON.stringify(notes)} */}

            {
                notes.map((oneNote) => {
                    return (
                        <div key={oneNote._id} className={noteStyle.note}>
                            <Link to={`/notes/${oneNote._id}`}>
                                <h5>{oneNote.isImportant ? "📌" : ""} {oneNote.title}</h5>
                            </Link>
                            <p>
                                {oneNote.content}
                            </p>
                            <button onClick={() => goToUpdate(oneNote._id)}>edit</button>
                            <button onClick={() => deleteNote(oneNote._id)}>delete</button>

                        </div>
                    )
                })
            }
        </fieldset>
    )
}

export default Main