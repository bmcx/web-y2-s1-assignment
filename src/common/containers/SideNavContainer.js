import React from "react";
import { Link } from "react-router-dom";
import { IconHomeOutline, IconUserOutline } from "../components/Icons";

const SideNav = () => (
  <div className="flex-shrink-0 mr-2 bg-green-200 p-2">
    <nav>
      <ul>
        <li>
          <Link to="/">
            <IconHomeOutline strokeWidth={2} colorClass="text-purple-600" />
          </Link>
        </li>
        <li>
          <Link to="/profile" className="w-6 h-6 block">
            <IconUserOutline strokeWidth={2} colorClass="text-purple-600" />
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default SideNav;
