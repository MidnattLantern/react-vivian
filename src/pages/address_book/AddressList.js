// functional
import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
// styles
import Styles from "../../styles/AddressList.module.css";
import "../../global.css";


const AddressList = ({ setAction }) => {
    const currentUser = useCurrentUser();
    const [addressList, setAddressList] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const fetchAddressList = async () => {
            try {
                const { data } = await axiosReq.get(`/address_book/?owner__userauthentication=${currentUser?.pk}`);
                setAddressList(data);
                setHasLoaded(true);
            } catch(err){
                console.log(err);
            };
        };
        fetchAddressList();
        console.log(currentUser?.pk);
    }, [currentUser?.pk]);

    return (<>
        <div className={Styles.AddressListContainer}>

            <button onClick={() => {setAction("create")}}>
                Create
            </button>
            <button onClick={() => {setAction("edit")}}>
                Edit
            </button>
            <button onClick={() => {setAction("detail")}}>
                Detail
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
    </>);
};

export default AddressList;
