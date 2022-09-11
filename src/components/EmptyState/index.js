import React from "react";

import { EmptyStateWrapper, Link } from "./styles";

const EmptyState = () => {
  return (
    <EmptyStateWrapper data-testid="empty-state">
      Your cart is empty! Go to <Link href="/products">Products</Link> to buy.
    </EmptyStateWrapper>
  );
};

export default EmptyState;
