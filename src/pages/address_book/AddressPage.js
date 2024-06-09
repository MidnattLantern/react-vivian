import React from "react";
// style
import "../../global.css";
import Styles from "../../styles/AddressPage.module.css"
// crud components
import AddressList from "./AddressList";
import AddressDetail from "./crud/AddressDetail";
import AddresssCreate from "./crud/AddressCreate";
import AddressEdit from "./crud/AddressEdit";

const AddressPage = () => {

    return (<>
        <div className={Styles.AddressPageContainer}>
            <div className={Styles.ListContainer}>
                <AddressList />
            </div>
            <div className={Styles.CrudContainer}>
                <AddressDetail />
                <AddresssCreate />
                <AddressEdit />
            </div>
        </div>
</>);
};

export default AddressPage;
