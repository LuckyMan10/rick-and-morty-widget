import { Card } from "components/card";
import { card } from "components/card/type";
import * as Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";

const cardData = {
  image: "image-url",
  name: "card name"
};

const setUp = (props: card) => shallow(<Card {...props} />);

describe("Card component", () => {
  configure({ adapter: new Adapter() });

  it("Element with class card-image must be once", () => {
    const component = setUp(cardData);
    const root = component.find(".card-image");
    expect(root.length).toBe(1);
  });

  it("Element with class card-name must be once", () => {
    const component = setUp(cardData);
    const root = component.find(".card-name");
    expect(root.length).toBe(1);
  });

  it("Element with class card-image must be have src attr", () => {
    const component = setUp(cardData);
    const src = component.find(".card-image").prop("src");
    expect(src?.length).toBeGreaterThan(1);
    expect(src).toEqual(cardData.image);
  });

  it("Element with class card-name must be have inner text", () => {
    const component = setUp(cardData);
    const h3 = component.find(".card-name");
    expect(h3.text()).toEqual(cardData.name);
  });
});
