import React, { useEffect, useState } from "react";
import { axiosReq } from "../../../api/axiosDefaults";
// styles
import Styles from "../../../styles/AddressDetail.module.css"
import "../../../global.css";
//components
import AddressItem from "../AddressItem";


const AddressDetail = ({ addressFocus, setAddressFocus, setAction }) => {
    const [addressDetail, setAddressDetail] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: address }] = await Promise.all([
                    axiosReq.get(`/address_book/${addressFocus}`)
                ]);
                setAddressDetail({ results: [address] });
            } catch(err) {
                console.log(err)
            };
        };
        handleMount();
    }, [addressFocus]);

    const handleSetEditAction = () => {
        setAddressFocus(addressFocus);
        setAction("edit");
    };

    const handleClose = () => {
        setAddressFocus(null);
        setAction(null);
    };

    return(<>
        <div className={Styles.AddressDetailContainer}>
            <AddressItem {...addressDetail.results[0]} setAddressDetail={setAddressDetail} AddressDetail/>
            <br/>
            <div className={Styles.ActionButtonContainer}>
                <button className={Styles.Button} onClick={handleSetEditAction}>Edit</button>
                <button className={Styles.Button} onClick={handleClose}>Close</button>
            </div>
        </div>
    </>);
};

export default AddressDetail;
