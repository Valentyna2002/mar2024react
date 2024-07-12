 const baseUrls = 'https://dummyjson.com';

const urls={
usersUrls:{
    all: '/users',
    oneById:(id:number)=> `/users/${id}`,
    withPosts:(id:number)=>`/users/${id}/posts`

},
postsUrls:{
    all: '/posts'
}
}

export {urls,baseUrls}