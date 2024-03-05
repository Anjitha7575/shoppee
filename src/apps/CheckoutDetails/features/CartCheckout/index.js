import React from 'react';
import { connect } from 'react-redux';
import SelectedCards from '../SelectedCards';
import { M1, C1, VLine } from './styles';
import BillDetails from '../../../BillDetails';
import AddressInfo from '../AddressInfo';


const CartCheckout = (props) => {
    const { productsCartItems } = props;
    const { cartItemsMapBasedOnId = {}, billDetails } = productsCartItems;
    let entries = Object.entries(cartItemsMapBasedOnId || {});
    return (
        <M1>
            <div>
                <AddressInfo />
                <C1>
                    {entries.map(([key, value], index) => {
                        return <SelectedCards key={key} cartitems={value} entries={entries} />
                    })}
                </C1>
            </div>
            <VLine />
            <BillDetails billDetails={billDetails} />
        </M1>
    )
}

const mapStateToProps = (state) => ({
    productsCartItems: state.billingModel.productsCartItems,
})

export default connect(mapStateToProps, {})(React.memo(CartCheckout));