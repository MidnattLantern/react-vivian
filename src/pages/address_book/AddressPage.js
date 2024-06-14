import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
// style
import "../../global.css";
import Styles from "../../styles/AddressPage.module.css"
// crud components
import AddressDetail from "./crud/AddressDetail";
import AddresssCreate from "./crud/AddressCreate";
import AddressEdit from "./crud/AddressEdit";


const AddressPage = () => {
    const [action, setAction] = useState(null);
    const currentUser = useCurrentUser();
    const [addressList, setAddressList] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);

    const fetchAddressList = async () => {
        try {
            const { data } = await axiosReq.get(`/address_book/?owner__userauthentication=${currentUser?.pk}`);
            setAddressList(data);
            setHasLoaded(true);
            console.log("fetch/ refresh address list")
        } catch(err){
            console.log(err);
        };
    };

    useEffect(() => {
        fetchAddressList();
        console.log(currentUser?.pk);
    }, [currentUser?.pk]);
    
    const renderAction = (action) => {
        switch (action) {
            case 'create':
                return <AddresssCreate setAction={setAction} fetchAddressList={fetchAddressList} />;
            case 'detail':
                return <AddressDetail setAction={setAction} fetchAddressList={fetchAddressList} />;
            case 'edit':
                return <AddressEdit setAction={setAction} fetchAddressList={fetchAddressList} />;
            default:
                return null;
        };
    };

    return (<>
        <div className={Styles.AddressPageContainer}>
            <div className={Styles.ListContainer}>

            <button onClick={() => {setAction("create")}}>
                Create
            </button>
            <button onClick={() => {setAction("edit")}}>
                Edit
            </button>
            <button onClick={() => {setAction("detail")}}>
                Detail
            </button>
            <button onClick={fetchAddressList}>
                Refresh
            </button>

            <p>currentUser?.pk: {currentUser?.pk ? (currentUser?.pk) : (<>couldn't load</>)}</p>
            <p>hasLoaded: {hasLoaded ? (<>true</>) : (<>false</>)}</p>
            {addressList.length ? (<>
                <InfiniteScroll
                children={addressList.map((address) => (
                    <p>{address.partnering_end}</p>
                ))}
                dataLength={addressList.length}
                loader={<h1>loading...</h1>}
                hasMore={!!addressList.next}
                next={() => fetchMoreData(addressList, setAddressList)}
                />
            </>) : (null)}
            </div>
            <div className={Styles.CrudContainer}>

                {renderAction(action)}
            </div>
        </div>
    </>);
};

export default AddressPage;
