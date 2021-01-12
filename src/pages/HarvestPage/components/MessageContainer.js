import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { firestoreConnect, isEmpty, isLoaded } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import UserInfoCardMessages from "./UserInfoCardMessages";

const sevenDaysFromToday = moment().subtract(7, "days").toDate();

const MessageContainer = ({ messages, auth }) => {
  const [loading, setLoading] = useState(true);
  console.log(messages);
  useEffect(() => {
    if (isLoaded(messages)) setLoading(false);
  }, [messages]);
  if (loading) return <div className="mt-6">Messages Loading..</div>;

  return (
    <div className="flex flex-col space-x-2 mt-6">
      <div className="border-b font-bold">Messages</div>

      {!isEmpty(auth) ? (
        <div className="flex flex-col items-end">
          <textarea
            rows={4}
            className="p-2 w-full focus:outline-none border rounded-md mt-1"
            placeholder="Type your reply here"
          />
          <button className="bg-gray-700 text-white text-sm uppercase font-bold py-2 px-4 my-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600 ease-out duration-300">
            Send
          </button>
        </div>
      ) : null}

      {messages && messages.length > 0 ? (
        <>
          <div className="mt-6 ">
            {messages.map((message) => (
              <UserInfoCardMessages key={message.id} message={message} />
            ))}
          </div>
        </>
      ) : (
        <div className="font-bold text-gray-500 text-center px-2 py-1 m-1 border border-opacity-40 bg-gray-100">
          There are no messages
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state, props) => {
  console.log(state.firestore);
  return {
    id: props.id,
    messages: state.firestore.ordered[`${props.id}_selected_messages`],
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
      {
        collection: "harvests",
        doc: props.id,
        storeAs: "selected_harvest",
      },
      {
        collection: "harvests",
        doc: props.id,
        subcollections: [
          {
            collection: "messages",
            orderBy: ["created_at", "desc"],
          },
        ],
        storeAs: `${props.id}_selected_messages`,
      },
    ];
  })
)(MessageContainer);
