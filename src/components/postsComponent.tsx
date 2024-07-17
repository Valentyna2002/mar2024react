import React, {FC, PropsWithChildren, useEffect, useState} from 'react';
import {IPosts} from "../model/IPosts";
import {postService} from "../services/postService";
import PostComponent from "./postComponent";

interface IProps  extends PropsWithChildren{
    trigger:boolean;
    newPost: IPosts | null;
}

const PostsComponent:FC<IProps> = ({trigger,newPost}) => {
    const [posts, setPosts] = useState<IPosts[]>([])
    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         const { data } = await postService.getAll();
    //         setPosts(data);
    //     };
    //     fetchPosts();
    // }, [trigger]);
    //
    // useEffect(() => {
    //     if (newPost) {
    //         setPosts(prevPosts => [newPost, ...prevPosts]);
    //     }
    // }, [newPost]);

    useEffect(()=>{
        if (newPost){
            postService.getAll().then(({data})=>setPosts([...data,newPost]))
        }else {postService.getAll().then(({data})=>setPosts(data))}
    },[trigger])





    return (
        <div>
            {posts.map((post)=> (<PostComponent key={post.id} post={post}/>))
            }
        </div>
    );
};

export default PostsComponent;