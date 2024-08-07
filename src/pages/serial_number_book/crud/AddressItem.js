import React from "react";
// styles
import Styles from "../../../styles/AddressItem.module.css";
import "../../../global.css";

const AddressItem = ({ setSerialNumberData, setDisplaySelectedPartneringEnd, ...props }) => {
    const {
        id,
        partnering_end,
    } = props

    const handleSelect = ( property, value ) => {
        setSerialNumberData(prevState => ({
            ...prevState,
            [property]: value
        }));
        /* show the name instead of ID (retrieved from address book) */
        setDisplaySelectedPartneringEnd(partnering_end)
    };

    return (<>
        <p className={Styles.BridgeListButton} onClick={() => {handleSelect('link_partnering_end', id)}}>
            {partnering_end}
        </p>
    </>);
};

export default AddressItem;
