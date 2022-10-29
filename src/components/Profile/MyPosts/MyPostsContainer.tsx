import React from 'react';
import {addPost, updateNewPostText} from "../../../Redux/profilePageReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../Redux/redux-store";

const mapStateToProps = (state: ReduxStateType) => {

    return {
        postsData: state.profilePageReducer.postsData,
        newPostText: state.profilePageReducer.newPostText,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {updateNewPostText, addPost})(MyPosts)