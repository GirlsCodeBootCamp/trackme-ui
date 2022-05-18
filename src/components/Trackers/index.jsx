import React, { useState } from 'react'
import { useEffect } from "react";
import './trackers.css';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";


function Trackers() {
    const [trackies, setTrackies] = useState([])
    const [errorMessage, setErrorMessage] = useState("");

    const { user } = useAuth0();

    useEffect(() => {
        getTrackers()
            .then(data => data.json())
            .then(res => setTrackies(res.trackers))
            .catch(err => setErrorMessage(err))
    }, []);

    async function getTrackers() {
        const token = localStorage.getItem('access_token')

        return await fetch(`http://localhost:8000/users/${user.sub}`, {

            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        });
    }

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
                        <input type="checkbox" />
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
                {!!trackies.length && build_trackers()}
            </ul>
        </div>
    )

}

export default withAuthenticationRequired(Trackers);