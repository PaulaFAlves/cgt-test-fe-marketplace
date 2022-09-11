import styled from "styled-components";

export const CartBackground = styled.div`
  height: 100vh;
  background-color: white;
  margin: auto;
  border-radius: 8px;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  background-color: white;
  border-radius: 8px;

  @media (min-width: 1024px) {
    width: 80%;
  }
`;

export const ListItem = styled.div`
  padding: 12px;

  @media (min-width: 1024px) {
    width: 100%;
    border-bottom: 1px solid black;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const Button = styled.button`
  width: 100%;
  border: 0;
  cursor: pointer;
  background-color: white;
  font-weight: bold;

  :active,
  :hover {
    color: gray;
  }
`;

export const Quantity = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
`;

export const TotalWrapper = styled.p`
  width: 80%;
  margin: 12px auto;
  text-align: end;
  font-size: 18px;
  font-weight: bold;
`;
