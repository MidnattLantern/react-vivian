import React, { useEffect, useState } from "react";
// styles
import Styles from "../../../styles/AddressDetail.module.css"
import "../../../global.css";
import AddressItem from "../AddressItem";
import { axiosReq } from "../../../api/axiosDefaults";

const AddressDetail = ({ addressFocus, setAddressFocus, setAction }) => {
    const [AddressDetail, setAddressDetail] = useState({ results: [] });

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
        setAction("edit")
    }

    const handleClose = () => {
        setAddressFocus(null);
        setAction(null);
    }

    return(<>
        <div className={Styles.AddressDetailContainer}>
            <AddressItem {...AddressDetail.results[0]} setAddressDetail={setAddressDetail} AddressDetail/>
            <button onClick={handleSetEditAction}>Edit</button>
            <button onClick={handleClose}>Close</button>
        </div>
    </>);
};

export default AddressDetail;
