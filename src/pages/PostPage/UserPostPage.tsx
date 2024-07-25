import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {postsService, usersService} from "../../services/apiServices";
import {IPost} from "../../models/IPosts";

const UserPostPage = () => {
    let  {id}= useParams<{id:string}>()
    let location = useLocation();
    let state:IPost=location.state as IPost
    const [post, setPost] = useState<IPost[]>([])
    useEffect(() => {
        if (id){
            postsService.postsByUserId((id))
                .then(data =>{
                    setPost(data)
                } );
        }}, [id,state]);
    return (
        <div>
            <h1>Posts of User {id}</h1>
            {post.map(post => (
                <div key={post.id}>
                    <h2><strong>Title:</strong> {post.title}</h2>
                    <p><strong>Body:</strong> {post.body}</p>
                </div>
            ))}
        </div>
    );
};


export default UserPostPage;