import './App.css';
import NavBar from './Pages/Components/NavBar'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Home  from './Pages/Home';
import Skills from './Pages/Skills';
import About from './Pages/About';
import Projects from './Pages/Projects';
import ContactMe from './Pages/ContactMe';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<ContactMe/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
