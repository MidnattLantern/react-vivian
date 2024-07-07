import React, { useEffect, useState } from "react";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
// styles
import "../../global.css";
import Styles from "../../styles/ProductPage.module.css"
// crud components
import ProductItem from "./ProductItem";
import ProductDetail from "./crud/ProductDetail";
import ProductCreate from "./crud/ProductCreate";
import ProductEdit from "./crud/ProductEdit";

const NoCrudAction = () => {
    return(<>
        <div className={Styles.NoCrudAction}/>
    </>);
};

const ProductPage = () => {
    const [action, setAction] = useState(null);
    const currentUser = useCurrentUser();
    const [productList, setProductList] = useState({ results: [] });
    const [productFocus, setProductFocus] = useState(null);
    const [hasLoaded, setHasLoaded] = useState(false);
    
    const fetchProductList = async () => {
        try {
            const { data } = await axiosReq.get(`/product_book/?owner__profile=${currentUser?.pk}`);
            setProductList(data);
            setHasLoaded(true);
            console.log("fetch/ refresh product list")
        } catch(err){
//            console.log(err);
        };
    };

    useEffect(() => {
        /* setHasLoaded for useEffect */
        fetchProductList();
    }, [currentUser?.pk]);
    
    const renderAction = (action) => {
        switch (action) {
            case 'create':
                return <ProductCreate
                setAction={setAction}
                fetchProductList={fetchProductList}
                setProductFocus={setProductFocus}
                />;
            case 'detail':
                return <ProductDetail
                setAction={setAction}
                fetchProductList={fetchProductList}
                setProductFocus={setProductFocus}
                productFocus={productFocus}
                key={productFocus}
                />;
            case 'edit':
                return <ProductEdit
                setAction={setAction}
                fetchProductList={fetchProductList}
                setProductFocus={setProductFocus}
                productFocus={productFocus}
                key={productFocus}
                />;
            default:
                return <NoCrudAction/>;
        };
    };

    return (<>
        {hasLoaded ? (<>
            <div className={`${Styles.ProductPageContainer}`}>
                <div className={Styles.ListContainer}>
                    <div className={Styles.ProductHeaderDiv} >
                        <h1>PRODUCT BOOK</h1>
                    </div>
                    <div className={Styles.ProductListDiv}>
                        <ul>
                            <li>
                                <button className={Styles.CreateButton} onClick={() => {setAction("create")}}>
                                    + NEW PRODUCT
                                </button>
                            </li>
                        </ul>

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

export default ProductPage;
