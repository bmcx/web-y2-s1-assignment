import React, { Component } from "react";
import { connect } from "react-redux";

class DepartmentP extends Component {
  render() {
    const { profile } = this.props;
    console.log(profile);
    return (
      <div className="w-full relative mt-4 rounded my-24 overflow-hidden">
        <div className="h-64 w-full rounded overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
            alt=""
            className="bg w-full h-full rounded object-cover object-center absolute z-0"
          />
          <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
            <img
              alt="profile"
              src={profile.photo}
              className="h-24 w-24 object-cover object-center rounded"
            />
            <h1 className="text-2xl font-semibold">{`${profile.firstName} ${profile.lastName}`}</h1>
          </div>
        </div>

        <div className="grid grid-cols-12 bg-white">
          <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
            <div>
              <h3 className="text-xl font-semibold">Help Links</h3>
              <hr />
            </div>

            <div className="form-item">
              <label className="text-l ">Department of Agriculture</label>
              <input
                type="text"
                value="https://departmentofagriculture.com/"
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                disabled
              />
            </div>

            <div className="form-item">
              <label className="text-l "> John Keels service </label>
              <input
                type="text"
                value="https://jhonKellsholdings.com/"
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                disabled
              />
            </div>

            <div className="form-item">
              <label className="text-l ">Help</label>
              <input
                type="text"
                value="https://zeis.com/"
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
                disabled
              />
            </div>
          </div>

          <div className="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
            <div className="px-4 pt-4">
              <form action="#" className="flex flex-col space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold">
                   Profile Information
                  </h3>
                  <hr />
                </div>

                <div className="form-item">
                  <label className="text-xl ">Full Name</label>
                  <input
                    type="text"
                    value={`${profile.firstName} ${profile.lastName}`}
                    className="w-full appearance-none text-black text-opacity-40 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    disabled
                  />
                </div>
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div className="form-item w-full">
                    <label className="text-xl ">Phone</label>
                    <input
                      type="text"
                      value={`${profile.phone}`}
                      className="w-full appearance-none text-black text-opacity-40 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                      disabled
                    />
                  </div>
                  <div className="form-item w-full">
                    <label className="text-xl ">NIC</label>
                    <input
                      type="text"
                      value={`${profile.nic}`}
                      className="w-full appearance-none text-black text-opacity-40 rounded shadow py-1 px-2 mr-2 focus:outliine-none focus:shadow-outline focus:border-blue-200 text-opacity-25"
                      disabled
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentP);
