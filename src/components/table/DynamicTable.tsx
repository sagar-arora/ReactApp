import React from "react";
import axios, { AxiosResponse } from 'axios';
import { Link } from "react-router-dom";

export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
}

interface DynamicTableState {
    data: User[];
    isLoading: boolean;
}

class DynamicTable extends React.Component<{}, DynamicTableState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            data: new Array(),
            isLoading: true
        }
    }


    public componentDidMount(): void {
        var self = this;
        axios.get<User[]>("https://jsonplaceholder.typicode.com/users")
            .then((response: AxiosResponse) => {
                console.log(response.data);
                this.setState({
                    data: response.data,
                    isLoading: false
                });
            });
    }

    public renderTableData(data: User[]) : any {

    return data.map((user, index) => {
            const {id, name} = user;
            console.log(name);
            return (<tr key={id} >
                <Link to={"/users/" + id}>
                <td>{id}</td>
                </Link>
                <td>{name}</td>
            </tr>);
        });
    }
    
    public render(): React.ReactNode {
        const {data, isLoading} = this.state;
        if (isLoading) {
            return <div><h2> Still Loading</h2></div>
        }
        
        console.log(data);

        return ( 
            <div>
                <table>
                    <tbody>
                    <tr>
                    <td>id</td>
                    <td>name</td>
                    </tr>
                       {this.renderTableData(data)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export {DynamicTable};
