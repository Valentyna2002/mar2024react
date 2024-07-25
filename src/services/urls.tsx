import UsersPage from "../pages/UserPage/UsersPage";


const baseUrls = 'https://jsonplaceholder.typicode.com'

const urls={
    usersUrls:{
        all: `/users`,
        oneById:(id:string)=> `/users/${id}`,
    },
    postsUrls:{
        all: '/posts',
        oneById:(id:string)=> `/posts/${id}`,
        postsByUserId:(id:string)=>`/users/${id}/posts`
    },
    commentsUrls:{
        all:'comments',
        oneById:(id:string)=> `/comments/${id}`,
        getCommentsByPostId:(id:string)=>`/posts/${id}/comments`
    }
}

export {urls,baseUrls}