import { Home } from "pages/home";
import { getByTestId, queryByTestId, render, screen, waitFor } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import * as Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import userEvent from "@testing-library/user-event";
import { mocks } from "__tests__/mocks/graphql";
import { shallow, configure, mount } from "enzyme";

const character = {
  name: "Abradolf Lincler",
  status: "unknown",
  species: "Human",
  type: "Genetic experiment",
  gender: "Male",
  image: "Image url",
  location: {
    name: "Location"
  },
  origin: {
    name: "Origin"
  },
  id: 1
};

const setUp = () =>
  mount(
    <MockedProvider mocks={mocks}>
      <Home />
    </MockedProvider>
  );

describe("Home component", () => {
  configure({ adapter: new Adapter() });

  it("Element with test-id home-page must be render", () => {
    render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>
    );
    const homePage = screen.getAllByTestId("home-page");
    expect(homePage.length).toBe(1);
  });

  it("Element must have title", () => {
    const component = setUp();
    const element = component.find(".homePage__title");
    expect(element.text()).toEqual("Characters widget");
  });

  it("When isDataReady === true, element with test-id homePage-content and homePage-cards must be exist", async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>
    );
    await waitFor(() => {
      const content = screen.getAllByTestId("homePage-content");
      const cards = screen.getAllByTestId("homePage-cards");
      expect(content.length).toBe(1);
      expect(cards.length).toBe(1);
    });
  });

  it("When the element with test-id card-wrapper is clicked, a Popup should open", async () => {
    const { queryByTestId } = render(
      <MockedProvider mocks={mocks}>
        <Home />
      </MockedProvider>
    );
    await waitFor(() => {
      const popupClose = queryByTestId("dialog");
      expect(popupClose).toBeFalsy();
      userEvent.click(screen.getByTestId("card-wrapper"));
      const popupOpen = queryByTestId("dialog");
      expect(popupOpen).toBeTruthy();
    });
  });

});
