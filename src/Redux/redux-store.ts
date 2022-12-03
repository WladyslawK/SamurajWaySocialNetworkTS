import {AnyAction, applyMiddleware, combineReducers, createStore, Store} from "redux";
import {dialogsPageReducer, DialogsPageActionsType} from "./dialogsPageReducer";
import { ProfilePageActionsType, profilePageReducer} from "./profilePageReducer";
import {UsersActionsType, usersReducer} from "./usersReducer";
import {AuthActionsType, authReducer} from "./auth-reducer";
import thunkMiddleWare, {ThunkDispatch} from "redux-thunk"
import {reducer as FormReducer} from "redux-form"
import {appReducer} from "./appReducer";

export type ActionsType = ProfilePageActionsType | DialogsPageActionsType | UsersActionsType | AuthActionsType

export type AppDispatch = typeof store.dispatch

export type ThunkAppDispatch = ThunkDispatch<AppDispatch, any, AnyAction>



export type StoreType = Store<ReduxStateType, ActionsType>

export type ReduxStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    dialogsPageReducer,
    profilePageReducer,
    usersReducer,
    authReducer,
    form: FormReducer,
    app: appReducer
})


export let store = createStore(reducers, applyMiddleware(thunkMiddleWare))


// @ts-ignore
window.state = store.getState()