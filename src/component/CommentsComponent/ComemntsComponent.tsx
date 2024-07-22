import React from 'react';
import {IComment} from "../../models/IComments";
import {Link} from "react-router-dom";

interface IProps{
    comments:IComment[]
}
const CommentsComponent:React.FC<IProps> = ({comments}) => {
    return (
        <div>
            {<ul>
                {comments.map(comment=>(
                        <li key={comment.id }>
                            <Link to={`/comments/${comment.id}`} state={comment}>{comment.name}</Link>
                        </li>
                    )
                )}
            </ul>}
        </div>
    );
};

export default CommentsComponent;