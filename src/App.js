import React, { Component } from 'react';
import Lost from './Lost';
import Found from './Found';
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
          <div className="App">
              <p> HAVE YOU </p>
              <p><Link to='/lost' className="button"> LOST </Link> OR <Link to = '/found' className="button"> FOUND </Link> </p>
              <p> SOMETHING? </p>
              <p><Link to= "#" className="button"> See All Lost Items </Link></p>
          </div>
        </div>
    );
  }
}

export default App;
