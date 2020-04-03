import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
//import Todo from "./components/Todo";
import Home from "./components/Home";
//import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/" exact component={Login}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
