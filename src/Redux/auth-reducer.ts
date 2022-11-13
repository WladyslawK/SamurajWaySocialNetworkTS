import {AppDispatch} from "./redux-store";
import {usersAPI} from "../api/usersAPI";

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

export const authReducer = (state: AuthProfileType = initialState, action: authActionsType): AuthProfileType => {
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

export type authActionsType = setUsersDataAC

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

export const authLogIn = () => {
    return (Dispatch: AppDispatch) => {
        usersAPI.authMe()
            .then(response => {
                if(response.data.messages[0]==="You are not authorized"){
                    Dispatch(setUsersData(null, null, null,false))
                }else{
                    const {id, login, email} = response.data.data
                    Dispatch(setUsersData(id, login, email, true))
                }

            })
    }
}
