import {combineReducers, createStore, Store} from "redux";
import {addNewMessageACType, dialogsPageReducer, updateNewMessageTextACType} from "./dialogsPageReducer";
import {addPostActionCreatorType, profilePageReducer, updateNewPostTextActionCreator} from "./profilePageReducer";


export type ActionsType = addPostActionCreatorType | updateNewPostTextActionCreator | updateNewMessageTextACType | addNewMessageACType

export type AppDispatch = typeof store.dispatch

export type StoreType = Store<ReduxStateType, ActionsType>

export type ReduxStateType = ReturnType<typeof reducers>

let reducers = combineReducers({
    dialogsPageReducer,
    profilePageReducer,
})

export let store:StoreType = createStore(reducers)