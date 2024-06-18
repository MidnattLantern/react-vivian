import React, { useEffect, useState } from "react";
// styles
import Styles from "../../../styles/AddressEdit.module.css";
import "../../../global.css";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import { axiosReq } from "../../../api/axiosDefaults";
import { Form } from "react-bootstrap";

const AddressEdit = ({ addressFocus, setAction, fetchAddressList, ...props }) => {
    const [errors, setErrors] = useState({});
    const [addressData, setAddressData] = useState({
        partnering_end: "",
        address_line1: "",
        address_line2: "",
        city: "",
        postal_code: "",
        contact_person_name: "",
        contact_phone_number: "",
        contact_email: "",
    });
    const {
        partnering_end,
        address_line1,
        address_line2,
        city,
        postal_code,
        contact_person_name,
        contact_phone_number,
        contact_email,
    } = addressData;
    const currentUser = useCurrentUser;
    
    useEffect(() => {
        const handleMount = async () => {
            try{
                const {data} = await axiosReq.get(`/address_book/${addressFocus}`)
                const {
                    partnering_end,
                    address_line1,
                    address_line2,
                    city,
                    postal_code,
                    contact_person_name,
                    contact_phone_number,
                    contact_email,
                } = data;
                setAddressData({
                    partnering_end,
                    address_line1,
                    address_line2,
                    city,
                    postal_code,
                    contact_person_name,
                    contact_phone_number,
                    contact_email,
                })
            }catch(err){
                console.log(err)
            }
        }
        handleMount();
    }, []);

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
        formData.append("address_line1", address_line1);
        formData.append("address_line2", address_line2);
        formData.append("city", city);
        formData.append("postal_code", postal_code);
        formData.append("contact_person_name", contact_person_name);
        formData.append("contact_phone_number", contact_phone_number);
        formData.append("contact_email", contact_email);

        try {
            await axiosReq.put(`/address_book/${addressFocus}`, formData);
            setAction("detail");
            fetchAddressList();
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            };
        };
    };

    return (<>
        <div className={Styles.AddressEditContainer}>
            <h1>EDIT {addressFocus}</h1>
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
                                placeholder="Not to be blank!"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Address Line</td>
                            <td>
                                <Form.Control
                                className={Styles.FormControl}
                                type="text"
                                name="address_line1"
                                value={address_line1}
                                onChange={handleChange}
                                placeholder="------"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Secondary Address Line</td>
                            <td>
                                <Form.Control
                                className={Styles.FormControl}
                                type="text"
                                name="address_line2"
                                value={address_line2}
                                onChange={handleChange}
                                placeholder="------"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>City</td>
                            <td>
                                <Form.Control
                                className={Styles.FormControl}
                                type="text"
                                name="city"
                                value={city}
                                onChange={handleChange}
                                placeholder="------"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Postal Code</td>
                            <td>
                                <Form.Control
                                className={Styles.FormControl}
                                type="number"
                                name="postal_code"
                                value={postal_code}
                                onChange={handleChange}
                                placeholder="(Numbers only)"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Contact person name</td>
                            <td>
                                <Form.Control
                                className={Styles.FormControl}
                                type="text"
                                name="contact_person_name"
                                value={contact_person_name}
                                onChange={handleChange}
                                placeholder="------"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Contact phone number</td>
                            <td>
                                <Form.Control
                                className={Styles.FormControl}
                                type="number"
                                name="contact_phone_number"
                                value={contact_phone_number}
                                onChange={handleChange}
                                placeholder="(Numbers only)"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Contact email address</td>
                            <td>
                                <Form.Control
                                className={Styles.FormControl}
                                type="text"
                                name="contact_email"
                                value={contact_email}
                                onChange={handleChange}
                                placeholder="------"
                                />
                            </td>
                        </tr>
                    </table>
                </Form.Group>

            </Form>
            <button onClick={handleSubmit}>Save Changes</button>
            <button onClick={() => {setAction("detail")}}>Discard Changes</button>
        </div>
    </>);
};

export default AddressEdit;
