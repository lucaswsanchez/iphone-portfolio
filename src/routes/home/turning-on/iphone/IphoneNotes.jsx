import "./IphoneNotes.css";
import IPhoneContainer from "../../../../IphoneContainer";
import { AiFillSignal, AiOutlineSearch } from "react-icons/ai";
import { MdWifi, MdNavigateBefore } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
import NewNote from "../../../../assets/images/new-notes.png";
import SquareNote from "../../../../assets/images/square-notes.png";
import { Link } from "react-router-dom";

const IphoneNotes = () => {
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
          <p>Editar</p>
        </div>
        <div className="notes slide-in-fwd-center">
          <h2>Notas</h2>
          <div className="search-notes">
            <AiOutlineSearch color="#8f8f94" />
            <input type="search" placeholder="Buscar" />
          </div>
          <Link to="/turning-on/iphone/notes/hab-tec" className="link black">
            <div className="note" style={{ marginTop: "12px" }}>
              <h5>Habilidades tecnicas</h5>
              <p>Hoy</p>
            </div>
          </Link>
          <Link to="/turning-on/iphone/notes/hab-bla" className="link black">
            <div className="note">
              <h5>Habilidades blandas</h5>
              <p>Hoy</p>
            </div>
          </Link>
          <Link to="/turning-on/iphone/notes/hist-ac" className="link black">
            <div className="note">
              <h5>Historial academico</h5>
              <p>Hoy</p>
            </div>
          </Link>
          <div className="notes-footer">
            <img src={SquareNote} alt="square-note" />
            <p> 3 notas</p>
            <img src={NewNote} alt="new-note" />
          </div>
        </div>
      </div>
    </IPhoneContainer>
  );
};

export default IphoneNotes;
