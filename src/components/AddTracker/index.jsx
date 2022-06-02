import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import './add_tracker.css';

export default function AddTracker() {

    const [statusSuccess, statusSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    useEffect(() => {
        let timerFunc = setTimeout(() => {
            setErrorMessage("");
            statusSuccessMessage("");
        }, 1000);

        return () => clearTimeout(timerFunc);
    }, [errorMessage, statusSuccess]);
    const [tracker, setTracker] = useState("")
    const {
        isAuthenticated,
        user
    } = useAuth0();

    function postTracker() {
        if (tracker.length < 3) {
            setErrorMessage("length of the tracker should be at least 3 char")
        }
        else if (isAuthenticated) {
            fetch('http://localhost:8000/trackers/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "url_address": tracker, "user_id": user.sub })
            })
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    } else {
                        setErrorMessage("Error creating a new tracker")
                    }
                })
                .then(data => {
                    statusSuccessMessage(`Tracker ${data.url_address} was created successfully`)
                    setTracker("")
                    console.log(data)
                })
                .catch(err => console.log(err))
        }
    }


    return (
        <div className='add-tracker-wrapper'>
            <div className='add-tracker'>
                <input
                    value={tracker}
                    onChange={event => setTracker(event.target.value)}
                    type="text" className='add-tracker-input'
                />
                <button
                    onClick={postTracker}
                    className='add-tracker-button'
                >
                    Track
                </button>
            </div>
            <div className='status'>
                <div className='status-success'>{statusSuccess}</div>
                <div className='status-error'>{errorMessage}</div>
            </div>
        </div>
    )
}
