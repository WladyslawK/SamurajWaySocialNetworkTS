import {ThunkAppDispatch} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = "INITIALIZED-SUCCESS"

const initialState: initialStateType = {
    initialized: false
}

export const appReducer = (state: initialStateType = initialState, action: AppActionsType): initialStateType => {
    switch (action.type){
        case INITIALIZED_SUCCESS:
            return {
                ...state, initialized: true
            }
        default: return state
    }
}


//actions
export const InitializedSuccess = () => ({type: INITIALIZED_SUCCESS} as const)



// thunks

export const initializeApp = () => (dispatch: ThunkAppDispatch) => {
    let promise = dispatch(getAuthUserData())

    Promise.all([promise])
        .then(res => {
            dispatch(InitializedSuccess())
        })
}

// types

type initialStateType = {
    initialized: boolean
}

type AppActionsType = ReturnType<typeof InitializedSuccess>

