import { connect } from "react-redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";
import { Doughnut, Bar } from "react-chartjs-2";
import { useEffect, useMemo, useState } from "react";

const sevenDaysFromToday = moment().subtract(7, "days").toDate();

const GraphPageContainer = (props) => {
  const [data, setData] = useState({
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ["#47464A", "#FDB45C", "#46BF9D"],
      },
    ],

    labels: ["Grains", "Fruits", "Vegetables"],
  });
  const [data2, setData2] = useState({
    datasets: [
      {
        label: "Users",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [0, props.users.length, 0],
      },
    ],

    labels: ["Dec", "Jan", "Feb"],
  });
  const [loading, setLoading] = useState(true);
  const [districtValues, setDistrictValues] = useState({
    Jaffna: 0,
    Kilinochchi: 0,
    Mannar: 0,
    Mullaitivu: 0,
    Vavuniya: 0,
    Puttalam: 0,
    Kurunegala: 0,
    Gampaha: 0,
    Colombo: 0,
    Kalutara: 0,
    Anuradhapura: 0,
    Polonnaruwa: 0,
    Matale: 0,
    Kandy: 0,
    Nuwara_Eliya: 0,
    Kegalle: 0,
    Ratnapura: 0,
    Trincomalee: 0,
    Batticaloa: 0,
    Ampara: 0,
    Badulla: 0,
    Monaragala: 0,
    Hambantota: 0,
    Matara: 0,
    Galle: 0,
  });
  const [created, setCreated] = useState(false);

  useEffect(() => {
    if (isLoaded(props.added_last_7_days, props.wasted_harvest, props.users)) {
      setLoading(false);
      if (!created) {
        const d = data;
        const list = districtValues;
        for (let i = 0; i < props.added_last_7_days.length; i++) {
          const x = props.added_last_7_days[i];
          switch (x.categories[0].id) {
            case "lx2ip2EX2SiSP9XNbtHb":
              d.datasets[0].data[0] += 1;
              break;
            case "iGWbWHqL272OeuMqnqu9":
              d.datasets[0].data[1] += 1;
              break;
            case "q0IX8qPY3gNhgkoAkq1k":
              d.datasets[0].data[2] += 1;
              break;

            default:
              break;
          }
          list[x.address.city] += 1;
          setCreated(true);
        }
        setDistrictValues(list);
        setData(d);
      }
    }
  }, [
    created,
    data,
    data.datasets,
    data2,
    districtValues,
    props.added_last_7_days,
    props.users,
    props.wasted_harvest,
  ]);

  const sortData = () => {
    for (let i = 0; i < props.added_last_7_days.length; i++) {
      const x = props.added_last_7_days[i];
      switch (x.categories[0].id) {
        case "lx2ip2EX2SiSP9XNbtHb":
          data.datasets[0].data[0] += 1;
          break;
        case "iGWbWHqL272OeuMqnqu9":
          data.datasets[0].data[1] += 1;
          break;
        case "q0IX8qPY3gNhgkoAkq1k":
          data.datasets[0].data[2] += 1;
          break;

        default:
          break;
      }
    }
  };

  const generateDistrictWiseDate = () => {
    let l = [];
    for (const key in districtValues) {
      l.push(
        <div className="flex flex-row space-x-2 justify-between w-32 mb-1">
          <div>{`${key}`}</div>
          <div>{`${districtValues[key]}`} </div>
        </div>
      );
    }
    return l;
  };

  return (
    <div>
      <div className="flex items- min-h-screen bg-gray-50 text-gray-800">
        <div className="flex flex-col p-4 w-full">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="flex flex-row bg-white shadow-sm rounded p-4">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-blue-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Users</div>
                  <div className="font-bold text-lg">{props.users.length}</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="flex flex-row bg-white shadow-sm rounded p-4">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-green-100 text-green-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">
                    New Harvests (this week)
                  </div>
                  <div className="font-bold text-lg">
                    {props.added_last_7_days.length}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="flex flex-row bg-white shadow-sm rounded p-4">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-orange-100 text-orange-500">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    ></path>
                  </svg>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Categories</div>
                  <div className="font-bold text-lg">
                    {props.categories.length}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
              <div className="flex flex-row bg-white shadow-sm rounded p-4">
                <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-red-100 text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="flex flex-col flex-grow ml-4">
                  <div className="text-sm text-gray-500">Wasted Harvest</div>
                  <div className="font-bold text-lg">
                    {props.wasted_harvest.length}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row space-x-2 mt-2">
            <div className="flex-1">
              <div className="flex flex-col bg-white shadow-sm rounded p-4">
                <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                  District wise harvests
                </div>
                {generateDistrictWiseDate()}
              </div>
            </div>
            <div className="flex-1 flex flex-col">
              <div className="">
                <div className="bg-white shadow-md rounded-lg px-3 py-2 mb-4">
                  <div className="block text-gray-700 text-lg font-semibold py-2 px-2">
                    Percentage
                  </div>
                  <div className="p1-3 text-sm h-72">
                    {!loading ? (
                      <Doughnut
                        width={100}
                        height={50}
                        options={{ maintainAspectRatio: false }}
                        data={data}
                      />
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="">
                <div className="bg-white shadow-md rounded-lg px-3 py-2">
                  <div className="text-gray-700 text-lg font-semibold py-2 px-2">
                    Users
                  </div>
                  <div className="text-sm ">
                    <Bar height={127.5} data={data2} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    added_last_7_days: state.firestore.ordered.added_last_7_days ?? [],
    wasted_harvest: state.firestore.ordered.wasted_harvest ?? [],
    users: state.firestore.ordered.users ?? [],
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
        storeAs: "added_last_7_days",
      },
      {
        collection: "harvests",
        where: [["created_at", "<=", sevenDaysFromToday]],
        orderBy: ["created_at", "desc"],
        storeAs: "wasted_harvest",
      },
      {
        collection: "categories",
        orderBy: "score",
      },
      {
        collection: "users",
      },
    ];
  })
)(GraphPageContainer);
