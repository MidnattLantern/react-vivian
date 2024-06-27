// functional
import React from "react";
// styles
import Styles from "../../styles/ProductItem.module.css";
import "../../global.css";

const ProductItem = ({ setProductFocus, setAction, ...props }) => {
    const {
        id,
        name,
        serial_number_prefix,
        ProductDetail,
    } = props;

    const setActionAndFocus = () => {
        setAction("detail");
        setProductFocus(id);
    };

    return(<>
        {ProductDetail ? (<>
            <h1 className={Styles.Uppercase}>{name}</h1>
            <table className={Styles.AlignLeft}>
                <tr>
                    <td>Product:</td>
                    <td>{name}</td>
                </tr>
                <tr>
                    <td>Serial Number Prefix:</td>
                    <td>{serial_number_prefix}</td>
                </tr>
            </table>
        </>) : (<>
        <ul>
            <li>
                <button className={Styles.ListButton} onClick={() => {setActionAndFocus()}}>{name}</button>
            </li>
        </ul>
        </>)}
    </>);
};

export default ProductItem;
