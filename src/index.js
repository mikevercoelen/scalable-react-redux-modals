import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import App from './containers/App';
import LoginView from './containers/LoginView';

const store = createStore(reducers);

render((
  <Provider store={store}>
    <App>
      <LoginView />
    </App>
  </Provider>
), document.getElementById('root'));
