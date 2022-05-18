import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../logo.png"
import Login from "../Login";
import { useAuth0 } from '@auth0/auth0-react';
import Logout from '../Logout';

export default function Navbar() {
    const {
        isAuthenticated,
    } = useAuth0();


    return (
        <header className="App-header">
            <Link to="/"><img src={logo} alt="logo" className='nav-logo' /></Link>
            {isAuthenticated && <Link to="/trackers">Trackers</Link>}
            {isAuthenticated && <Link to="/add">Add Tracker</Link>}
            {!isAuthenticated && <Login />}
            {isAuthenticated && <Logout />}
        </header>
    )
}
