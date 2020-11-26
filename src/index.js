import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import './css/index.scss'
import ReactGA from 'react-ga';

function initializeReactGA() {
    ReactGA.initialize('G-03EE6RX9B4');
    ReactGA.pageview('/');
}

ReactDOM.render(<App/>, document.getElementById('root'));

