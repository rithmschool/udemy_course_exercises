import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Warbler from './containers/Warbler';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Warbler />,
  document.getElementById('root')
);
registerServiceWorker();
