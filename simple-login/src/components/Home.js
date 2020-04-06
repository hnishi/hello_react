import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

function Home() {
    const history = useHistory();
    let element01 = 'debug1';
    if (!sessionStorage.getItem('auth-token')) {
        console.log('no auth token set');
        element01 = 'debug2';
        //do something like redirect to login page
    } else {
        const authToken = '123456abcdef';
        if (sessionStorage.getItem('auth-token') === authToken) {
            console.log('good token. Log in.');
            //do something like redirect to todo page
            element01 = 'debug3';
        } else {
            console.log('bad token.');
            //do something like redirect to login page
            element01 = 'debug4';
        }
    }
    console.log(element01);

    const handleLogoutSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem('auth-token', 'logout');
        history.push('/');
    }

    return(
    <div className="login-page">
        <p> hello </p>
        <h2>Log Out</h2>
        <form autoComplete="off" onSubmit={handleLogoutSubmit}>
            <button type="submit" className="btn btn-primary">
                Logout
            </button>
        </form>
    </div>
    );
}

export default Home;
