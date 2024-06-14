import React, { useEffect, useState } from "react";
// styles
import Styles from "../../../styles/AddressDetail.module.css"
import "../../../global.css";
import AddressItem from "../AddressItem";
import { axiosReq } from "../../../api/axiosDefaults";

const AddressDetail = ({ addressFocus }) => {
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

    return(<>
        <div className={Styles.AddressDetailContainer}>
            <AddressItem {...AddressDetail.results[0]} setAddressDetail={setAddressDetail} AddressDetail/>
        </div>
    </>);
};

export default AddressDetail;
