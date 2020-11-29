import { shallow } from 'enzyme';
import React from 'react';
import Gallery from '../components/Gallery.js';
import Character from '../components/Character.js';

let wrapper;

beforeAll(() => {
  global.fetch = jest.fn();
});

beforeEach(() => {
  wrapper = shallow(<Gallery />, { disableLifecycleMethods: true });
});

afterEach(() => {
   wrapper.unmount();
});

it("must render a message while the api call is not done", () => {
    expect(wrapper.find(".Gallery-message").exists()).toBeTruthy();
});

it("must show two Character components and hide the message after api call is done", async () => {
  const spyDidMount = jest.spyOn(Gallery.prototype,"updateGalleryCharacters");
  const jsonResult = [
    {
      "char_id": 1,
      "name": "Walter White",
      "birthday": "09-07-1958",
      "occupation": [
        "High School Chemistry Teacher",
        "Meth King Pin"
      ],
      "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
      "status": "Presumed dead",
      "nickname": "Heisenberg",
      "appearance": [
        1,
        2,
        3,
        4,
        5
      ],
      "portrayed": "Bryan Cranston",
      "category": "Breaking Bad",
      "better_call_saul_appearance": []
    },
    {
      "char_id": 4,
      "name": "Walter White Jr.",
      "birthday": "07-08-1993",
      "occupation": [
        "Teenager"
      ],
      "img": "https://media1.popsugar-assets.com/files/thumbor/WeLUSvbAMS_GL4iELYAUzu7Bpv0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2018/01/12/910/n/1922283/fb758e62b5daf3c9_TCDBRBA_EC011/i/RJ-Mitte-Walter-White-Jr.jpg",
      "status": "Alive",
      "nickname": "Flynn",
      "appearance": [
        1,
        2,
        3,
        4,
        5
      ],
      "portrayed": "RJ Mitte",
      "category": "Breaking Bad",
      "better_call_saul_appearance": []
    }
  ];

  fetch.mockImplementation(() => {
    return Promise.resolve({
      status: 200,
      json: () => {
      return Promise.resolve(jsonResult);
     }
   });
  });

  await wrapper.instance().updateGalleryCharacters();

  expect(spyDidMount).toHaveBeenCalled();

  expect(
    wrapper.containsMatchingElement(
      <Character />
    )
  ).toBe(true);

  expect(wrapper.find(Character).length).toBe(jsonResult.length);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(wrapper.find(".Gallery-message").length).toBe(0);

  spyDidMount.mockRestore();
  fetch.mockClear();

});