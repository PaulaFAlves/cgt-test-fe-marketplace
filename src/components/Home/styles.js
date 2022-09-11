import styled from "styled-components";

export const TextWrapper = styled.div`
  width: 80%;
  margin: 48px auto;
`;

export const Text = styled.h1`
  text-align: center;
`;

export const Subtitle = styled.h2`
  text-align: center;
`;

export const Link = styled.a`
  text-decoration: none;
  color: black;

  :hover {
    color: red;
  }
`;

export const ImageWrapper = styled.div`
  width: 400px;
  height: 400px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;
