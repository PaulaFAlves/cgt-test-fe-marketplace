import styled from "styled-components";

import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 12px;
  list-style-type: none;

  a {
    text-decoration: none;
    margin: 12px;
    color: black;

    :hover {
      color: gray;
    }
  }
`;

export const CustomedLink = styled(Link)`
  text-decoration: none;
`;
