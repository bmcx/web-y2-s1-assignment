import React, { useEffect, useState } from "react";
import CategoryChip from "./CategoryChip";
import SubCategoryChip from "./SubCategoryChip";
import {
  IconMapPinOutline,
  IconStarFill,
  IconStarOutline,
} from "../../../common/components/Icons";
import { connect } from "react-redux";
import { isEmpty } from "react-redux-firebase";
import moment from "moment";
import Highlighter from "react-highlight-words";
import { Link } from "react-router-dom";

const ResultListItem = ({ data, onClick, auth, searchTerm }) => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    if (data.categories) {
      getCategories(data.categories);
    }
    if (data.subcategories) {
      getSubCategories(data.subcategories);
    }
  }, [data.categories, data.subcategories]);

  const getCategories = async (categories) => {
    let items = [];
    for (let i = 0; i < categories.length; i++) {
      const cat = await categories[i].get();
      items.push({ ...cat.data(), id: cat.documentId });
    }
    setCategories(items);
  };

  const getSubCategories = async (subcategories) => {
    let items = [];
    for (let i = 0; i < subcategories.length; i++) {
      const cat = await subcategories[i].get();
      items.push({ ...cat.data(), id: cat.documentId });
    }
    setSubCategories(items);
  };
  return (
    <Link to={`/harvest/${data.id}`}>
      <div className="flex bg-gray-50 hover:bg-gray-100 shadow content-center space-x-4 cursor-pointer mb-10 hover:shadow-md rounded-2xl pr-2 transition-all duration-200 ease-out">
        <div className="flex-shrink-0">
          <div
            className=" w-40 h-40 rounded-2xl bg-cover"
            style={{ backgroundImage: `url("${data.images[0]}")` }}
          ></div>
        </div>
        <div className="flex-grow flex flex-col space-y-1 py-1">
          <div className="flex-shrink-0">
            <div className="flex">
              <div className="flex-grow flex space-x-1">
                {categories.map((category) => (
                  <CategoryChip
                    key={`${data.id}_${category.id}`}
                    name={category.name}
                    color={category.styles.bgColor}
                  />
                ))}
                {subCategories.map((category) => (
                  <CategoryChip
                    key={`${data.id}_${category.id}`}
                    name={category.name}
                    color={category.styles.bgColor}
                  />
                ))}
                {categories.length === 0 ? (
                  <CategoryChip
                    key="loading"
                    name="Loading ..."
                    color="bg-gray-300 animate-pulse"
                  />
                ) : null}
              </div>
              <div className="flex-shrink-0">
                <div className=" m-auto">
                  {/* <IconStarOutline colorClass={"w-6"} strokeWidth={2} /> */}
                </div>
              </div>
            </div>
            <div className="text-gray-700 font-bold text-xl font-lato mt-1 mb-1">
              <Highlighter
                highlightClassName="text-gray-900 bg-gray-200 rounded-md"
                searchWords={[searchTerm]}
                autoEscape={true}
                textToHighlight={data.title}
              />
            </div>

            <div className="flex text-xs flex-row pb-2 pt-1 text-gray-400">
              <div className="w-4">
                <IconMapPinOutline strokeWidth={2} />
              </div>
              <div className="self-center">
                <Highlighter
                  highlightClassName="text-gray-900 bg-gray-300 rounded"
                  searchWords={[searchTerm]}
                  autoEscape={true}
                  textToHighlight={`${
                    !isEmpty(auth) ? `${data.address.street}, ` : ""
                  } ${data.address.city}, ${data.address.province}`}
                />
              </div>
            </div>
          </div>

          <div className="flex-grow flex justify-between items-end">
            <div className="flex flex-row items-center">
              {/* {data.rating ? "⭐".repeat(data.rating) : "N/A"} */}
              {[...Array(data.rating ?? 0)].map((e, i) => (
                <div className="w-6 h-6">
                  <IconStarFill colorClass="text-yellow-500" />
                </div>
              ))}
              {[...Array(5 - (data.rating ?? 0))].map((e, i) => (
                <div className="w-5 h-5 text-gray-400 cursor-pointer">
                  <IconStarOutline />
                </div>
              ))}
            </div>
            <div className="text-gray-400">
              {moment(data.created_at.toDate()).fromNow()}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(ResultListItem);
