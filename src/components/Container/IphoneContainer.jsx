import { Link } from "react-router-dom";
import "../../styles/IphoneContainer.css";

const IPhoneContainer = ({ children }) => {

  return (
    <div className="iphone6">
      <div className="container">
        <div className="frame">
          <div className="frame-top">
            <div className="sensor-container">
              <div className="sensor"></div>
            </div>
            <div className="speaker-cam">
              <div className="cam-container">
                <div className="camera"></div>
              </div>
              <div className="speaker-container">
                <div className="speaker"></div>
              </div>
            </div>
          </div>
          {children}
          <div className="frame-bottom">
            <Link to="/">
              <div></div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneContainer;
