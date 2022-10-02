import React from "react";
import {combineReducers, createStore, Store} from "redux";
import {addNewMessageACType, dialogsPageReducer, updateNewMessageTextACType} from "./dialogsPageReducer";
import {addPostActionCreatorType, profilePageReducer, updateNewPostTextActionCreator} from "./profilePageReducer";


type ActionsType = addPostActionCreatorType | updateNewPostTextActionCreator | updateNewMessageTextACType | addNewMessageACType

export type ReduxStateType = ReturnType<typeof reducers>

export type AppDispatch = typeof store.dispatch

export type StoreType = Store<ReduxStateType, ActionsType>

let reducers = combineReducers({
    dialogsPageReducer,
    profilePageReducer,
})

export let store:StoreType = createStore(reducers)