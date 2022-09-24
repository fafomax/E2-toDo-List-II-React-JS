import "../styles/Navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import home from "../img/home.svg";
import checkSquare from "../img/checkSquare.svg";
import pokeball from "../img/pokeball.svg";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <h3>Inicio</h3> <img src={home} className="logohome" alt="home" />
      </Link>
      <ul>
        <CustomLink to="/PokeAPI">
          Poke API <img src={pokeball} className="pokeball" />
        </CustomLink>
        <CustomLink to="/TodoList">
          toDo List <img src={checkSquare} className="logo" />{" "}
        </CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvePath = useResolvedPath(to);
  const isActivate = useMatch({ path: resolvePath.pathname, end: true });
  return (
    <li className={isActivate ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
