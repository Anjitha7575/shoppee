import React from 'react';
import AutoComplete from '../../../CommonTemplates/AutoComplete';

const FilterProducts = (props) => {
    const topSearchKeyWords = ["Iphone", "Mobiles", "Laptop", "Tops"];
    return (<AutoComplete topSearchKeyWords={topSearchKeyWords}
        filterLabel="Search for products"
        {...props} />
    )
}

export default React.memo(FilterProducts);