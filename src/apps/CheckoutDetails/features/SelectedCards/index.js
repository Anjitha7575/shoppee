import React from 'react';
import { connect } from 'react-redux';
import { getCorrectCurrencyVal, getAfterDiscountPrice } from '../../../../constants';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import {
    Card, Row,
    ImgDv, H3, H4, Price
} from './styles';

const SelectedCards = (props) => {
    const { cartitems } = props;
    const { count = 0, details = {} } = cartitems;
    const afterDiscountPrice = getAfterDiscountPrice(details.price, details.discountPercentage);
    return (
        <Card>
            {count > 0 && details && <>
                <Row>
                    <ImgDv><img src={details.thumbnail || ""} alt={details.title} /></ImgDv>
                    <div>
                        <H3>{details.brand}</H3>
                        <H4>{details.title}</H4>
                        <Price>{afterDiscountPrice} <span className="actualprice">{getCorrectCurrencyVal(details.price)}</span><span className="discount">({details.discountPercentage}% OFF)</span></Price>
                    </div>
                </Row>
                <Row>
                    <Stack
                        direction="row"
                        spacing={2}
                    >
                        <Button variant="outlined" color='primary' onClick={() => props.minusItem(details)}>
                            <i className="fa-solid fa-minus"></i>
                        </Button>
                        <span>{count}</span>
                        <Button variant="outlined" color='primary' onClick={() => props.addItem(details)}>
                            <i className="fa-solid fa-plus"></i>
                        </Button>
                    </Stack>
                    <Button variant="contained" color='inherit' onClick={() => props.deleteEntireItem(details)}>Delete</Button>
                </Row>
            </>}
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


export default connect(null, mapDispatchToProps)(SelectedCards);
