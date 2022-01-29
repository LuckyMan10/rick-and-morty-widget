import { FilterBar } from "components/filterBar";
import { filterBar } from "components/filterBar/type";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { configure, mount } from "enzyme";

const setUp = (props: filterBar) => mount(<FilterBar onSubmit={props.onSubmit} />);
const fields = ["name", "status", "species", "type", "gender"];

describe("FilterBar component", () => {
  configure({ adapter: new Adapter() });

  it("Element must have one Formik", () => {
    const handleSubmit = jest.fn();
    const component = setUp({ onSubmit: handleSubmit });
    const form = component.find("#filter-bar-form");
    expect(form.length).toBe(1);
  });

  it("Element form must have 5 fields", () => {
    const handleSubmit = jest.fn();
    render(<FilterBar onSubmit={handleSubmit} />);
    fields.forEach((id) => {
      const field = screen.getAllByTestId(id);
      expect(field.length).toBe(1);
    });
  });

  it("Submit must be work", async () => {
    const handleSubmit = jest.fn();
    render(<FilterBar onSubmit={handleSubmit} />);
    userEvent.click(screen.getByTestId("submit"));
    await waitFor(() => {
      expect(handleSubmit).toHaveBeenCalled();
    });
  });
});
