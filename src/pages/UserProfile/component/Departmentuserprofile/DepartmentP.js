import React, { Component } from "react";

class DepartmentP extends Component {
  render() {
    return (
      <div className="w-full relative mt-4 rounded my-24 overflow-hidden">
        <div className="h-64 w-full rounded overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
            alt=""
            className="bg w-full h-full rounded object-cover object-center absolute z-0"
          />
          
        </div>
        <div className="h-24 bg-gray-50 flex relative py-2 px-24">
          <div
            className="h-32 w-32 rounded-full bg-gray-500"
            style={{ marginTop: "-3rem" }}
          > <img
          alt="profile"
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          className="h-32 w-32 rounded-full"
        /></div>
          <div className="flex flex-row p-4 w-full">
            <div className="flex-col flex-grow">
              <h1 className="text-2xl font-semibold">Rishini perera</h1>
              <h4 className="text-sm font-semibold">DEPARTMENT ID 000000000</h4>
              <div className="flex flex-row space-x-2">
                <div className="w-32 h-4 bg-green-600"></div>
                <div className="w-32 h-4 bg-green-600"></div>
                <div className="w-32 h-4 bg-green-600"></div>
                <div className="w-32 h-4 bg-green-600"></div>
              </div>
            </div>
            <div className="flex-grow-0">Logout</div>
          </div>
        </div>
        <div className="grid grid-cols-12 bg-white">
          <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
            <a
              href="#"
              className="text-sm p-2 bg-green-600 text-white text-center rounded font-bold"
            >
              Department Employee Information
            </a>

            <a
              href="#"
              className="text-sm p-2 bg-green-600 text-white text-center rounded font-semibold"
            >
              Edit
            </a>
            <div>
              <h3 className="text-xl font-semibold">Help Links</h3>
              <hr />
            </div>

            <div className="form-item">
              <label className="text-l ">Department of Agriculture</label>
              <input
                type="text"
                value="https://Departmentofagriculture.com/"
                className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                disabled
              />
            </div>

            <div className="form-item">
              <label className="text-l "> Jhon Keels servise </label>
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
                value="https://Zeis.com/"
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
                    Department Employee Information
                  </h3>
                  <hr />
                </div>

                <div className="form-item">
                  <label className="text-xl ">Full Name</label>
                  <input
                    type="text"
                    value="Rishini perera"
                    className="w-full appearance-none text-black text-opacity-40 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    disabled
                  />
                </div>
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div className="form-item w-full">
                    <label className="text-xl ">Username</label>
                    <input
                      type="text"
                      value="rishi02"
                      className="w-full appearance-none text-black text-opacity-40 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                      disabled
                    />
                  </div>
                  <div className="form-item w-full">
                    <label className="text-xl ">ID</label>
                    <input
                      type="text"
                      value="000000001"
                      className="w-full appearance-none text-black text-opacity-40 rounded shadow py-1 px-2 mr-2 focus:outliine-none focus:shadow-outline focus:border-blue-200 text-opacity-25"
                      disabled
                    />
                  </div>
                </div>

                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                  <div className="form-item w-full">
                    <label className="text-xl ">Email</label>
                    <input
                      type="text"
                      value="antoniaph@gmail.com"
                      className="w-full appearance-none text-black text-opacity-40 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                      disabled
                    />
                  </div>
                  <div className="form-item w-full">
                    <label className="text-xl ">Contact</label>
                    <input
                      type="text"
                      value="000-0000000"
                      className="w-full appearance-none text-black text-opacity-40 rounded shadow py-1 px-2 mr-2 forcus:outline-none focus:shadow-outline focus:border-blue-200 text-opscity-25"
                      disabled
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold ">Rating & stock</h3>
                  <hr />
                </div>

                <div className="form-item w-full">
                  <label className="text-xl ">Rates</label>
                  <textarea
                    cols="30"
                    rows="10"
                    className="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                    disabled
                  ></textarea>
                </div>
                <div className="form-item w-full">
                  <lable className="text-xl ">Available Stock</lable>
                  <textarea
                    cols="30"
                    rows="10"
                    className="w-full apearance-none text=black text-opacity-50 roounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    disabled
                  ></textarea>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DepartmentP;
