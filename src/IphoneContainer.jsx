import "./IphoneContainer.css";

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
            <div className="home-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneContainer;
