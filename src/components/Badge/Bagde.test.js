import { render, screen } from "@testing-library/react";
import Badge from ".";

describe("<Bagde />", () => {
  it("should show bagde component", () => {
    render(<Badge quantity={1} />);

    expect(screen.getByTestId("bagde")).toBeInTheDocument();
    expect(screen.getByTestId("bagde")).toHaveTextContent(1);
  });
});
