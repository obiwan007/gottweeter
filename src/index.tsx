import 'core-js';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Root } from './pages/root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App><Root/></App>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
