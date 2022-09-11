import { render, screen, waitFor } from "@testing-library/react";
import Context from "../../Context";
import Cart from ".";
import { cartProductsList, emptyCartProductsList } from "./productsList.mock";

describe("<Cart />", () => {
  it("should show cart component", () => {
    const contextValues = {
      count: emptyCartProductsList,
      dispatch: jest.fn(),
    };

    render(
      <Context.Provider value={contextValues}>
        <Cart />
      </Context.Provider>
    );

    expect(screen.getByTestId("cart")).toBeInTheDocument();
  });

  it("should show the right total on cart", async () => {
    const contextValues = {
      count: cartProductsList,
      dispatch: jest.fn(),
    };

    render(
      <Context.Provider value={contextValues}>
        <Cart />
      </Context.Provider>
    );

    await waitFor(() => {
      expect(screen.getByTestId("cart-total")).toHaveTextContent("Total: U$50");
    });
  });
});
