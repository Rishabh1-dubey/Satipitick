import React from "react";
import { useDispatch } from "react-redux";
import { toogleMenu } from "../utils/appSlice";
import Sat from "../items/Sat.png"
const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toogleMenu());  //it is comes form appSlice
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-xl">
      <div className="flex col-span-1 gap-6">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          src="https://w7.pngwing.com/pngs/626/110/png-transparent-black-logo-computer-icons-hamburger-button-menu-new-menu-angle-text-rectangle.png"
          alt="hamburger"
        />
        <img
          className="h-[60px] -mt-2"
          src={Sat}
          alt="you-tube logo"
        />
      </div>
      {/* ----------search bar------------------------- */}
      <div className="col-span-10 pl-80  ">
        <input
          className="w-1/2  border  border-gray-300 p-2 rounded-l-full"
          type="text"
        ></input>
        <button className="border  border-gray-300  bg-gray-100 p-2 rounded-r-full">
          search
        </button>
      </div>
      {/* ----------user icon------------------- */}
      <div>
        <img
          className="h-10 col-span-5"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
