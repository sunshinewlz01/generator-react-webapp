import React from 'react';
import ReactDOM from 'react-dom';
import DemoComponent from './index';


test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoComponent />, div);
});
