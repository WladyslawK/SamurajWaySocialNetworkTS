import {applyMiddleware, combineReducers, createStore, Store} from "redux";
import {dialogsPageReducer, DialogsPageActionsType} from "./dialogsPageReducer";
import { ProfilePageActionsType, profilePageReducer} from "./profilePageReducer";
import {UsersActionsType, usersReducer} from "./usersReducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleWare from "redux-thunk"
import thunk from "redux-thunk";

export type ActionsType = ProfilePageActionsType | DialogsPageActionsType | UsersActionsType

export type AppDispatch = typeof store.dispatch

export type StoreType = Store<ReduxStateType, ActionsType>

export type ReduxStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    dialogsPageReducer,
    profilePageReducer,
    usersReducer,
    authReducer
})


export let store = createStore(reducers, applyMiddleware(thunkMiddleWare))


// @ts-ignore
window.state = store.getState()