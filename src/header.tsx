import React from 'react';
import './stylesheets/header.css';
import Dropdown from './components/dropdown';

const Header: React.FC = () => {
    const options = [{ name: 'Day', value: 'day' }, { name: 'Week', value: 'week' }, { name: 'Month', value: 'month' }, { name: 'Year', value: 'year' }];

    return(
        <header className="header">
            <div>
                <button>Gridify</button>
            </div>
            <div>
                <Dropdown label='Group By' name="group-by" options={options} />
                <Dropdown label='Filter By' name="filter-by" options={options} />
            </div>
        </header>
    )
}

export default Header;