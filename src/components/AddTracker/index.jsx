import React, { useState } from 'react'
import './add_tracker.css';

export default function AddTracker() {

    const [tracker, setTracker] = useState("")

    function postTracker() {
        fetch('http://localhost:8000/trackers/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"url_address" : tracker})
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }


    return (
        <div className='add-tracker'>
            <input
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
    )
}
