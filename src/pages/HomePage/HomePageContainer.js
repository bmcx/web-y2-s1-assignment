import React, { Component } from "react";
import ToggleSwitch from "../../common/components/ToggleSwitch";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <div className="flex w-full h-full ">
        <div className="flex-1">
          <div className="px-8 py-4">
            <div className="bg-gray-100 flex items-center rounded-2xl shadow-sm">
              <input
                className="rounded-2xl w-full py-2 px-6 font-bold text-gray-500 leading-tight bg-gray-100 focus:outline-none"
                id="search"
                type="text"
                placeholder="Search"
              />
              <div className="p-2">
                <button className="text-gray-300 p-1 hover:text-gray-600 focus:outline-none w-8 h-8 ease-out duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex px-8 py-0">
            <div className="flex-grow flex space-x-1">
              <Chip name="Vegetables" onClick={() => {}} />
              <Chip name="Fruits" onClick={() => {}} />
              <Chip name="Grains" onClick={() => {}} />
            </div>
            <div className="flex-shrink-0 flex space-x-1">
              <ToggleSwitch label="Show Map"/>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-300 rounded-2xl overflow-hidden"></div>
      </div>
    );
  }
}

const Chip = ({ name, onClick }) => (
  <div
    onClick={onClick}
    className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-lg bg-gray-100 text-gray-400 hover:text-green-600 hover:shadow-lg shadow-md ease-out duration-400 cursor-pointer transition-all"
  >
    <div className="text-sm font-bold  ">{name}</div>
  </div>
);

export default HomePage;
