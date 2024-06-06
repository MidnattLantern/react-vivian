// functional
import React from "react";
import { NavLink } from "react-router-dom";

// styles
import styles from '../styles/NavBar.module.css'
import "../global.css";

// bootstrap and components
import {Nav} from 'react-bootstrap';
import { useCurrentUser } from "../contexts/CurrentUserContext";


const NavBar = () => {
    const currentUser = useCurrentUser();

    const nonAuthenticatedOptions = <>
        <NavLink className={styles.NavBarButton} exact activeClassName={styles.Active} to="/signin">Sign in</NavLink>
        <NavLink className={styles.NavBarButton} exact activeClassName={styles.Active} to="/signup">Sign up</NavLink>
    </>

    const authenticatedOptions = <>
        <NavLink className={styles.NavBarButton} exact activeClassName={styles.Active} to="/signout">Sign out</NavLink>
    </>

    return ( <>
        <div className={styles.NavBarContainer}>
            <Nav>
                <NavLink className={styles.NavBarButton} exact activeClassName={styles.Active} to="/"> Home</NavLink>
                
                
                {currentUser ? (authenticatedOptions) : (nonAuthenticatedOptions)}
                
            </Nav>
        </div>
    </> )
};

export default NavBar;
