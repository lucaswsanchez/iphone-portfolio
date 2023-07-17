import { Link } from "react-router-dom";
import "../styles/Home.css";
import { ImSwitch } from "react-icons/im";
import { useTranslation } from "react-i18next";
import LanguagePicker from "./LanguagePicker";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <LanguagePicker />
      <div className="home-title">
        <p>{t("welcome")}</p>
        <p>{t("name")}</p>
        <p>{t("role")}</p>
      </div>
      <div className="home-turning-on-container">
        <div className="home-turning-on">
          <span>{t("turnOnDevice")}</span>
          <Link to="/turning-on">
            <button>
              <ImSwitch size={40} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
