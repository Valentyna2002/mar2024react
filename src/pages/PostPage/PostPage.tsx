import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPosts";
import {useLocation, useParams} from "react-router-dom";
import {postsService} from "../../services/apiServices";

const PostPage = () => {
   let {id} = useParams<{id:string}>()
   let location= useLocation()
    let state:IPost=location.state as IPost
    const [post, setPost] = useState<IPost>()
    useEffect(() => {
        if (id){
            postsService.getOneById((id))
                .then(data =>{
                    setPost(data)
                } );
        }}, [id,state]);
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