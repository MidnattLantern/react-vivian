// functional
import React, { useEffect, useState } from "react";
import { axiosReq } from "../../../api/axiosDefaults";
import { Form } from "react-bootstrap";
// styles
import Styles from "../../../styles/SerialNumberCreate.module.css";
import "../../../global.css";

// productFocus imported to fetch SN prefix
const SerialNumberCreate = ({ productFocus, setAction, setSerialNumberFocus, fetchSerialNumberList }) => {
    const [errors, setErrors] = useState({});
    const [serialNumberData, setSerialNumberData] = useState({
        serial_number: "",
    });
    const { serial_number, } = serialNumberData;

    useEffect(() => {
        // reset SN focus for UX
        setSerialNumberFocus(null);
        // set fetched SN prefix
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(`/product_book/${productFocus}`)
                const {
                    serial_number_prefix,
                } = data;
                setSerialNumberData({
                    serial_number: serial_number_prefix,
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

    const handleCancel = async (event) => {
        event.preventDefault();
        setAction(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("serial_number", serial_number);
        formData.append("link_product_name", productFocus);

        try {
            await axiosReq.post("serial_number_book/", formData);
            fetchSerialNumberList();
            setAction(null);
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            };
        };
    };

    return(<>
    <div className={Styles.SerialNumberCreateContainer}>
        <h1>NEW SERIAL NUMBER</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <table>
                    <tr>
                        <td className={Styles.FitTDTitle}>Serial Number</td>
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
            {errors?.name?.map((message, idx) => (
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

export default SerialNumberCreate;
