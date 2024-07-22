import React from 'react';
import {IPost} from "../../models/IPosts";
import {Link} from "react-router-dom";

interface IProps{
    posts:IPost[]
}
const PostsComponent:React.FC<IProps>= ({posts}) => {

    return (
        <div>
            {<ul>
                {posts.map(post=>(
                        <li key={post.id} >
                            <Link to={`/posts/${post.id}`} state={post}>{post.title}</Link>
                        </li>
                    )
                )}
            </ul>}
        </div>
    );
};

export default PostsComponent;