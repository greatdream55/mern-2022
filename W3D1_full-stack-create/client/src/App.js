import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  // state for all cartoons
  const [allCartoons, setAllCartoons] = useState([])
  // state for inputs
  const [title, setTitle] = useState("")
  const [genre, setGenre] = useState("")
  const [episodes, setEpisode] = useState(1)

  // when the component finishes loading execute useEffect
  useEffect(() => {
    axios.get("http://localhost:8000/api/cartoons")
      .then(res => {
        // ! always see what the server is coming back with
        console.log(res.data);
        setAllCartoons(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  // submit form
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title, genre, episodes)
    const newCartoon = {
      title,
      genre,
      episodes: episodes
    }
    // take the obj and send it to the server -> DB
    axios.post("http://localhost:8000/api/cartoons", newCartoon)
      .then(res => {
        console.log("✅ SUCCESS from SERVER", res.data)
      })
      .catch(err => console.log("❌ ERROR from server", err))
  }

  return (
    <div className="App">
      <h1>Cartoons</h1>
      {/* {JSON.stringify(allCartoons)} */}

      {JSON.stringify(title)} <br />
      {JSON.stringify(genre)} <br />
      {JSON.stringify(episodes)} <br />
      {/* FORM */}
      <form onSubmit={submitHandler}>
        title: <input onChange={e => setTitle(e.target.value)} value={title}/> <br />
        genre: <input onChange={e => setGenre(e.target.value)} value={genre} /> <br />
        episode: <input type="number" onChange={e => setEpisode(e.target.value)} value={episodes}/> <br />
        <button>submit</button>
      </form>


      <hr />
      {
        allCartoons.map((eachItem, i) => {
          return (
            <div key={eachItem._id}>
              title :{eachItem.title} <br />
              genre :{eachItem.genre} <br />
              episodes :{eachItem.episodes} <br />
              <hr />
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
