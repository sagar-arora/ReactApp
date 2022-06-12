import axios, { AxiosResponse } from "axios";
import React from "react";
import {useParams} from 'react-router-dom';
import { User } from "./table/DynamicTable";

export const UserComponent: React.FC = (): JSX.Element => {
    const {id} = useParams();
    return <UserComp params={id} />;
  }

interface UserProps {
    params?: string;
}

interface UserState {
    user: User | null;
    isLoading: boolean;
}

export default class UserComp extends React.Component<UserProps, UserState> {
    
    constructor(props: UserProps) {
        super(props);
        this.state = {
            user: null,
            isLoading: true
        }
    }

    public async componentDidMount() {
        const response: AxiosResponse = await axios.get("https://jsonplaceholder.typicode.com/users" + "/" + this.props.params);
        this.setState({
            user: response.data,
            isLoading: false
        });
    }
     
    public render(): React.ReactNode { 
        return (
                <div>
                    <h1>id: {this.props.params}</h1>
                    <p>name: {this.state.user?.name}</p>
                    <p>email: {this.state.user?.email}</p>
                </div>
            );
    }
}
