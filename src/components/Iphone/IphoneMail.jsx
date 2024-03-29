import "../../styles/IphoneMail.css";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm, ValidationError } from "@formspree/react";
import { ToastContainer, toast } from "react-toastify";
import { AiFillSignal } from "react-icons/ai";
import { MdWifi } from "react-icons/md";
import { BsBatteryHalf } from "react-icons/bs";
import { Link } from "react-router-dom";
import IPhoneContainer from "../Container/IphoneContainer";

const IphoneMail = () => {
  const [state, handleSubmit] = useForm("xdovypeg");
  const [valorCampo1, setValorCampo1] = useState("");
  const [valorCampo2, setValorCampo2] = useState("");
  const [valorCampo3, setValorCampo3] = useState("");
  const { t } = useTranslation();

  const handleToast = () => {
    toast.success("Tu mensaje fue enviado con éxito!", {
      style: { fontSize: "14px", fontFamily: "Montserrat , sans-serif" },
      position: "bottom-right",
      autoClose: 500,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    if (state.succeeded) {
      setValorCampo1("");
      setValorCampo2("");
      setValorCampo3("");
      handleToast();
    }
  }, [state.succeeded]);

  return (
    <IPhoneContainer>
      <div className="mail-screen">
        <div className="screen-header">
          <div className="signal">
            <AiFillSignal size={12} /> Bell <MdWifi />
          </div>
          <div className="time">11:30</div>
          <div className="battery">
            50% <BsBatteryHalf size={18} />
          </div>
        </div>
        <form onSubmit={handleSubmit} className="slide-in-fwd-center">
          <div className="in-mail-header">
            <Link to="/turning-on/iphone" className="link">
              <div className="blue">{t("cancel")}</div>
            </Link>
            <h4>{t("newMessage")}</h4>
            <button
              type="submit"
              className="submit"
              disabled={state.submitting}
            >
              {t("send")}
            </button>
          </div>
          <div className="in-mail-form">
            <div className="form-name">
              <label htmlFor="name">{t("emailName")}</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={valorCampo1}
                onChange={(event) => setValorCampo1(event.target.value)}
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="form-mail">
              <label htmlFor="email">{t("email")}</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={valorCampo2}
                onChange={(event) => setValorCampo2(event.target.value)}
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form-message">
              <textarea
                id="message"
                name="message"
                required
                value={valorCampo3}
                onChange={(event) => setValorCampo3(event.target.value)}
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <p>{t("sentIphone")}</p>
          </div>
        </form>
        <ToastContainer />
      </div>
    </IPhoneContainer>
  );
};

export default IphoneMail;
