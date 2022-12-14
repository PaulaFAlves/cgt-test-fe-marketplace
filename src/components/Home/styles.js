import styled from "styled-components";

export const TextWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/assets/a.jpg");
  background-size: cover;
  background-position: top;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.h1`
  text-align: center;
  color: #f5fffa;
  letter-spacing: 2px;
  margin: 12px;
`;

export const Subtitle = styled.h2`
  text-align: center;
  color: #f5fffa;
  margin: 12px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #f5fffa;

  :hover {
    color: #dcdcdc;
  }
`;
