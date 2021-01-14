import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import { __RouterContext } from "react-router";
import { connect } from "react-redux";
import { isEmpty, isLoaded } from "react-redux-firebase";
import { ToastContainer } from "react-toastify";
import { useSpring, useTransition, animated } from "react-spring";
import HomePage from "./pages/HomePage/HomePageContainer";
import ProfilePage from "./pages/UserProfile/UserProfileContainer";
import SideNav from "./common/containers/SideNavContainer";
import AuthContainer from "./pages/Auth/AuthContainer";
import LoadingContainer from "./pages/Loading/LoadingContainer";
import AddProfileInfoContainer from "./pages/Auth/AddProfileInfoContainer";
import HarvestPageContainer from "./pages/HarvestPage/HarvestPageContainer";
import GraphPageContainer from "./pages/GraphPage/GraphPageContainer";
import AddHarvestContainer from "./pages/HarvestPage/AddHarvestContainer";

function App(props) {
  const { auth, profile, authModalVisible, harvestModalVisible } = props;
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
  const harvestModalTransitions = useTransition(harvestModalVisible, null, {
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
    <div className="flex justify-center bg-gray-900">
      <ToastContainer position="top-center" toastClassName="rounded-lg" />

      <animated.div style={loadingProps}>
        <LoadingContainer
          authLoaded={isLoaded(auth)}
          profileLoaded={isLoaded(profile)}
        />
      </animated.div>
      {!isEmpty(auth) && profile.profileCompleted === undefined ? (
        <AddProfileInfoContainer auth={auth} />
      ) : null}
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
      {harvestModalTransitions.map(
        ({ item, key, props: style }) =>
          item && (
            <animated.div
              key={key}
              style={style}
              className="w-screen h-screen absolute z-20"
            >
              <AddHarvestContainer />
            </animated.div>
          )
      )}

      <div style={{width:"1600px"}} className=" h-screen py-2 pr-2 rounded-lg bg-gray-50 flex relative overflow-hidden">
        <SideNav auth={auth} profile={profile} />
        {routeTransitions.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={props}
            className="flex-1 flex-col overflow-y-auto bg-gray-50"
          >
            <Switch location={item}>
              <Route path="/" component={HomePage} exact />
              <Route path="/harvest/:id" component={HarvestPageContainer} />
              <Route path="/profile" component={ProfilePage} />
              <Route path="/graphs" component={GraphPageContainer} />
              <Route path="*" component={() => <div>Not found</div>} />
            </Switch>
          </animated.div>
        ))}
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authModalVisible: state.auth.authModalVisible,
    harvestModalVisible: state.auth.harvestModalVisible,
    profile: state.firebase.profile,
  };
};
export default connect(mapStateToProps)(App);
