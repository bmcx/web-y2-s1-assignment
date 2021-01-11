import moment from "moment";
import React, { Component, useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { animated, useTrail } from "react-spring";
import { compose } from "redux";
import ToggleSwitch from "../../common/components/ToggleSwitch";
import ResultListItem from "./component/ResultListItem";

const sevenDaysFromToday = moment().subtract(7, "days").toDate();

const HomePage = (props) => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [filterCategory, setFilterCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [showMap, setShowMap] = useState(true);
  const [selectedResult, setSelectedResult] = useState(null);
  const [map, setMap] = useState(null);
  useEffect(() => {
    if (isLoaded(props.harvests, props.categories)) {
      setResults(props.harvests);
      setLoading(false);
    }
  }, [loading, props, results.length]);

  const trail = useTrail(results.length, {
    from: { marginLeft: 0, opacity: 0 },
    to: { marginLeft: 0, opacity: 1 },
  });

  const displayMap = useMemo(
    () => (
      <MapContainer
        center={
          selectedResult
            ? [
                selectedResult?.location?.latitude,
                selectedResult?.location?.longitude,
              ]
            : [7.8731, 80.7718]
        }
        zoom={9}
        scrollWheelZoom={true}
        whenCreated={setMap}
        style={{ height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        {results.map((result) => {
          return (
            <Marker
              position={[
                result?.location?.latitude,
                result?.location?.longitude,
              ]}
              key={result.id}
            >
              <Tooltip>
                {result.title}
                <br /> {moment(result.created_at.toDate()).fromNow()}
              </Tooltip>
            </Marker>
          );
        })}
      </MapContainer>
    ),
    [results, selectedResult]
  );

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
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
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
            <ToggleSwitch
              label="Show Map"
              initialValue={showMap}
              setValue={(v) => {
                setShowMap(v);
              }}
            />
          </div>
        </div>
        {searchTerm ? (
          <div className="flex content-center mb-10 sticky top-0 bg-gray-50 pb-4 px-2 shadow-sm rounded-b-sm">
            <div className="flex-grow flex space-x-1">
              <h2 className="font-bold text-4xl text-gray-700">{searchTerm}</h2>
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
        ) : null}
        <div className="flex flex-col">
          {trail.map((props, index) => {
            return (
              <animated.div
                key={results[index].id}
                style={props}
                className="box"
                onMouseEnter={() => {
                  map.setView(
                    [
                      results[index]?.location?.latitude,
                      results[index]?.location?.longitude,
                    ],
                    10
                  );
                  setSelectedResult(results[index]);
                }}
              >
                <ResultListItem data={results[index]} />
              </animated.div>
            );
          })}
        </div>
      </div>
      {showMap ? (
        <div className="ml-3 flex-1 bg-gray-300 rounded-2xl overflow-hidden transform">
          {displayMap}
          {/* <MapContainer
            style={{ height: "100vh" }}
            center={
              selectedResult
                ? [
                    selectedResult?.location?.latitude,
                    selectedResult?.location?.longitude,
                  ]
                : [7.8731, 80.7718]
            }
            zoom={10}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
            {results.map((result) => {
              return (
                <Marker
                  position={[
                    result?.location?.latitude,
                    result?.location?.longitude,
                  ]}
                  key={result.id}
                >
                  <Popup>
                    {result.title}
                    <br /> {moment(result.created_at.toDate()).fromNow()}
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer> */}
        </div>
      ) : null}
    </div>
  );
};
const SearchChip = ({ name, onClick, active = false }) => (
  <div
    onClick={onClick}
    className={`flex select-none justify-center items-center m-1 font-medium 
    py-1 px-2 rounded-lg bg-gray-100 ${
      active ? "text-green-600" : "text-gray-400"
    } hover:text-green-600 hover:shadow-lg shadow-md ease-out duration-400 cursor-pointer transition-all`}
  >
    <div className="text-sm font-bold">{name}</div>
  </div>
);

const mapStateToProps = (state) => {
  return {
    harvests: state.firestore.ordered.harvests ?? [],
    categories: state.firestore.ordered.categories ?? [],
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "harvests",
        where: [["created_at", ">", sevenDaysFromToday]],
      },
      {
        collection: "categories",
        orderBy: "score",
      },
    ];
  })
)(HomePage);
