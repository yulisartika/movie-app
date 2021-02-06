import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import "./Header.scss";
import { withRouter } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import { auth } from "../../Firebase/firebase.utils";
import {
  selectCurrentUser,
  selectToggleHidden,
} from "../../Redux/User/user-selectors";
import { ToggleMenuHidden } from "../../Redux/User/user-actions";
import { connect } from "react-redux";
import { compose } from "redux";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavMenu from "./NavMenu";

import { useLocation } from "react-router-dom";
import { Collapse, NavbarToggler, NavItem } from "reactstrap";
import { signOutUser } from "../../Redux/User/user-actions";

const Header = ({
  history,
  currentUser,
  currentRoute,
  hidden,
  ToggleMenuHidden,
  signOutUser,
  token,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    signOutUser();
    history.push(`/signin`);
  };

  const location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className="header">
      <div className="header__logo-box" onClick={() => history.push("/movies")}>
        <img src={Logo} alt="logo" className="header__logo" />
      </div>

      <div className="header__options">
        <div className="header__options-primary">
          <Link className="header__option" to="/movies">
            Movies
          </Link>
        </div>
        <div className="header__searchbar">
          <SearchBar currentRoute={currentRoute} />
        </div>

        {/* <div
          className="header__option header__option--signout"
          onClick={() => auth.signOut() && history.push(`/signin`)}
        >
          Sign Out
        </div> */}

        {token ? (
          <div className="header__options-secondary">
            <Link className="header__option" to="">
              Hi, Guest
            </Link>
            <div
              className="header__option header__option--signout"
              onClick={handleLogout}
            >
              Sign Out
            </div>
          </div>
        ) : (
          <div className="header__options-secondary">
            <Link
              className="header__option header__option--signin"
              to="/signin"
            >
              Sign In
            </Link>
          </div>
        )}
      </div>
      {/* <FontAwesomeIcon
        icon={faBars}
        className="header__nav-menu-icon"
        onClick={ToggleMenuHidden}
      />
      {hidden ? null : <NavMenu />} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOutUser: () => dispatch(signOutUser()),
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Header);
