import React from 'react';
import Dropdown from '../dropdown';
import DateRange from './date_range';
import './pivot_list.css';

interface Props {
    handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isOpen: Boolean;
}


const LeftDrawer: React.FC<Props> = (props: Props) => {
    const { handleOpen, isOpen } = props;
    const options = [{ name: 'Day', value: 'day' }, { name: 'Week', value: 'week' }, { name: 'Month', value: 'month' }, { name: 'Year', value: 'year' }];

    return (
        <aside className={`left-drawer ${isOpen ? 'open' : 'closed'}`}>
            <div>
                <Dropdown label='Sort By' name="sort-by" options={options} />
            </div>
            <div>
                <DateRange date={new Date()} />
                <DateRange date={new Date()} />
            </div>
            <div className="button-container">
                <button onClick={handleOpen} className="button">Left icon</button>
            </div>
        </aside>
    )
}

export default LeftDrawer;