import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Header from '../../app/components/Header';

configure({ adapter: new Adapter() });

describe('Header Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header
      userData={null}
      userDataLoading
      login={() => {}}
      signup={() => {}}
      logout={() => {}}
    />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have header element', () => {
    expect(wrapper.find('div.header').length).toEqual(1);
  });

  it('renders the header while loading', () => {
    const expectedOutput = '<div class="header"><h2>Welcome to 1to1 Chat</h2><div class="loading">Loading...</div></div>';
    const realOutput = wrapper.find('div.header').html();
    expect(realOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });

  it('check loggedin state', () => {
    const expectedOutput = 'nickname';
    wrapper = shallow(<Header
      userData={{
        nickname: expectedOutput,
      }}
      userDataLoading={false}
      login={() => {}}
      signup={() => {}}
      logout={() => {}}
    />);
    const headerOutput = wrapper.find('div.header').html();
    expect(headerOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });

  it('check login tab state', () => {
    wrapper = shallow(<Header
      userData={null}
      userDataLoading={false}
      login={() => {}}
      signup={() => {}}
      logout={() => {}}
    />);
    const expectedOutput = 'Login';
    const headerOutput = wrapper.find('div.header').html();
    expect(headerOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });

  it('check login form', () => {
    wrapper = shallow(<Header
      userData={null}
      userDataLoading={false}
      login={() => {}}
      signup={() => {}}
      logout={() => {}}
    />);
    wrapper.setState({ activeTabId: 'Login' });
    const expectedOutput = 'name="Login"';
    const headerOutput = wrapper.find('div.header').html();
    expect(headerOutput.indexOf(expectedOutput) > -1).toEqual(true);
  });
});
