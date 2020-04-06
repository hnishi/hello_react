import React, {useState} from 'react';
import { BrowserRouter, Route, useHistory } from "react-router-dom";
import Login from "./Login";

function LoginPage() {
  const history = useHistory();
  const handleLogoutSubmit = (e) => {
      e.preventDefault();
      sessionStorage.setItem('auth-token', 'logout');
      history.push('/');
  }

  return (
    <div className="login-page">
        <h1>Home</h1>
        <p>You successfully logged in !</p>
        <h2>Log Out</h2>
        <form autoComplete="off" onSubmit={handleLogoutSubmit}>
            <button type="submit" className="btn btn-primary">
                Logout
            </button>
        </form>
    </div>
  );
}

function NotLoginPage() {
  return (
    <div>
      <Login />
    </div>
  );
}

function Home() {
    const history = useHistory();
    let element01 = 'debug1';
    let page_home;
    if (!sessionStorage.getItem('auth-token')) {
        console.log('no auth token set');
        element01 = 'debug2';
        //do something like redirect to login page
        page_home = <NotLoginPage />;
    } else {
        const authToken = '123456abcdef';
        if (sessionStorage.getItem('auth-token') === authToken) {
            console.log('good token. Log in.');
            //do something like redirect to todo page
            element01 = 'debug3';
            page_home = <LoginPage />;
        } else {
            console.log('bad token.');
            //do something like redirect to login page
            element01 = 'debug4';
            page_home = <NotLoginPage />;
        }
    }
    console.log(element01);

    const handleLogoutSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem('auth-token', 'logout');
        history.push('/');
    }

    //<div className="login-page">
    //    <h2>Log Out</h2>
    //    <form autoComplete="off" onSubmit={handleLogoutSubmit}>
    //        <button type="submit" className="btn btn-primary">
    //            Logout
    //        </button>
    //    </form>
    //</div>
    return(
    <div>
        {page_home}
    </div>
    );
}

export default Home;
