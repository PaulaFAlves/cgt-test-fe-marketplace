import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context";
import EmptyState from "../EmptyState";

import {
  List,
  ListItem,
  Button,
  ButtonWrapper,
  Quantity,
  TotalWrapper,
  CartBackground,
} from "./styles";

const Cart = () => {
  const countContext = useContext(Context);
  const { count, dispatch } = countContext;
  const [total, setTotal] = useState(0);
  let itemsOnCart = count.filter((c) => c.quantity > 0);

  useEffect(() => {
    const total = Object.values(itemsOnCart).reduce(
      (t, { quantity, price }) => t + quantity * price,
      0
    );
    setTotal(total);
  }, [count, itemsOnCart]);

  return (
    <CartBackground data-testid="cart">
      <header>
        <List>
          <ListItem>Id</ListItem>
          <ListItem>Product</ListItem>
          <ListItem>Price</ListItem>
          <ListItem>Quantity</ListItem>
          <ListItem>Total</ListItem>
          <ListItem>Add or remove</ListItem>
        </List>
      </header>
      {itemsOnCart.length === 0 ? (
        <EmptyState />
      ) : (
        itemsOnCart.map(({ id, name, price, quantity }) => (
          <List key={id}>
            <ListItem>{id}</ListItem>
            <ListItem>{name}</ListItem>
            <ListItem>{price}</ListItem>
            <ListItem>{quantity}</ListItem>
            <ListItem>{quantity * price}</ListItem>
            <ListItem>
              <ButtonWrapper>
                <Button
                  onClick={() =>
                    dispatch({
                      type: "INCREMENT",
                      payload: { id, name, price, quantity },
                    })
                  }
                >
                  +
                </Button>
                <Quantity>{quantity}</Quantity>
                <Button
                  onClick={() =>
                    dispatch({
                      type: "DECREMENT",
                      payload: { id, name, price, quantity },
                    })
                  }
                  remove
                >
                  -
                </Button>
              </ButtonWrapper>
            </ListItem>
          </List>
        ))
      )}
      {itemsOnCart.length > 0 && (
        <TotalWrapper data-testid="cart-total">Total: U${total}</TotalWrapper>
      )}
    </CartBackground>
  );
};

export default Cart;
