import React from "react";
// styles
import Styles from "../../../styles/AddressItem.module.css";
import "../../../global.css";

const UnlinkHiringPartneringEnd = ({ setSerialNumberData, setDisplaySelectedPartneringEnd, }) => {

    const handleSelect = ( property, value ) => {
        setSerialNumberData(prevState => ({
            ...prevState,
            [property]: value
        }));
        /* show the name instead of ID (retrieved from address book) */
        setDisplaySelectedPartneringEnd("")
    };

    return (<>
        <p className={Styles.BridgeListButton} onClick={() => {handleSelect('link_partnering_end', "")}}>
            (Unlink Hiring Partner)
        </p>
    </>);
};

export default UnlinkHiringPartneringEnd;
