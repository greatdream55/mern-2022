import './App.css';
import Person from "./components/Person";
import OtherComponent from './components/OtherComponent';

function App() {

  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  }

  return (
    <fieldset>
      <legend>App.js</legend>
      <h1>more react</h1>
      {/* {JSON.stringify(person)} */}
      {/* <Person person={person}/> */}



      <OtherComponent alice={10} />
    </fieldset>
  );
}

export default App;
