import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { setRole } from "../../state/auth/authActions";

const SettingsContainer = ({ users, setRole }) => {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-bold">Users</div>
      <table className="border min-w-full mt-4">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-gray-700 tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">
              NIC
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-gray-700 tracking-wider">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">
                  {user.id}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">{`${user.firstName} ${user.lastName}`}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">
                  {user.nic}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">
                  {user.phone}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-gray-900 border-gray-500 text-sm leading-5">
                  <select
                    defaultValue={user.role ?? "FARMER"}
                    onChange={(e) =>
                      setRole({
                        value: e.target.value,
                        userId: user.id,
                      })
                    }
                  >
                    <option value="DOA">DOA</option>
                    <option value="KEELS">KEELS</option>
                    <option value="FARMER">FARMER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.users ?? [],
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setRole: (data) => dispatch(setRole(data)),
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => {
    return [
      {
        collection: "users",
      },
    ];
  })
)(SettingsContainer);
