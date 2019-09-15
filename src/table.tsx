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
        return(
            <Entry 
                value={value}
                setValue={this.setValue}
            />
        )
    }
}

export default Table; 