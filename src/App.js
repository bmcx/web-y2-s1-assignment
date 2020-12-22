import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { __RouterContext } from "react-router";
import { connect } from "react-redux";
import { isLoaded } from "react-redux-firebase";
import { ToastContainer } from "react-toastify";
import { useSpring, useTransition, animated } from "react-spring";
import HomePage from "./pages/HomePage/HomePageContainer";
import ProfilePage from "./pages/UserProfile/UserProfileContainer";
import SideNav from "./common/containers/SideNavContainer";
import AuthContainer from "./pages/Auth/AuthContainer";
import LoadingContainer from "./pages/Loading/LoadingContainer";

function App(props) {
  const { auth, profile, authModalVisible } = props;
  const loaded = isLoaded(auth, profile);
  const { location } = useContext(__RouterContext);
  const routeTransitions = useTransition(
    location,
    (location) => location.pathname,
    {
      from: {
        opacity: 0,
        transform: "translate(5%,0)",
        position: "absolute",
        width: "100%",
      },
      enter: {
        opacity: 1,
        transform: "translate(0,0)",
        position: "relative",
        width: "100%",
      },
      leave: {
        opacity: 0,
        transform: "translate(-5%,0)",
        position: "absolute",
        width: "100%",
      },
    }
  );

  const loadingProps = useSpring({
    opacity: loaded ? 0 : 1,
    height: loaded ? "0vh" : "100vh",
    overflow: "hidden",
    position: "absolute",
    zIndex: 999,
  });
  const authModalTransitions = useTransition(authModalVisible, null, {
    from: {
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
    enter: {
      opacity: 1,
      backdropFilter: "blur(5px)",
    },
    leave: {
      opacity: 0,
      backdropFilter: "blur(0px)",
    },
  });

  return (
    <>
      <ToastContainer position="top-center" toastClassName="rounded-lg" />

      <animated.div style={loadingProps}>
        <LoadingContainer
          authLoaded={isLoaded(auth)}
          profileLoaded={isLoaded(profile)}
        />
      </animated.div>
      {authModalTransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <animated.div
              key={key}
              style={style}
              className="w-screen h-screen absolute z-20"
            >
              <AuthContainer />
            </animated.div>
          )
      )}

      <div className="w-screen h-screen py-2 pr-2 bg-gray-50 flex relative overflow-hidden">
        <SideNav />
        {routeTransitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={props}
            className="flex-1 flex-col overflow-y-auto bg-gray-50"
          >
            <Switch location={item}>
              <Route path="/" component={HomePage} exact />
              <Route path="/profile" component={ProfilePage} />
              <Route path="*" component={() => <div>Not found</div>} />
            </Switch>
          </animated.div>
        ))}
      </div>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authModalVisible: state.auth.authModalVisible,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(App);
