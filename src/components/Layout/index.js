import React, { useContext, useEffect, useState } from "react";
import Context from "../../Context";
import { Outlet, Link } from "react-router-dom";

import { List, Content } from "./styles";
import Badge from "../Badge";

const Layout = () => {
  const countContext = useContext(Context);
  const { count } = countContext;
  const [cartHasItems, setCartHasItems] = useState(false);
  const [countItemsQuantity, setCountItemsQuantity] = useState(false);

  useEffect(() => {
    const quantity = Object.values(count).reduce(
      (t, { quantity }) => t + quantity,
      0
    );

    setCountItemsQuantity(quantity);
    setCartHasItems(quantity > 0);
  }, [count]);

  return (
    <Content>
      <nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/cart">
              Cart{cartHasItems && <Badge quantity={countItemsQuantity} />}
            </Link>
          </li>
        </List>
      </nav>

      <Outlet />
    </Content>
  );
};

export default Layout;
