import React, { useState } from "react";
// style
import "../../global.css";
import Styles from "../../styles/AddressPage.module.css"
// crud components
import AddressList from "./AddressList";
import AddressDetail from "./crud/AddressDetail";
import AddresssCreate from "./crud/AddressCreate";
import AddressEdit from "./crud/AddressEdit";


const AddressPage = () => {
    const [action, setAction] = useState(null);
    const renderAction = (action) => {
        switch (action) {
            case 'create':
                return <AddresssCreate setAction={setAction}/>;
            case 'detail':
                return <AddressDetail setAction={setAction}/>;
            case 'edit':
                return <AddressEdit setAction={setAction}/>;
            default:
                return null;
        };
    };

    return (<>
        <div className={Styles.AddressPageContainer}>
            <div className={Styles.ListContainer}>
                <AddressList setAction={setAction}/>
            </div>
            <div className={Styles.CrudContainer}>

                {renderAction(action)}
            </div>
        </div>
</>);
};

export default AddressPage;
