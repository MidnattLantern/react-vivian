// functional
import React, { useContext } from "react";
import { CurrentUserContext } from "../../App";
// components
import RadiusPie2 from "./NavPie";


const HomePage = () => {
    const currentUser = useContext(CurrentUserContext);

    return (
        <div>
            <h1>Home page</h1>
            <p>user: {currentUser?.username}</p>
            <RadiusPie2 />
        </div>
    )
};

export default HomePage;
