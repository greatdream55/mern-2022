import React, {useEffect, useState} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = (props) => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [isImportant, setIsImportant] = useState(false)

    const navigate = useNavigate()

    // grab the url variable :id
    const { id } = useParams()

    useEffect(()=> {
        // axios.get(`http://localhost:8000/api/notes/${id}`)
        axios.get("http://localhost:8000/api/notes/" + id)
            .then(res => {
                console.log(res.data)
                setTitle(res.data.title)
                setContent(res.data.content)
                setIsImportant(res.data.isImportant)
            })
            .catch(err => console.log(err))
    },[id])

    const updateNote = (e) => {
        e.preventDefault();
        // ! PUT REQUEST
        axios.put("http://localhost:8000/api/notes/"+ id, {title, content, isImportant})
            .then(res => {
                console.log("✅ client success")
                console.log(res.data);
                navigate("/notes")// 📌
            })
            .catch(err => {
                console.log("❌ client error")
                console.log(err)
            })
    }

    return (
        <div>
            form state variables: <br />
            {JSON.stringify(title)} <br />
            {JSON.stringify(content)} <br />
            {JSON.stringify(isImportant)} <br />
            <form onSubmit={updateNote}>
                title: <input onChange={e => setTitle(e.target.value)} value={title} /> <br />
                content: <input onChange={e => setContent(e.target.value)} value={content}/> <br />
                important: <input type="checkbox" onChange={e => setIsImportant(e.target.checked)} checked={isImportant}/> <br />
                <button>submit</button>
            </form>
        </div>
    )
}

export default Update