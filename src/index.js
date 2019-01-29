import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';
// import Counters from './components/countersChaild';
// import Counter from './components/counter';
// import Counter from './components/counterDemo2';
// import Counter from './components/counterDemo3';
// import Counter from './components/counterDemo4';

ReactDOM.render(<Counters />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
