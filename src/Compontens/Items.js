import React from "react";
import { data } from "../Data/cardData/carddata.js";
import Shoes from "../Assets/Images/shoes.png";
import "../index.css";
function Items() {
  return (
    <div className="itemCard test pb-10  flex  flex-wrap gap-5 ">
      {data.map((item) => {
        return (
          <div className="basis-60 m-auto ">
            <div
              className="itemImg  rounded-2xl py-3   "
              style={{ backgroundColor: item.bg }}
            >
              <img src={item.Img} alt="" className="object-cover -rotate-12 " />
            </div>
            <div className="itemDes space-y-2 ">
              <h1 className="font-bold text-lg">{item.title}</h1>
              <div className="price flex text-lg ">
                <p className="text-red-500 text-lg ">${item.newPrice}</p>
                <p className="ml-3 line-through text-slate-600 text-xl ">
                  ${item.oldPrice}
                </p>
              </div>
              <div className="colors flex items-center justify-between ">
                <h1 className="px-5 py-1 w-fit bg-[#CFE2FD] rounded-full ">
                  <span className="text-blue-400 text-sm font-semibold ">
                    Colors
                  </span>
                </h1>
                <div className="colorsCircel flex space-x-2 ">
                  <div className="bg-red-600 rounded-full w-3 h-3  "></div>
                  <div className="bg-green-600 rounded-full w-3 h-3  "></div>
                  <div className="bg-blue-600 rounded-full w-3 h-3  "></div>
                  <div className="bg-black rounded-full w-3 h-3  "></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Items;
