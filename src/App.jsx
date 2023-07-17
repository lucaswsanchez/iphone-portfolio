import { Routes, Route } from "react-router-dom";
import "./styles/App.css";
import Home from "./components/Home";
import TurningOn from "./components/TurningOn/TurningOn";
import Iphone from "./components/Iphone/Iphone";
import IphoneMail from "./components/Iphone/IphoneMail";
import IphoneNotes from "./components/Iphone/IphoneNotes/IphoneNotes";
import IphoneNotesTechSkills from "./components/Iphone/IphoneNotes/IphoneNotesTechSkills";
import IphoneNotesSoftSkills from "./components/Iphone/IphoneNotes/IphoneNotesSoftSkills";
import IphoneNotesAcademic from "./components/Iphone/IphoneNotes/IphoneNotesAcademic";
import Ecommerce from "./components/Iphone/IphoneProjects/Ecommerce";
import SportBlog from "./components/Iphone/IphoneProjects/SportBlog";
import Yuh from "./components/Iphone/IphoneProjects/Yuh";
import Portfolio from "./components/Iphone/IphoneProjects/Portfolio";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/turning-on" element={<TurningOn />} />
      <Route path="/turning-on/iphone" element={<Iphone />} />
      <Route path="/turning-on/iphone/mail" element={<IphoneMail />} />
      <Route path="/turning-on/iphone/notes" element={<IphoneNotes />} />
      <Route
        path="/turning-on/iphone/notes/tech-skills"
        element={<IphoneNotesTechSkills />}
      />
      <Route
        path="/turning-on/iphone/notes/soft-skills"
        element={<IphoneNotesSoftSkills />}
      />
      <Route
        path="/turning-on/iphone/notes/academic"
        element={<IphoneNotesAcademic />}
      />
      <Route path="/turning-on/iphone/ecommerce" element={<Ecommerce />} />
      <Route path="/turning-on/iphone/sportblog" element={<SportBlog />} />
      <Route path="/turning-on/iphone/yuh" element={<Yuh />} />
      <Route path="/turning-on/iphone/portfolio" element={<Portfolio />} />
    </Routes>
  );
}

export default App;
