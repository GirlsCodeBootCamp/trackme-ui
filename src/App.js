import './App.css';
import Navbar from './components/Navbar';
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='ninja-stub'>
        <h1>
          TrackMe Ninja
        </h1>

      </div>
      <div className='app-tracker-add'>
        <div className='add-tracker'>
          <input type="text" className='add-tracker-input' />
          <button className='add-tracker-button'>Track</button>
        </div>
        <div className='app-logo'>
          <img src={logo} alt="logo" className='app-logo' />
        </div>
      </div>
    </div>
  );
}

export default App;
