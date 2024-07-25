import axios from "axios";
import {urls,baseUrls} from "./urls";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPosts";
import {IComment} from "../models/IComments";


let axiosInstance = axios.create({
    baseURL:baseUrls,
})
axiosInstance.interceptors.request.use(request=>{
    request.headers['Content-Type'] = 'application/json';
    return request
})

const usersService ={
    getAll:async ():Promise<IUser[]>=>{
        return await axiosInstance.get<IUser[]>(urls.usersUrls.all).then(response=> response.data);
    },
    getOneById:async(id:string):Promise<IUser>=>{
        return await axiosInstance.get<IUser>(urls.usersUrls.oneById(id)).then(response=> response.data)
    }
}
const postsService ={
    getAll:async ():Promise<IPost[]>=>{
        return await axiosInstance.get<IPost[]>(urls.postsUrls.all).then(response=> response.data);
    },
    getOneById:async(id:string):Promise<IPost>=>{
        return await axiosInstance.get<IPost>(urls.postsUrls.oneById(id)).then(response=> response.data)
    },
    postsByUserId:async (id:string):Promise<IPost[]>=>{
        return await axiosInstance.get<IPost[]>(urls.postsUrls.postsByUserId(id)).then(response=> response.data)
    }
}

const commentsService ={
    getAll:async ():Promise<IComment[]>=>{
        return await axiosInstance.get<IComment[]>(urls.commentsUrls.all).then(response=> response.data);
    },
    getOneById:async(id:string):Promise<IComment>=>{
        return await axiosInstance.get<IComment>(urls.commentsUrls.oneById(id)).then(response=> response.data)
    },
    getCommentsByPostId:async (id:string):Promise<IComment[]>=>{
        return await axiosInstance.get<IComment[]>(urls.commentsUrls.getCommentsByPostId(id)).then(response=> response.data)
    }

}

export {usersService,postsService,commentsService}