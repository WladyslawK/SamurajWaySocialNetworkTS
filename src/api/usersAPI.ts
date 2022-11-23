import axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "ad9132f6-46f4-4f27-ad35-67db1aaf2e70"
    }
})

export const usersAPI = {
    getUsers(page: number, count = 10){
        return instance.get(`users?page=${page}&count=${count}`, {withCredentials: true}).then(response => response.data)
    },
    authMe(){
        console.log("Obsolete method. Please use authAPI object")
        return authAPI.authMe()
    },
    getProfile(userId: number){
        console.log("Obsolete method. Please use profileAPI object")
        return profileAPI.getProfile(userId)
    },

    follow(userId: number){
        return instance.post("follow/"+userId, {},{withCredentials: true, headers: {"API-KEY": "ad9132f6-46f4-4f27-ad35-67db1aaf2e70"}})
    },
    unfollow(userId: number){
        return instance.delete("follow/"+userId,{withCredentials: true, headers: {"API-KEY": "ad9132f6-46f4-4f27-ad35-67db1aaf2e70"}})
    }

}

export const authAPI ={
    authMe(){
        return instance.get("auth/me", ({withCredentials: true}))
    },

    login(email: string, password: string, rememberMe: boolean = false){
        return instance.post("auth/login", {email, password, rememberMe})
    },

    logout(){
        return instance.delete("auth/login")
    }

}

export const profileAPI = {
    // get Profile Status
    getStatus(userId: number){
        return instance.get(`profile/status/${userId}`)
    },
//setProfile Status
    setStatus(status: string){
        return instance.put(`/profile/status`, {status})
    },
    getProfile(userId: number){
        return instance.get("/profile/" +userId)
    },
}

