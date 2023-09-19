import { useContext } from "react";
import "boxicons";
import { LanguageContext } from "../home/LanguageContext";
import { Translation } from "../../Translation";
import lux_logo from "../../assets/lux_logo.png";
import "../../styles/footer.css";

export const Footer = () => {
  const { language } = useContext(LanguageContext);

  return (
    <footer>
      <div className="con-footer">
        <div className="link">
          <a href="#">{Translation[language].footerTitle}</a>
        </div>

        <div className="icons">
          <a target="_blank" href="https://www.instagram.com/lux.academ/" className="icon">
            <box-icon type="logo" name="instagram"></box-icon>
          </a>
          <a target="_blank" href="https://www.youtube.com/@luxacademia" className="icon">
            <box-icon type="logo" name="youtube"></box-icon>
          </a>
          <a target="_blank" href="https://www.twitch.tv/luxacademia" className="icon">
            <box-icon type="logo" name="twitch"></box-icon>
          </a>
        </div>

        <div className="logo">
          <a href="#">
            <img src={lux_logo} alt="" />
          </a>
        </div>
      </div>
    </footer>
  );
};
