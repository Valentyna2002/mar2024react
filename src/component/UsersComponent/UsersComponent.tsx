import React, {FC} from 'react';
import {IUser} from "../../models/IUser";
import {Link} from "react-router-dom";

interface IProps{
    users:IUser[]
}
const UsersComponent:FC<IProps> = ({users}) => {
    return (
        <div>
            {<ul>
            {users.map(user=>(
                    <li key={user.id} >
                        <Link to={`/users/${user.id}`} state={user}>{user.name}</Link>
                        <Link to={`/users/${user.id}/posts`} state={user}>
                            <button>show posts</button></Link>
                    </li>
                )
            )}
            </ul>}

        </div>
    );
};

export default UsersComponent;