import React, { Component } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {
  IconMapPinOutline,
  IconStarOutline,
} from "../../common/components/Icons";
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
      <div className="flex w-full h-full">
        <div className="flex-1 pl-4 pr-4 h-full overflow-y-auto">
          <div className="py-4">
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
          <div className="flex mb-10">
            <div className="flex-grow flex space-x-1">
              <SearchChip name="Vegetables" onClick={() => {}} />
              <SearchChip name="Fruits" onClick={() => {}} />
              <SearchChip name="Grains" onClick={() => {}} />
            </div>
            <div className="flex-shrink-0 flex space-x-1">
              <ToggleSwitch label="Show Map" />
            </div>
          </div>
          <div className="flex content-center mb-10 sticky top-0 bg-gray-50 pb-4 px-2 shadow-sm rounded-b-sm">
            <div className="flex-grow flex space-x-1">
              <h2 className="font-bold text-4xl text-gray-700">Vegetable</h2>
              <h4 className="text-xl text-gray-400 self-end pl-2 ">
                156 Results
              </h4>
            </div>
            <div className="flex-shrink-0 flex space-x-1">
              <div className="my-auto mx-2 p-2 shadow-sm hover:shadow-md rounded-lg cursor-pointer ease-out duration-300">
                <div className="w-6 h-6 ">
                  <svg
                    className="text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <ResultListItem />
            <ResultListItem />
            <ResultListItem />
            <ResultListItem />
            <ResultListItem />
            <ResultListItem />
            <ResultListItem />
          </div>
        </div>
        <div className="ml-3 flex-1 bg-gray-300 rounded-2xl overflow-hidden transform">
          <MapContainer
            style={{ height: "100%" }}
            center={[7.8731, 80.7718]}
            zoom={10}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              // url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
            />
            <Marker position={[7.8731, 80.7718]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    );
  }
}

const SearchChip = ({ name, onClick }) => (
  <div
    onClick={onClick}
    className="flex justify-center items-center m-1 font-medium py-1 px-2 rounded-lg bg-gray-100 text-gray-400 hover:text-green-600 hover:shadow-lg shadow-md ease-out duration-400 cursor-pointer transition-all"
  >
    <div className="text-sm font-bold">{name}</div>
  </div>
);

const CategoryChip = ({ name, color, onClick }) => (
  <div
    onClick={onClick}
    className={`${color} text-white font-lato px-2 py-1 text-2xs uppercase rounded-lg my-auto`}
  >
    {name}
  </div>
);

const SubCategoryChip = ({ name, color, onClick }) => (
  <div
    onClick={onClick}
    className={`${color} text-white font-lato px-2 py-1 text-2xs uppercase rounded-lg my-auto`}
  >
    {name}
  </div>
);

const ResultListItem = ({ name, color, onClick }) => (
  <div className="flex content-center space-x-4 cursor-pointer mb-10">
    <div className="flex-shrink-0">
      <div className=" w-40 h-40 rounded-2xl bg-gray-400"></div>
    </div>
    <div className="flex-grow flex flex-col space-y-1 py-1">
      <div className="flex-shrink-0">
        <div className="flex">
          <div className="flex-grow flex space-x-1">
            <CategoryChip name="Vegetable" color="bg-green-700" />
            <SubCategoryChip name="Carrot" color="bg-green-500" />
            <SubCategoryChip name="Vegetable" color="bg-green-500" />
          </div>
          <div className="flex-shrink-0">
            <div className=" m-auto">
              <IconStarOutline colorClass={"w-6"} strokeWidth={2} />
            </div>
          </div>
        </div>
        <div className="text-gray-700 font-bold text-xl font-lato mt-1 mb-1">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet
        </div>

        <div className="flex text-xs flex-row pb-2 pt-1 text-gray-400">
          <div className="w-4">
            <IconMapPinOutline strokeWidth={2} />
          </div>
          <div className="self-center">123, ABC DEF, XYZ</div>
        </div>
      </div>

      <div className="flex-grow flex justify-between items-end">
        <div className="">Rating</div>
        <div className="text-gray-400">4 days ago</div>
      </div>
    </div>
  </div>
);

export default HomePage;
