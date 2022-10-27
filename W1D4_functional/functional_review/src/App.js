import './App.css';
// 1. destructure {useState} from React
import Display from './components/Display';
import Form from './components/Form';
import React, {useState} from 'react';


function App() {

  // const animalsArray = ["🦓", "🦁", "🦅", "🦛"]
  // CREATE STATE 
  const [animals, setAnimals] = useState(["🦓", "🦁", "🦅", "🦛"])



  return (
    <div className="App">
      {/* {JSON.stringify(animals)} */}
      <h3>Animals!</h3>
      <Form/>
      {/* <Display animals={animals}/> */}
    </div>
  );
}

export default App;
