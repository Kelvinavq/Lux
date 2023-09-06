import React, { useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Link } from "react-router-dom";

const VideosList = ({ videos, playVideo }) => {
  const { language } = useContext(LanguageContext);


  function formatDuration(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let formattedDuration = "";

    if (hours > 0) {
      formattedDuration += `${hours}h `;
    }

    if (minutes > 0 || hours > 0) {
      formattedDuration += `${minutes}m `;
    }

    formattedDuration += `${remainingSeconds}s`;

    return formattedDuration.trim();
  }

  /// Calculate the total duration of all videos in the course
  const totalSeconds = videos.reduce(
    (total, video) => total + video.duration,
    0
  );

  // Convert the total duration from seconds to a formatted time
  const totalDuration = formatDuration(totalSeconds);

   // Calculate the total number of videos in the course
  const totalVideos = videos.length;


  return (
    <div className="video-list">
      <div className="btn-prev">
        <Link to="/user/courses">
          <button>{Translation[language].lectureBtnPrev}</button>
        </Link>
      </div>

      <div className="list">
        <div className="title-list">
          <h2>{Translation[language].lectureTitleList}</h2>
        </div>

        <div className="box-list">
          <div className="box-content">
            <div className="head">
              <div className="lesson">
             {/* Number of videos viewed by the user */}
                <span>0 / {totalVideos}</span>
              </div>

              <div className="time">
                <span>{totalDuration}</span>
              </div>
            </div>

            <div className="videos">
              {videos.map((video, index) => (
                <div className="video" key={index}>
                  <div>
                    <button onClick={() => playVideo(video.player_embed_url)}>
                      <PlayArrowIcon />
                    </button>
                    <span>{video.name}</span>
                  </div>
                  <p>{formatDuration(video.duration)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideosList;
