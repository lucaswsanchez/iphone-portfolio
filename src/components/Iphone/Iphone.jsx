import "../../styles/Iphone.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AiFillSignal, AiFillCloseCircle } from "react-icons/ai";
import { MdWifi } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
import IPhoneContainer from "../Container/IphoneContainer";
import Imessage from "../../assets/images/imessage.png";
import AppStore from "../../assets/images/appstore.png";
import Calendar from "../../assets/images/calendar.png";
import Phone from "../../assets/images/call.png";
import Clock from "../../assets/images/clock.png";
import Camera from "../../assets/images/camera.png";
import GitHub from "../../assets/images/github.png";
import Health from "../../assets/images/health.png";
import Ibook from "../../assets/images/ibook.png";
import Itunes from "../../assets/images/itunes.png";
import Linkedin from "../../assets/images/linkedin.png";
import Mail from "../../assets/images/mail.png";
import Maps from "../../assets/images/maps.png";
import Notes from "../../assets/images/notes.png";
import Photos from "../../assets/images/photos.png";
import Safari from "../../assets/images/safari.png";
import Settings from "../../assets/images/setting.png";
import Stocks from "../../assets/images/stocks.png";
import Weather from "../../assets/images/weather.png";
import Files from "../../assets/images/files.png";

const Iphone = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);

  const handleFigureClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <IPhoneContainer>
      <div className="main-screen slide-in-fwd-center">
        <div className="screen-header">
          <div className="signal">
            <AiFillSignal size={12} /> Bell <MdWifi />
          </div>
          <div className="time">11:30</div>
          <div className="battery">
            50% <BsBatteryHalf size={18} />
          </div>
        </div>
        <div className="screen-main">
          <div className="main-apps">
            <div className="apps">
              <figure>
                <img src={Imessage} alt="imessage" />
                <figcaption>Messages</figcaption>
              </figure>
            </div>
            <div className="apps">
              <figure>
                <img src={Calendar} alt="calendar" />
                <figcaption>Calendar</figcaption>
              </figure>
            </div>
            <div className="apps">
              <figure>
                <img src={Photos} alt="photos" />
                <figcaption>Photos</figcaption>
              </figure>
            </div>
            <div className="apps">
              <figure>
                <img src={Camera} alt="camera" />
                <figcaption>Camera</figcaption>
              </figure>
            </div>
            <div className="apps">
              <figure>
                <img src={Weather} alt="weather" />
                <figcaption>Weather</figcaption>
              </figure>
            </div>
            <div className="apps">
              <figure>
                <img src={Clock} alt="clock" />
                <figcaption>Clock</figcaption>
              </figure>
            </div>
            <div className="apps">
              <figure>
                <img src={Maps} alt="maps" />
                <figcaption>Maps</figcaption>
              </figure>
            </div>
            <div className="apps">
              <Link to="/turning-on/iphone/mail" className="link white">
                <figure>
                  <img src={Mail} alt="mail" />
                  <figcaption>{t("contact")}</figcaption>
                </figure>
              </Link>
            </div>
            <div className="apps">
              <figure>
                <img src={Health} alt="health" />
                <figcaption>Health</figcaption>
              </figure>
            </div>
            <div className="apps">
              <figure>
                <img src={Ibook} alt="ibook" />
                <figcaption>Ibooks</figcaption>
              </figure>
            </div>
            <div className="apps">
              <Link to="/turning-on/iphone/notes" className="link white">
                <figure>
                  <img src={Notes} alt="notes" />
                  <figcaption>{t("skills")}</figcaption>
                </figure>
              </Link>
            </div>
            <div className="apps">
              <figure>
                <img src={Phone} alt="call" />
                <figcaption>Phone</figcaption>
              </figure>
            </div>
            <div className="apps">
              <figure>
                <img src={Itunes} alt="itunes" />
                <figcaption>Itunes</figcaption>
              </figure>
            </div>
            <div className="apps">
              <figure>
                <img src={Stocks} alt="stocks" />
                <figcaption>Stocks</figcaption>
              </figure>
            </div>
            <div className="apps">
              <figure>
                <img src={AppStore} alt="appstore" />
                <figcaption>App Store</figcaption>
              </figure>
            </div>
            <div className="apps">
              <figure>
                <img src={Settings} alt="setting" />
                <figcaption>Settings</figcaption>
              </figure>
            </div>
          </div>
        </div>
        <div className="screen-footer">
          <div className="footer-apps">
            <div className="apps">
              <a
                href="https://www.linkedin.com/in/lucaswsanchez/"
                target="_blank"
                className="link white"
              >
                <figure>
                  <img src={Linkedin} alt="linkedin" />
                </figure>
              </a>
            </div>
            <div className="apps">
              <a
                href="https://github.com/lucaswsanchez"
                target="_blank"
                className="link white"
              >
                <figure>
                  <img src={GitHub} alt="github" />
                </figure>
              </a>
            </div>
            <div className="apps">
              <figure onClick={handleFigureClick} style={{ cursor: "pointer" }}>
                <img src={Files} alt="files" />
              </figure>
            </div>
          </div>
        </div>
        {showModal && (
          <div className="modal slide-in-fwd-center">
            <AiFillCloseCircle
              className="modal-close"
              onClick={handleCloseModal}
            />
            <div className="modal-content">
              <div className="modal-title">
                <p>Projects</p>
              </div>
              <div className="modal-projects-container">
                <div className="modal-projects">
                  <div className="apps">
                    <Link
                      to="/turning-on/iphone/ecommerce"
                      className="link white"
                    >
                      <figure>
                        <img src={Safari} alt="imessage" />
                        <figcaption>Ecommerce</figcaption>
                      </figure>
                    </Link>
                  </div>
                  <div className="apps">
                    <Link to="/turning-on/iphone/yuh" className="link white">
                      <figure>
                        <img src={Safari} alt="safari" />
                        <figcaption>Yuh</figcaption>
                      </figure>
                    </Link>
                  </div>
                  <div className="apps">
                    <Link
                      to="/turning-on/iphone/sportblog"
                      className="link white"
                    >
                      <figure>
                        <img src={Safari} alt="safari" />{" "}
                        <figcaption>Sport blog</figcaption>
                      </figure>
                    </Link>
                  </div>
                  <div className="apps margin">
                    <Link
                      to="/turning-on/iphone/portfolio"
                      className="link white"
                    >
                      <figure>
                        <img src={Safari} alt="safari" />
                        <figcaption>Portfolio</figcaption>
                      </figure>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </IPhoneContainer>
  );
};

export default Iphone;
