import axios from 'axios';
import {IUser} from "../model/IUser";
import {IPosts} from "../model/IPosts";

let axiosInstance = axios.create({
    baseURL:'https://dummyjson.com'})
axiosInstance.interceptors.request.use(request =>{
    request.headers['Content-Type'] = 'application/json';
    return request
})

const getAllUsers = async ():Promise<IUser[]>=>{
    return await axiosInstance.get<IUser[]>('/users').then((response) =>response.data)
}
const getPostsOfUserById = async (id:number):Promise<IPosts[]>=>{
    return await axiosInstance.get<IPosts[]>(`/users/${id}/posts/`).then((response) =>response.data)
}
export {getAllUsers, getPostsOfUserById}

