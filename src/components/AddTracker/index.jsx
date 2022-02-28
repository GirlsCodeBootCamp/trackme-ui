import React, { useState } from 'react'
import './add_tracker.css';

export default function AddTracker() {

    const [tracker, setTracker] = useState("")

    function post_tracker() {
        fetch("http://localhost:8000/trackers", {
            method: "POST",
            body: { "url_name": tracker }
        }).then((Response) => {
            if (Response.ok) {
                console.log("display All is good to the user")
            }
            else {
                console.log("display error to the user")
            }
        })

    }
    return (
        <div className='add-tracker'>
            <input
                onChange={event => setTracker(event.target.value)}
                type="text" className='add-tracker-input'
            />
            <button
                // onClick={post_tracker()}
                className='add-tracker-button'
            >
                Track
            </button>
        </div>
    )
}
