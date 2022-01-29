import { Loader } from "components/loader";
import * as Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, shallow } from "enzyme";

const setUp = () => shallow(<Loader />);

describe("Loader component", () => {
  configure({ adapter: new Adapter() });

  it("Element with class loader must be met once", () => {
    const component = setUp();
    const element = component.find(".loader");
    expect(element.length).toBe(1);
  });

  it("Element with id loader must be exist", () => {
    const component = setUp();
    const element = component.find("#loader");
    expect(element.length).toBe(1);
  });
});
