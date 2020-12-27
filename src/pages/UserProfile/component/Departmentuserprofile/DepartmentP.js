import React, { Component } from "react";

class DepartmentP extends Component {
  render() {
    return (
      <div class="w-full relative mt-4 shadow-2xl rounded my-24 overflow-hidden">
        <div class="top h-64 w-full bg-blue-600 rounded overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1542223189-67a03fa0f0bd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
            alt=""
            class="bg w-full h-full rounded object-cover object-center absolute z-0"
          />
          <div class="flex flex-col justify-center items-right relative h-full bg-black bg-opacity-50 text-white">
            <img
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
              class="h-24 w-24 object-cover object-center rounded"
            />
            <h1 class="text-2xl font-semibold">Rishini perera</h1>
            <h4 class="text-sm font-semibold">DEPARTMENT ID 00000000</h4>
          </div>
        </div>
        <div class="grid grid-cols-12 bg-white">
          <div class="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
            <a
              href="#"
              class="text-sm p-2 bg-green-600 text-white text-center rounded font-bold"
            >
              Department Employee Information
            </a>

            <a
              href="#"
              class="text-sm p-2 bg-green-600 text-white text-center rounded font-semibold"
            >
              Edit
            </a>
            <div>
                  <h3 class="text-xl font-semibold">Help Links</h3>
                  <hr />
                </div>

            <div class="form-item">
                  <label class="text-l ">Department of Agriculture</label>
                  <input
                    type="text"
                    value="https://Departmentofagriculture.com/"
                    class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                    disabled
                  />
                </div>

            <div class="form-item">
                  <label class="text-l "> Jhon Keels servise </label>
                  <input
                    type="text"
                    value="https://jhonKellsholdings.com/"
                    class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                    disabled
                  />
                </div>

            <div class="form-item">
                  <label class="text-l ">Help</label>
                  <input
                    type="text"
                    value="https://Zeis.com/"
                    class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
                    disabled
                  />
                </div>
          </div>

          <div class="col-span-12 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-10">
            <div class="px-4 pt-4">
              <form action="#" class="flex flex-col space-y-8">
                <div>
                  <h3 class="text-2xl font-semibold">Department Employee Information</h3>
                  <hr />
                </div>

                <div class="form-item">
                  <label class="text-xl ">Full Name</label>
                  <input
                    type="text"
                    value="Rishini perera"
                    class="w-full appearance-none text-black text-opacity-40 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    disabled
                  />
                </div>
                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                <div class="form-item w-full">
                  <label class="text-xl ">Username</label>
                  <input
                    type="text"
                    value="rishi02"
                    class="w-full appearance-none text-black text-opacity-40 rounded shadow py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                    disabled
                  />
                </div>
                <div class="form-item w-full">
                  <label class="text-xl ">ID</label>
                  <input
                    type="text"
                    value="000000001"
                    class="w-full appearance-none text-black text-opacity-40 rounded shadow py-1 px-2 mr-2 focus:outliine-none focus:shadow-outline focus:border-blue-200 text-opacity-25"
                    disabled
                  />
                </div>
                </div>

                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
  
                  <div class="form-item w-full">
                    <label class="text-xl ">Email</label>
                    <input
                      type="text"
                      value="antoniaph@gmail.com"
                      class="w-full appearance-none text-black text-opacity-40 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                      disabled
                    />
                  </div>
                  <div class="form-item w-full">
                    <label class="text-xl ">Contact</label>
                    <input
                      type="text"
                      value="000-0000000"
                      class="w-full appearance-none text-black text-opacity-40 rounded shadow py-1 px-2 mr-2 forcus:outline-none focus:shadow-outline focus:border-blue-200 text-opscity-25"
                      disabled
                    />
                  </div>
                </div>

                <div>
                  <h3 class="text-2xl font-semibold ">Rating & stock</h3>
                  <hr />
                </div>

                <div class="form-item w-full">
                  <label class="text-xl ">Rates</label>
                  <textarea
                    cols="30"
                    rows="10"
                    class="w-full appearance-none text-black text-opacity-50 rounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200 text-opacity-25 "
                    disabled
                  >
                    
                  </textarea>
                </div>
                <div class="form-item w-full">
                  <lable class="text-xl ">Available Stock</lable>
                  <textarea
                  cols="30"
                  rows="10"
                  class="w-full apearance-none text=black text-opacity-50 roounded shadow py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  disabled
                  >

                  </textarea>
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
