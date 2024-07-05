// functional
import React, { useEffect, useState } from "react";
import { axiosReq } from "../../../api/axiosDefaults";
// styles
import Styles from "../../../styles/ProductDetail.module.css";
import "../../../global.css";
// components
import ProductItem from "../ProductItem";

const ProductDetail = ({ productFocus, setProductFocus, setAction}) => {
    const [productDetail, setProductDetail] = useState({ results: [] });
    
    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: product }] = await Promise.all([
                    axiosReq.get(`/product_book/${productFocus}`)
                ]);
                setProductDetail({ results: [product] });
            } catch(err) {
                console.log(err)
            };
        };
        handleMount();
    }, [productFocus]);

    const handleSetEditAction = () => {
        setProductFocus(productFocus);
        setAction("edit");
    };

    const handleClose = () => {
        setProductFocus(null);
        setAction(null);
    };

    return(<>
    <div className={Styles.ProductDetailContainer}>
        <ProductItem {...productDetail.results[0]} setProductDetail={setProductDetail} ProductDetail />
        <br/>
        <div className={Styles.ActionButtonContainer}>
            <button className={Styles.Button} onClick={handleSetEditAction}>Edit</button>
            <button className={Styles.Button} onClick={handleClose}>Close</button>
        </div>
    </div>
    </>);
};

export default ProductDetail;
