import React, { useState } from 'react'
import { useEffect } from "react";
import './trackers.css';

function Trackers() {
    let [trackies, setTrackies] = useState([])
    let [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        fetch("http://localhost:8000/trackers"
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

export default Trackers