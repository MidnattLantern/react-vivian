// functional
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
// styles
import Styles from "../../styles/Authentication.module.css";
import "../../global.css";

const SignUpForm = () => {

    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });

    const {
        username,
        password1,
        password2,
    } = signUpData;

    // eslint-disable-next-line
    const [errors, setErrors] = useState({
        username: "",
        password1: "",
        password2: "",
    });

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData)
            history.push('/signin')
            console.log("Redirected to /signin")
        } catch(err) {
//            console.log(err)
        }
        setSignUpData({
            username: "",
            password1: "",
            password2: "",
        });
    }

    return (<>
        <div className={Styles.AuthenticationContainer}>
            <Form onSubmit={handleSubmit} className={Styles.AuthenticationWindow}>
                <h1>SIGN UP</h1>
                <br/>

                <Form.Group>
                    <Form.Control
                    className={Styles.FormControl}
                    name="username"
                    type="text"
                    placeholder={"Username..." + errors.username}
                    value={username}
                    onChange={handleChange}
                    />
                </Form.Group>
                <br/>

                <Form.Group>
                    <Form.Control
                    className={Styles.FormControl}
                    name="password1"
                    type="password"
                    placeholder={"Password..." + errors.password1}
                    value={password1}
                    onChange={handleChange}
                    />
                </Form.Group>
                <br/>

                <Form.Group>
                    <Form.Control
                    className={Styles.FormControl}
                    name="password2"
                    type="password"
                    placeholder={"Confirm Password..." + errors.password2}
                    value={password2}
                    onChange={handleChange}
                    />
                </Form.Group>
                <br/>

                <div>
                    <button className={Styles.Button}>
                        SIGN UP
                    </button>
                </div>
            </Form>
        </div>
    </>)
};

export default SignUpForm;
