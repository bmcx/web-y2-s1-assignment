import React from "react";
import Profile from './component/Departmentuserprofile/DepartmentUserProfile';
import Profilek from './component/keelsuserprofile/keelsuserprofile';
import ProfileF from './component/Farmeruserprofile/FarmerUserProfile';
import Profilen from './component/keelsuserprofile/keelsshowdata';
const ProfilePage = () => (
  <div>
    <h1>Profile</h1>
    <Profile />
    <Profilek />
    <ProfileF />
    {/* <Profilen /> */}
  </div>
);

export default ProfilePage;
