import { Popup } from "components/popup";
import { render, screen } from "@testing-library/react";

const character = {
  id: 4,
  name: "character name",
  status: "character status",
  species: "character species",
  type: "character type",
  gender: "character gender",
  image: "character image",
  origin: {
    name: "character origin name"
  }
};

const onClose = jest.fn();
const isOpen = true;

describe("Popup component", () => {
  it("Element must have Dialog component", () => {
    render(<Popup character={character} onClose={onClose} isOpen={isOpen} />);
    const content = screen.getAllByTestId("dialog");
    expect(content.length).toBe(1);
  });

  it("Element must have Card component", () => {
    render(<Popup character={character} onClose={onClose} isOpen={isOpen} />);
    const card = screen.getAllByTestId("card");
    expect(card.length).toBe(1);
  });

  it("Element must have CardMedia component", () => {
    render(<Popup character={character} onClose={onClose} isOpen={isOpen} />);
    const card = screen.getAllByTestId("card-media");
    expect(card.length).toBe(1);
  });

  it("Element must have CardContent component", () => {
    render(<Popup character={character} onClose={onClose} isOpen={isOpen} />);
    const cardContent = screen.getAllByTestId("card-content");
    expect(cardContent.length).toBe(1);
  });

  it("Element must have 2 Typography components", () => {
    render(<Popup character={character} onClose={onClose} isOpen={isOpen} />);
    const typography = screen.getAllByTestId("card-typography");
    expect(typography.length).toBe(2);
  });

  it("Element must have character name, gender, species, origin, status and type", () => {
    render(<Popup character={character} onClose={onClose} isOpen={isOpen} />);
    expect(screen.getByText(/character.name/i)).toBeInTheDocument();
    expect(screen.getByText(/character.status/i)).toBeInTheDocument();
    expect(screen.getByText(/character.species/i)).toBeInTheDocument();
    expect(screen.getByText(/character.type/i)).toBeInTheDocument();
    expect(screen.getByText(/character.gender/i)).toBeInTheDocument();
    expect(screen.getByText(/character.origin.name/i)).toBeInTheDocument();
  });
});
