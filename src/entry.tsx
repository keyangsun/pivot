import React, { ReactElement } from 'react';

interface Props {
    value: string; 
    setValue: (value: string) => void;
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
        const { setValue } = this.props;
        const { candidateValue } = this.state;
        setValue( candidateValue );
        this.toggleEditable();
    }

    render(): ReactElement {
        const { editable, candidateValue } = this.state; 
        const { value } = this.props;
        return editable ? (
            <span>
                <form onSubmit={this.submitValue}>
                    <input 
                        onChange={this.changeValue} 
                        type="text"
                        value={candidateValue}
                    />
                </form>
            </span>
        ) : (
            <span onClick={this.toggleEditable}>
                <p>{value}</p>
            </span>
        )
    }
}

export default Entry;