import React, {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser";
import UsersComponent from "../../component/UsersComponent/UsersComponent";
import {Outlet} from "react-router-dom";
import {usersService} from "../../services/apiServices";

const UsersPage:React.FC = () => {
    const [users, setUsers] = useState<IUser[]>([])
    useEffect(() => {

        usersService.getAll()
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