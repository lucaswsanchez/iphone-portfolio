import "./TurningOn.css";
import AppleLogo from "../../../assets/images/apple.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TurningOn = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

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
          <div className="turning-on-screen">
            <img src={AppleLogo} alt="apple-logo" />
            {showText ? (
              <div className="apple-text">
                <p>Tu Iphone esta listo</p>
                <Link to="/turning-on/iphone" className="link white">
                  <p>Continuar &gt;</p>
                </Link>
              </div>
            ) : (
              <p>Cargando...</p>
            )}
          </div>
          <div className="frame-bottom">
            <div className="home-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TurningOn;

/*
<Link to="/turning-on/iphone">
    <button>Abre tu iphone</button>
</Link>
*/
