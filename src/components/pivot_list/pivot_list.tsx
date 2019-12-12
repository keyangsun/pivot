import React, { ReactElement } from 'react';
import './pivot_list.css';
import Dropdown from '../dropdown';
import Figure from './figure';
import InfoPanel from './info_panel';

interface Props {

}

interface State {

}

class PivotList extends React.Component<Props, State>  {
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    
    render(): ReactElement {
        const options = [{name: 'Day', value: 'day'}, {name: 'Week', value: 'week'}, {name: 'Month', value: 'month'}, {name: 'Year', value: 'year'}];
        return (
            <div className="pivot-list">
                <header className="header">
                    <div>
                        <button>Gridify</button>
                    </div>
                    <div>
                        <Dropdown label='Group By' name="group-by" options={options}/>
                        <Dropdown label='Filter By' name="filter-by" options={options}/>
                    </div>
                </header>
                <main>
                    <aside className="left-drawer open">
                        <div>
                            <Dropdown label='Sort By' name="sort-by" options={options}/>
                        </div>
                        <div>
                            <span>
                                <h4>Date Range</h4>
                            </span>
                            <span>
                                <h4>Date Range</h4>
                            </span>
                        </div>
                        <button>Left icon</button>
                    </aside>
                    <section className="photo-grid">
                        <span>
                          <Figure alt="Data Image" src="undefined" caption="Data Image"/>
                        </span>
                        <h3>Image Size</h3>
                        <button>- icon</button>
                        <button>+ icon</button>
                    </section>
                    <div className="right-drawer">
                        <InfoPanel title="Data" data={[{value: 'value', label: 'label', name: 'name'}, {value: 'value', label: 'label', name: 'name'}]}/>
                        <button>Right icon</button>
                    </div>
                </main>
            </div>
        )
    }
}

export default PivotList;