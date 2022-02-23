import './App.css';
import AddTracker from './components/AddTracker';
import Navbar from './components/Navbar';
import Trackers from './components/Trackers';
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <div className='main-content'>
        <h1 className='title'>
          TrackMe Ninja
        </h1>

        <div className='app-tracker-add'>
          <AddTracker />
          <div className='app-logo'>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <Trackers />
      </div>

      <footer>
        &copy; Developed by Woman Career Boot Camp
      </footer>
    </div>
  );
}

export default App;
