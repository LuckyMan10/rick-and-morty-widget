import App from "App";
import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { mocks } from "__tests__/mocks/graphql";

describe("App component", () => {
  it("Element must have main, where test-id = App", () => {
    render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
    const app = screen.getAllByTestId("App");
    expect(app.length).toBe(1);
  });

  it("Element must have page Component, where test-id = home-page", () => {
    render(
      <MockedProvider mocks={mocks}>
        <App />
      </MockedProvider>
    );
    const homePage = screen.getAllByTestId("home-page");
    expect(homePage.length).toBe(1);
  });
});
