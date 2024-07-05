// functional
import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../../contexts/CurrentUserContext";
import { axiosReq } from "../../../api/axiosDefaults";
// styles
import Styles from "../../../styles/SerialNumberEdit.module.css";
import "../../../global.css";
import { Form } from "react-bootstrap";

const SerialNumberEdit = ({ serialNumberFocus, setSerialNumberFocus, setAction, fetchSerialNumberList }) => {
    const [errors, setErrors] = useState({});
    const [serialNumberData, setSerialNumberData] = useState({
        link_product_name: "",
        link_partnering_end: "",
        serial_number: "",
        display_link_product_name: "",
        display_link_partnering_end: "",
    });
    const {
        link_product_name,
        link_partnering_end,
        serial_number,
        display_link_product_name,
        display_link_partnering_end,
    } = serialNumberData;
    const currentUser = useCurrentUser;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(`/serial_number_book/${serialNumberFocus}`)
                const {
                    link_product_name,
                    link_partnering_end,
                    serial_number,
                    display_link_product_name,
                    display_link_partnering_end,
                } = data;
                setSerialNumberData({
                    link_product_name,
                    link_partnering_end,
                    serial_number,
                    display_link_product_name,
                    display_link_partnering_end,
                });
            } catch(err) {
                console.log(err)
            };
        };
        handleMount();
    }, []);

    const handleChange = (event) => {
        setSerialNumberData({
            ...serialNumberData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("link_product_name", link_product_name);
//        formData.append("link_partnering_end", link_partnering_end);
        formData.append("serial_number", serial_number);
        try {
            await axiosReq.put(`/serial_number_book/${serialNumberFocus}`, formData);
            fetchSerialNumberList();
            setAction("detail");
        } catch(err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            };
        };
    };

    const handleSetDetailAction = async (event) => {
        event.preventDefault();
        setAction("detail");
        setSerialNumberFocus(serialNumberFocus);
    };

    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/serial_number_book/${serialNumberFocus}`);
            fetchSerialNumberList();
            setSerialNumberFocus(null);
            setAction(null);
        } catch(err) {
            console.log(err)
        };
    };

    return(<>
        <div className={Styles.SerialNumberEditContainer}>
            <h1 className={Styles.Uppercase}>EDIT {display_link_product_name} - {serial_number}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <table className={Styles.AlignLeft}>
                        <tr>
                            <td>S.N:</td>
                            <td>
                                <Form.Control
                                className={Styles.FormControl}
                                type="text"
                                name="serial_number"
                                value={serial_number}
                                onChange={handleChange}
                                placeholder="Not to be blank!"
                                />
                            </td>
                        </tr>
                    </table>
                </Form.Group>
            </Form>
            <br/>
            <div className={Styles.ActionButtonContainer}>
                <button className={Styles.Button} onClick={handleSubmit}>Save Changes</button>
                <button className={Styles.Button} onClick={handleSetDetailAction}>Discard Changes</button>
            </div>
        </div>
        <button className={Styles.DeleteButton} onClick={handleDelete}>DELETE {serial_number}</button>
    </>);
};

export default SerialNumberEdit;
