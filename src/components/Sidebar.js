import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {

  const isMenuOpen= useSelector((store)=>store.app.isMenuOpen);

  //Early Return Pattern
  if(!isMenuOpen)return null;
  return (
    <div className="p-5 shadow-lg w-48">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>

      <h1 className=" font-bold pt-5">Subscription</h1>
      <ul>
        <li>Akshay Saini</li>
        <li>Sports</li>
        <li>Rishabh TECh</li>
        <li>Code with Harry</li>
      </ul>
      <h1 className=" font-bold pt-5">Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Movies</li>
      </ul>
      <h1 className=" font-bold pt-5">More From Youtube</h1>
      <ul>
        <li>Youtube Premium</li>
        <li>Youtube Studio</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
      </ul>
    </div>
  );
};

export default Sidebar;
