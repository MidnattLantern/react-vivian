// functional
import React, { useContext } from "react";
import { CurrentUserContext } from "../../App";
// components
//import NavPie from "./NavPie";
import GamepadComponent from "./GamepadComponent";


const HomePage = () => {
    const currentUser = useContext(CurrentUserContext);

    return (
        <div>
            <h1>Home page</h1>
            <p>user: {currentUser?.username}</p>
            <GamepadComponent />
        </div>
    )
};

export default HomePage;
