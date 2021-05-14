
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Timer from './App.js';

let counter = 0;

setInterval(function(){ ReactDOM.render(<Timer seconds={counter}/>, document.getElementById('root')); counter += 1;},1000);