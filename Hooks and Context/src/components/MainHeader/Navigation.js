import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";

import classes from "./Navigation.module.css";

const Navigation = () => {
  const ctxVal = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctxVal.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctxVal.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctxVal.isLoggedIn && (
          <li>
            {/* Using ctxVal.onLogout --> Dynamic Context where we passed a reference to our function  */}
            <button onClick={ctxVal.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
