import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
// style
import "../../global.css";
import Styles from "../../styles/AddressPage.module.css"
// crud components
import AddressItem from "./AddressItem";
import AddressDetail from "./crud/AddressDetail";
import AddresssCreate from "./crud/AddressCreate";
import AddressEdit from "./crud/AddressEdit";

const NoCrudAction = () => {
    return(<>
        <div className={Styles.NoCrudAction}/>
    </>);
};

const AddressPage = () => {
    const [action, setAction] = useState(null);
    const currentUser = useCurrentUser();
    const [addressList, setAddressList] = useState({ results: [] });
    const [addressFocus, setAddressFocus] = useState("none");
    const [hasLoaded, setHasLoaded] = useState(false);

    const fetchAddressList = async () => {
        try {
            const { data } = await axiosReq.get(`/address_book/?owner__profile=${currentUser?.pk}`);
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
                return <AddressDetail addressFocus={addressFocus} setAction={setAction} key={addressFocus} />;
            case 'edit':
                return <AddressEdit addressFocus={addressFocus} setAction={setAction} key={addressFocus} />;
            default:
                return <NoCrudAction/>;
        };
    };

    return (<>
        {hasLoaded ? (<>
            <div className={`${Styles.AddressPageContainer}`}>
                <div className={Styles.ListContainer}>
                    <div className={Styles.AddressHeaderDiv} >
                        <h1>ADDRESS BOOK</h1>
                    </div>
                    <div className={Styles.AddressListDiv}>
                        <button className={Styles.CreateButton} onClick={() => {setAction("create")}}>
                            + NEW ADDRESS
                        </button>
                        {addressList.length ? (<>
                            <InfiniteScroll
                            children={addressList.map((address) => (<>
                                <AddressItem key={address.id} {...address} setAddressFocus={setAddressFocus} setAction={setAction} />
                            </>))}
                            dataLength={addressList.length}
                            loader={<h1>loading...</h1>}
                            hasMore={!!addressList.next}
                            next={() => fetchMoreData(addressList, setAddressList)}
                            />
                        </>) : (null)}
                    </div>
                </div>
                <div className={`${Styles.CrudContainer} ${action === null ? Styles.NotVisible : ''}`}>
                    {renderAction(action)}
                </div>
            </div>
        </>) : (<>
            <h1>Loading...</h1>
        </>)}
    </>);
};

export default AddressPage;
