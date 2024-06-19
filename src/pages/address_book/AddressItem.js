// functional
import React from "react";
// styles
import Styles from "../../styles/AddressItem.module.css";
import "../../global.css";


const AddressItem = ({ setAddressFocus, setAction, ...props }) => {
    const {
        id,
        partnering_end,
        address_line1,
        address_line2,
        city,
        postal_code,
        contact_person_name,
        contact_phone_number,
        contact_email,
        AddressDetail
    } = props;

    const setActionAndFocus = () => {
        setAction("detail");
        setAddressFocus(id)
    };

    return(<>
        {AddressDetail ? (<>
            <h1 className={Styles.Uppercase}>{partnering_end}</h1>
            <table className={Styles.AlignLeft}>
                <tr>
                    <td>Partnering End:</td>
                    <td>{partnering_end}</td>
                </tr>
                <tr>
                    <td>Address Line:</td>
                    <td>{address_line1}</td>
                </tr>
                <tr>
                    <td>Second Address Line:</td>
                    <td>{address_line2}</td>
                </tr>
                <tr>
                    <td>City:</td>
                    <td>{city}</td>
                </tr>
                <tr>
                    <td>Postal Code:</td>
                    <td>{postal_code}</td>
                </tr>
                <tr>
                    <td>Contact Person Name:</td>
                    <td>{contact_person_name}</td>
                </tr>
                <tr>
                    <td>Contact Phone Number:</td>
                    <td>{contact_phone_number}</td>
                </tr>
                <tr>
                    <td>Contact Email Address:</td>
                    <td>{contact_email}</td>
                </tr>
            </table>
        </>) : (<>
        <ul>
            <li>
                <button className={Styles.ListButton} onClick={() => {setActionAndFocus()}}>{partnering_end}</button>
            </li>
        </ul>
        </>)}
    </>);
};

export default AddressItem;
