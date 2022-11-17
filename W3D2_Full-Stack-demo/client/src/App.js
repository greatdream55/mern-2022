import './App.css';
import {Link, Routes, Route, Navigate} from 'react-router-dom';
import Main from './components/Main';
import Create from './components/Create';
import ViewOne from './components/ViewOne';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <h1>Notes 📝</h1>
      <Link to="/notes">HOME</Link> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <Link to="/create">Create</Link>
      <hr />

      {/* THEATER STAGE */}
      <Routes>
        {/* MAIN - ALL NOTES */}
        <Route path='/notes' element={<Main/>} />

        {/* Create */}
        <Route path='/create' element={<Create/>}/>

        {/* VIEW ONE */}
        <Route path="/notes/:id" element={<ViewOne/>}/>

        {/* UPDATE */}
        <Route path='/notes/:id/edit' element={<Update/>}/>

        {/* REDIRECT */}
        <Route path='*' element={<Navigate to="/notes" replace/> } />
      </Routes>
    </div>
  );
}

export default App;
