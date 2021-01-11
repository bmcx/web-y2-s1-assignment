import moment from "moment";
import React, { Component, useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { animated, useTrail } from "react-spring";
import { compose } from "redux";
import ToggleSwitch from "../../common/components/ToggleSwitch";
import ResultListItem from "./component/ResultListItem";
import { IconSearch, IconSpinner } from "../../common/components/Icons";
const sevenDaysFromToday = moment().subtract(7, "days").toDate();

const HomePage = (props) => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [filterCategory, setFilterCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState(null);
  const [showMap, setShowMap] = useState(true);
  const [selectedResult, setSelectedResult] = useState(null);
  const [categories, setCategories] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (isLoaded(props.harvests, props.categories)) {
      setCategories(props.categories);
      setLoading(false);
    }
    if (!loading && !searchTerm && !filterCategory) {
      setFilteredResults(props.harvests);
      setResults(props.harvests);
    }
  }, [filterCategory, loading, props, searchTerm]);

  const trail = useTrail(filteredResults.length, {
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
        {filteredResults.map((result) => {
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
    [filteredResults, selectedResult]
  );

  const filterResults = (term) => {
    term = term.trim();
    let _results = [];
    for (const result of results) {
      if (
        result.title.toLowerCase().indexOf(term.toLowerCase()) !== -1 ||
        result.address.city.toLowerCase().indexOf(term.toLowerCase()) !== -1 ||
        result.address.province.toLowerCase().indexOf(term.toLowerCase()) !==
          -1 ||
        result.address.street.toLowerCase().indexOf(term.toLowerCase()) !== -1
      ) {
        _results.push(result);
      }
    }
    setFilteredResults(_results);
    setSearchTerm(term);
  };

  const filterResultsByCategory = (category) => {
    let _results = [];
    for (const result of props.harvests) {
      if (result.categories.find((cat) => cat.id === category)) {
        _results.push(result);
      }
    }
    setFilteredResults(_results);
    setResults(_results)
    setFilterCategory(filterCategory === category ? null : category);
  };

  const clearFilter = () => {
    setResults(props.harvests);
    setFilteredResults(props.harvests);
    setSearchTerm(null);
    setFilterCategory(null);
  };
  if (loading)
    return (
      <div className="flex w-full h-full flex-col justify-center items-center">
        <div className="animate-pulse w-10 h-10 text-gray-500 mb-2">
          <IconSpinner />
        </div>
        <div className="text-md font-lato animate-pulse text-gray-900">
          Loading
        </div>
      </div>
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
              autoComplete="off"
              placeholder="Search"
              onChange={(e) => filterResults(e.target.value)}
            />
            <div className="p-2">
              {searchTerm ? (
                <button
                  onClick={clearFilter}
                  className="text-gray-500 p-1 hover:text-gray-600 focus:outline-none w-8 h-8 ease-out duration-300"
                >
                  🗙
                </button>
              ) : (
                <button className="text-gray-300 p-1 hover:text-gray-600 focus:outline-none w-8 h-8 ease-out duration-300">
                  <IconSearch />
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex mb-8 items-center">
          <div className="flex-grow flex space-x-1 items-center">
            {categories.map((category) => (
              <SearchChip
                key={category.id}
                name={category.name}
                active={filterCategory === category.id}
                onClick={() => filterResultsByCategory(category.id)}
              />
            ))}
            {filterCategory ? (
              <button
                onClick={clearFilter}
                className="text-xs hover:underline focus:outline-none"
              >
                Clear filter
              </button>
            ) : null}
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
          <div className="flex content-center mb-8 sticky top-0 bg-gray-50 pb-4 px-2 shadow-sm rounded-b-sm">
            <div className="flex-grow flex space-x-1">
              <h2 className="font-bold text-4xl text-gray-700">{searchTerm}</h2>
              <h4 className="text-xl text-gray-400 self-end pl-2 ">
                {`${filteredResults.length} Result${
                  filteredResults.length !== 1 ? "s" : ""
                }`}
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
                key={filteredResults[index].id}
                style={props}
                className="box"
                onMouseEnter={() => {
                  map.setView(
                    [
                      filteredResults[index]?.location?.latitude,
                      filteredResults[index]?.location?.longitude,
                    ],
                    10
                  );
                  setSelectedResult(filteredResults[index]);
                }}
              >
                <ResultListItem
                  data={filteredResults[index]}
                  searchTerm={searchTerm}
                />
              </animated.div>
            );
          })}
        </div>
      </div>
      {showMap ? (
        <div className="ml-3 flex-1 bg-gray-300 rounded-2xl overflow-hidden transform">
          {displayMap}
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
      active
        ? "text-green-700 bg-gray-200"
        : "text-gray-400 hover:text-green-600 "
    } hover:shadow-lg shadow-md ease-out duration-400 cursor-pointer transition-all`}
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
        orderBy: ["created_at", "desc"],
      },
      {
        collection: "categories",
        orderBy: "score",
      },
    ];
  })
)(HomePage);
