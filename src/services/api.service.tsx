import axios from "axios";
import {baseUrls, urls} from "../constants/urls";
import {IUser} from "../models/IUser";
import {IPosts} from "../models/IPosts";


let axiosInstance = axios.create({
    baseURL:baseUrls,
})
axiosInstance.interceptors.request.use(request=>{
    request.headers['Content-Type'] = 'application/json';
    return request
})

const usersService ={
    getAll:async ():Promise<IUser[]>=>{
      return await axiosInstance.get<{users:IUser[]}>(urls.usersUrls.all).then(response=> response.data.users);
    },
    getPostsOfUserById:async(id:number):Promise<IPosts[]>=>{
        return await axiosInstance.get<{posts:IPosts[]}>(urls.usersUrls.withPosts(id)).then(response=> response.data.posts)
    }
}


export {
    usersService
}