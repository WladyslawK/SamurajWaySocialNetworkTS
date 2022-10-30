import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "ad9132f6-46f4-4f27-ad35-67db1aaf2e70"
    }
})

export const API = {
    getUsers(page: number, count = 10){
        return instance.get(`users?page=${page}&count=${count}`, {withCredentials: true}).then(response => response.data)
    },
    authMe(){
        return instance.get("auth/me", ({withCredentials: true}))
    },
    getProfile(userId: number){
        return instance.get("/profile/" +userId)
    },
    follow(userId: number){
        return instance.post("follow/"+userId, {},{withCredentials: true, headers: {"API-KEY": "ad9132f6-46f4-4f27-ad35-67db1aaf2e70"}})
    },
    unfollow(userId: number){
        return instance.delete("follow/"+userId,{withCredentials: true, headers: {"API-KEY": "ad9132f6-46f4-4f27-ad35-67db1aaf2e70"}})
    }

}

