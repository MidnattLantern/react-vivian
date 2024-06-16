// functino
import React from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
// styles
import Styles from "../../styles/Authentication.module.css";

const SignOutPage = () => {
    const setCurrentUser = useSetCurrentUser();

    const history = useHistory();

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
            history.push('/');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={Styles.AuthenticationContainer}>
            <div className={Styles.AuthenticationWindow}>
                <h1>SIGN OUT</h1>
                <br/>
                <button  className={Styles.Button} onClick={handleSignOut}>SIGN OUT</button>
            </div>
        </div>
    )
};

export default SignOutPage;
