import React from "react";
import {prettifyNumber} from "../utils/number"
const VideoCard = ({ info }) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2  m-2 w-72 h-[285px] shadow-lg rounded-lg transition duration-500 ease-in-out hover:scale-105 hover:shadow-stone-600 ">
      <img
        className="rounded-lg "
        src={thumbnails.medium.url}
        alt="videothumnails"
      />
      <ul>
        <li className="py-2 tracking-wide truncate">{title}</li>
        <li className="font-semibold ">{channelTitle}</li>
        <li className="font-semibold">{prettifyNumber(statistics.viewCount)} view</li>
      </ul>
    </div>
  );
};

export default VideoCard;
