import "../../../styles/Projects.css";
import { AiFillSignal } from "react-icons/ai";
import { MdWifi } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import Padlock from "../../../assets/images/padlock.png";
import Refresh from "../../../assets/images/refresh.png";
import LeftBlue from "../../../assets/images/leftblue.png";
import RightBlue from "../../../assets/images/rightblue.png";
import ShareBlue from "../../../assets/images/shareblue.png";
import BookBlue from "../../../assets/images/bluebook.png";
import SquareBlue from "../../../assets/images/squareblue.png";
import IPhoneContainer from "../../Container/IphoneContainer";

const Portfolio = () => {
  return (
    <IPhoneContainer>
      <div className="project-screen">
        <div className="screen-header">
          <div className="signal">
            <AiFillSignal size={12} /> Bell <MdWifi />
          </div>
          <div className="time">11:30</div>
          <div className="battery">
            50% <BsBatteryHalf size={18} />
          </div>
        </div>
        <div className="safari slide-in-fwd-center">
          <div className="safari-header">
            <div className="safari-input">
              <img src={Padlock} />
              <input
                type="search"
                placeholder="https://lucaswsanchez-portfolio.netlify.app/"
                disabled
              />
              <img src={Refresh} />
            </div>
          </div>
          <div className="iframe-container">
            <iframe src="https://lucaswsanchez-portfolio.netlify.app/"></iframe>
          </div>
          <div className="safari-footer">
            <Link to="/turning-on/iphone">
              <img className="padding-project" src={LeftBlue} alt="1" />
            </Link>
            <img className="padding-project" src={RightBlue} alt="1" />
            <img src={ShareBlue} alt="1" />
            <img src={BookBlue} alt="1" />
            <img src={SquareBlue} alt="1" />
          </div>
        </div>
      </div>
    </IPhoneContainer>
  );
};

export default Portfolio;
