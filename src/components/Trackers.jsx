import React, { useState } from 'react'
import { useEffect } from "react";
import './trackers.css';

function Trackers() {
    let [trackies, setTrackies] = useState([])
    let [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        fetch("http://localhost:8000/trackers", {
            mode: 'no-cors'
        }).then((Response) => {
            if (Response.ok) {
                console.log("trackers", Response.json())
                return Response.json()
            }
        }).then((data) => {
            setTrackies(Object.values(data))
        }).catch(() => {
            setErrorMessage("No connection to the API")
            setTrackies([{"name": "Yandex",
                "url_address": "https://ya.ru", "frequency": "D"},{"url_address": "yahoo.com",
                "created_at": "2022-02-10T19:40:35.073346", "frequency": "H"}
                ,{"url_address": "mail.ru",
                "created_at": "2022-02-10T19:40:35.073346", "frequency": "D"},{"url_address": "torba.com.ua",
                "created_at": "2022-02-10T19:40:35.073346",
                "is_offer": "None", "frequency": "D"}])
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
                <label class="switch">
                    <input type="checkbox"/>
                    <span class="slider round"></span>
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