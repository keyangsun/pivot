import React from 'react';
import Figure from './figure';
import './pivot_list.css';

interface Props {
    isOpenRight: Boolean;
    isOpenLeft: Boolean;
}


const CenterContent: React.FC<Props> = (props: Props) => {
    const { isOpenRight, isOpenLeft } = props;
    const options = [{ name: 'Day', value: 'day' }, { name: 'Week', value: 'week' }, { name: 'Month', value: 'month' }, { name: 'Year', value: 'year' }];

    return (
        <section className={`center-content ${isOpenRight ? 'open-right' : 'closed-right'} ${isOpenLeft ? 'open-left' : 'closed-left'}`}>
            <div className="photo-grid-wrapper">
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
            </div>
            <div className="photo-grid-wrapper">
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
            </div>
            <div className="photo-grid-wrapper">
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
                <Figure alt="Data Image" src="undefined" caption="Data Image" />
            </div>
            <div className={`button-container`}>
                <button className="button">
                    <div className="text-icon">-</div>
                </button>
                <button className="button">
                    <div className="text-icon">+</div>
                </button>
            </div>
        </section>
    )
}

export default CenterContent;