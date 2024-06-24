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
            <div className={Styles.Container}>
                <div className={Styles.Item}>Item 1</div>
                <div className={Styles.Item}>Item 2</div>
                <div className={Styles.Item}>Item 3</div>
                <div className={Styles.Item}>Item 4</div>
                <div className={Styles.Item}>Item 5</div>
                <div className={Styles.Item}>Item 6</div>
            </div>

        </div>
    </>)
};

export default HomePage;
