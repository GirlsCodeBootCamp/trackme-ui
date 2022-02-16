import React from 'react'
import logo from "../logo.png"

export default function Navbar() {
    return (
        <header className="App-header">
            <img src={logo} alt="logo" className='nav-logo' />
            <div className='navbar-text'>Login</div>
        </header>
    )
}