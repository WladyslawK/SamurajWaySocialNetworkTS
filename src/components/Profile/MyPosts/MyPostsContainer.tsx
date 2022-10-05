import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profilePageReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppDispatch, ReduxStateType} from "../../../Redux/redux-store";

const mapStateToProps = (state: ReduxStateType) => {
    return {
        postsData: state.profilePageReducer.postsData,
        newPostText: state.profilePageReducer.newPostText
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        updateText: (text: string) => dispatch(updateNewPostTextActionCreator(text)),
        addPost: () => dispatch(addPostActionCreator())
    }
}
export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)