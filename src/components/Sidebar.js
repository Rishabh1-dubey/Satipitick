import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { FaFreeCodeCamp } from "react-icons/fa6";
import { HiTrendingUp } from "react-icons/hi";
import { FaYoutube } from "react-icons/fa";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early Return Pattern
  if (!isMenuOpen) return null;
  return (
    <div className="px-8 py-9 shadow-lg w-56 ">
      <ul className="">
        <li className="flex gap-2">
          <MdHome className="text-xl mb-2  " />
          <Link to="/"> Home</Link>
        </li>
        <li className="flex  items-center mb-2">
          <SiYoutubeshorts className="text-xl mr-2 " />
          Shorts
        </li>
        <li className="flex gap-2">
          <MdSubscriptions className="text-xl mb-3" />
          Subscription
        </li>
      </ul>

      <div className="h-0 w-full border border-black"></div>
      {/* border specific section */}
      <h1 className=" font-bold pt-5 mb-2">Subscription</h1>
      <ul>
        <li className="mb-3">🚀 Akshay Saini</li>
        <li className="mb-3">🏹 Sports</li>
        <li className="mb-3">🧑🏻‍💻Tech</li>
        <li className="flex gap-2 mb-3">
          <FaFreeCodeCamp className="text-xl mb-2" />
          Code with Harry
        </li>
      </ul>
      <h1 className=" font-bold pt-5">Explore</h1>
      <ul>
        <li className="flex gap-2 mb-3"> 🔴 Trending</li>
        <li className="mb-3"> 🛒 Shopping</li>
        <li className="mb-3"> 🎵Music</li>
        <li className="mb-3">▶️Movies</li>
      </ul>
      <h1 className=" font-bold pt-5 mr-2 w-60 mb-2">More From Youtube </h1>
      <ul >
        <li className="mb-3">Youtube Premium</li>
        <li className="mb-3">Youtube Studio</li>
        <li className="mb-3">Youtube Music</li>
        <li className="mb-3">Youtube Kids</li>
      </ul>
    </div>
  );
};

export default Sidebar;
