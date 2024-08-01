import axios from "axios";
import {UserModels} from "../models/UserModels";
import { UserResponseModel} from "../models/UserResponseModel";
import {TokenObtainPairModel} from "../models/TokenObtainPairModel";
import {TokenRefresh} from "../models/TokenRefresh";
import {retriveLocalStorageData} from "../helpers/helpers";
import {CarPaginatedModel} from "../models/CarPaginatedModel";


let axiosInstance = axios.create({
    baseURL:'http://owu.linkpc.net/carsAPI/v2'
});

axiosInstance.interceptors.request.use(value =>{
    if (localStorage.getItem('tokenPair') && (value.url !=='/auth' && value.url !=='/auth/refresh'))
    {
        value.headers.set('Authorization','Bearer ' + retriveLocalStorageData<TokenRefresh>('tokenPair').access)
    }
    return value
} )

const userService = {
    saveUser:async (data:UserModels):Promise<boolean> =>{
      let response= await  axiosInstance.post<UserResponseModel>('/users' , data);
      return !!response.data.id || false
}
}
const authService = {
    authentificate:async (data:TokenObtainPairModel):Promise<void>=>{
        const response = await  axiosInstance.post<TokenRefresh>('/auth' ,data);
        localStorage.setItem('tokenPair',JSON.stringify(response.data))},
    refresh:async ()=>{
       const refreshToken= retriveLocalStorageData<TokenRefresh>('tokenPair').refresh;
       const response= await axiosInstance.post<TokenRefresh>('/auth/refresh',{refresh:refreshToken});
       localStorage.setItem('tokenPair',JSON.stringify(response.data));
    }
}
const carService ={
    getCars: async (page: string='1'):Promise<CarPaginatedModel>=>{
       const response= await axiosInstance.get<CarPaginatedModel>('/cars',{params:{page:page}});
         return response.data
    }
}


export {userService, authService, carService}