import React from "react";

export interface NameFormState {
    inputVal : string;
    age: string;
}

class NameForm extends React.Component<{}, NameFormState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            inputVal: "",
            age: "",
        }
    }

    private onInputChange(event : React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            ...this.state,
            inputVal : event.target.value, 
        });
    }


    private onAgeInputChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {

        this.setState(
        {
            ...this.state,
            age: event.target.value
        }
        );
    }

    private onSubmitEvent(event: React.FormEvent): void {
        alert("A name was submitted: " + this.state.inputVal);
        event.preventDefault();
    }

    public render(): React.ReactNode {

        return (
            <div id="name-form">
                <form onSubmit={(event) => {this.onSubmitEvent(event)}}>
                    <label>
                        Name:
                        <input type="text" value={this.state.inputVal} onChange={(event)=>this.onInputChange(event)} />
                    </label>
                    
                    <label>Enter your info:
                        <input type="number" name="age" value={this.state.age} onChange={(event)=>this.onAgeInputChangeHandler(event)}/>
                    </label>

                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}

export {NameForm};