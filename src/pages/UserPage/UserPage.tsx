import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IUser} from "../../models/IUser";

const UserPage = () => {
   let  {id}= useParams<{id:string}>()
    let location = useLocation();
   let state:IUser=location.state as IUser
    const [user, setUser] = useState<IUser>()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/'+ state.id)
            .then(res => res.json())
            .then(res =>{
                setUser((res))
            } );
    }, [id,state]);
    return (
        <div>
            User {id}
            <h1>{user?.name}</h1>
            <p><strong>Username:</strong> {user?.username}</p>
            <p><strong>Email:</strong> {user?.email}</p>
            <p>
                <strong>Address:</strong> {user?.address?.street}, {user?.address?.suite}, {user?.address?.city}, {user?.address?.zipcode}
            </p>
            <p><strong>Geo:</strong> {user?.address?.geo?.lat}, {user?.address?.geo?.lng}</p>
            <p><strong>Phone:</strong> {user?.phone}</p>
            <p><strong>Website:</strong> {user?.website}</p>
            <p><strong>Company:</strong> {user?.company?.name} - {user?.company?.catchPhrase}</p>
        </div>
    );
};

export default UserPage;