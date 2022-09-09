import { Outlet, Link } from "react-router-dom";

import { List } from "./styles";

const Layout = () => {
  return (
    <>
      <nav>
        <List>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </List>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
