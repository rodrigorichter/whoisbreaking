import { shallow } from 'enzyme';
import React from 'react';
import App from '../App.js';
import Navbar from '../components/Navbar.js';
import Searchbar from '../components/Searchbar.js';
import Searchfilters from '../components/Searchfilters.js';
import Character from '../components/Character.js';

it("renders App component", () => {
  shallow(<App />);
});

it('should have a `Navbar` element', () => {
  const wrapper = shallow(
    <App />
  );
  expect(
    wrapper.containsMatchingElement(
      <Navbar />
    )
  ).toBe(true);
});

it('should have a `Searchbar` element', () => {
  const wrapper = shallow(
    <App />
  );
  expect(
    wrapper.containsMatchingElement(
      <Searchbar />
    )
  ).toBe(true);
});

it('should have a `Searchfilters` element', () => {
  const wrapper = shallow(
    <App />
  );
  expect(
    wrapper.containsMatchingElement(
      <Searchfilters />
    )
  ).toBe(true);
});

it('should not have any `Character` element', () => {
  const wrapper = shallow(
    <App />
  );
  expect(
    wrapper.containsMatchingElement(
      <Character />
    )
  ).toBe(false);
});

