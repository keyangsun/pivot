import React from 'react';
import InfoPanel from './info_panel'
import './pivot_list.css';

interface Props {
    handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isOpen: Boolean;
}


const RightDrawer: React.FC<Props> = (props: Props) => {
    const { handleOpen, isOpen } = props;
    const options = [{ name: 'Day', value: 'day' }, { name: 'Week', value: 'week' }, { name: 'Month', value: 'month' }, { name: 'Year', value: 'year' }];

    return (
        <div className={`right-drawer ${isOpen ? "open" : "closed"}`}>
            <InfoPanel title="Data" data={[{ value: 'value', label: 'label', name: 'name' }, { value: 'value', label: 'label', name: 'name' }]} />
            <div className={`button-container ${isOpen ? 'open-right' : 'closed-right'}`}>
                <button onClick={handleOpen} className="button">
                    <i className="material-icons">{isOpen ? 'chevron_right' : 'chevron_left'}</i>
                </button>
            </div>
        </div>
    )
}

export default RightDrawer;