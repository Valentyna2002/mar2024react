import React, {useEffect, useState} from 'react';
import UserComponent from "../user-component/UserComponent";
import {IUser} from "../../model/IUser";
import {getAllUsers, getPostsOfUserById} from "../../services/api.service";
import {IPosts} from "../../model/IPosts";
import PostsComponent from "../posts-component/PostsComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [posts, setPosts] = useState<IPosts[]>([])


    // useEffect(() => {
    //     getAllUsers().then((response) => {
    //         const usersArray = response.users as IUser[];
    //         setUsers(usersArray);
    //     });
    // }, []);
    useEffect(() => {
            getAllUsers().then((value) => {
                setUsers(value.users);
            });
        }, []);


    const getPosts = (id:number) =>{
        getPostsOfUserById(id).then(value =>
            setPosts(value.posts)
        )}
    
    
    
    return (
        <div className='mainDiv'>
            <div className='usersDiv'>
                {users.map((user) => (
                    <UserComponent key={user.id} user={user} getPosts={getPosts}/>
                ))}
            </div>
            <div className='postsDiv'>
                <PostsComponent posts={posts}/>
            </div>
        </div>
    );
};

export default UsersComponent;