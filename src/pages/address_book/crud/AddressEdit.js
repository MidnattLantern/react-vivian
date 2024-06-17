import React from "react";
// styles
import Styles from "../../../styles/AddressEdit.module.css";
import "../../../global.css";

const AddressEdit = ({ addressFocus }) => {

    return (<>
        <div className={Styles.AddressEditContainer}>
            <h1>EDIT {addressFocus}</h1>
        </div>
    </>);
};

export default AddressEdit;
