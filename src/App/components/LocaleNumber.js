import React from 'react';

const LocaleNumber = ({amount, symbol, style}) => {
    if (!amount && amount !== 0) {
        return <span>-{symbol}</span>
    }

    return <span style={style || {}}>
        {amount.toLocaleString("it-IT", {maximumFractionDigits: 2, minimumFractionDigits: 2})}{symbol}
    </span>
}

export default LocaleNumber;