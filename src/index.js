import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { Router,browserHistory } from 'react-router'

import registerServiceWorker from './registerServiceWorker';
import routers from './routers'

ReactDOM.render(
    <Router history={browserHistory} routes={routers}/>,
    document.getElementById('root')
);
registerServiceWorker();
