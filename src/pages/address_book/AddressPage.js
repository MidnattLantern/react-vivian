import React from "react";
// style
import "../../global.css";
import Styles from "../../styles/AddressPage.module.css"
// crud components
import AddressList from "./crud/AddressList";
import AddressDetail from "./crud/AddressDetail";
import AddresssCreate from "./crud/AddressCreate";
import AddressEdit from "./crud/AddressEdit";

const AddressPage = () => {

    return (<>
        <div className={Styles.AddressPageContainer}>
            <h1>Address Page</h1>
            <AddressList />
            <AddressDetail />
            <AddresssCreate />
            <AddressEdit />
        </div>
</>);
};

export default AddressPage;
