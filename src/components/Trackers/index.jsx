import React, { useState } from 'react'
import { useEffect } from "react";
import './trackers.css';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";


function Trackers() {
    const [trackies, setTrackies] = useState([])
    const [errorMessage, setErrorMessage] = useState("");

    const { user } = useAuth0();

    useEffect(() => {
        console.log("user", user)
    }, [])

    useEffect(() => {
        const token = localStorage.getItem('access_token');
        fetch("http://localhost:8000/trackers",
            {
                headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': '*/*'
                }}
        ).then((Response) => {
            if (Response.ok) {
                return Response.json()
            }
        }).then((data) => {
            setTrackies(Object.values(data))
        }).catch(() => {
            setErrorMessage("No connection to the API")
        })
    }, []);

    function build_trackers() {
        return trackies.map((trackie) => 
        <div key={trackie.url_address} className="tracker-box">
            <div>
                <span>{trackie.name} {trackie.name ? ":" : ""} {trackie.url_address}</span>
            </div>
            <div className="tracker-box-right">
                <div>
                    <span>{trackie.frequency}</span>
                </div>
                <label className="switch">
                    <input type="checkbox"/>
                    <span className="slider round"></span>
                </label>
            </div>
        </div>)
    }

    return (
        <div>
            <h1 className='title'>Trackers</h1>
            {errorMessage}
            <ul>
                {build_trackers()}
            </ul>
        </div>
    )

}

export default withAuthenticationRequired(Trackers);