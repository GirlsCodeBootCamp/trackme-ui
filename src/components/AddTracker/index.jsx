import React from 'react'
import './add_tracker.css';

export default function AddTracker() {
    return (
        <div className='add-tracker'>
            <input type="text" className='add-tracker-input' />
            <button className='add-tracker-button'>Track</button>
        </div>
    )
}
