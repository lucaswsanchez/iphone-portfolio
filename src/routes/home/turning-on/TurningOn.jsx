import "./TurningOn.css";
import AppleLogo from "../../../assets/images/apple.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IPhoneContainer from "../../../IphoneContainer";

const TurningOn = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <IPhoneContainer>
      <div className="turning-on-screen slide-in-fwd-center">
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
    </IPhoneContainer>
  );
};

export default TurningOn;
