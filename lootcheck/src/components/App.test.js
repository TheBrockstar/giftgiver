import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  const app = shallow(<App />);

  it('renders properly', () => {
    expect(app).toMatchSnapshot(app);
  })

  it('contains a connected wallet component', () => {
    // console.log(app.debug());

    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  })
});