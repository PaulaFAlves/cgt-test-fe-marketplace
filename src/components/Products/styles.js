import styled from "styled-components";

export const ProductsWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1024px) {
    height: 100vh;
    flex-direction: row;
  }
`;

export const Product = styled.div`
  margin: 20px;
  padding: 10px;
`;

export const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;

  @media (min-width: 1024px) {
    width: 400px;
    height: 400px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

export const TextContentWrapper = styled.div`
  margin: auto;

  p {
    text-align: center;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 200px;
  width: 50px;
  height: 50px;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
  background-color: white;
  font-weight: bold;
  font-size: 20px;

  :active,
  :hover {
    color: gray;
  }
`;

export const Quantity = styled.p`
  display: flex;
  align-items: center;
`;
