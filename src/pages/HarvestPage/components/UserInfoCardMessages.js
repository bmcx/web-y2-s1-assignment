import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import moment from "moment";
import { compose } from "redux";

const UserInfoCardMessages = ({ user, message }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (isLoaded(user)) setLoading(false);
  }, [user]);
  if (loading) return <div>Loading..</div>;

  return (
    <div className="flex flex-row space-x-2 items-start mb-6">
      <div
        className="w-10 h-10 rounded-xl bg-cover flex-shrink-0"
        style={{ backgroundImage: `url("${user.photo}")` }}
      ></div>
      <div className="flex flex-col w-full">
        <div className="flex flex-row justify-between items-center space-x-1">
          <div className="text-sm text-gray-600">{`${user.firstName} ${user.lastName} ${user.role}`}</div>
          <div className="text-sm text-gray-600">{`replied ${moment(
            message.created_at.toDate()
          ).fromNow()}`}</div>
        </div>
        <div className="px-2 py-1 m-1 border border-opacity-40 bg-gray-100 rounded-md text-justify">{message.body}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    id: props.id,
    user: state.firestore.data[`${props.message.id}_user`],
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
        collection: "users",
        doc: props.message.user.id,
        storeAs: `${props.message.id}_user`,
      },
    ];
  })
)(UserInfoCardMessages);
