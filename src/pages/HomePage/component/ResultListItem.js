import React from "react";
import CategoryChip from "./CategoryChip";
import SubCategoryChip from "./SubCategoryChip";
import {
    IconMapPinOutline,
    IconStarOutline,
  } from "../../../common/components/Icons";

const ResultListItem = ({ name, color, onClick }) => (
  <div className="flex content-center space-x-4 cursor-pointer mb-10">
    <div className="flex-shrink-0">
      <div className=" w-40 h-40 rounded-2xl bg-gray-400"></div>
    </div>
    <div className="flex-grow flex flex-col space-y-1 py-1">
      <div className="flex-shrink-0">
        <div className="flex">
          <div className="flex-grow flex space-x-1">
            <CategoryChip name="Vegetable" color="bg-green-700" />
            <SubCategoryChip name="Carrot" color="bg-green-500" />
            <SubCategoryChip name="Vegetable" color="bg-green-500" />
          </div>
          <div className="flex-shrink-0">
            <div className=" m-auto">
              <IconStarOutline colorClass={"w-6"} strokeWidth={2} />
            </div>
          </div>
        </div>
        <div className="text-gray-700 font-bold text-xl font-lato mt-1 mb-1">
          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum
          dolor sit amet
        </div>

        <div className="flex text-xs flex-row pb-2 pt-1 text-gray-400">
          <div className="w-4">
            <IconMapPinOutline strokeWidth={2} />
          </div>
          <div className="self-center">123, ABC DEF, XYZ</div>
        </div>
      </div>

      <div className="flex-grow flex justify-between items-end">
        <div className="">Rating</div>
        <div className="text-gray-400">4 days ago</div>
      </div>
    </div>
  </div>
);

export default ResultListItem;
