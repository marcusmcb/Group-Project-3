import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from "./components/Login";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <div>
          <Navbar />
          <Route exact path="/"  />
          <Route exact path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/dashboard" component={Dashboard} />
         
        </div>
      </Router>
      
     </> 
    );
  }
}

export default App;
