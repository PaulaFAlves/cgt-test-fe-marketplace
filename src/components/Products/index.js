import React, { useContext } from "react";
import Context from "../../Context";
import { productsList } from "../products.data";

import {
  ImageWrapper,
  Image,
  ProductsWrapper,
  Product,
  TextContentWrapper,
  ButtonWrapper,
  Button,
  Quantity,
} from "./styles";

const Products = () => {
  const countContext = useContext(Context);
  const { dispatch } = countContext;

  return (
    <ProductsWrapper data-testid="products">
      {productsList.map(({ image, name, price, id, quantity }) => (
        <Product key={`product-${id}`}>
          <ImageWrapper>
            <Image src={image} />
          </ImageWrapper>
          <TextContentWrapper>
            <p>
              <strong>{name}</strong>
            </p>
            <p>Price: U${price}</p>
          </TextContentWrapper>
          <ButtonWrapper>
            <Button
              data-testid="increment-button"
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
              data-testid="decrement-button"
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
        </Product>
      ))}
    </ProductsWrapper>
  );
};

export default Products;
