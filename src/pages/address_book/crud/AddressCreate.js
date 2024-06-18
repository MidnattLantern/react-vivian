import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
// styles
import Styles from "../../../styles/AddressCreate.module.css";
import "../../../global.css";
import { axiosReq } from "../../../api/axiosDefaults";
import { Form } from "react-bootstrap";

const AddressCreate = ({ setAction, setAddressFocus, fetchAddressList }) => {
    const [errors, setErrors] = useState({});
    const [addressData, setAddressData] = useState({
        partnering_end: "",
    });
    const { partnering_end, } = addressData;
    const currentUser = useCurrentUser;

    useEffect(() => {
        setAddressFocus(null);
    }, []);

    const handleChange = (event) => {
        setAddressData({
            ...addressData,
            [event.target.name]: event.target.value,
        });
    };

    const handleCancel = async (event) => {
        event.preventDefault();
        setAction(null);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("partnering_end", partnering_end);

        try {
            await axiosReq.post("/address_book/", formData);
            fetchAddressList();
            setAction(null);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            };
        };
    };

    return (<>
        <div className={Styles.AddressCreateContainer}>
            <h1>NEW ADDRESS</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <table>
                        <tr>
                            <td>Partnering end</td>
                            <td>
                                <Form.Control
                                className={Styles.FormControl}
                                type="text"
                                name="partnering_end"
                                value={partnering_end}
                                onChange={handleChange}
                                placeholder="Partnering End"
                                />
                            </td>
                        </tr>
                    </table>
                </Form.Group>
                {errors?.partnering_end?.map((message, idx) => (
                    <p key={idx}>{message}</p>
                ))}
                <br/>
                <div className={Styles.SaveButtonContainer}>
                    <button className={Styles.Button} type="submit">Submit</button>
                    <button className={Styles.Button} onClick={handleCancel}>Cancel</button>
                </div>
            </Form>
        </div>
    </>);
};

export default AddressCreate;