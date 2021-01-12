import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";
import { compose } from "redux";
import { IconMapPinOutline, IconSpinner } from "../../common/components/Icons";
import moment from "moment";

const sevenDaysFromToday = moment().subtract(7, "days").toDate();

const HarvestPageContainer = ({ harvest, auth }) => {
  console.log(harvest);
  const [loading, setLoading] = useState(true);
  const [selectedPicture, setSelectedPicture] = useState("");
  useEffect(() => {
    if (isLoaded(harvest)) {
      setLoading(false);
      setSelectedPicture(harvest.images[0]);
    }
  }, [harvest]);
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
      <div className="flex-1 flex pr-4 flex-col h-full overflow-y-auto ">
        <div className="h-full flex flex-col">
          <div
            className="flex-1 bg-gray-300 bg-cover bg-center rounded-lg mb-2"
            style={{ backgroundImage: `url("${selectedPicture}")` }}
          ></div>
          {harvest && harvest.images && harvest.images.length > 1 ? (
            <div className="h-64 w-full flex flex-row overflow-x-auto pb-2 space-x-2">
              {harvest.images.map((image) => (
                <div
                  className="w-60 hover:border-green-600 border-2 ease-out duration-300 square bg-gray-400 rounded-lg bg-center bg-cover"
                  style={{ backgroundImage: `url("${image}")` }}
                  onClick={() => setSelectedPicture(image)}
                ></div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex-1 pl-4 pr-4 h-full overflow-y-auto">
        <div className="text-3xl font-bold text-gray-700 mb-1">
          {harvest.title}
        </div>

        <a
          target="_blank"
          rel="noreferrer"
          href={`https://www.google.com/maps/search/${harvest.location.latitude},${harvest.location.longitude}`}
          className="text-md text-gray-400 hover:underline"
        >
          {`${!isEmpty(auth) ? `${harvest.address.street}, ` : ""} ${
            harvest.address.city
          }, ${harvest.address.province} `}
        </a>

        <div className="text-sm text-gray-400">
          {`Posted ${moment(harvest.created_at.toDate()).fromNow()}`}
        </div>
        <div className="mt-6 text-justify">{harvest.description}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    harvest: state.firestore.data.selected_harvest ?? [],
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
    const id = props.match?.params?.id;
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
      {
        collection: "harvests",
        doc: id,
        storeAs: "selected_harvest",
      },
    ];
  })
)(HarvestPageContainer);
