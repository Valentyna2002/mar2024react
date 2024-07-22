import React, {useEffect, useState} from 'react';
import {IPost} from "../../models/IPosts";
import {Outlet} from "react-router-dom";
import PostsComponent from "../../component/PostsComponent/PostsComponent";

const PostsPage:React.FC = () => {

    const [post, setPost] = useState<IPost[]>([])
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
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