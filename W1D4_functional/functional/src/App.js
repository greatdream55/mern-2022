import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';

function App() {

  const btnStyle = {
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, rebeccapurple, magenta)',
    color: '#fff',
    border: 'none'
  };

  const person = {
    name: "Bob",
    favFood: "🍝",
    age: 45
  }

  return (
    <fieldset>
      <legend>App.js</legend>
      {JSON.stringify(person)}
      {/* <button style={btnStyle}>click me</button> */}
      {/* <ClassComponent personFromProps={person} /> */}
      <hr />
      <FunctionalComponent 
        num={10} 
        personFromProps={person}
        name={"alice"}
        
        />
    </fieldset>
  );
}

export default App;
