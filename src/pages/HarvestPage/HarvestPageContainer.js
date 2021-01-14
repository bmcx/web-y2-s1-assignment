import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";
import { compose } from "redux";
import {
  IconStarOutline,
  IconStarFill,
  IconSpinner,
  IconEditOutline,
} from "../../common/components/Icons";
import moment from "moment";
import UserInfoCard from "./components/UserInfoCard";
import MessageContainer from "./components/MessageContainer";
import {
  addImage,
  editHarvest,
  showAuthModal,
  updateRating,
  removeImage,
} from "../../state/auth/authActions";

const sevenDaysFromToday = moment().subtract(7, "days").toDate();

const HarvestPageContainer = ({
  harvest,
  auth,
  showAuthModal,
  setRating,
  profile,
  edit,
  addNewImage,
  removeImageByUrl,
}) => {
  const [loading, setLoading] = useState(true);
  const [selectedPicture, setSelectedPicture] = useState("");
  const [canEdit, setCanEdit] = useState(false);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploading, setUploading] = useState(false);
  useEffect(() => {
    if (isLoaded(harvest)) {
      setLoading(false);
      if (harvest.images) setSelectedPicture(harvest.images[0]);
      if (harvest.farmer && auth.uid === harvest.farmer.id) setCanEdit(true);
      setTitle(harvest.title);
      setDescription(harvest.description);
    }
  }, [auth.uid, harvest]);
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
  if (isEmpty(harvest))
    return (
      <div className="flex w-full h-full flex-col justify-center items-center">
        Not found
      </div>
    );

  const saveChanges = () => {
    if (!title) {
      alert("Title cannot be empty");
      return;
    }
    if (!description) {
      alert("description cannot be empty");
      return;
    }
    edit({
      key: "title",
      value: title,
      harvestId: harvest.id,
    });
    edit({
      key: "description",
      value: description,
      harvestId: harvest.id,
    });
    setEditing(!editing);
  };
  const rateStarOnClick = (rating) => {
    if (!isEmpty(auth) && profile?.role) {
      setRating({
        rating,
        harvestId: harvest.id,
        ratingBy: auth.uid,
      });
    } else {
      alert("Only Keels Staff and DOA staff can set rating");
    }
  };
  const handleFilesChange = async (e) => {
    if (uploading) return;
    if (e.target.files) {
      setUploading(true);
      await addNewImage({ image: e.target.files[0], harvestId: harvest.id });
      setUploading(false);
    }
  };
  return (
    <div className="flex w-full h-full">
      <div className="flex-1 flex pr-4 flex-col h-full overflow-y-auto ">
        <div className="h-full flex flex-col">
          <div
            className="flex-1 bg-gray-300 bg-cover bg-center rounded-lg mb-2"
            style={{ backgroundImage: `url("${selectedPicture}")` }}
          ></div>
          {harvest &&
          harvest.images &&
          (harvest.images.length > 1 || canEdit) ? (
            <div className="h-64 w-full flex flex-row overflow-y-hidden overflow-x-auto pb-2 space-x-2">
              {harvest.images.map((image) => (
                <div
                  className="w-60 h-60 hover:border-green-600 border-2 ease-out duration-300 square relative bg-gray-400 rounded-lg bg-center bg-cover"
                  style={{ backgroundImage: `url("${image}")` }}
                  onClick={() => setSelectedPicture(image)}
                >
                  <div
                    className="absolute top-1 right-1 font-bold px-2 py-1 cursor-pointer bg-gray-700 rounded select-none text-gray-50"
                    onClick={() => {
                      let t = window.confirm("Are you sure");
                      if (t)
                        removeImageByUrl({
                          imageUrl: image,
                          harvestId: harvest.id,
                        });
                    }}
                  >
                    Remove
                  </div>
                </div>
              ))}
              {canEdit ? (
                <label
                  htmlFor="addImage"
                  className="w-60 flex-grow-0 flex cursor-pointer justify-center items-center hover:border-gray-500 hover:text-gray-500 border-2 border-dashed border-gray-300 text-gray-300 ease-out duration-300 square bg-gray-50 rounded-lg"
                >
                  {!uploading ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-20 h-20"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  ) : (
                    <div className="w-10 h-10 text-gray-500 ">
                      <IconSpinner />
                    </div>
                  )}
                  {!uploading ? "Add new photo" : "Uploading"}
                  <input
                    id="addImage"
                    type="file"
                    accept=".png, .jpg"
                    onChange={handleFilesChange}
                    hidden
                  />
                </label>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex-1 pl-4 pr-4 h-full overflow-y-auto">
        <div className="text-3xl font-bold text-gray-700 mb-1">
          {editing ? (
            <textarea
              defaultValue={harvest.title}
              className="border w-full p-1 rounded"
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
            />
          ) : (
            harvest.title
          )}
        </div>
        <div className="flex flex-row justify-between items-end mt-4 mb-2">
          {!isEmpty(auth) ? (
            <UserInfoCard
              id={harvest.farmer.id}
              address={
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
              }
            />
          ) : null}
          <div className="flex flex-col items-end">
            {canEdit ? (
              <div
                onClick={() => saveChanges()}
                className="text-sm py-1 px-2 bg-gray-700 rounded select-none text-gray-50 text-left hover:underline cursor-pointer"
              >
                {editing ? "Save" : "Edit"}
              </div>
            ) : null}
            <div className="text-sm text-gray-400">
              {`Posted ${moment(harvest.created_at.toDate()).fromNow()}`}
            </div>
          </div>
        </div>

        <div className="mt-4 text-justify">
          {editing ? (
            <textarea
              defaultValue={harvest.description}
              className="border w-full p-1 rounded"
              rows={5}
              onChange={(e) => setDescription(e.target.value)}
            />
          ) : (
            harvest.description
          )}
        </div>
        <div className="mt-4 flex flex-row items-center space-x-1">
          <div className="font-bold">Rating:</div>
          {[...Array(5)].map((e, i) =>
            (harvest.rating ?? 0) > i ? (
              <div
                className="w-6 h-6 cursor-pointer"
                onClick={() => rateStarOnClick(i + 1)}
              >
                <IconStarFill colorClass="text-yellow-500" />
              </div>
            ) : (
              <div
                className="w-5 h-5 hover:text-gray-700 cursor-pointer"
                onClick={() => rateStarOnClick(i + 1)}
              >
                <IconStarOutline />
              </div>
            )
          )}
          <div className="">{`${harvest.rating ?? 0}x`}</div>
        </div>
        {!isEmpty(auth) ? (
          <MessageContainer id={harvest.id} userId={harvest.farmer.id} />
        ) : (
          <div
            onClick={() => showAuthModal()}
            className="mt-4 font-bold text-gray-500 text-center px-2 py-1 m-1 border border-opacity-40 bg-gray-100"
          >
            Please sign in to get more information
          </div>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  const id = props.match?.params?.id;
  return {
    id,
    harvest: state.firestore.ordered.selected_harvest
      ? state.firestore.ordered.selected_harvest[0]
      : [],
    categories: state.firestore.ordered.categories ?? [],
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showAuthModal: () => dispatch(showAuthModal()),
    setRating: (data) => dispatch(updateRating(data)),
    edit: (data) => dispatch(editHarvest(data)),
    addNewImage: (data) => dispatch(addImage(data)),
    removeImageByUrl: (data) => dispatch(removeImage(data)),
  };
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
