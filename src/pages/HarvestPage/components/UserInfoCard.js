import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose } from "redux";

const UserInfoCard = ({ user, address }) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (isLoaded(user)) setLoading(false);
  }, [user]);
  if (loading) return <div>Loading..</div>;

  return (
    <div className="flex flex-row space-x-2 items-center">
      <div
        className="w-10 h-10 rounded-xl bg-cover "
        style={{ backgroundImage: `url("${user?.photo}")` }}
      ></div>
      <div className="flex flex-col">
        <div className="text-gray-800">{`${user?.firstName} ${user?.lastName}`}</div>
        {address}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    id: props.id,
    user: state.firestore.data[`${props.id}_user`],
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
        doc: props.id,
        storeAs: `${props.id}_user`,
      },
    ];
  })
)(UserInfoCard);
