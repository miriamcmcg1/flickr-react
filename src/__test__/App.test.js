import React from "react";
import { shallow } from "enzyme";
import App from "../components/App";
import "../setupTests";

describe("Render App", () => {
  describe('render', () => {
      test('should render App', () => {
        expect(shallow(<App />)).toMatchSnapshot();
      });
  });
});
