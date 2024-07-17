import axios from "axios";

let apiService=axios.create({baseURL:`https:jsonplaceholder.typicode.com`})

export {apiService}