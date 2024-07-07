import React, {FC} from 'react';
import {IPosts} from "../../model/IPosts";

interface IProps{
    posts:IPosts[]
}

const PostsComponent:FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(value => (
                <div key={value.id}>
                    <h3>{value.title}</h3>;
                    <p>{value.body}</p>;
                    <p><strong>Views:</strong> {value.views}</p>;
                    <p><strong>Reactions:</strong> Likes {value.reactions.likes} | Dislikes {value.reactions.dislikes}</p>
                    <p><strong>Tags:</strong> {value.tags.join(', ')}</p>
                </div>))}
        </div>
    )}

export default PostsComponent