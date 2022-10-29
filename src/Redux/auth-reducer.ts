const SET_USER_DATA = "SET-USER-DATA"

export type AuthProfileType = {
    userId: number | null
    login: string | null
    email: string | null
}

const initialState = {
    userId: null,
    login: null,
    email: null,
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
export const setUsersData = (userId: number, login: string, email: string ) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            login,
            email
        }
    } as const
}
