import React from "react";

const VideoCard = ({info}) => {
  console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 ml-2 m-2 w-[260px] h-[280px] shadow-lg">
      <img
        className="rounded-lg m-2"
        src={thumbnails.medium.url}
        alt="videothumnails"
      />
      <ul>
        <li className="py-2 tracking-wide truncate">{title}</li>
        <li className="font-bold ">{channelTitle}</li>
        <li className="font-bold">{statistics.viewCount} view</li>
      </ul>
    </div>
  )
};

export default VideoCard;
