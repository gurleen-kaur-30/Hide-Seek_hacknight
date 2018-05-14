import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Lost from './Lost';
import Found from './Found';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/lost" component={Lost} />
            <Route exact path="/found" component={Found}/>
        </div>
    </BrowserRouter> , document.getElementById('root'));
registerServiceWorker();
