import React from 'react';
import { findRatingClr, getCorrectCurrencyVal, getAfterDiscountPrice } from '../../../../constants';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Card, ImgDv, H3, H4, Price, Rating, Info } from './styles';
import { connect } from 'react-redux';

const ProductCard = (props) => {
    const { product, onAddItemToCart, productsCartItems } = props;
    const afterDiscountPrice = getAfterDiscountPrice(product.price, product.discountPercentage);
    const { cartItemsMapBasedOnId = {} } = productsCartItems;
    const itemPresentInCart = cartItemsMapBasedOnId[product.id];
    let ItemsCount = 0;
    if (itemPresentInCart) {
        ItemsCount = cartItemsMapBasedOnId[product.id]["count"];
    }
    return (
        <Card>
            {product && <>
                <ImgDv><img src={product.thumbnail || ""} alt={product.title} /></ImgDv>
                <div>
                    <H3 aria-label={product.brand}>{product.brand}</H3>
                    <H4 aria-label={product.title}>{product.title}</H4>
                    <Price aria-label={afterDiscountPrice}>{afterDiscountPrice} <span className="actualprice">{getCorrectCurrencyVal(product.price)}</span><span className="discount">({product.discountPercentage}% OFF)</span></Price>
                    <Rating aria-label={product.rating} ratetype={findRatingClr(product.rating)}>{product.rating} <span><i className="fa-solid fa-star"></i></span></Rating>
                </div>
            </>}
            {itemPresentInCart ? <Stack
                direction="row"
                spacing={2}
                sx={{ width: "fit-content", margin: "auto", alignItems: "center" }}
            >
                <Button aria-label="remove one item" variant="outlined" size='large' color='primary' onClick={() => props.minusItem(product)}>
                    <i className="fa-solid fa-minus"></i>
                </Button>
                <span>{ItemsCount}</span>
                <Button aria-label="add one item" variant="outlined" size='large' color='primary' onClick={() => props.addItem(product)}>
                    <i className="fa-solid fa-plus"></i>
                </Button>
            </Stack> :
                <div style={{ display: "flex" }}>
                    <Button aria-label="add one item" sx={{margin:"auto"}} onClick={onAddItemToCart} variant="outlined">Add To Cart</Button>
                </div>}
        </Card>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        minusItem: (item) => dispatch({ type: "MINUS_ITEM_FRM_CART", payload: item }),
        addItem: (item) => dispatch({ type: "ADD_ITEM_TO_CART", payload: item }),
        deleteEntireItem: (item) => dispatch({ type: "DELETE_ITEM_FRM_CART", payload: item }),
    }
};


export default connect(null, mapDispatchToProps)(ProductCard);