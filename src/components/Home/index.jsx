import React from "react"
import AddTracker from '../AddTracker';
import logo from "../../logo.png";

const Home = () => {
  return (
    <div>
      <h1 className='title'>
        TrackMe Ninja
      </h1>
  
      <div className='app-tracker-add'>
        <AddTracker />
        <div className='app-logo'>
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  )
};

export default Home;
