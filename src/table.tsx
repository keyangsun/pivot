import React, { ReactElement } from 'react';
import Entry from './entry';

interface State {
    value: string;
}

class Table extends React.Component<any, State> {
    state = {
        value: 'default'
    }

    setValue = (value: string): void => {
        console.log(value);
        this.setState({ value });
    }

    render(): ReactElement {
        const { value } = this.state;
        // you can return a table with many entry react elements mapped into it
        return(
            <Entry 
                value={value}
                setValue={this.setValue}
            />
        )
    }
}

export default Table; 