import React, { useRef, useState, useContext } from "react";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";


import { Link } from "react-router-dom";
import "../../styles/tools.css";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// UPLOAD THE SELECTED FILES TO THE DATABASE AND SHOW THEM IN THE CORRESPONDING LISTS

export const MarketingTools = () => {

  const { language } = useContext(LanguageContext);


  const fileInputRef = useRef(null);
  const videoFileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState(null);
  const [selectedVideoFileName, setSelectedVideoFileName] = useState(null); 

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.type === "application/pdf") {
        setSelectedFileName(selectedFile.name);
      } else {
        alert("Por favor, seleccione un archivo PDF.");
      }
    }
  };

  const handleVideoFileChange = (event) => {
    const selectedVideo = event.target.files[0];
    if (selectedVideo) {
      if (selectedVideo.type.startsWith("video/")) {
        // Acepta cualquier tipo de archivo de video
        setSelectedVideoFileName(selectedVideo.name);
      } else {
        alert("Por favor, seleccione un archivo de video.");
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleVideoButtonClick = () => {
    videoFileInputRef.current.click(); // Abre el diálogo de selección de archivo de video
  };

  const PdfList = [
    { id: 1, name: "Archivo 1", link: "/admin/tools" },
    { id: 2, name: "Archivo 2", link: "/admin/tools" },
    { id: 3, name: "Archivo 3", link: "/admin/tools" },
  ];

  const videoList = [
    { id: 1, name: "Video 1", link: "/admin/tools" },
    { id: 2, name: "Video 2", link: "/admin/tools" },
    { id: 3, name: "Video 3", link: "/admin/tools" },
  ];
  return (
    <>
      <div className="container-sidebar">
        <div className="content-tools">
          <div className="head">
            <h1>{Translation[language].mktTitle}</h1>
          </div>

          <div className="container-tools">
            <div className="form-tools">
              <h2>{Translation[language].mktText1}</h2>

              <div className="card">
                <div className="contenedor-circulos">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
                <div className="contenido">
                  <div className="icon">
                    <UploadFileIcon />
                  </div>

                  <div className="texts">
                    <h2>{Translation[language].mktCardText1}</h2>
                    <p>{Translation[language].mktCardText2}</p>

                    <div className="grupo-input">
                      <input
                        type="file"
                        name="file"
                        id="file"
                        ref={fileInputRef}
                        accept=".pdf"
                        onChange={handleFileChange}
                      />
                      <button type="button" onClick={handleButtonClick}>
                      {Translation[language].mktCardButton1}
                      </button>
                      {selectedFileName && <span>{selectedFileName}</span>}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="list">
              <div className="head">
                <h2> {Translation[language].mktText2}</h2>
              </div>

              <div className="items">
                {PdfList.map((pdf, index) => (
                  <div className="item" key={index}>
                    <div className="left">
                      <div className="number">
                        <span>{pdf.id}</span>
                      </div>
                      <p>{pdf.name}</p>
                    </div>
                    <button>
                      <Link to={pdf.link}>
                        <ArrowRightAltIcon />
                      </Link>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="container-tools">
            <div className="list">
              <div className="head">
                <h2>{Translation[language].mktText3}</h2>
              </div>

              <div className="items">
                {videoList.map((video, index) => (
                  <div className="item" key={index}>
                    <div className="left">
                      <div className="number">
                        <span>{video.id}</span>
                      </div>
                      <p>{video.name}</p>
                    </div>
                    <button>
                      <Link to={video.link}>
                        <ArrowRightAltIcon />
                      </Link>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="form-tools">
              <h2>{Translation[language].mktText4}</h2>

              <div className="card">
                <div className="contenedor-circulos">
                  <div className="circle"></div>
                  <div className="circle"></div>
                  <div className="circle"></div>
                </div>
                <div className="contenido">
                  <div className="icon">
                    <CloudUploadIcon />
                  </div>

                  <div className="texts">
                    <h2>{Translation[language].mktCardText3}</h2>
                    <p>{Translation[language].mktCardText4}</p>

                    <div className="grupo-input">
                 
                      <input
                        type="file"
                        name="videoFile" 
                        id="videoFile" 
                        ref={videoFileInputRef} 
                        accept="video/*" 
                        onChange={handleVideoFileChange} 
                      />
                      <button type="button" onClick={handleVideoButtonClick}>
                      {Translation[language].mktCardButton2}
                      </button>
                      {selectedVideoFileName && (
                        <span>{selectedVideoFileName}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
