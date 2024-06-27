// functional
import React from "react";
// styles
import Styles from "../../styles/SerialNumberItem.module.css";
import "../../global.css";

const SerialNumberItem = ({ setSerialNumberFocus, setAction, ...props}) => {
    const {
        id,
        serial_number,
        link_product_name,
        link_partnering_end,
        SerialNumberDetail,
    } = props;

    const setActionAndFocus = () => {
        setAction("detail");
        setSerialNumberFocus(id);
    };

    /* List in list container, table in crud container */
    return(<>
        {SerialNumberDetail ? (<>
            <h1>{serial_number}</h1>
            <table className={Styles.AlignLeft}>
                <tr>
                    <td>Serial Number:</td>
                    <td>{serial_number}</td>
                </tr>
                <tr>
                    <td>Product:</td>
                    <td>{link_product_name}</td>
                </tr>
                <tr>
                    <td>Hiring Partner:</td>
                    <td>{link_partnering_end}</td>
                </tr>
            </table>
        </>) : (<>
            <ul>
                <li>
                    <button className={Styles.ListButton} onClick={() => {setActionAndFocus()}}>{serial_number}</button>
                </li>
            </ul>
        </>)}
    </>);
};

export default SerialNumberItem;
