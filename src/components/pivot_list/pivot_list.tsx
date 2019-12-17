import React, { ReactElement } from 'react';
import './pivot_list.css';
import Dropdown from '../dropdown';
import Figure from './figure';
import InfoPanel from './info_panel';
import DateRange from './date_range';
import RightDrawer from './right_drawer';

interface Props {

}

interface State {
    isOpenRightDrawer: Boolean;
}

class PivotList extends React.Component<Props, State>  {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpenRightDrawer: false,
        };
        this.openRightDrawer = this.openRightDrawer.bind(this);
    }

    openRightDrawer(): void {
        console.log(!this.state.isOpenRightDrawer);
        this.setState({
            isOpenRightDrawer: !this.state.isOpenRightDrawer,
        })
        return;
    }
    
    render(): ReactElement {
        const { isOpenRightDrawer } = this.state;
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
                    <RightDrawer handleOpen={this.openRightDrawer} isOpen={isOpenRightDrawer}/>
                </main>
            </div>
        )
    }
}

export default PivotList;