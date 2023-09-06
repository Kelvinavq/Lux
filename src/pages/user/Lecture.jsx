import React, { useEffect, useState } from "react";
import axios from "axios";
import VideosList from "../../components/user/VideosList";
import Player from "../../components/user/Player";
import { TabBar } from "../../components/user/TabBar";
import { Progress } from "../../components/user/Progress";
import "../../styles/lecture.css";

export const Lecture = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    // Get the list of videos from the "lux" folder on Vimeo

    //  here the corresponding vimeo folder of each course should be shown

    // https://api.vimeo.com/me/projects/folder_id/videos/
    // Authorization: "Bearer authorization_token",
    
    axios
      .get("https://api.vimeo.com/me/projects/17417700/videos/", {
        headers: {
          Authorization: "Bearer e2ad062ac500255f2ff1e877be8dce56",
        },
      })
      .then((response) => {
        const videoData = response.data.data;
        setVideos(videoData);

        // Check if there are videos and set the first video as selected
        if (videoData.length > 0) {
          setSelectedVideo(videoData[0].player_embed_url);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los videos de Vimeo:", error);
      });
  }, []);

  const playVideo = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  return (
    <>
      <section className="container-lecture">
        <div className="video">
          {/* Render the Player component and pass the necessary props */}
          <Player selectedVideo={selectedVideo} />
          <TabBar videos={videos} playVideo={playVideo} />
        </div>

        <div className="content-lecture">
          {/* Render the VideosList component and pass the necessary props */}
          <VideosList videos={videos} playVideo={playVideo} />
          <Progress />
        </div>
      </section>
    </>
  );
};
