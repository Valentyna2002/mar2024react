import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IComment} from "../../models/IComments";
import {commentsService} from "../../services/apiServices";

const CommentPage = () => {
   let {id} =useParams<{id:string}>()
    let location=useLocation()
    let state:IComment=location.state as IComment
    const [comment, setComment] = useState<IComment>()
    useEffect(() => {
        if (id){
            commentsService.getOneById((id))
                .then(data =>{
                    setComment(data)
                } );
        }}, [id,state]);
    return (
        <div>
            Comment {id}
            <h1><strong>Post ID:</strong> {comment?.postId}</h1>
            <h2><strong>Name:</strong> {comment?.name}</h2>
            <p><strong>Email:</strong> {comment?.email}</p>
            <p><strong>Body:</strong> {comment?.body}</p>
        </div>
    );
};

export default CommentPage;