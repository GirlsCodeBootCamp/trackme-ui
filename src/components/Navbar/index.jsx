import React from 'react'
import logo from "../../logo.png"
import Login from "../Login";

export default function Navbar() {



    return (
        <header className="App-header">
            <img src={logo} alt="logo" className='nav-logo' />
            <Login/>
        </header>
    )
}
