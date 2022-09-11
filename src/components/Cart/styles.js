import styled from "styled-components";

export const List = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin: auto;
`;

export const ListItem = styled.div`
  border-bottom: 1px solid black;
  width: 100%;
  padding: 12px;
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
