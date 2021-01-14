import React, { useState } from "react";
import { connect } from "react-redux";
import { isEmpty } from "react-redux-firebase";
import { Route, Link, useHistory } from "react-router-dom";
import { showAuthModal, signOutAction } from "../../state/auth/authActions";
import {
  IconHomeOutline,
  IconChatOutline,
  IconSettingsOutline,
  IconGlobeOutline,
  IconNavProfile,
} from "../components/Icons";
import NavTooltip from "../components/NavTooltip";

const SideNav = (props) => {
  const navActiveClass = "text-green-600";
  const navInActiveClass =
    "text-gray-400 hover:text-green-600 ease-out duration-500";
  return (
    <div className="z-10 w-20 bg-gray-200 rounded-r-lg mr-2 px-4 py-6 flex flex-col items-center">
      <div className="flex-grow-0 w-10 h-10 bg-green-700 rounded mb-6 shadow-md hover:shadow-lg ease-out duration-300">
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
          <NavTooltip tooltipText="Home">
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
          </NavTooltip>
          <NavTooltip tooltipText="Graphs">
            <SideNavItem to="/graphs">
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
          </NavTooltip>
        </ul>
        {/* <ul>
          <NavTooltip tooltipText="Settings">
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
          </NavTooltip>
        </ul> */}
      </nav>

      <ProfileNav {...props} />

      <div className="flex-grow-0 ">
        <IconGlobeOutline strokeWidth={2} colorClass="text-gray-400" />
      </div>
    </div>
  );
};

const ProfileNav = ({ auth, profile, showAuthModal, signOut }) => {
  const history = useHistory();
  const signedIn = !isEmpty(auth);
  const [showTip, setShowTip] = useState(true);

  const handleIconClick = () => {
    if (signedIn) {
      history.push("/profile");
    } else {
      showAuthModal();
    }
    setShowTip(false);
  };

  const handleSignOut = () => {
    signOut();
    history.push("/");
  };

  return (
    <div className="relative flex-grow-0 flex flex-col items-center mb-6 ">
      {showTip && !signedIn ? (
        <div
          className="absolute w-48 whitespace-no-wrap bg-gray-700 text-white text-sm px-4 py-2 rounded-xl flex items-center transition-all duration-150 "
          style={{ left: "3.5rem" }}
        >
          <button
            onClick={() => setShowTip(false)}
            className="absolute bg-gray-500 w-6 h-6 right-1 rounded-lg flex items-center hover:shadow-md justify-center transition-all ease-out duration-400 focus:outline-none"
          >
            🗙
          </button>
          <div
            className="bg-gray-700 h-3 w-3 absolute"
            style={{ left: "-6px", transform: "rotate(45deg)" }}
          />
          <div>
            <button
              onClick={handleIconClick}
              className="underline animate-pulse hover:text-gray-300 outline-none ease-out duration-150"
            >
              Sign in
            </button>{" "}
            to get started
          </div>
        </div>
      ) : null}

      <button
        onClick={handleIconClick}
        className="w-10 h-10 overflow-hidden focus:outline-none bg-gray-600 rounded-full shadow-md hover:shadow-lg ease-out duration-300"
      >
        {signedIn ? (
          <img src={profile.photo} alt="" className="min-h-full w-max" />
        ) : (
          <IconNavProfile />
        )}
      </button>
      {signedIn ? (
        <button
          onClick={handleSignOut}
          className="focus:outline-none text-xs py-1 mt-1 hover:text-gray-500"
        >
          Sign out
        </button>
      ) : null}
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

const mapDispatchToProps = (dispatch) => {
  return {
    showAuthModal: () => dispatch(showAuthModal()),
    signOut: () => dispatch(signOutAction()),
  };
};

export default connect(null, mapDispatchToProps)(SideNav);
