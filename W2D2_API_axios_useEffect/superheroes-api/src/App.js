import './App.css';
import { useState,useEffect } from 'react'
import axios from 'axios';

function App() {

  const [superheroes, setSuperHeroes] = useState([])

  // useEffect ------------------
  // ! useEffect triggers when the component has FINISHED rendering
  useEffect(() => {
    axiosSuperHeroes();
    // axios.get("https://akabab.github.io/superhero-api/api/all.json")
    //   .then((res) => {
    //     // ! axios wraps everything (from the response) inside its own obj .data
    //     console.log(res.data)
    //     setSuperHeroes(res.data)
    //   })
    //   .catch(err => console.log(err))
  }, [])

  // VANILLA JS fetch
  const fetchSuperHeroes = () => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => {
        // console.log(res)
        return res.json()
      })
      .then((res) => {
        console.log(res)
        setSuperHeroes(res)
      })
      .catch((serverErrorObject) => {
        console.log("❌ ERROR ", serverErrorObject)
      })
  }


  // AXIOS get
  const axiosSuperHeroes = () => {

    axios.get("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => {
        // ! axios wraps everything (from the response) inside its own obj .data
        console.log(res.data)
        setSuperHeroes(res.data)
      })
      .catch(err => console.log(err))
  }

  // ! DON't DO THIS!
  // axiosSuperHeroes(); // loop!!!

  return (
    <div className="container">
      <div className="App">
        <h1>SuperHeroes API 🦸‍♀️🦸‍♂️</h1>

        <button onClick={fetchSuperHeroes}>fetch superheroes</button> |
        <button onClick={axiosSuperHeroes}>axios superheroes</button>
        <hr />

        {/* {JSON.stringify(superheroes)} */}

        <table>
          <thead>
            <tr>
              <th>image</th>
              <th>Hero name</th>
              <th>Full name</th>
              <th>Publisher</th>
            </tr>
          </thead>
          <tbody>
            {
              superheroes.map((hero, i) => {
                return (
                  <tr key={hero.id}>
                    <td><img src={hero.images.md} alt={hero.name} width="80px" /></td>
                    <td>{hero.name}</td>
                    <td>{hero.biography.fullName}</td>
                    <td>{hero.biography.publisher}</td>
                  </tr>
                )
              })
            }

          </tbody>

        </table>




      </div>
    </div>
  );
}

export default App;
