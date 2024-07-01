/* Not to be confused with the ProductItem.js from the product origin */

// functional
import React from "react";
// styles
import Styles from "../../styles/ProductItem.module.css";
import "../../global.css";

const ProductItem = ({ setProductFocus, triggerRefresh, ...props }) => {
    const {
        id,
        name,
    } = props;

    /* triggerRefresh is used for real time feedback */
    const setActionAndFocus = () => {
        setProductFocus(id);
        triggerRefresh(true);
    };

    return(<>
        <ul>
            <li>
                <button className={Styles.ListButton} onClick={() => {setActionAndFocus()}}>{name}</button>
            </li>
        </ul>
    </>);
};

export default ProductItem;
