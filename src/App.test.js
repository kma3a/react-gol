import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-testing-library';
import App from './App';

it('renders without crashing', () => {
    const wrapper = render(<App />);
});
