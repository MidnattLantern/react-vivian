// functional
import React, { useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// styles
import Styles from "../../styles/HomePage.module.css";
import "../../global.css";

const HomePage = () => {
    const currentUser = useCurrentUser();
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    return(<>
        <div className={Styles.HomePageContainer}>
            <h1>HOME PAGE</h1>
            <p>User: {currentUser?.username}</p>

            <div>
                <button onClick={toggleVisibility}>Toggle Div</button>
                <div className={`${Styles.SlidingDiv} ${isVisible ? Styles.Visible : ''}`}></div>
            </div>

        </div>
    </>)
};

export default HomePage;
