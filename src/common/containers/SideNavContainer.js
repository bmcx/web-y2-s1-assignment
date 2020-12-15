import React from "react";
import { Route, Link } from "react-router-dom";
import {
  IconHomeOutline,
  IconUserOutline,
  IconChatOutline,
} from "../components/Icons";

const SideNav = () => {
  return (
    <div className="flex-shrink-0 mr-2 px-4 py-6 flex flex-col">
      <div className="w-10 h-10 bg-green-500 rounded mb-6"></div>
      <nav className="mt-6">
        <ul>
          <SideNavItem to="/">
            {(isActive) => (
              <IconHomeOutline
                strokeWidth={2}
                colorClass={isActive ? "text-green-600" : "text-gray-400"}
              />
            )}
          </SideNavItem>
          <SideNavItem to="/chat">
            {(isActive) => (
              <IconChatOutline
                strokeWidth={2}
                colorClass={isActive ? "text-green-600" : "text-gray-400"}
              />
            )}
          </SideNavItem>
          <SideNavItem to="/profile">
            {(isActive) => (
              <IconUserOutline
                strokeWidth={2}
                colorClass={isActive ? "text-green-600" : "text-gray-400"}
              />
            )}
          </SideNavItem>
        </ul>
      </nav>
    </div>
  );
};

const SideNavItem = ({ to, children, className, activeClassName, ...rest }) => {
  const path = typeof to === "object" ? to.pathname : to;
  return (
    <li className="mb-6">
      <Route
        path={path}
        children={(p) => {
          const isActive = to === p?.location?.pathname;
          return (
            <Link
              className="hover:text-green-600 ease-out duration-500"
              {...rest}
              to={to}
            >
              {typeof children === "function" ? children(isActive) : children}
            </Link>
          );
        }}
      />
    </li>
  );
};
export default SideNav;
