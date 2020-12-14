import classes from "./navbar.module.css";
import { Link } from "react-router-dom";
import bcm from "../../assets/images/bcm.jpg";
import NavItem from "./NavItem/navitem";

const NavBar = () => {
  return (
    <nav className={classes.Nav}>
      <Link to="/">
        <img src={bcm} width="100" height="auto" alt=""></img>
      </Link>
      <ul className={classes.NavItems}>
        <NavItem link="/create-player" name="CREATE PLAYER"></NavItem>
        <NavItem link="/create-team" name="CREATE TEAM"></NavItem>
      </ul>
    </nav>
  );
};

export default NavBar;
