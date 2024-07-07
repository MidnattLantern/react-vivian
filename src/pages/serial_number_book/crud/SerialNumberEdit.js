// functional
import React, { useEffect, useState } from "react";
import { axiosReq } from "../../../api/axiosDefaults";
import { fetchMoreData } from "../../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component";
// styles
import Styles from "../../../styles/SerialNumberEdit.module.css";
import "../../../global.css";
import { Form } from "react-bootstrap";
// components
import AddressItem from "./AddressItem";
import UnlinkHiringPartneringEnd from "./UnlinkHiringPartneringEnd";
// SVG GUI
import {ReactComponent as DropDownIcon} from "../../../assets/GUI/dropdown_icon.svg";
import {ReactComponent as DropDownIconCollapsed} from "../../../assets/GUI/dropdown_icon_collapsed.svg";

const SerialNumberEdit = ({ serialNumberFocus, setSerialNumberFocus, setAction, fetchSerialNumberList, currentUser }) => {
    const [errors, setErrors] = useState({});
    const [addressDropdown, setAddressDropdown] = useState(false);
    /* show the name instead of ID (retrieved from address book) */
    const [displaySelectedPartneringEnd, setDisplaySelectedPartneringEnd] = useState(null);
    const [serialNumberData, setSerialNumberData] = useState({
        link_product_name: "",
        link_partnering_end: "",
        serial_number: "",
        display_link_product_name: "",
        display_link_partnering_end: "",
    });
    const {
        link_product_name,
        link_partnering_end,
        serial_number,
        display_link_product_name,
        display_link_partnering_end,
    } = serialNumberData;
    const [addressList, setAddressList] = useState({ results: [] });

    const fetchAddressList = async () => {
        try {
            const { data } = await axiosReq.get(`/address_book/?owner__profile=${currentUser?.pk}`);
            setAddressList(data);
            console.log("fetch/ refresh address list");
        } catch(err){
//            console.log(err);
        };
    };

    const toggleAddressDropdown = () => {
        setAddressDropdown(prevState => !prevState);
    };


    useEffect(() => {
        const handleMount = async () => {
            try {
                const {data} = await axiosReq.get(`/serial_number_book/${serialNumberFocus}`)
                const {
                    link_product_name,
                    link_partnering_end,
                    serial_number,
                    display_link_product_name,
                    display_link_partnering_end,
                } = data;
                setSerialNumberData({
                    link_product_name,
                    link_partnering_end,
                    serial_number,
                    display_link_product_name,
                    display_link_partnering_end,
                });
                /* setDisplaySelectedPartneringEnd must be here */
                await setDisplaySelectedPartneringEnd(display_link_partnering_end)
            } catch(err) {
//                console.log(err)
            };
        };
        handleMount();
        fetchAddressList();
    }, []);

    const handleChange = (event) => {
        setSerialNumberData({
            ...serialNumberData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("link_product_name", link_product_name);
        formData.append("link_partnering_end", link_partnering_end);
        formData.append("serial_number", serial_number);
        try {
            await axiosReq.put(`/serial_number_book/${serialNumberFocus}`, formData);
            fetchSerialNumberList();
            setAction("detail");
        } catch(err) {
//            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            };
        };
    };

    const handleSetDetailAction = async (event) => {
        event.preventDefault();
        setAction("detail");
        setSerialNumberFocus(serialNumberFocus);
    };

    const handleDelete = async () => {
        try {
            await axiosReq.delete(`/serial_number_book/${serialNumberFocus}`);
            fetchSerialNumberList();
            setSerialNumberFocus(null);
            setAction(null);
        } catch(err) {
//            console.log(err)
        };
    };

    const handleSelect = () => {
        setSerialNumberData({[link_partnering_end]: null});
    };

    return(<>
        <div className={Styles.SerialNumberEditContainer}>
            <h1 className={Styles.Uppercase}>EDIT {display_link_product_name} - {serial_number}</h1>

            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <table className={Styles.AlignLeft}>
                        <tr>
                            <td>Serial Number:</td>
                            <td>
                                <Form.Control
                                className={Styles.FormControl}
                                type="text"
                                name="serial_number"
                                value={serial_number}
                                onChange={handleChange}
                                placeholder="Not to be blank!"
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className={Styles.Immutable}>Product:</td>
                            <td>
                                <Form.Control
                                className={Styles.Immutable}
                                type="text"
                                value={display_link_product_name}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td className={Styles.FitTDTitle}>Hiring partner:</td>
                            <td className={Styles.PartneringEndTitle} onClick={toggleAddressDropdown}>
                                {displaySelectedPartneringEnd}
                                {addressDropdown ? (
                                    <i className={Styles.DropDownSVG}><DropDownIconCollapsed /></i>
                                ) : (
                                    <i className={Styles.DropDownSVG}><DropDownIcon /></i>
                                )}
                                
                            </td>
                        </tr>
                    </table>

                            <div className={`${Styles.PartneringEndList} ${addressDropdown ? '' : Styles.NotVisible}`}>

                                    <UnlinkHiringPartneringEnd
                                    setSerialNumberData={setSerialNumberData}
                                    setDisplaySelectedPartneringEnd={setDisplaySelectedPartneringEnd}
                                    />
                                {addressList.length ? (<>
                                    <InfiniteScroll
                                    children={addressList.map((address) => (<>
                                        <AddressItem
                                        key={address.id}
                                        {...address}
                                        setSerialNumberData={setSerialNumberData}
                                        setDisplaySelectedPartneringEnd={setDisplaySelectedPartneringEnd}
                                        />
                                    </>))}
                                    dataLength={addressList.length}
                                    loader={<p>loading...</p>}
                                    hasMore={!!addressList.next}
                                    next={() => fetchMoreData(addressList, setAddressList)}
                                    />
                                </>) : (null)}
                            </div>
                    
                </Form.Group>
            </Form>
            <br/>
            <div className={Styles.ActionButtonContainer}>
                <button className={Styles.Button} onClick={handleSubmit}>Save Changes</button>
                <button className={Styles.Button} onClick={handleSetDetailAction}>Discard Changes</button>
            </div>
        </div>
        <button className={Styles.DeleteButton} onClick={handleDelete}>DELETE {serial_number}</button>
    </>);
};

export default SerialNumberEdit;
