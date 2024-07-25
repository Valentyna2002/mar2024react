import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IComment} from "../../models/IComments";
import {commentsService, postsService} from "../../services/apiServices";

const CommentPostPage = () => {
    let {id}  = useParams <{id:string}>()
    let location =useLocation()
    let state:IComment=location.state as IComment
    const [comments, setComments] = useState<IComment[]>([])

    useEffect(() => {
        if (id){
                commentsService.getCommentsByPostId((id))
                .then(data =>{
                    setComments(data)
                } );
        }}, [id,state]);


    return (
        <div>
            <h1>Comment of Post {id}</h1>
            {comments.map(comment => (
                <div key={comment.id}>
                    <h1><strong>Post ID:</strong> {comment.postId}</h1>
                    <h2><strong>Name:</strong> {comment.name}</h2>
                    <p><strong>Email:</strong> {comment.email}</p>
                    <p><strong>Body:</strong> {comment.body}</p>
                </div>
                    ))}
            </div>
                );
            };

export default CommentPostPage;