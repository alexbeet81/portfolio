import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";

test("Nav bar loads", () => {
  render(<NavBar />);

  screen.debug();
});
