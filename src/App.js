import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePageContainer";
import ProfilePage from "./pages/UserProfile/UserProfileContainer";
import SideNav from "./common/containers/SideNavContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="w-screen h-screen p-2 bg-gray-50 flex">
        <SideNav />
        <div className="flex-1 overflow-y-auto">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
