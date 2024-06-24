import React from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
//style
import "../../global.css";

const ProductPage = () => {
    const currentUser = useCurrentUser();

    return(<>
    <div>
        <h1>PRODUCT PAGE</h1>
        <p>user: {currentUser?.username}</p>
    </div>
    </>)
};

export default ProductPage;
