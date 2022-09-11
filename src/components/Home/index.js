import React from "react";

import { Text, TextWrapper, Subtitle, Link } from "./styles";

const Home = () => {
  return (
    <TextWrapper>
      <Text>Welcome to our Market Place</Text>
      <Subtitle>
        Check out our <Link href="/products">products</Link> right now!
      </Subtitle>
    </TextWrapper>
  );
};

export default Home;
