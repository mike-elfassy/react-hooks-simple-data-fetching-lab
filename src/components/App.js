// create your App component here
import React, { useState, useEffect } from "react";

function App() {

    const API_URL = "https://dog.ceo/api/breeds/image/random"
    const [image, setImage] = useState(null)

    useEffect(() => {
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setImage(data.message))
    }, [])

    if (!image) {return (<p>Loading...</p>)}

    return (
        <img src={image} alt="A Random Dog"></img>
    )
}

export default App;
