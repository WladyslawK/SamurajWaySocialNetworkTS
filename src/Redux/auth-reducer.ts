import {AppDispatch, ThunkAppDispatch} from "./redux-store";
import {authAPI, usersAPI} from "../api/usersAPI";

const SET_USER_DATA = "SET-USER-DATA"

export type AuthProfileType = {
    userId: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

export const authReducer = (state: AuthProfileType = initialState, action: AuthActionsType): AuthProfileType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export type AuthActionsType = setUsersDataAC

type setUsersDataAC = ReturnType<typeof setUsersData>
export const setUsersData = (userId: number | null, login: string | null, email: string | null, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            login,
            email,
            isAuth
        }
    } as const
}

export const getAuthUserData = () => {
    return (dispatch: AppDispatch) => {
        usersAPI.authMe()
            .then(response => {
                if(response.data.messages[0] === "You are not authorized"){
                    dispatch(setUsersData(null, null, null,false))
                }else{
                    const {id, login, email} = response.data.data
                    dispatch(setUsersData(id, login, email, true))
                }

            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => {
    return (dispatch: ThunkAppDispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(res => {
                if(res.data.resultCode === 0){
                    dispatch(getAuthUserData())
                }
            })
    }
}

export const logout = () => (dispatch: ThunkAppDispatch) => {
    authAPI.logout()
        .then(res => {
            if(res.data.resultCode === 0){
                dispatch(setUsersData(null, null, null,false))
            }
        })
}
