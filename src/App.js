import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePageContainer";
import ProfilePage from "./pages/UserProfile/UserProfileContainer";
import SideNav from "./common/containers/SideNavContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SideNav />
        <Switch>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
