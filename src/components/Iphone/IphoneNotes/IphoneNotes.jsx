import "../../../styles/IphoneNotes.css";
import { useTranslation } from "react-i18next";
import { AiFillSignal, AiOutlineSearch } from "react-icons/ai";
import { MdWifi, MdNavigateBefore } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import NewNote from "../../../assets/images/new-notes.png";
import SquareNote from "../../../assets/images/square-notes.png";
import IPhoneContainer from "../../Container/IphoneContainer";

const IphoneNotes = () => {
  const { t } = useTranslation();

  return (
    <IPhoneContainer>
      <div className="notes-screen">
        <div className="screen-header">
          <div className="signal">
            <AiFillSignal size={12} /> Bell <MdWifi />
          </div>
          <div className="time">11:30</div>
          <div className="battery">
            50% <BsBatteryHalf size={18} />
          </div>
        </div>
        <div className="notes-header yellow slide-in-fwd-center">
          <Link to="/turning-on/iphone" className="yellow">
            <MdNavigateBefore size={30} />
          </Link>
          <p>{t("edit")}</p>
        </div>
        <div className="notes slide-in-fwd-center">
          <h2>{t("notes")}</h2>
          <div className="search-notes">
            <AiOutlineSearch color="#8f8f94" />
            <input type="search" placeholder={t("search")} disabled />
          </div>
          <Link
            to="/turning-on/iphone/notes/tech-skills"
            className="link black"
          >
            <div className="note" style={{ marginTop: "12px" }}>
              <h5>{t("techSkills")}</h5>
              <p>{t("today")}</p>
            </div>
          </Link>
          <Link
            to="/turning-on/iphone/notes/soft-skills"
            className="link black"
          >
            <div className="note">
              <h5>{t("softSkills")}</h5>
              <p>{t("today")}</p>
            </div>
          </Link>
          <Link to="/turning-on/iphone/notes/academic" className="link black">
            <div className="note">
              <h5>{t("academic")}</h5>
              <p>{t("today")}</p>
            </div>
          </Link>
          <a
            href="https://drive.google.com/drive/folders/1Zc5vxEo1AFbrQxAAAFmk_AAItJ7TfqHU?usp=sharing"
            target="_blank"
            className="link black"
          >
            <div className="note">
              <h5>{t("cv")}</h5>
              <p>{t("today")}</p>
            </div>
          </a>
          <div className="notes-footer">
            <img src={SquareNote} alt="square-note" />
            <p>{t("threeNotes")}</p>
            <img src={NewNote} alt="new-note" />
          </div>
        </div>
      </div>
    </IPhoneContainer>
  );
};

export default IphoneNotes;
