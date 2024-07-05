// functional
import React, { useEffect, useState } from "react";
import { axiosReq } from "../../../api/axiosDefaults";
import { Form } from "react-bootstrap";
// styles
import Styles from "../../../styles/ProductCreate.module.css";
import "../../../global.css";


const ProductCreate = ({ setAction, setProductFocus, fetchProductList }) => {
    const [errors, setErrors] = useState({});
    const [productData, setProductData] = useState({
        name: "",
    });
    const { name, } = productData;

    useEffect(() => {
        // reset product focus for UX
        setProductFocus(null);
    }, []);

    const handleChange = (event) => {
        setProductData({
            ...productData,
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

        formData.append("name", name);

        try {
            await axiosReq.post("/product_book/", formData);
            fetchProductList();
            setAction(null);
        } catch (err) {
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            };
        };
    };

    return(<>
        <div className={Styles.ProductCreateContainer}>
            <h1>NEW PRODUCT</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <table>
                        <tr>
                            <td>Name</td>
                            <td>
                                <Form.Control
                                className={Styles.FormControl}
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                placeholder="Product Name"
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

export default ProductCreate;
