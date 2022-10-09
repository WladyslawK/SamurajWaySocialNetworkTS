import {combineReducers, createStore, Store} from "redux";
import {dialogsPageReducer, DialogsPageActionsType} from "./dialogsPageReducer";
import { ProfilePageActionsType, profilePageReducer} from "./profilePageReducer";
import {UsersActionsType, usersReducer} from "./usersReducer";


export type ActionsType = ProfilePageActionsType | DialogsPageActionsType | UsersActionsType

export type AppDispatch = typeof store.dispatch

export type StoreType = Store<ReduxStateType, ActionsType>

export type ReduxStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    dialogsPageReducer,
    profilePageReducer,
    usersReducer
})

export let store:StoreType = createStore(reducers)