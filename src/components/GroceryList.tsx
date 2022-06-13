import React from "react";
import Item from "./Item";


interface GroceryListState {
    data: string[];
    isLoading: boolean;
    item: string;
}

class GroceryList extends React.Component<{}, GroceryListState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            data: new Array(),
            isLoading: true,
            item: "",
        }
        this.removeItem.bind(this);
    }
    
    public handleSubmit(event: React.FormEvent): void {
        if (this.state.item) {
            const {data} = this.state;
            data.push(this.state.item);
            console.log("data added" + data);
            this.setState({
                ...this.state,
                data : data
            });
        }
        event.preventDefault();
    }

    public removeItem = (name: string) => {
        const {data} = this.state;

        const index: number = data.indexOf(name);

        if (index != -1) {
            data.splice(index, 1);
        }
        this.setState({
            data: data
        });
        console.log("delete" + data);
    };

    public renderItems(data: string[]) {
        return data.map((user, index) => {
            console.log('current ' + user);
            return <Item itemName={user} index={index} removeItem={this.removeItem}/>
        });
    }

    private onInputChange(event : React.ChangeEvent<HTMLInputElement>): void {
        this.setState({
            ...this.state,
            item : event.target.value, 
        });
    }

    public render(): React.ReactNode {
        const {data} = this.state;
        return (
            <div className="GroceryList">
                <h1>Grocery List</h1>
                <form onSubmit={(event: React.FormEvent) => this.handleSubmit(event)}>
                    <label>
                        add your grocery:
                        <input type="text" name="grocery" value={this.state.item} onChange={(event)=>this.onInputChange(event)}/>
                    </label>
                    <input type="submit" value={"submit"}/>
                </form>
                {this.renderItems(data)}
            </div>
        );
    }
}

export {GroceryList};
