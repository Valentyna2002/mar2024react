import {IRes} from "../model/postsType";
import {IPosts} from "../model/IPosts";
import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import axios from "axios";

const postService={
    getAll:():IRes<IPosts[]> => apiService.get(urls.posts.base),
    create:(data:IPosts):IRes<IPosts[]>=>
        apiService.post(urls.posts.base,data)
}
export {postService}