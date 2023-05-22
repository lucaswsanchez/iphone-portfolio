import { Link } from "react-router-dom";
import IPhoneContainer from "../../../../IphoneContainer";
import "./Iphone.css";
import { AiFillSignal } from "react-icons/ai";
import { MdWifi } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
import Imessage from "../../../../assets/images/imessage.png";
import AppStore from "../../../../assets/images/appstore.png";
import Calendar from "../../../../assets/images/calendar.png";
import Phone from "../../../../assets/images/call.png";
import Clock from "../../../../assets/images/clock.png";
import Camera from "../../../../assets/images/camera.png";
import GitHub from "../../../../assets/images/github.png";
import Health from "../../../../assets/images/health.png";
import Ibook from "../../../../assets/images/ibook.png";
import Itunes from "../../../../assets/images/itunes.png";
import Linkedin from "../../../../assets/images/linkedin.png";
import Mail from "../../../../assets/images/mail.png";
import Maps from "../../../../assets/images/maps.png";
import Notes from "../../../../assets/images/notes.png";
import Photos from "../../../../assets/images/photos.png";
import Safari from "../../../../assets/images/safari.png";
import Settings from "../../../../assets/images/setting.png";
import Stocks from "../../../../assets/images/stocks.png";
import Weather from "../../../../assets/images/weather.png";

const Iphone = () => {
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
              </figure>
              <figcaption>Messages</figcaption>
            </div>
            <div className="apps">
              <figure>
                <img src={Calendar} alt="calendar" />
              </figure>
              <figcaption>Calendar</figcaption>
            </div>
            <div className="apps">
              <figure>
                <img src={Photos} alt="photos" />
              </figure>
              <figcaption>Photos</figcaption>
            </div>
            <div className="apps">
              <figure>
                <img src={Camera} alt="camera" />
              </figure>
              <figcaption>Camera</figcaption>
            </div>
            <div className="apps">
              <figure>
                <img src={Weather} alt="weather" />
              </figure>
              <figcaption>Weather</figcaption>
            </div>
            <div className="apps">
              <figure>
                <img src={Clock} alt="clock" />
              </figure>
              <figcaption>Clock</figcaption>
            </div>
            <div className="apps">
              <figure>
                <img src={Maps} alt="maps" />
              </figure>
              <figcaption>Maps</figcaption>
            </div>
            <div className="apps">
              <Link to="/turning-on/iphone/mail" className="link white">
                <figure>
                  <img src={Mail} alt="mail" />
                </figure>
                <figcaption>Mail</figcaption>
              </Link>
            </div>
            <div className="apps">
              <figure>
                <img src={Health} alt="health" />
              </figure>
              <figcaption>Health</figcaption>
            </div>
            <div className="apps">
              <figure>
                <img src={Ibook} alt="ibook" />
              </figure>
              <figcaption>Ibooks</figcaption>
            </div>
            <div className="apps">
              <Link to="/turning-on/iphone/notes" className="link white">
                <figure>
                  <img src={Notes} alt="notes" />
                </figure>
                <figcaption>Notes</figcaption>
              </Link>
            </div>
            <div className="apps">
              <figure>
                <img src={Phone} alt="call" />
              </figure>
              <figcaption>Phone</figcaption>
            </div>
            <div className="apps">
              <figure>
                <img src={Itunes} alt="itunes" />
              </figure>
              <figcaption>Itunes</figcaption>
            </div>
            <div className="apps">
              <figure>
                <img src={Stocks} alt="stocks" />
              </figure>
              <figcaption>Stocks</figcaption>
            </div>
            <div className="apps">
              <figure>
                <img src={AppStore} alt="appstore" />
              </figure>
              <figcaption>App Store</figcaption>
            </div>
            <div className="apps">
              <figure>
                <img src={Settings} alt="setting" />
              </figure>
              <figcaption>Settings</figcaption>
            </div>
          </div>
        </div>
        <div className="screen-footer">
          <div className="footer-apps">
            <div className="apps">
              <figure>
                <img src={Linkedin} alt="linkedin" />
              </figure>
            </div>
            <div className="apps">
              <figure>
                <img src={GitHub} alt="github" />
              </figure>
            </div>
            <div className="apps">
              <Link to="/turning-on/iphone/ecommerce" className="link white">
                <figure>
                  <img src={Safari} alt="imessage" />
                </figure>
              </Link>
            </div>
            <div className="apps">
              <figure>
                <img src={Safari} alt="imessage" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </IPhoneContainer>
  );
};

export default Iphone;
