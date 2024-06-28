import React, { useEffect, useState } from "react";
import { axiosReq } from "../../../api/axiosDefaults";
import { Form } from "react-bootstrap";
// styles
import Styles from "../../../styles/ProductEdit.module.css";
import "../../../global.css";

const ProductEdit = ({ productFocus, setProductFocus, setAction, fetchProductList, setProductList }) => {
    const [errors, setErrors] = useState({});
    const [productData, setProductData] = useState({
        name: "",
        serial_number_prefix: "",
    });
    const {
        name,
        serial_number_prefix,
    } = productData;

    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(`/product_book/${productFocus}`)
                const {
                    name,
                    serial_number_prefix,
                } = data;
                setProductData({
                    name,
                    serial_number_prefix,
                })
            } catch(err) {
                console.log(err)
            };
        };
        handleMount();
    }, []);

    const handleChange = (event) => {
        setProductData({
            ...productData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("serial_number_prefix", serial_number_prefix);
        try {
            await axiosReq.put(`/product_book/${productFocus}`, formData);
            fetchProductList();
            setAction("detail");
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            };
        };
    };

    const handleSetDetailAction = async (event) => {
        event.preventDefault();
        setAction("detail");
        setProductFocus(productFocus);
    };

    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/product_book/${productFocus}`);
            fetchProductList();
            setProductFocus(null);
            setAction(null);
        } catch(err) {
            console.log(err)
        };
    }
;
    return(<>
        <div className={Styles.ProductEditContainer}>
            <h1 className={Styles.Uppercase}>EDIT {name}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <table className={Styles.AllignLeft}>
                        <tr>
                            <td>Product Name</td>
                            <td>
                                <Form.Control
                                className={Styles.FormControl}
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                placeholder="Not to be blank!"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>Serial Number Prefix</td>
                            <td>
                                <Form.Control
                                className={Styles.FormControl}
                                type="text"
                                name="serial_number_prefix"
                                value={serial_number_prefix}
                                onChange={handleChange}
                                placeholder="------"
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
        <button className={Styles.DeleteButton} onClick={handleDelete}>DELETE {name}</button>
    </>);
};

export default ProductEdit;
