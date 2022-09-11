import React from "react";

import { BagdeText } from "./styles";

const Badge = ({ quantity }) => {
  return <BagdeText data-testid="bagde">{quantity}</BagdeText>;
};

export default Badge;
