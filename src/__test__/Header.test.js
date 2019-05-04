import React from 'react'
import SearchBar from '../components/SearchBar'
import { shallow } from 'enzyme'
import '../setupTests'


const updateSearchMock = jest.fn();
const updateResultMock = jest.fn();
const wrapper = shallow(<SearchBar updateSearch={updateSearchMock} updateResult={updateResultMock} />);

let container, containerInput;


describe("SearchBar", () => {
    beforeEach(() => {
      container = wrapper.find("div");
      containerInput = container.find("input");
      updateResultMock.mockClear();
    });

    it("should have two <div>", () => {
        expect(container).toHaveLength(2);
        expect(containerInput).toHaveLength(2);
    });

    it("should have a <div> with properly className prop", () => {
        expect(container.find("div").first().props().className).toEqual("searchbar-div");
    });

    it("should have two <input>", () => {
        expect(containerInput).toHaveLength(2);
        expect(containerInput.first().props().className).toEqual("country-input")
        expect(containerInput.last().props().className).toEqual("limit-input")
    });

});

