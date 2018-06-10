import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

var mqtt = require('mqtt');

/*This creates a connection to the broker and adds the parameter options which will be defined later*/
var client = mqtt.connect(url,options);


