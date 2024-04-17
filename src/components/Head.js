import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-xl">
      <div className="flex col-span-1 gap-6">
        <img
          className="h-10"
          src="https://w7.pngwing.com/pngs/626/110/png-transparent-black-logo-computer-icons-hamburger-button-menu-new-menu-angle-text-rectangle.png"
          alt="hamburger"
        />
        <img
          className="h-14 -mt-2"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
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
