// functional
import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// styles
import Styles from "../../styles/HomePage.module.css";
import "../../global.css";
// SVG GUI
import {ReactComponent as DropDownIcon} from "../../assets/GUI/dropdown_icon.svg";
import {ReactComponent as DropDownIconCollapsed} from "../../assets/GUI/dropdown_icon_collapsed.svg";

const HomePage = () => {
    const currentUser = useCurrentUser();

    return(<>
        <div className={Styles.HomePageContainer}>
            <h1>HOME PAGE</h1>
            <p>User: {currentUser?.username}</p>
            <div className={Styles.SVGContainer}>
                <DropDownIcon className={Styles.SVGItem}/>
                <DropDownIconCollapsed className={Styles.SVGItem}/>
            </div>
        </div>
    </>)
};

export default HomePage;
