// functional
import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// styles
import Styles from "../../styles/HomePage.module.css";
import "../../global.css";

const HomePage = () => {
    const currentUser = useCurrentUser();

    return(<>
        <div className={Styles.HomePageContainer}>
            <h1>HOME PAGE</h1>
            <p>User: {currentUser?.username}</p>
        </div>
    </>)
};

export default HomePage;
