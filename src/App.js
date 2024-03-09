import NavBar from './Pages/Components/NavBar';
import ContactMe from './Pages/ContactMe';
import Home from './Pages/Home';
import './App.css';
function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
        <Home />
      </div>
      <div id='contactme'>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
