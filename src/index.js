import React from 'react';
import { render } from 'react-dom';
import 'animate.css';
import './includes/index';
import './index.css';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(<App />, document.getElementById('root'));
registerServiceWorker();
