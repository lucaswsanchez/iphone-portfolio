import { Link } from "react-router-dom";
import { GrNext } from "react-icons/gr";

const Home = () => {
  return (
    <div>
      <h1>Este es el home</h1>
      <Link to="/turning-on">
        <button>Siguiente ruta</button>
      </Link>
    </div>
  );
};

export default Home;
