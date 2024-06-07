// functional
import React from "react";
// components
import NavPieVer2 from "./NavPieVer2";
import GamepadComponent from "./GamepadComponent";
import { useCurrentUser } from "../../contexts/CurrentUserContext";



const HomePage = () => {
    const currentUser = useCurrentUser();

    return(<>
        <div>
            <h1>Home page</h1>
            <p>user: {currentUser?.username}</p>
            <NavPieVer2 />
            <GamepadComponent />
        </div>
    </>)
};

export default HomePage;
