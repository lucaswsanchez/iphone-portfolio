import "../../../styles/IphoneNotesTechSkills.css";
import { useTranslation } from "react-i18next";
import { AiFillSignal } from "react-icons/ai";
import { MdWifi, MdNavigateBefore } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
import { RxDot } from "react-icons/rx";
import { GrReactjs } from "react-icons/gr";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { AiFillHtml5 } from "react-icons/ai";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiRedux } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { ImMobile } from "react-icons/im";
import { Link } from "react-router-dom";
import AddPerson from "../../../assets/images/add-person.png";
import Share from "../../../assets/images/share.png";
import Delete from "../../../assets/images/delete.png";
import Check from "../../../assets/images/check.png";
import Add from "../../../assets/images/add+.png";
import Marker from "../../../assets/images/marker.png";
import NewNote from "../../../assets/images/new-notes.png";
import IPhoneContainer from "../../Container/IphoneContainer";

const IphoneNotesTechSkills = () => {
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
        <div className="in-notes-header slide-in-fwd-center">
          <Link to="/turning-on/iphone/notes" className="yellow">
            <div className="in-header-one yellow">
              <MdNavigateBefore size={30} />
              <p>{t("notes")}</p>
            </div>
          </Link>
          <div className="in-header-two">
            <img src={AddPerson} alt="AddPerson" />
            <img src={Share} alt="Share" />
          </div>
        </div>
        <div className="in-header-text slide-in-fwd-center">
          <p>{t("date")}</p>
        </div>
        <div className="habilidades-tecnicas slide-in-fwd-center">
          <h4>{t("techSkills")}</h4>
          <div className="skills">
            <div className="skills-one">
              <ul>
                <li>
                  <RxDot size={12} className="yellow" />
                  Javascript
                </li>
                <li>
                  <RxDot size={12} className="yellow" />
                  HTML & CSS
                </li>
                <li>
                  <RxDot size={12} className="yellow" />
                  Bootstrap
                </li>
                <li>
                  <RxDot size={12} className="yellow" />
                  Responsive
                </li>
                <li>
                  <RxDot size={12} className="yellow" />
                  Git & Github
                </li>
              </ul>
            </div>
            <div className="skills-two">
              <ul>
                <li>
                  <RxDot size={12} className="yellow" />
                  {t("api")}
                </li>
                <li>
                  <RxDot size={12} className="yellow" /> React: Router, Context
                </li>
                <li>
                  <RxDot size={12} className="yellow" /> Redux
                </li>
                <li>
                  <RxDot size={12} className="yellow" /> Typescript
                </li>
                <li>
                  <RxDot size={12} className="yellow" /> Firebase
                </li>
              </ul>
            </div>
          </div>
          <div className="skills-icons">
            <IoLogoJavascript className="icon" size={40} color="#F7DF1E" />
            <AiFillHtml5 className="icon" size={40} color="#E34F26" />
            <IoLogoCss3 className="icon" size={40} color="#1572B6" />
            <BsFillBootstrapFill className="icon" size={40} color="#8512F7" />
            <GrReactjs className="icon" size={40} color="#61DAFB" />
            <SiRedux className="icon" size={40} color="#8F73BE" />
            <BsGit className="icon" size={40} color="#F05033" />
            <FaGithubSquare className="icon" size={40} color="black" />
            <ImMobile className="icon" size={40} color="black" />
          </div>
        </div>
        <div className="in-notes-footer slide-in-fwd-center">
          <img src={Delete} alt="Delete" />
          <img src={Check} alt="Check" />
          <img src={Add} alt="Add" />
          <img src={Marker} alt="Marker" />
          <img src={NewNote} alt="NewNote" />
        </div>
      </div>
    </IPhoneContainer>
  );
};

export default IphoneNotesTechSkills;
