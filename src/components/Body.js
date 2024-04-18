import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
// import WatchPage from "./WatchPage";
// import MainContainer from './MainContainer'

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      {/* <MainContainer/>
      <WatchPage/> */}
      {/* jb outlet krte haii to rounter ka path easy way s ehum set lr skte haiiii */}
      <Outlet />
    </div>
  );
};

export default Body;
