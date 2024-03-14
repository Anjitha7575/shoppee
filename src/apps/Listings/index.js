import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { getProducts, addItemsToCartFunc } from './actions';
import ProductCard from './features/ProductCard';
import FilterProducts from './features/FilterProducts';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import { TxtButtonWithIcon } from '../CommonTemplates/CommonStyles';
import { M1, C1, Actions, T2 } from './styles';
import { Button } from '@mui/material';

const Listings = (props) => {
    const { products, productsCartItems } = props;
    const { cartItems = [] } = productsCartItems;
    const [pageNo, setPageNo] = useState(1);
    const [filterParam, setFilterParam] = useState("");
    const { status, data: productData = { products: [] } } = products;
    const maxPagelen = productData.total || 0;
    const totalPages = Math.ceil(maxPagelen / 30);

    useEffect(() => {
        props.clearPrevPayments();
    }, [])


    useEffect(() => {
        props.getProducts(pageNo, "");
    }, [pageNo])


    const onAddItemToCart = (item) => {
        props.addItemsToCartFunc(item)
    }

    const goToCartStage = () => {
        props.goToNextStage();
    }

    const doSearch = () => {
        props.getProducts(1, filterParam);
    }

    const doSearchBasedOnVal = (val) => {
        props.getProducts(1, val);
    }

    return (
        <M1 data-testid="listing-page">
            <Actions>
                <T2>
                    <FilterProducts filterVal={filterParam} setFilterVal={setFilterParam} doSearchBasedOnVal={doSearchBasedOnVal} />
                    <Button className='searchP' onClick={(filterParam || "").length > 0 ? doSearch : () => { }}>Search</Button>
                </T2>
                <Badge data-testid="show-carts-page" className='cartbadge' onClick={goToCartStage} badgeContent={cartItems.length} color="secondary">
                    <TxtButtonWithIcon txt="Cart" icon="fa-solid fa-cart-shopping" />
                </Badge>
            </Actions>
            {(status === "loading") ? <C1><i className="fa-solid fa-spinner"></i></C1> :
                (status === "error") ? <C1 data-testid="products-error">Something went wrong!</C1> :
                    <>
                        {productData?.products.length > 0 ? <>
                            <C1 data-testid="products-list">
                                {(productData?.products || []).map((item, index) => {
                                    return <ProductCard
                                        key={item.id || index}
                                        product={item}
                                        productsCartItems={productsCartItems}
                                        onAddItemToCart={() => onAddItemToCart(item)}
                                    />
                                })}
                            </C1>
                            <Stack spacing={2}>
                                <Pagination page={filterParam ? 1 : pageNo} onChange={(e, value) => setPageNo(value)} count={totalPages} color="primary" />
                            </Stack>
                        </> : <div>No Data Found!</div>}

                    </>
            }
        </M1>
    )
}



const mapStateToProps = (state) => ({
    products: state.productsModel.products,
    productsCartItems: state.billingModel.productsCartItems,
})

const mapDispatchToProps = dispatch => {
    return {
        getProducts: (pageNo, filterParam) => dispatch(getProducts(pageNo, filterParam)),
        addItemsToCartFunc: (item) => dispatch(addItemsToCartFunc(item)),
        goToNextStage: () => dispatch({ type: "INCREMENT_USR_STAGE" }),
        clearPrevPayments: () => dispatch({ type: "PAYMENT_API_RESP", payload: { 'status': '', 'data': {} } })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Listings));
