import React, { ReactElement } from 'react';
import './pivot_list.css';
import '../../stylesheets/button.css';
import CenterContent from './center_content';
import LeftDrawer from './left_drawer';
import RightDrawer from './right_drawer';

interface Props {

}

interface State {
    isOpenRightDrawer: Boolean;
    isOpenLeftDrawer: Boolean;
    sortBy: string;
}

class PivotList extends React.Component<Props, State>  {
    constructor(props: Props) {
        super(props);
        this.state = {
            isOpenRightDrawer: false,
            isOpenLeftDrawer: true,
            sortBy: "",
        };
        this.openDrawer = this.openDrawer.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(e: React.ChangeEvent<HTMLSelectElement>, location: string) {
            this.setState({
                sortBy: e.target.value
            })
    }

    openDrawer(whichDrawer: string): void {
        let isOpen: Boolean;
        
        if (whichDrawer == 'left') {
            isOpen = this.state.isOpenLeftDrawer;
            this.setState({
                isOpenLeftDrawer: !isOpen
            })
        } else if (whichDrawer == 'right') {
            isOpen = this.state.isOpenRightDrawer;
            this.setState({
                isOpenRightDrawer: !isOpen
            })        
        } else {
            console.error("err: side button malfunction ln: 36 pivot_list js");
        }
        return;
    }
    
    render(): ReactElement {
        const { isOpenLeftDrawer, isOpenRightDrawer } = this.state;
        return (
            <div className="pivot-list">
                <main>
                    <LeftDrawer handleSelect={(e) => this.handleSelect(e, 'left-drawer')} handleOpen={() => this.openDrawer('left')} isOpen={isOpenLeftDrawer}/>
                    <CenterContent isOpenRight={isOpenRightDrawer} isOpenLeft={isOpenLeftDrawer}/>
                    <RightDrawer handleOpen={() => this.openDrawer('right')} isOpen={isOpenRightDrawer}/>
                </main>
            </div>
        )
    }
}

export default PivotList;