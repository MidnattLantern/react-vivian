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
        <NavLink className={Styles.NavBarButton} exact activeClassName={Styles.Active} to="/signin">Sign in</NavLink>
        <NavLink className={Styles.NavBarButton} exact activeClassName={Styles.Active} to="/signup">Sign up</NavLink>
    </>

    const authenticatedOptions = <>
        <NavLink className={Styles.NavBarButton} exact activeClassName={Styles.Active} to="/signout">Sign out</NavLink>
        <NavLink className={Styles.NavBarButton} exact activeClassName={Styles.Active} to="/address">Address</NavLink>
    </>

    return ( <>
        <div className={Styles.NavBarContainer}>
            <Nav>
                <NavLink className={Styles.NavBarButton} exact activeClassName={Styles.Active} to="/"> Home</NavLink>
                {currentUser ? (authenticatedOptions) : (nonAuthenticatedOptions)}
            </Nav>
        </div>
    </> )
};

export default NavBar;
