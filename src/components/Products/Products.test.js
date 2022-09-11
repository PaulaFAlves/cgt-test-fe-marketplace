import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Products from ".";
import Context from "../../Context";
import { productsList } from "../products.data";

describe("<Products />", () => {
  const dispatch = jest.fn();

  const contextValues = {
    count: productsList,
    dispatch,
  };

  it("should show products wrapper", () => {
    render(
      <Context.Provider value={contextValues}>
        <Products />
      </Context.Provider>
    );

    expect(screen.getByTestId("products")).toBeInTheDocument();
  });

  it("should call dispatch with increment type when clicked on increment button", async () => {
    render(
      <Context.Provider value={contextValues}>
        <Products />
      </Context.Provider>
    );

    const incrementButton = screen.getAllByTestId("increment-button")[0];

    fireEvent.click(incrementButton);

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: "INCREMENT",
        payload: {
          id: "1",
          name: "Product A",
          price: 20,
          quantity: 0,
        },
      });
    });
  });

  it("should call dispatch with decrement type when clicked on decrement button", async () => {
    render(
      <Context.Provider value={contextValues}>
        <Products />
      </Context.Provider>
    );

    const incrementButton = screen.getAllByTestId("decrement-button")[0];

    fireEvent.click(incrementButton);

    await waitFor(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: "DECREMENT",
        payload: {
          id: "1",
          name: "Product A",
          price: 20,
          quantity: 0,
        },
      });
    });
  });
});
