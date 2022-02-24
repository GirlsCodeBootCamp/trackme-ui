import React, { useState } from 'react'
import { useEffect } from "react";

function Trackers() {
    let [trackies, setTrackies] = useState([])
    let [errorMessage, setErrorMessage] = useState("")

    useEffect(() => {
        fetch("http://localhost:8000/trackers").then((Response) => {
            console.log(Response)
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
        return trackies.map((trackie) => <li key={trackie.url_address}>{trackie.name} {trackie.name ? ":" : ""} {trackie.url_address}</li>)
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