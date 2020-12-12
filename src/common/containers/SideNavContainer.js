import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default SideNav;
