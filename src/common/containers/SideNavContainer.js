import React from "react";
import { Link } from "react-router-dom";
import { IconHomeOutline, IconUserOutline } from "../components/Icons";

const SideNav = () => (
  <div className="flex-shrink-0 mr-2 px-4 py-6">
    <div className="w-10 h-10 bg-green-500 rounded mb-6"></div>
    <nav>
      <ul>
        <li className="mb-6">
          <Link to="/">
            <IconHomeOutline strokeWidth={2} colorClass="text-gray-400 m-1 hover:text-green-600 " />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <IconUserOutline strokeWidth={2} colorClass="text-green-600 m-1" />
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default SideNav;
