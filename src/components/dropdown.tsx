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
    const { label } = props;
    const options  = props.options.map(option => <option value={option.value}>{option.name}</option>);
    
    return(
       
        <span>
            <label htmlFor="group-by">Group By</label>
            <select name="group-by" id="group-by">
                {options}
            </select>
        </span>
    )
}

export default Dropdown;