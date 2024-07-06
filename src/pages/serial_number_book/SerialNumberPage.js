import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { axiosReq } from "../../api/axiosDefaults";
// styles
import Styles from "../../styles/SerialNumberPage.module.css";
import "../../global.css";
// foreign components
import ProductItem from "./ProductItem";
// crud components
import SerialNumberItem from "./SerialNumberItem";
import SerialNumberDetail from "./crud/SerialNumberDetail";
import SerialNumberCreate from "./crud/SerialNumberCreate";
import SerialNumberEdit from "./crud/SerialNumberEdit";

const NoCrudAction = () => {
    return(<>
        <div className={Styles.NoCrudAction}/>
    </>);
};

const SerialNumberPage = () => {
    const [action, setAction] = useState(null);
    const currentUser = useCurrentUser();
    const [productList, setProductList] = useState({ results: [] });
    const [serialNumberList, setSerialNumberList] = useState({ results: [] });
    const [productFocus, setProductFocus] = useState(null);
    const [serialNumberFocus, setSerialNumberFocus] = useState(null);
    const [hasLoaded, setHasLoaded] = useState(false);
    /* refresh is used for real time feedback */
    const [refresh, triggerRefresh] = useState(false);

    const fetchProductList = async () => {
        try {
            const { data } = await axiosReq.get(`/product_book/?owner__profile=${currentUser?.pk}`);
            setProductList(data);
            setHasLoaded(true);
            console.log("fetch/ refresh product list")
        } catch(err){
            console.log(err);
        };
    };
    const fetchSerialNumberList = async () => {
        try {
            const { data } = await axiosReq.get(`/serial_number_book/?link_product_name=${productFocus}&link_partnering_end=&owner__profile=${currentUser?.pk}`);
            setSerialNumberList(data);
            setHasLoaded(true)
            console.log("fetch/ refresh serial number list")
        } catch(err) {
            console.log(err);
        };
    };

useEffect(() => {
    fetchProductList();
    fetchSerialNumberList();
    setAction(null);
    /* refresh is used for real time feedback */
    triggerRefresh(false);
}, [refresh, currentUser?.pk]);

const renderAction = (action) => {
    switch (action) {
        case 'create':
            return <SerialNumberCreate
            setAction={setAction}
            fetchSerialNumberList={fetchSerialNumberList}
            setSerialNumberFocus={setSerialNumberFocus}
            productFocus={productFocus}
            />;
        case 'detail':
            return <SerialNumberDetail
            setAction={setAction}
            setSerialNumberFocus={setSerialNumberFocus}
            serialNumberFocus={serialNumberFocus}
            key={serialNumberFocus}
            />;
        case 'edit':
            return <SerialNumberEdit
            setAction={setAction}
            fetchSerialNumberList={fetchSerialNumberList}
            setSerialNumberFocus={setSerialNumberFocus}
            serialNumberFocus={serialNumberFocus}
            key={serialNumberFocus}
            currentUser={currentUser}
            />;
        default:
            return <NoCrudAction/>;
    };
};


/* Product list make an exception to the naming convenction
"SerialNumberListContainer" instead of "ListContainer"
"SerialNumberPageContainer" instead of "PageContainer" */
    return(<>
        <div className={Styles.SerialNumberPageContainer}>
            <div className={Styles.ProductListContainer}>
                <div className={Styles.ListHeaderDiv}>
                    <h1>PRODUCT</h1>
                </div>
                <div className={Styles.ListDiv}>
                    {productList.length ? (<>
                        <InfiniteScroll
                        children={productList.map((product) => (<>
                            <ProductItem key={product.id} {...product} setProductFocus={setProductFocus} triggerRefresh={triggerRefresh} />
                        </>))}
                        dataLength={productList.length}
                        loader={<h1>loading...</h1>}
                        hasMore={!!productList.next}
                        next={() => fetchMoreData(productList, setProductList)}
                        />
                    </>) : (<p>------</p>)}
                </div>
            </div>
            <div className={Styles.SerialNumberListContainer}>
                <div className={Styles.ListHeaderDiv}>
                    <h1>SERIAL NUMBER BOOK</h1>
                </div>
                <div className={Styles.ListDiv}>
                {productFocus !== null ? (<>
                <ul>
                    <li>
                        <button className={Styles.CreateButton} onClick={() => {setAction("create")}}>
                            + NEW SERIAL NUMBER
                        </button>
                    </li>
                </ul>
                {serialNumberList.length ? (<>
                    <InfiniteScroll
                    children={serialNumberList.map((serial_number) => (<>
                        <SerialNumberItem key={serial_number.id} {...serial_number} setSerialNumberFocus={setSerialNumberFocus} setAction={setAction} />
                    </>))}
                    dataLength={serialNumberList.length}
                    loader={<h1>loading...</h1>}
                    hasMore={!!serialNumberList.next}
                    next={() => fetchMoreData(serialNumberList, setSerialNumberList)}
                    /> 
                </>) : null}
            </>) : (<>
                <div className={Styles.ListHeaderDiv}>
                    <p>------</p>
                </div>
            </>)}
                </div>
            </div>
            <div className={Styles.SerialNumberCrudContainer}>
                {renderAction(action)}
            </div>
        </div>
    </>);
};

export default SerialNumberPage;
