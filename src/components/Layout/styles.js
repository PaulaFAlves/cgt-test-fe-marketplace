import styled from "styled-components";

import { Link } from "react-router-dom";

export const Content = styled.div`
  width: 100%;
  background-color: #f8f8ff;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 12px;
  list-style-type: none;
  width: 90%;
  margin: 0;

  a {
    text-decoration: none;
    margin: 12px;
    color: #696969;

    :hover {
      color: #dcdcdc;
    }
  }
`;

export const CustomedLink = styled(Link)`
  text-decoration: none;
`;
