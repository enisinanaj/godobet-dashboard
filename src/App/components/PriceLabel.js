import React from 'react';

const PriceLabel = ({amount, style}) => {
    return <span style={style || {}}>
        {amount.toLocaleString("it-IT", {maximumFractionDigits: 2, minimumFractionDigits: 2})}€
    </span>
};

export default PriceLabel;