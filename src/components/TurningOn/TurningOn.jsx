import "../../styles/TurningOn.css";
import AppleLogo from "../../assets/images/apple.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import IPhoneContainer from "../Container/IphoneContainer";
import { useTranslation } from "react-i18next";

const TurningOn = () => {
  const [showText, setShowText] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <IPhoneContainer>
      <div className="turning-on-screen slide-in-fwd-center">
        <img src={AppleLogo} alt="apple-logo" />
        {showText ? (
          <div className="apple-text">
            <p>{t("ready")}</p>
            <Link to="/turning-on/iphone" className="link white">
              <p>{t("continue")} &gt;</p>
            </Link>
          </div>
        ) : (
          <p>{t("loading")}</p>
        )}
      </div>
    </IPhoneContainer>
  );
};

export default TurningOn;
