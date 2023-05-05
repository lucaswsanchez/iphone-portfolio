import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./routes/home/Home";
import TurningOn from "./routes/home/turning-on/TurningOn";
import Iphone from "./routes/home/turning-on/iphone/Iphone";
import IphoneNotes from "./routes/home/turning-on/iphone/IphoneNotes";
import Ecommerce from "./routes/home/turning-on/iphone/Ecommerce";
import IphoneNotesHabTec from "./routes/home/turning-on/iphone/IphoneNotesHabTec";
import IphoneNotesHabBla from "./routes/home/turning-on/iphone/IphoneNotesHabBla";
import IphoneNotesHistAc from "./routes/home/turning-on/iphone/IphoneNotesHistAc";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/turning-on" element={<TurningOn />} />
        <Route path="/turning-on/iphone" element={<Iphone />} />
        <Route path="/turning-on/iphone/notes" element={<IphoneNotes />} />
        <Route
          path="/turning-on/iphone/notes/hab-tec"
          element={<IphoneNotesHabTec />}
        />
        <Route
          path="/turning-on/iphone/notes/hab-bla"
          element={<IphoneNotesHabBla />}
        />
        <Route
          path="/turning-on/iphone/notes/hist-ac"
          element={<IphoneNotesHistAc />}
        />
        <Route path="/turning-on/iphone/ecommerce" element={<Ecommerce />} />
      </Routes>
    </Router>
  );
}

export default App;
