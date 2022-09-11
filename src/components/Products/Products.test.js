import { render, screen } from "@testing-library/react";
import Products from ".";

describe("<Products />", () => {
  it("should show products wrapper", () => {
    render(<Products />);

    expect(screen.getByTestId("products")).toBeInTheDocument();
  });
});
