import { Link } from "react-router-dom";
import bcm from "../../assets/images/bcm.jpg";

const NavBar = () => {
    return ( 
        <nav className="navbar navbar-light bg-light justify-content-center">
            <a className="navbar-brand" href="#">
                <Link to="/">
                <img src= {bcm} width="100" height="auto" alt=""></img>
                </Link>
            </a>
        </nav>
     );
}
 
export default NavBar;