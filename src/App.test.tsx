import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';

const mockState = {};
const mockReducer = () => mockState;
const mockStore = createStore<Object>(mockReducer, mockState);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={mockStore}>
      <App />
    </Provider>, div);
});
