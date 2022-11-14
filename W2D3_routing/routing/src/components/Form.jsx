import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


const Form = (props) => {

    const [heroNum, setHeroNum] = useState(1)
    // in order to use the programmatic way
    // we need to invoke useNavigate
    const navigate = useNavigate();
    // console.log(navigate)


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(heroNum)
        navigate("/hero/" + heroNum)
        setHeroNum(1)
        // navigate("/hero/" + heroNum, {replace:true})
    }

    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                enter a number
                <input type="number" onChange={e => setHeroNum(e.target.value) } value={heroNum}/>
                <button>Submit`</button>
            </form>

            <p>
                <button onClick={goBack}>go back!!</button>
            </p>
        </div>
    )
}

export default Form