import { Error } from "components/error";
import * as Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";

const setUp = () => shallow(<Error />);

describe("Error component", () => {
  configure({ adapter: new Adapter() });

  it("Element with class error must be met once", () => {
    const component = setUp();
    const element = component.find(".error");
    expect(element.length).toBe(1);
  });

  it("Element with class error__title must be met once", () => {
    const component = setUp();
    const element = component.find(".error__title");
    expect(element.length).toBe(1);
  });

  it("Element with class error__message must be met once", () => {
    const component = setUp();
    const element = component.find(".error__message");
    expect(element.length).toBe(1);
  });

  it("Error title must be exist", () => {
    const component = setUp();
    const element = component.find(".error__title");
    expect(element.text()).toEqual("Nothing found");
  });

  it("Error message must be exist", () => {
    const component = setUp();
    const element = component.find(".error__message");
    expect(element.text()).toEqual("Try another query.");
  });
});
