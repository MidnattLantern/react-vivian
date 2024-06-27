import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import { axiosReq } from "../../api/axiosDefaults";
// styles
import Styles from "../../styles/SerialNumberPage.module.css";
import "../../global.css";
// foreign components
import ProductItem from "../product_book/ProductItem";
import SerialNumberItem from "./SerialNumberItem";
// crud components

const SerialNumberPage = () => {
    const [action, setAction] = useState(null);
    const currentUser = useCurrentUser();
    const [productList, setProductList] = useState({ results: [] });
    const [serialNumberList, setSerialNumberList] = useState({ results: [] });
    const [productFocus, setProductFocus] = useState(null);
    const [hasLoaded, setHasLoaded] = useState(false);

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
            const { data } = await axiosReq.get(`/serial_number_book/?owner__profile=${currentUser?.pk}`);
            setSerialNumberList(data);
            setHasLoaded(true)
            console.log("fetch/ refresh serial number list")
        } catch(err) {
            console.log(err);
        };
    };

useEffect(() => {
    /* setHasLoaded for useEffect */
    fetchProductList();
    fetchSerialNumberList();
}, [currentUser?.pk]);


/* Product list make an exception to the naming convenction
"SerialNumberListContainer" instead of "ListContainer"
"SerialNumberPageContainer" instead of "PageContainer" */
    return(<>
        <div className={Styles.SerialNumberPageContainer}>
            <div className={Styles.ProductListContainer}>
                <h1>PRODUCT BOOK</h1>

                {productList.length ? (<>
                    <InfiniteScroll
                    children={productList.map((product) => (<>
                        <ProductItem key={product.id} {...product} setProductFocus={setProductFocus} setAction={setAction} />
                    </>))}
                    dataLength={productList.length}
                    loader={<h1>loading...</h1>}
                    hasMore={!!productList.next}
                    next={() => fetchMoreData(productList, setProductList)}
                    />
                </>) : (null)}
            </div>
            <div className={Styles.SerialNumberListContainer}>
                <h1>Serial Number List</h1>

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
                        <SerialNumberItem key={serial_number.id} {...serial_number} setSerialNumberFocus={setSerialNumberList} setAction={setAction} />
                    </>))}
                    dataLength={serialNumberList.length}
                    loader={<h1>loading...</h1>}
                    hasMore={!!serialNumberList.next}
                    next={() => fetchMoreData(serialNumberList, setSerialNumberList)}
                    />
                </>) : (null)}

            </div>
            <div className={Styles.SerialNumberCrudContainer}>
                <h1>Serial Number Crud</h1>
            </div>
        </div>
    </>);
};

export default SerialNumberPage;
