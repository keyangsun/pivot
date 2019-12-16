import React, { ReactElement } from 'react';
import './pivot_list.css';
import Dropdown from '../dropdown';
import Figure from './figure';
import InfoPanel from './info_panel';
import DateRange from './date_range';

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
                <main>
                    <aside className="left-drawer open-left-drawer">
                        <div>
                            <Dropdown label='Sort By' name="sort-by" options={options}/>
                        </div>
                        <div>
                            <DateRange date={new Date()}/>
                            <DateRange date={new Date()}/>
                        </div>
                        <div className="button-container">
                            <button className="button">Left icon</button>
                        </div>
                    </aside>
                    <section className="center-content center-open-left-drawer">
                        <div className="photo-grid-wrapper">
                            <Figure alt="Data Image" src="undefined" caption="Data Image"/>
                            <Figure alt="Data Image" src="undefined" caption="Data Image"/>
                            <Figure alt="Data Image" src="undefined" caption="Data Image"/>
                            <Figure alt="Data Image" src="undefined" caption="Data Image"/>
                            <Figure alt="Data Image" src="undefined" caption="Data Image"/>
                            <Figure alt="Data Image" src="undefined" caption="Data Image"/>
                        </div>
                        <div className="button-container center-open-right-drawer">
                            <button className="button">- icon</button>
                            <button className="button">+ icon</button>
                        </div>
                    </section>
                    <div className="right-drawer">
                        <InfoPanel title="Data" data={[{value: 'value', label: 'label', name: 'name'}, {value: 'value', label: 'label', name: 'name'}]}/>
                        <div className="button-container">
                            <button className="button">Right icon</button>
                        </div>
                    </div>
                </main>
            </div>
        )
    }
}

export default PivotList;