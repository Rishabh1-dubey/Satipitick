import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    getVideoes();
  }, []);

  const getVideoes = async () => {
    const data = await fetch(YOUTUBE_API);
    const json = await data.json();
    console.log(json);
    setvideos(json.items);
  };
  return (
    <div className="flex  flex-wrap">
      {videos.map((video) => (
    <Link to={"/watch?v="+video.id}>
      <VideoCard key={video.id} info={video} />
    </Link> 
      ))}
      //here info pass as a props
    </div>
  );
};

export default VideoContainer;
