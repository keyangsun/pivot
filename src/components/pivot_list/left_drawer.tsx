import React from 'react';
import Dropdown from '../dropdown';
import DateRange from './date_range';
import './pivot_list.css';
import '../../stylesheets/select.css';

interface Props {
    handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
    handleSelect: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    selected: string;
    isOpen: Boolean;
}


const LeftDrawer: React.FC<Props> = (props: Props) => {
    const { handleOpen, handleSelect,isOpen, selected } = props;
    const options = [{ name: 'Day', value: 'day' }, { name: 'Week', value: 'week' }, { name: 'Month', value: 'month' }, { name: 'Year', value: 'year' }];

    return (
        <aside className={`left-drawer-container ${isOpen ? 'open' : 'closed'}`}>
            <div className="left-drawer">
                <div>
                    <Dropdown handleChange={handleSelect} value={selected} label='Sort By' name="sort-by" options={options} />
                </div>
                <div className="date-range-container">
                    <DateRange date={new Date()} />
                    <DateRange date={new Date()} />
                    <DateRange date={new Date()} />
                </div>
                <div className={`button-container ${isOpen ? 'open' : 'closed'}`}>
                    <button onClick={handleOpen} className="button">
                        <i className="material-icons">{ isOpen ? 'chevron_left' : 'chevron_right'}</i>
                    </button>
                </div>
            </div>
        </aside>
    )
}

export default LeftDrawer;