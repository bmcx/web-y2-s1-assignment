import React from "react";
import { Route, Link } from "react-router-dom";
import {
  IconHomeOutline,
  IconChatOutline,
  IconSettingsOutline,
  IconGlobeOutline,
} from "../components/Icons";

const SideNav = () => {
  const navActiveClass = "text-green-600";
  const navInActiveClass =
    "text-gray-400 hover:text-green-600 ease-out duration-500";
  return (
    <div className="z-10 w-20 bg-gray-700 mr-2 px-4 py-6 flex flex-col items-center">
      <div className="flex-grow-0 w-10 h-10 bg-green-500 rounded mb-6 shadow-md hover:shadow-lg ease-out duration-300">
        <svg
          className="text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      </div>
      <nav className="my-10 flex-grow">
        <ul>
          <SideNavItem to="/">
            {(isActive) => (
              <div className="flex content-center">
                <IconHomeOutline
                  strokeWidth={2}
                  colorClass={isActive ? navActiveClass : navInActiveClass}
                />
                <div
                  className={`w-1 h-1 rounded-sm ${
                    isActive ? "bg-green-600" : ""
                  } self-center`}
                ></div>
              </div>
            )}
          </SideNavItem>
          <SideNavItem to="/messages">
            {(isActive) => (
              <div className="flex content-center">
                <IconChatOutline
                  strokeWidth={2}
                  colorClass={isActive ? navActiveClass : navInActiveClass}
                />
                <div
                  className={`w-1 h-1 rounded-sm ${
                    isActive ? "bg-green-600" : ""
                  } self-center`}
                ></div>
              </div>
            )}
          </SideNavItem>
        </ul>
        <ul>
          <SideNavItem to="/settings">
            {(isActive) => (
              <div className="flex content-center">
                <IconSettingsOutline
                  strokeWidth={2}
                  colorClass={isActive ? navActiveClass : navInActiveClass}
                />
                <div
                  className={`w-1 h-1 rounded-sm ${
                    isActive ? "bg-green-600" : ""
                  } self-center`}
                ></div>
              </div>
            )}
          </SideNavItem>
        </ul>
      </nav>

      <div className="flex-grow-0 w-10 h-10 bg-purple-400 rounded-full mb-6 shadow-md hover:shadow-lg ease-out duration-300">
        <Link to={"/profile"}>
          <svg
            className="text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Link>
      </div>
      <div className="flex-grow-0 ">
        <IconGlobeOutline strokeWidth={2} colorClass="text-gray-400" />
      </div>
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
            <Link {...rest} to={to}>
              {typeof children === "function" ? children(isActive) : children}
            </Link>
          );
        }}
      />
    </li>
  );
};
export default SideNav;
