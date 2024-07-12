import React, {Component} from 'react';
import {IPosts} from "../models/IPosts";

interface PostProps{
    posts:IPosts[]
}

class PostComponent extends Component<PostProps> {
    render() {
        const {posts} = this.props;
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
        );
    }
}

export default PostComponent;