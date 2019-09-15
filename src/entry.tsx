import React, { ReactElement } from 'react';
import './entry.css'

interface Props {
    index: number;
    value: string; 
    setValue: (value: string, key: number) => void;
}

interface State {
    editable: boolean;
    candidateValue: string;
}

class Entry extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            editable: false,
            candidateValue: props.value,
        }
    }

    toggleEditable = (): void => {
        const { editable } = this.state; 
        this.setState({ editable: !editable }); 
    }

    changeValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const candidateValue = event.target.value;
        this.setState({ candidateValue });
    }

    submitValue = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        const { setValue, index } = this.props;
        const { candidateValue } = this.state;
        setValue( candidateValue, index );
        this.toggleEditable();
    }

    render(): ReactElement {
        const { editable, candidateValue } = this.state; 
        const { value } = this.props;
        return editable ? (
            <span className="entry">
                <form onSubmit={this.submitValue}>
                    <input 
                        autoFocus
                        onChange={this.changeValue} 
                        type="text"
                        value={candidateValue}
                    />
                </form>
            </span>
        ) : (
            <span onClick={this.toggleEditable} className="entry">
                <p>{value}</p>
            </span>
        )
    }
}

export default Entry;