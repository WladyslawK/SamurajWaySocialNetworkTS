import React from 'react';
import {MyPostsContainerType} from "../../../consts vs types/types";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profilePageReducer";
import {MyPosts} from "./MyPosts";

export const MyPostsContainer: React.FC<MyPostsContainerType> = ({postsData, newPostText, dispatch}) => {

    const addNewPost = () => dispatch(addPostActionCreator())
    const updateText = (text: string) => dispatch(updateNewPostTextActionCreator(text))

    return (
        <>
           <MyPosts
               postsData={postsData}
               newPostText={newPostText}
               addPost={addNewPost}
               updateText={updateText}/>
        </>
    );
};
