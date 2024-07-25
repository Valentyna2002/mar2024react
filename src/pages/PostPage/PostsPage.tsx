import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPosts";
import {Outlet} from "react-router-dom";
import PostsComponent from "../../component/PostsComponent/PostsComponent";
import {postsService} from "../../services/apiServices";

const PostsPage:React.FC = () => {

    const [post, setPost] = useState<IPost[]>([])
    useEffect(() => {
        postsService.getAll()
            .then(res =>{
                setPost(res)
            } );
    }, []);

    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <h1>Posts</h1>
            <PostsComponent posts={post}/>
        </div>
    );
};

export default PostsPage;