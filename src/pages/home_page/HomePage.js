// functional
import React, { useContext } from "react";
import { CurrentUserContext } from "../../App";

const HomePage = () => {
    const currentUser = useContext(CurrentUserContext);

    return (
        <div>
            <h1>Home page</h1>
            <p>user: {currentUser?.username}</p>
        </div>
    )
};

export default HomePage;
