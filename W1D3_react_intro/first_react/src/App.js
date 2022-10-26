import './App.css';
// import the other Component
import SomeClassComponent from "./components/SomeClassComponent"

function App() {

  const message = "hello from the app.js function";
  const animals = ["tiger", "elephant", "zebra"];
  const person = {
    name: "John",
    age: 37,
    favFood: "🍕"
  }

  console.log("hello react")

  // const bob = animals.map( (element) => {
  //   return <li>{element}</li>
  // })

  return (
    <fieldset>
      <legend>App.js</legend>
      <div className="App">
        <h1>hello ninjas 🎈</h1>
      </div>
      <div>
        <p>
          {JSON.stringify(animals)}
        </p>
        <hr />
        {
          animals.map((element, idx) => {
            return <li key={idx}>{element}</li>
          })
        }
        <SomeClassComponent x={3} name={"john"} unicorns={animals}/>
        <SomeClassComponent person={person} message={message}/>

      </div>
    </fieldset>
  );
}

export default App;
