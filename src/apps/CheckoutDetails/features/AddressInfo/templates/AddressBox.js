import React from 'react';
import { CC1, CurrAddr } from '../styles';

function AddressBox({ obj, children }) {
    return (<CC1>
        <CurrAddr>
            <div className='r1'><div className='s1'>Deliver to:</div><div className='t1'>{obj.name|| ""}</div><div className='t1'>{obj.pincode}</div></div>
            <div className='r2'>{obj.streetAddress || ""}</div>
        </CurrAddr>
        {children}
    </CC1>
    )
}

export default AddressBox;