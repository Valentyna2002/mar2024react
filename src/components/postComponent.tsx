import React, {FC, PropsWithChildren} from 'react';
import {IPosts} from "../model/IPosts";

 interface PostProps extends PropsWithChildren{
   post:IPosts;
}


const PostComponent:FC<PostProps> = ({post}) => {
     const {userId,title,body,id} = post;
    return (
        <div>
                <div>
                    <p><strong>User Id:</strong> {userId}</p>
                    <p><strong>ID:</strong> {id}</p>
                    <p><strong>Title:</strong> {title}</p>
                    <p><strong>Body:</strong> {body}</p>
                </div>))
        </div>
    );
};

export default PostComponent
;