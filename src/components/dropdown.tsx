import React from 'react';

interface Props {
    label: string;
    name: string;
    options: Option[];
}

interface Option {
    name: string;
    value: string;
}

const Dropdown = (props: Props) => {
    const { label, name } = props;
    const options  = props.options.map(option => <option value={option.value}>{option.name}</option>);
    
    return(
       
        <span>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name}>
                {options}
            </select>
        </span>
    )
}

export default Dropdown;