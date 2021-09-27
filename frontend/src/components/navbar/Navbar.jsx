import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import React, {useContext, useState} from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../../authContext/AuthActions";
import { AuthContext } from "../../authContext/AuthContext";

const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const {dispatch} = useContext(AuthContext);

    window.onscroll = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        return () => (window.onscroll = null);
    }

  return (
    <div className={`navbar${isScrolled ? " scrolled" : ""}` }>
      <div className="navbar__container">
        <div className="navbar-left">
          <NavLink to="/">
            <img
              src="https://fontmeme.com/permalink/210927/155be1e03a9715cc5f77e9ab6b1aa5c1.png"
              alt="logo"
            />
          </NavLink>
          <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li className="navbarMainLinks"><NavLink activeClassName="active" to="/series">Series</NavLink></li>
                <li className="navbarMainLinks"><NavLink activeClassName="active"  to="/movies">Movies</NavLink></li>
            </ul>
          </nav>
        </div>

        <div className="navbar-right">
            <Search className="icon"/>
            <span>KID</span>
            <Notifications className="icon"/>
            <img src="https://avatars.githubusercontent.com/u/32084343?s=400&u=67c9706da9d4ae25e3c71aab92ae9dba0f1a313f&v=4" alt="profile" />
            <div className="profile">
                <ArrowDropDown className="icon"/>
                <div className="options">
                    <span>Settings</span>
                    <span onClick={()=>dispatch(logout())}>Logout</span>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
