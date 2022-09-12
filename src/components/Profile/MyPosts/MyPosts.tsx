import React, {RefObject, SetStateAction, useState} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostsType} from "../../../types";

export const MyPosts: React.FC<MyPostsType> = ({postsData, addPost, newPostText, changePostText}) => {

    const postsElements = postsData.map(post => <Post key={post.id} id={post.id} text={post.text} likesCount={post.likesCount}/>)
    let newPostTextReference: RefObject<HTMLTextAreaElement> = React.createRef()

    const  addNewPostHandler = () =>{
        const newPost = newPostTextReference.current?.value
        if(newPost) {
            addPost(newPost)
        }
    }

    const onChangeHandler = () => {
        changePostText(newPostTextReference.current?.value as string)
    }

    return (
        <div className={s.posts}>
            My Posts
            <div>
                <textarea onChange={onChangeHandler} ref={newPostTextReference} value={newPostText}></textarea>
                <button onClick={addNewPostHandler}>Add post</button>
            </div>

            <div>
                {postsElements}
            </div>
        </div>
    );
};
