import React, { useContext, useState } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";

import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Progress = () => {
  const { language } = useContext(LanguageContext);

  // Show user progress percentage
  const percentage = 80;

  return (
    <div className="progress-container">
      <div className="box-progress">
        <h2>{Translation[language].lectureTitleProgress}</h2>
        <div className="progress-bar">
          <CircularProgressbarWithChildren value={percentage}>
            <EmojiEventsIcon />
          </CircularProgressbarWithChildren>
        </div>
        <p>{Translation[language].lectureTextProgress} {percentage}%</p>
      </div>
    </div>
  );
};
