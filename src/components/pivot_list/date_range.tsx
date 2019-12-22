import React from 'react';
import '../../stylesheets/date_range.css';

interface Props {
    date: Date;
}



const DateRange = (props: Props) => {    
    const { date } = props;

    
    return(
        <span className="y-container">
            <h4>{date + ""}</h4>
        </span>
    )
}

export default DateRange;