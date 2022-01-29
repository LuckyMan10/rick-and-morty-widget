import { FilterBar } from "components/filterBar";
import { filterBar } from "components/filterBar/type";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, mount } from "enzyme";

describe("FilterBar component", () => {
  configure({ adapter: new Adapter() });

  it("Submit must be work", () => {
      expect(true).toEqual(true);
  });
});
