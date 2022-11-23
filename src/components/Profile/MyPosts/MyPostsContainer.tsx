import React from 'react';
import {addPost} from "../../../Redux/profilePageReducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ReduxStateType} from "../../../Redux/redux-store";

const mapStateToProps = (state: ReduxStateType) => {

    return {
        postsData: state.profilePageReducer.postsData,
    }
}

export const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)