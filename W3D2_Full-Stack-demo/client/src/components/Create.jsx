import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = (props) => {

    const navigate = useNavigate()

    // form's state variables
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isImportant, setIsImportant] = useState(false)

    // DB error array
    const [errors, setErrors] = useState([]);

    const createNote = (e) => {
        e.preventDefault();
        // console.log(title, content, isImportant)
        // const tempObjToSendToDB = {
        //     title,
        //     content,
        //     isImportant
        // }
        axios.post("http://localhost:8000/api/notes", { title, content, isImportant })
            .then(res => {
                console.log("✅ client success")
                console.log(res.data);
                navigate("/notes")
            })
            .catch(err => {
                console.log("❌ client error")
                console.log(err)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    return (
        <div>
            {JSON.stringify(errors)}
            <div>
                {errors.map((err, index) => <p style={{color: "red"}}key={index}>{err}</p>)}
            </div>
            form state variables: <br />
            {JSON.stringify(title)} <br />
            {JSON.stringify(content)} <br />
            {JSON.stringify(isImportant)} <br />
            <form onSubmit={createNote}>
                title: <input onChange={e => setTitle(e.target.value)} value={title} /> <br />
                content: <input onChange={e => setContent(e.target.value)} value={content} /> <br />
                important: <input type="checkbox" onChange={e => setIsImportant(e.target.checked)} checked={isImportant} /> <br />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Create