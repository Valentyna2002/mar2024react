import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import UsersComponent from "../../component/UsersComponent/UsersComponent";
import {Outlet} from "react-router-dom";

const UsersPage:React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res =>{
                setUsers((res))
            } );
    }, []);
    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <h1>Users</h1>
            <UsersComponent users={users}/>
        </div>
    );
};

export default UsersPage;