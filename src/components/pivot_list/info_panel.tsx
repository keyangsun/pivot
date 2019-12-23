import React from 'react';
import '../../stylesheets/info_panel.css';

interface Props {
   title: string;
   data: Data[];
   isOpen: Boolean;
}

interface Data {
    value: string;
    label: string;
    name: string;
}

const InfoPanel = (props: Props) => {    
    const { title, isOpen } = props;
    const data = props.data.map(dataItem => {
        const { label, value, name } = dataItem;
        return (
            <span className="data-item">
                <label htmlFor={name}>{label}</label>
                <p className="data-item-divider">:</p>
                <input id={name} name={name} type="text" value={value}/>
            </span>
        )
    });

    return(
        <section>
            <h2>{title}</h2>
            {isOpen ? <div className="data-items-container">
                {data}
            </div> : ''}
        </section>
    )
}

export default InfoPanel;