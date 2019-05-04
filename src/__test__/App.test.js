import React from 'react';
import { shallow } from 'enzyme';
import App from '../components/App';
import '../setupTests'

it('Renders App', () => {
  shallow(<App />);
});