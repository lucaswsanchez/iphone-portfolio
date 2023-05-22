import IPhoneContainer from "../../../../IphoneContainer";
import "./Ecommerce.css";
import { AiFillSignal } from "react-icons/ai";
import { MdWifi } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
import Padlock from "../../../../assets/images/padlock.png";
import Refresh from "../../../../assets/images/refresh.png";
import LeftBlue from "../../../../assets/images/leftblue.png";
import RightBlue from "../../../../assets/images/rightblue.png";
import ShareBlue from "../../../../assets/images/shareblue.png";
import BookBlue from "../../../../assets/images/bluebook.png";
import SquareBlue from "../../../../assets/images/squareblue.png";
import { Link } from "react-router-dom";

const Ecommerce = () => {
  return (
    <IPhoneContainer>
      <div className="ecommerce-screen">
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
                placeholder="https://lucaswsanchez.github.io/react-ecommerce/"
                disabled
              />
              <img src={Refresh} />
            </div>
          </div>
          <div className="iframe-container">
            <iframe src="https://lucaswsanchez.github.io/react-ecommerce/"></iframe>
          </div>
          <div className="safari-footer">
            <Link to="/turning-on/iphone">
              <img className="padding-ecommerce" src={LeftBlue} alt="1" />
            </Link>
            <img className="padding-ecommerce" src={RightBlue} alt="1" />
            <img src={ShareBlue} alt="1" />
            <img src={BookBlue} alt="1" />
            <img src={SquareBlue} alt="1" />
          </div>
        </div>
      </div>
    </IPhoneContainer>
  );
};

export default Ecommerce;
