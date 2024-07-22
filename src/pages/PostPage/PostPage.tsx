import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPosts";
import {useLocation, useParams} from "react-router-dom";
import UserPage from "../UserPage/UserPage";

const PostPage = () => {
   let {id} = useParams<{id:string}>()
   let location= useLocation()
    let state:IPost=location.state as IPost
    const [post, setPost] = useState<IPost>()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/'+ state.id)
            .then(res => res.json())
            .then(res =>{
                setPost((res))
            } );
    }, [id,state]);
    return (
        <div>
            Posts {id}
            <h1><strong>User Id:</strong> {post?.userId}</h1>
            <h2><strong>Title:</strong> {post?.title}</h2>
            <p><strong>Body:</strong> {post?.body}</p>
        </div>
    );
};

export default PostPage;