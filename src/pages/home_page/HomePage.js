// functional
import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
// components




const HomePage = () => {
    const currentUser = useCurrentUser();

    return(<>
        <div>
            <h1>Home page</h1>
            <p>user: {currentUser?.username}</p>
        </div>
    </>)
};

export default HomePage;
