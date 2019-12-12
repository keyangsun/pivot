import React from 'react';

interface Props {
   title: string;
   data: Data[];
}

interface Data {
    value: string;
    label: string;
    name: string;
}



const InfoPanel = (props: Props) => {    
    const { title } = props;
    const data = props.data.map(dataItem => {
        const { label, value, name } = dataItem;
        return (
            <span>
                <label htmlFor={name}>{label}</label>
                <input id={name} name={name} type="text" value={value}/>
            </span>
        )
    });

    return(
        <details>
            <summary>{title}</summary>
            <div>
                {data}
            </div>
        </details>
    )
}

export default InfoPanel;