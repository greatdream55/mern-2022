import './App.css';
import ErrorPage from './components/ErrorPage';
import Other from './components/Other';
import Main from './components/Main';
import Hero from './components/Hero';
import Form from './components/Form';
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Routing</h1>
      {/* <a href="/">a tag home</a> |  */}
      <Link to={"/"}>Link home</Link> |
      <Link to={"/other"}>other</Link> |
      <Link to={"/form"}>FORM</Link>
      <hr />

      <Form />

      <fieldset>
        <legend>Routes component</legend>

        {/* THEATER STAGE - ROUTES */}
        <Routes>

          {/* ACT I */}
          <Route path='/hero/:heroId' element={<Hero />} />

          {/* ACT II */}
          <Route path='/other' element={
            <>
              <Other />
              <Main />
            </>
          } />

          {/* <Route path='/form' element={<Form/>} /> */}

          <Route path='/' element={<Main />} />

          {/* wildcard */}
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </fieldset>
    </div>
  );
}

export default App;
