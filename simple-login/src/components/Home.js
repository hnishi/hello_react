import React from "react";

function Home() {
    let element01 = 'debug1';
    if (!sessionStorage.getItem('auth-token')) {
        console.log('no auth token set');
        element01 = 'debug2';
        //do something like redirect to login page
    } else {
        const authToken = '123456abcdef';
        if (sessionStorage.getItem('auth-token') == authToken) {
            console.log('good token. Log in.')
            //do something like redirect to todo page
            element01 = 'debug3';
        } else {
            console.log('bad token.')
            //do something like redirect to login page
            element01 = 'debug4';
        }
    }

    return(
        <p> hello </p>
    );
}

export default Home;
