import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from './components/Home'
import Navbar from './components/Navbar'
import Trackers from './components/Trackers'

function App() {
  return (
    <div className='App'>
      <header>
        <Navbar />
      </header>
      <div className='main-content'>
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route path='/trackers'
            element={<Trackers />}
          />
        </Routes>
      </div>
      <footer>
        &copy; Developed by Woman Career Boot Camp
      </footer>
    </div>
  );
}

export default App;
