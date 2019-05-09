import React from "react";
import Header from "../components/Header";
import { shallow } from "enzyme";
import "../setupTests";

describe("Header", () => {
    let props;
  beforeEach(() => {
    props = {
        isHomePage: true
    };
  });

  describe('render', () => {
      test('should render with SearchBar when isHomepage is set to true', () => {
        expect(shallow(<Header {...props}/>)).toMatchSnapshot();
      });

      test('should render without SearchBar when isHomepage is set to false', () => {
        props.isHomePage = false;
        expect(shallow(<Header {...props}/>)).toMatchSnapshot();
      });
  });
});
