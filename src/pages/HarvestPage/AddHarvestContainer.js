import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose } from "redux";
import FormInput from "../../common/components/FormInput";
import FormInputControlled from "../../common/components/FormInputControlled";
import { IconSpinner } from "../../common/components/Icons";
import {
  hideHarvestModal,
  showHarvestModal,
  addHarvest,
} from "../../state/auth/authActions";

const provinces = [
  "Northern",
  "North_Western",
  "Western",
  "North_Central",
  "Central",
  "Sabaragamuwa",
  "Eastern",
  "Uva",
  "Southern",
];
const districts = {
  Northern: ["Jaffna", "Kilinochchi", "Mannar", "Mullaitivu", "Vavuniya"],
  North_Western: ["Puttalam", "Kurunegala"],
  Western: ["Gampaha", "Colombo", "Kalutara"],
  North_Central: ["Anuradhapura", "Polonnaruwa"],
  Central: ["Matale", "Kandy", "Nuwara_Eliya"],
  Sabaragamuwa: ["Kegalle", "Ratnapura"],
  Eastern: ["Trincomalee", "Batticaloa", "Ampara"],
  Uva: ["Badulla", "Monaragala"],
  Southern: ["Hambantota", "Matara", "Galle"],
};
const districtsLocations = {
  Jaffna: [9.66845, 80.00742],
  Kilinochchi: [9.3803, 80.377],
  Mannar: [8.981, 79.9044],
  Mullaitivu: [9.2671, 80.8142],
  Vavuniya: [8.7542, 80.4982],
  Puttalam: [8.0408, 79.8394],
  Kurunegala: [7.4818, 80.3609],
  Gampaha: [7.084, 80.0098],
  Colombo: [6.9271, 79.8612],
  Kalutara: [6.5854, 79.9607],
  Anuradhapura: [8.3114, 80.4037],
  Polonnaruwa: [7.9403, 81.0188],
  Matale: [7.4675, 80.6234],
  Kandy: [7.2906, 80.6337],
  Nuwara_Eliya: [6.9497, 80.7891],
  Kegalle: [7.2513, 80.3464],
  Ratnapura: [6.7056, 80.3847],
  Trincomalee: [8.5874, 81.2152],
  Batticaloa: [7.731, 81.6747],
  Ampara: [7.3018, 81.6747],
  Badulla: [6.9934, 81.055],
  Monaragala: [6.8728, 81.3507],
  Hambantota: [6.1429, 81.1212],
  Matara: [5.9549, 80.555],
  Galle: [6.0535, 80.221],
};

const AddHarvestContainer = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoaded(props.categories)) {
      setLoading(false);
    }
  }, [props.categories]);

  const [selectedProvince, setSelectedProvince] = useState(provinces[0]);
  const [selectedDistrict, setSelectedDistrict] = useState(
    districts[provinces[0]][0]
  );
  const [latitude, setLatitude] = useState(
    districtsLocations[districts[provinces[0]][0]][0]
  );
  const [longitude, setLongitude] = useState(
    districtsLocations[districts[provinces[0]][0]][1]
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [street, setStreet] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [iconType, setIconType] = useState("vegetableIcon");
  const [files, setFiles] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addHarvest({
      selectedDistrict,
      selectedProvince,
      street,
      iconType,
      latitude,
      longitude,
      title,
      description,
      categoryId,
      files,
    });
  };
  const handleFilesChange = (e) => {
    if (e.target.files) {
      setFiles(e.target.files);
    }
  };
  return (
    <div className="w-screen h-screen absolute z-20 flex flex-col items-center justify-center">
      <div
        style={{ width: "30rem" }}
        className="bg-gray-50 rounded-lg shadow-lg p-4 z-20"
      >
        <button
          onClick={() => props.hideHarvestModal()}
          className="absolute bg-gray-100 w-8 h-8 top-0 right-0 rounded-lg flex items-center hover:shadow-md justify-center transition-all ease-out duration-400 focus:outline-none"
        >
          🗙
        </button>
        <p className="text-xl text-gray-600 text-center font-bold">
          Add new harvest
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="border-b w-1/6 lg:w-1/6"></span>

          <span className="text-xs text-center text-gray-500 uppercase">
            Please fill these information
          </span>

          <span className="border-b w-1/6 lg:w-1/6"></span>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mt-2">
            <FormInput
              id="title"
              labelText="Title"
              name="title"
              type="text"
              required={true}
              disabled={loading}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              validationError={false}
              autoFocus={true}
            />
          </div>
          <div className="mt-2">
            <FormInput
              id="description"
              labelText="Description"
              name="description"
              type="text"
              required={true}
              disabled={loading}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              validationError={false}
              autoFocus={true}
            />
          </div>

          <div className="mt-1">
            <FormInput
              id="street"
              labelText="Street Address"
              name="street"
              type="text"
              required={true}
              disabled={loading}
              onChange={(e) => {
                setStreet(e.target.value);
              }}
              validationError={false}
            />
          </div>
          <div className="mt-2 flex space-x-2">
            <div className="w-1/2">
              <label
                className="block text-gray-600 text-sm font-medium mb-2"
                htmlFor="provinceSelect"
              >
                Province
              </label>
              <select
                className="bg-white text-gray-700 border border-gray-300 focus:outline-none rounded-lg py-2 px-2 block w-full transition-all ease-out duration-300"
                id="provinceSelect"
                onChange={(e) => setSelectedProvince(e.target.value)}
              >
                {provinces.map((e) => (
                  <option value={e}>{e}</option>
                ))}
              </select>
            </div>
            <div className="w-1/2">
              <label
                className="block text-gray-600 text-sm font-medium mb-2"
                htmlFor="districtSelect"
              >
                District
              </label>
              <select
                className="bg-white text-gray-700 border border-gray-300 focus:outline-none rounded-lg py-2 px-2 block w-full transition-all ease-out duration-300"
                id="districtSelect"
                onChange={(e) => setSelectedDistrict(e.target.value)}
              >
                {districts[selectedProvince].map((e) => (
                  <option value={e}>{e}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="mt-2 flex space-x-2">
            <div className="w-1/2">
              <FormInputControlled
                id="latitude"
                labelText="Latitude"
                name="latitude"
                type="text"
                required={true}
                disabled={loading}
                onChange={(e) => {
                  setLatitude(e.target.value);
                }}
                validationError={false}
                value={districtsLocations[selectedDistrict][0]}
              />
            </div>
            <div className="w-1/2">
              <FormInputControlled
                id="longitude"
                labelText="Longitude"
                name="longitude"
                type="text"
                required={true}
                disabled={loading}
                onChange={(e) => {
                  setLongitude(e.target.value);
                }}
                validationError={false}
                value={districtsLocations[selectedDistrict][1]}
              />
            </div>
          </div>
          <div className="mt-2">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="districtSelect"
            >
              Category
            </label>
            <select
              className="bg-white text-gray-700 border border-gray-300 focus:outline-none rounded-lg py-2 px-2 block w-full transition-all ease-out duration-300"
              id="category"
              required
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option disabled selected value>
                -- select a category --
              </option>
              {props.categories &&
                props.categories.map((e) => (
                  <option value={e.id}>{e.name}</option>
                ))}
            </select>
          </div>
          <div className="mt-2">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="iconType"
            >
              Icon Type
            </label>
            <select
              className="bg-white text-gray-700 border border-gray-300 focus:outline-none rounded-lg py-2 px-2 block w-full transition-all ease-out duration-300"
              id="iconType"
              onChange={(e) => setIconType(e.target.value)}
            >
              <option value="vegetableIcon">Vegetable Icon</option>
              <option value="fruitIcon">Fruit Icon</option>
              <option value="grainsIcon">Grains Icon</option>
              <option value="otherIcon">Other Icon</option>
            </select>
          </div>
          <div className="mt-2">
            <label
              className="block text-gray-600 text-sm font-medium mb-2"
              htmlFor="selectFiles"
            >
              Pictures
            </label>
            <input
              type="file"
              id="selectFiles"
              onChange={handleFilesChange}
              multiple
              required
            />
          </div>

          <div className="mt-6">
            <button
              disabled={loading}
              type="submit"
              className="bg-gray-700 text-white uppercase font-bold py-2 px-4 w-full rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600 ease-out duration-300"
            >
              {loading ? (
                <div className="w-6 h-6 mx-auto">
                  <IconSpinner colorClass="text-gray-300" />
                </div>
              ) : (
                "ADD"
              )}
            </button>
          </div>
        </form>
      </div>
      <div className="w-screen h-screen absolute bg-black opacity-40"></div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    categories: state.firestore.ordered.categories ?? [],
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    hideHarvestModal: () => dispatch(hideHarvestModal()),
    showHarvestModal: () => dispatch(showHarvestModal()),
    addHarvest: (data) => dispatch(addHarvest(data)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "categories",
        orderBy: "score",
      },
    ];
  })
)(AddHarvestContainer);
