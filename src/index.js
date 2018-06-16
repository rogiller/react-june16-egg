import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './global/App';
import registerServiceWorker from './global/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
