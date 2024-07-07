// functional
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
// styles
import Styles from "../../styles/Authentication.module.css";
import "../../global.css";

const SignInForm = () => {
    const setCurrentUser = useSetCurrentUser();

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const {
        username,
        password,
    } = signInData;
    // eslint-disable-next-line
    const [ placeholder, setPlaceholder] = useState({
        username: "",
        password:"",
    });
    const history = useHistory();

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post("/dj-rest-auth/login/", signInData);
            setCurrentUser(data.user)
            history.push("/");
        } catch(error) {
//            console.log("error: " + error);
        }
        setSignInData({
            username: "",
            password: "",
        });
    };

    return (
        <div className={Styles.AuthenticationContainer}>
            <Form onSubmit={handleSubmit} className={Styles.AuthenticationWindow}>
                <h1>SIGN IN</h1>
                <br/>

                <Form.Group>
                    <Form.Control
                    className={Styles.FormControl}
                    name="username"
                    type="text"
                    placeholder={"Username..." + placeholder.username}
                    value={username}
                    onChange={handleChange}
                    />
                </Form.Group>
                <br/>

                <Form.Group>
                    <Form.Control
                    className={Styles.FormControl}
                    name="password"
                    type="password"
                    placeholder={"Password..." + placeholder.password}
                    value={password}
                    onChange={handleChange}
                    />
                </Form.Group>
                <br/>

                <div className={Styles.SignInDiv}>
                    <button className={Styles.Button}>
                        SIGN IN
                    </button>
                </div>
            </Form>
        </div>
    )
};

export default SignInForm;
