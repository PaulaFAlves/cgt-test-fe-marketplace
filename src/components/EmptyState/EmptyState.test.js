import { render, screen } from "@testing-library/react";
import EmptyState from ".";

describe("<EmptyState />", () => {
  it("should show empty state component", () => {
    render(<EmptyState />);

    expect(screen.getByTestId("empty-state")).toBeInTheDocument();
  });
});
