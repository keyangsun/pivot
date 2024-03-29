import React from 'react';

interface Props {
    label: string;
    name: string;
    options: Option[];
    value: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface Option {
    name: string;
    value: string;
}

const Dropdown = (props: Props) => {
    const { label, name, handleChange, value } = props;
    const options  = props.options.map(option => <option value={option.value}>{option.name}</option>);
    
    return(
       
        <span className="select-container">
            <select onChange={handleChange} value={value} name={name} id={name}>
                <option value="Sort By">Sort By</option>
                {options}
            </select>
            <i className="material-icons">chevron_down</i>
        </span>
    )
}

export default Dropdown;