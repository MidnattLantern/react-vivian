import React, { useState } from "react";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
// styles
import Styles from "../../../styles/AddressCreate.module.css";
import "../../../global.css";
import { axiosReq } from "../../../api/axiosDefaults";
import { Form } from "react-bootstrap";

const AddressCreate = ({ setAction, fetchAddressList }) => {
    const [errors, setErrors] = useState({});
    const [addressData, setAddressData] = useState({
        partnering_end: "",
    });
    const { partnering_end, } = addressData;
    const currentUser = useCurrentUser;

    const handleChange = (event) => {
        setAddressData({
            ...addressData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("partnering_end", partnering_end);

        try {
            const { data } = await axiosReq.post("/address_book/", formData);
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
                    <p className={Styles.Button} onClick={() => {setAction(null)}}>Cancel</p>
                </div>
            </Form>
        </div>
    </>);
};

export default AddressCreate;