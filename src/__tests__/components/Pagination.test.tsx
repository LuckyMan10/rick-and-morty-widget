import { Pagination } from "components/pagination";
import { render, screen } from "@testing-library/react";

describe("Pagination component", () => {
  const pages = 10;
  const changePageHandler = jest.fn();

  it("Element must have wrapper Stack", () => {
    render(<Pagination pages={pages} changePageHandler={changePageHandler} />);
    const wrapper = screen.getAllByTestId("stack-mui-pagintaion-wrapper");
    expect(wrapper.length).toBe(1);
  });

  it("Element must have component MuiPagination", () => {
    render(<Pagination pages={pages} changePageHandler={changePageHandler} />);
    const paginationComponent = screen.getAllByTestId("pagination");
    expect(paginationComponent.length).toBe(1);
  });
});
