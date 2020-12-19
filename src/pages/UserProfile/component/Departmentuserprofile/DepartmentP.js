import React, { Component } from "react";


class ProfileStructure extends Component {
  render() {
    return (
      <div className="h-full">
        <div className="flex bg-green-200 w-full h-60  rounded-lg">
          <div className="bottom-0 self-end flex flex-row ">
            <div className="bg-gray-400 w-32 h-32 m-5 rounded-lg shadow-2xl ml-16 mt-10 absolute">{/* profile picture */}</div>
            <div className="flex flex-col mt-10 leading-5 text-sm absolute ml-56	">
              <div>Mr.T.M.S.G.Premadasa</div>
              <div>Stock Management Officier ,DOA(pvt)Ltd </div>
              <div>geeshan@gmail.com</div>
              <div>973661868V</div>
            </div>
            <div className="bg-gray-200 w-full h-32  rounded-lg shadow-lg ">{/* profile picture */}</div>
          </div>
        </div>
        <div className="bg-blue h-100 w-full mt-16">
          <h2>Description</h2>
            <div className="bg-gray-200 w-full h-32  rounded-lg shadow-lg  mt-4"></div>
            
        </div>
        <div>
          <h2>anything</h2>
          <div className="bg-gray-200 w-full h-32  rounded-lg shadow-lg  mt-4"></div> 
        </div>
        <div>
          <h2>reviews</h2>
          <div className="bg-gray-200 w-full h-32  rounded-lg shadow-lg  mt-4"></div> 
        </div>
      </div>
    );
  }
}

export default ProfileStructure;