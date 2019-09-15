import React, { ReactElement } from 'react';
import Entry from './entry';

interface State {
    values: string[];
}

class Table extends React.Component<any, State> {
    state = {
        values: ['one', 'two', 'three']
    }

    setValue = (value: string, key: number): void => {
        let { values } = this.state;
        values[key] = value;
        let newArray = Array.from(values)
        this.setState({ values: newArray });
    }

    render(): ReactElement {
        const { values } = this.state;
        // you can return a table with many entry react elements mapped into it
        return(
            <table>
                <tr>
                    {values.map((val, i) => {
                        return(
                            <td style={{width: '40px'}}>
                                <Entry 
                                    value={val}
                                    key={i}
                                    index={i}
                                    setValue={this.setValue}
                                />
                            </td>
                        );
                    })}
                </tr>
            </table>
        )
    }
}

export default Table; 