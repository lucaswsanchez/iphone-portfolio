import "../../../styles/IphoneNotesAcademic.css";
import { useTranslation } from "react-i18next";
import { AiFillSignal } from "react-icons/ai";
import { MdWifi, MdNavigateBefore } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
import { RxDot } from "react-icons/rx";
import { Link } from "react-router-dom";
import AddPerson from "../../../assets/images/add-person.png";
import Share from "../../../assets/images/share.png";
import Delete from "../../../assets/images/delete.png";
import Check from "../../../assets/images/check.png";
import Add from "../../../assets/images/add+.png";
import Marker from "../../../assets/images/marker.png";
import NewNote from "../../../assets/images/new-notes.png";
import IPhoneContainer from "../../Container/IphoneContainer";

const IphoneNotesAcademic = () => {
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
        <div className="historial-academico slide-in-fwd-center">
          <ul>
            <li>
              <RxDot className="yellow" size={12} />
              {t("academicOne")}
            </li>
            <li>
              <RxDot className="yellow" size={12} />
              {t("academicTwo")}
            </li>
            <li>
              <RxDot className="yellow" size={12} />
              {t("academicThree")}
            </li>
          </ul>
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

export default IphoneNotesAcademic;
