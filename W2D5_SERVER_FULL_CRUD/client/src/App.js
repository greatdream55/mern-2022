import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'

function App() {

  // create state for this component
  const [cartoons, setCartoons] = useState([]);

  // make the req to the server on component load
  useEffect(() => {
    axios.get("http://localhost:8000/api/cartoons")
      .then( res => {
        // always see what is coming back from the server / controller
        console.log(res.data);
        setCartoons(res.data)
      })
      .catch( err => {
        console.log("❌❌❌❌", err)
      })
  }, [])

  return (
    <div className="App">
      <h1>Cartoons</h1>
      <hr />

      {/* {JSON.stringify(cartoons)} */}

      {
        cartoons.map((eachOneCartoon, i) => {
          return <div key={eachOneCartoon._id}>
            {eachOneCartoon.title}
            </div>
        })
      }
    </div>
  );
}

export default App;
