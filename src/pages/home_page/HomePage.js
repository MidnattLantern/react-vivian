// functional
import React from "react";
// components
import NavPie from "./NavPie";
import GamepadComponent from "./GamepadComponent";
import { useCurrentUser } from "../../contexts/CurrentUserContext";



const HomePage = () => {
    const currentUser = useCurrentUser();

    return(<>
        <div>
            <h1>Home page</h1>
            <p>user: {currentUser?.username}</p>
            <NavPie />
            <GamepadComponent />
        </div>
    </>)
};

export default HomePage;
