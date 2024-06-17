import React from "react";
// styles
import Styles from "../../../styles/AddressEdit.module.css";
import "../../../global.css";

const AddressEdit = ({ addressFocus, setAction }) => {

    return (<>
        <div className={Styles.AddressEditContainer}>
            <h1>EDIT {addressFocus}</h1>
            <button onClick={() => {setAction("detail")}}>Discard Changes</button>
        </div>
    </>);
};

export default AddressEdit;
