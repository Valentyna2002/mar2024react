import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IPosts} from "../model/IPosts";
import {postService} from "../services/postService";
import PostComponent from "./postComponent";

interface IProps  extends PropsWithChildren{
    trigger:boolean;
}

const PostsComponent:FC<IProps> = ({trigger}) => {
    const [posts, setPosts] = useState<IPosts[]>([])


    useEffect(()=>{
        postService.getAll().then(({data})=>setPosts(data))
    },[trigger])
    return (
        <div>
            {posts.map((post)=> (<PostComponent key={post.id} post={post}/>))
            }
        </div>
    );
};

export default PostsComponent;