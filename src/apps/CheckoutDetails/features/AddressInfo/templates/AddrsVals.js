import React from 'react';
import { C1, Txt } from '../styles';

export const AddrsVals = (props) => {
    const { item } = props;
    return (<C1>
        <Txt>{item.name}</Txt>
        <Txt>{item.streetAddress}</Txt>
        <Txt>{item.locality}</Txt>
        <Txt>{item.pincode}</Txt>
        <Txt>{item.mobile}</Txt>
        <Txt>{item.addressType}</Txt>
    </C1>
    );
}