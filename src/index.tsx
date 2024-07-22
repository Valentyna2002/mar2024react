import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layout/mainLayout";
import UsersPage from "./pages/UserPage/UsersPage";
import PostsPage from "./pages/PostPage/PostsPage";
import CustomErrorLayout from "./layout/CustomErrorLayout";
import UserPage from "./pages/UserPage/UserPage";
import PostPage from "./pages/PostPage/PostPage";
import CommentsPage from "./pages/CommentPage/CommentsPage";
import CommentPage from "./pages/CommentPage/CommentPage";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let router =createBrowserRouter([
    {path:'/',
        element:<MainLayout/>,
        errorElement:<CustomErrorLayout/>,
        children:[
            {path:'users',element:<UsersPage/>,children:[
                {path:':id',element:<UserPage/>}]},
            {path:'posts',element:<PostsPage/>,children:[
                    {path:':id',element:<PostPage/>}]},
            {path:'comments',element:<CommentsPage/>,children:[
                    {path:':id',element:<CommentPage/>}]}

        ]},

])

root.render(
    <RouterProvider router={router}/>
);


