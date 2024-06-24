// functional
import React from "react";
import { NavLink } from "react-router-dom";

// styles
import Styles from '../styles/NavBar.module.css'
import "../global.css";

// bootstrap and components
import {Nav} from 'react-bootstrap';
import { useCurrentUser } from "../contexts/CurrentUserContext";


const NavBar = () => {
    const currentUser = useCurrentUser();

    const nonAuthenticatedOptions = <>
        <NavLink className={Styles.NavBarButton} exact activeClassName={Styles.Active} to="/signin">SIGN IN</NavLink>
        <NavLink className={Styles.NavBarButton} exact activeClassName={Styles.Active} to="/signup">SIGN UP</NavLink>
    </>

    const authenticatedOptions = <>
        <NavLink className={Styles.NavBarButton} exact activeClassName={Styles.Active} to="/signout">SIGN OUT</NavLink>
        <NavLink className={Styles.NavBarButton} exact activeClassName={Styles.Active} to="/address">ADDRESS</NavLink>
        <NavLink className={Styles.NavBarButton} exact activeClassName={Styles.Active} to="/product">PRODUCT</NavLink>
        <div className={Styles.NavBarButton}>TEST</div>
    </>

/* Do not use <div> before the <Nav> on this one */
    return ( <>
        <Nav className={Styles.NavBarContainer}>
            <NavLink className={Styles.NavBarButton} exact activeClassName={Styles.Active} to="/">HOME</NavLink>
            {currentUser ? (authenticatedOptions) : (nonAuthenticatedOptions)}
        </Nav>
    </> )
};

export default NavBar;
