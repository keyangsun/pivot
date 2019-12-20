import React from 'react';
import Figure from './figure';
import './pivot_list.css';

interface Props {
    isOpenRight: Boolean;
}


const CenterContent: React.FC<Props> = (props: Props) => {
    const { isOpenRight } = props;
    const options = [{ name: 'Day', value: 'day' }, { name: 'Week', value: 'week' }, { name: 'Month', value: 'month' }, { name: 'Year', value: 'year' }];

    return (
        <section className={`center-content ${isOpenRight ? 'open-right' : 'closed-right'} open-left`}>
            <div className="photo-grid-wrapper">
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
            </div>
            <div className="button-container center-open-right-drawer">
                <button className="button">- icon</button>
                <button className="button">+ icon</button>
            </div>
        </section>
    )
}

export default CenterContent;