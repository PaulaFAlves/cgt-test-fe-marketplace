import { render, screen } from "@testing-library/react";
import Products from ".";

test("should show products wrapper", () => {
  render(<Products />);

  expect(screen.getByTestId("products")).toBeInTheDocument();
});
