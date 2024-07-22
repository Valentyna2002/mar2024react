import React, {useEffect, useState} from 'react';
import {IComment} from "../../models/IComments";
import {Outlet} from "react-router-dom";
import CommentsComponent from "../../component/CommentsComponent/ComemntsComponent";

const CommentsPage:React.FC = () => {
    const [comments, setComments] = useState<IComment[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(res =>{
                setComments(res)
            } );
    }, []);
    return (
        <div>
            <hr/>
            <Outlet/>
            <hr/>
            <h1>Comments</h1>
            <CommentsComponent comments={comments}/>
        </div>
    );
};

export default CommentsPage;