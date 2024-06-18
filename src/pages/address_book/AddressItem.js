// functional
import React from "react";
// styles
import Styles from "../../styles/AddressItem.module.css";
import "../../global.css";


const AddressItem = ({ setAddressFocus, setAction, ...props }) => {
    const {id, partnering_end, AddressDetail} = props;

    const setActionAndFocus = () => {
        setAction("detail");
        setAddressFocus(id)
    };

    return(<>
        {AddressDetail ? (<>
            <h1>{partnering_end}</h1>
            <p>id: {id}</p>
            <p>partnering_end: {partnering_end}</p>
        </>) : (<>
            <br/>
            <button className={Styles.ListButton} onClick={() => {setActionAndFocus()}}>{partnering_end}</button>
            <br/>
        </>)}
    </>);
};

export default AddressItem;
