import "./IphoneNotesHistAc.css";
import IPhoneContainer from "../../../../IphoneContainer";
import { AiFillSignal } from "react-icons/ai";
import { MdWifi, MdNavigateBefore } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
import { RxDot } from "react-icons/rx";
import AddPerson from "../../../../assets/images/add-person.png";
import Share from "../../../../assets/images/share.png";
import Delete from "../../../../assets/images/delete.png";
import Check from "../../../../assets/images/check.png";
import Add from "../../../../assets/images/add+.png";
import Marker from "../../../../assets/images/marker.png";
import NewNote from "../../../../assets/images/new-notes.png";
import { Link } from "react-router-dom";

const IphoneNotesHistAc = () => {
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
              <p>Notas</p>
            </div>
          </Link>
          <div className="in-header-two">
            <img src={AddPerson} alt="AddPerson" />
            <img src={Share} alt="Share" />
          </div>
        </div>
        <div className="in-header-text slide-in-fwd-center">
          <p>01 de enero de 2023, 10:45</p>
        </div>
        <div className="historial-academico slide-in-fwd-center">
          <ul>
            <li>
              <RxDot className="yellow" size={12} /> Desde principios de 2022,
              me he dedicado a aprender programación de forma autodidacta,
              principalmente enfocado en el desarrollo front-end. Adquirí
              habilidades avanzadas en maquetación, diseño de interfaces y
              desarrollo responsive.
            </li>
            <li>
              <RxDot className="yellow" size={12} />
              Actualmente estoy cursando la Tecnicatura en Análisis de Sistemas,
              donde profundizo en programación orientada a objetos, estructuras
              de datos y desarrollo back-end.
            </li>
            <li>
              <RxDot className="yellow" size={12} />
              Tengo un nivel C2 de inglés, lo que me permite acceder a recursos
              y documentación en línea para seguir creciendo en la industria.
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

export default IphoneNotesHistAc;
