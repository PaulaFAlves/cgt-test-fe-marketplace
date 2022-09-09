import React from "react";
import { productsList } from "./products.data";

import {
  ImageWrapper,
  Image,
  ProductsWrapper,
  Product,
  TextContentWrapper,
  ButtonWrapper,
  Button,
} from "./styles";

const Products = () => {
  const sendToCart = () => {
    // TODO: implement
  };

  return (
    <ProductsWrapper data-testid="products">
      {productsList.map(({ image, name, price, id }) => (
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
            <Button type="submit" onClick={sendToCart}>
              Buy
            </Button>
          </ButtonWrapper>
        </Product>
      ))}
    </ProductsWrapper>
  );
};

export default Products;
