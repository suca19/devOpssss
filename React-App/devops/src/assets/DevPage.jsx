import React, {useEffect} from 'react';
import './css/global.css';
import {useAppStore} from "./Store/store";

function DevPage() {
    const user = useAppStore.use.user;

    function handleSubmit() {
        console.log(JSON.parse(localStorage.getItem("email")))
    }

    if(user)
    {
        return (
            <div>
                <head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
                </head>
                <body>
                <p><i className="fa-solid fa-hammer"></i> DEV PAGE</p>
                <from></from>
                </body>
            </div>
        );
    }
    else
    {
        return <button onClick={handleSubmit} style={{background:"violet"}}>dzdzkd,zd</button>
    }
}

export default DevPage;