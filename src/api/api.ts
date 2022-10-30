import axios from "axios";

const BASE_URL = "https://social-network.samuraijs.com/api/1.0/"



export const API = {
    getUsers(page: number, count = 10){
        return axios.get(BASE_URL + `users?page=${page}&count=${count}`, {withCredentials: true}).then(response => response.data)
    },
    authMe(){
        return axios.get(BASE_URL + "auth/me", ({withCredentials: true}))
    },
    getProfile(userId: number){
        return axios.get(BASE_URL + "/profile/" +userId)
    }
}

