// functional
import React, { useEffect, useState } from "react";
import { axiosReq } from "../../../api/axiosDefaults";
// styles
import Styles from "../../../styles/SerialNumberDetail.module.css";
import "../../../global.css";
// components
import SerialNumberItem from "../SerialNumberItem";

const SerialNumberDetail = ({ serialNumberFocus, setSerialNumberFocus, setAction}) => { 
    const [serialNumberDetail, setSerialNumberDetail] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: serialNumber }] = await Promise.all([
                    axiosReq.get(`/serial_number_book/${serialNumberFocus}`)
                ]);
                setSerialNumberDetail({ results: [serialNumber] });
            } catch(err) {
                console.log(err)
            };
        };
        handleMount();
    }, [serialNumberFocus]);

    const handleSetEditAction = () => {
        setSerialNumberFocus(serialNumberFocus);
        setAction("edit");
    };

    const handleClose = () => {
        setSerialNumberFocus(null);
        setAction(null);
    };
    
    return(<>
    <div className={Styles.SerialNumberDetailContainer}>
        <SerialNumberItem {...serialNumberDetail.results[0]} setSerialNumberDetail={setSerialNumberDetail} SerialNumberDetail/>
        <br/>
        <div className={Styles.ActionButtonContainer}>
            <button className={Styles.Button} onClick={handleSetEditAction}>Edit</button>
            <button className={Styles.Button} onClick={handleClose}>Close</button>
        </div>
    </div>
    </>);
};

export default SerialNumberDetail;
