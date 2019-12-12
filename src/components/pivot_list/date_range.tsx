import React from 'react';

interface Props {
    date: Date;
}



const DateRange = (props: Props) => {    
    const { date } = props;

    
    return(
        <span>
            <h4>{date + ""}</h4>
        </span>
    )
}

export default DateRange;